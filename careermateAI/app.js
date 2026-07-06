'use strict';

const MOCK_CONFIG = Object.freeze({
  delay: 1200,
  failureEmailSuffix: '@fail.test'
});

const FIELD_SELECTOR = [
  '[name="fullName"]',
  '[name="email"]',
  '[name="role"]',
  '[name="field"]',
  '[name="message"]'
].join(', ');

const formValidator = {
  rules: {
    fullName: {
      required: true,
      minLength: 2,
      requiredMessage: 'Please enter your full name.',
      invalidMessage: 'Please enter at least 2 characters.'
    },
    email: {
      required: true,
      type: 'email',
      requiredMessage: 'Please enter your email address.',
      invalidMessage: 'Please enter a valid email address.'
    },
    role: {
      required: true,
      requiredMessage: 'Please select your role.'
    },
    field: {
      required: true,
      requiredMessage: 'Please select your field.'
    },
    message: {
      required: true,
      minLength: 20,
      requiredMessage: 'Please enter your message.',
      invalidMessage: 'Please enter at least 20 characters.'
    }
  },

  validateField(field) {
    const rule = this.rules[field.name];
    if (!rule) return true;

    const value = field.value.trim();
    let message = '';

    if (rule.required && !value) {
      message = rule.requiredMessage;
    } else if (rule.minLength && value.length < rule.minLength) {
      message = rule.invalidMessage;
    } else if (
      rule.type === 'email' &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      message = rule.invalidMessage;
    }

    if (message) {
      this.showError(field, message);
      return false;
    }

    this.clearError(field);
    return true;
  },

  validateForm(fields) {
    return [...fields]
      .map((field) => this.validateField(field))
      .every(Boolean);
  },

  getParams(fields, templateParams = {}) {
    const params = { ...templateParams };

    fields.forEach((field) => {
      if (!field.name || field.disabled) return;

      params[field.name] =
        typeof field.value === 'string'
          ? field.value.trim()
          : field.value;
    });

    return params;
  },

  showError(field, message) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    formGroup.classList.add('error');

    let error = formGroup.querySelector('.error-message');
    if (!error) {
      error = document.createElement('p');
      error.className = 'error-message';
      error.id = `${field.id || field.name}-error`;
      error.setAttribute('aria-live', 'polite');
      formGroup.append(error);
    }

    error.textContent = message;
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', error.id);
  },

  clearError(field) {
    const formGroup = field.closest('.form-group');

    formGroup?.classList.remove('error');
    formGroup?.querySelector('.error-message')?.remove();
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  }
};

const mockApi = {
  send(payload) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        if (payload.email.toLowerCase().endsWith(MOCK_CONFIG.failureEmailSuffix)) {
          const error = new Error('Mock server returned 500.');
          error.status = 500;
          reject(error);
          return;
        }

        resolve({ status: 200, text: 'OK', data: payload });
      }, MOCK_CONFIG.delay);
    });
  }
};

function showToast(state, message) {
  const previousToast = document.querySelector('.toast');
  previousToast?.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${state}`;
  toast.setAttribute('role', state === 'error' ? 'alert' : 'status');
  toast.setAttribute('aria-live', state === 'error' ? 'assertive' : 'polite');
  toast.textContent = message;
  document.body.append(toast);

  requestAnimationFrame(() => toast.classList.add('visible'));
  window.setTimeout(() => {
    toast.classList.remove('visible');
    window.setTimeout(() => toast.remove(), 350);
  }, 4000);
}

function getStatusElement(form) {
  let status = form.querySelector('[data-form-status]');

  if (!status) {
    status = document.createElement('p');
    status.dataset.formStatus = '';
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    form.append(status);
  }

  return status;
}

function setFormStatus(form, state, message) {
  const status = getStatusElement(form);
  status.dataset.state = state;
  status.textContent = message;
}

function bindFieldValidation(fields) {
  fields.forEach((field) => {
    const validationEvent = field.matches('select') ? 'change' : 'blur';

    field.addEventListener(validationEvent, () => {
      formValidator.validateField(field);
    });

    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') {
        formValidator.validateField(field);
      }
    });
  });
}

function bindContactForm() {
  const contactForm = document.querySelector('#contactForm');
  if (!contactForm) return;

  const fields = contactForm.querySelectorAll(FIELD_SELECTOR);
  bindFieldValidation(fields);

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!formValidator.validateForm(fields)) {
      contactForm.querySelector('[aria-invalid="true"]')?.focus();
      setFormStatus(
        contactForm,
        'error',
        'Please correct the highlighted fields.'
      );
      return;
    }

    const submitButton = event.submitter || contactForm.querySelector('[type="submit"]');
    const submitLabel = submitButton?.querySelector('span');

    submitButton?.setAttribute('disabled', '');
    submitButton?.setAttribute('aria-busy', 'true');
    submitButton?.classList.add('is-loading');
    if (submitLabel) submitLabel.textContent = 'Sending…';
    setFormStatus(contactForm, 'sending', 'Sending your message...');

    const templateParams = {
      title: 'New Contact Form Submission'
    };
    const validParams = formValidator.getParams(fields, templateParams);

    try {
      const response = await mockApi.send(validParams);

      console.info(
        'Mock submission succeeded',
        response.status,
        response.text
      );
      setFormStatus(
        contactForm,
        'success',
        'Thank you. Your message was submitted successfully.'
      );
      showToast('success', 'Your message was submitted successfully.');
      submitButton?.classList.remove('is-loading');
      submitButton?.classList.add('is-submitted');
      submitButton?.removeAttribute('aria-busy');
      if (submitLabel) submitLabel.textContent = 'Submitted';
      contactForm.reset();
      fields.forEach((field) => formValidator.clearError(field));

      await new Promise((resolve) => window.setTimeout(resolve, 1600));
    } catch (error) {
      console.error('Mock submission failed', error);
      setFormStatus(
        contactForm,
        'error',
        'Sorry, your message could not be sent. Please try again.'
      );
      showToast('error', 'Submission failed. Your form content has been kept.');
    } finally {
      submitButton?.classList.remove('is-loading', 'is-submitted');
      submitButton?.removeAttribute('disabled');
      submitButton?.removeAttribute('aria-busy');
      if (submitLabel) submitLabel.textContent = 'Send Message';
    }
  });
}

function bindBackToTopButton() {
  const backToTopButton = document.getElementById('backToTop');
  if (!backToTopButton) return;

  const updateVisibility = () => {
    const isVisible = window.scrollY > 300;

    backToTopButton.classList.toggle('visible', isVisible);
    backToTopButton.setAttribute('aria-hidden', String(!isVisible));
    backToTopButton.tabIndex = isVisible ? 0 : -1;
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  backToTopButton.addEventListener('click', () => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  });
}

function init() {
  bindContactForm();
  bindBackToTopButton();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
