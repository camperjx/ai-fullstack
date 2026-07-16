import { useEffect, useState } from 'react';
import './home.css';
export default props => {
    //   const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data or perform other side effects here
    }, []);
    return (
      <main className="home-page">
        <section className="hero-panel">
            <div>
                <h1>Welcome to CareerMate</h1>
                <p>Build your profile, manage jobs, and track your career journey.</p>
            </div>
            <button>Get Started</button>
        </section>
        <section className="features-grid">
            <div className="feature-card">
                <h2>Profile Builder</h2>
                <p>Create and manage your professional profile with ease.</p>
            </div>
            <div className="feature-card">
                <h2>Job Tracker</h2>
                <p>Keep track of your job applications and interviews.</p>
            </div>
            <div className="feature-card">
                <h2>Career Insights</h2>
                <p>Get insights and tips to advance your career.</p>
            </div>
        </section>
      </main>
    );
};