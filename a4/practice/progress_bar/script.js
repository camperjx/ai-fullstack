//9
/**
 * @file script.js
 * @description 進度條的 JavaScript。
 * @author Jingxian
 * @version 1.0.0
 */

/**
 * @description 取得 HTML 元素。
 * id 為 progress、prev、next 的元素，class 為 circle 的元素。
 */
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
//10
/**
 * @description next 按鈕的 click 事件。
 * 1. currentActive++，表示往下一步。
 * 2. 如果 currentActive > circles.length，表示已經到最後一步，將 currentActive 設為 circles.length。
 * 3. 呼叫 update() 更新進度條。
 */
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});
// 11
/**
 * @description 更新進度條。
 * 1. 依照 currentActive 的值，決定哪些 circle 要加上 active class。
 * 2. 計算 progress 的寬度，並更新 progress.style.width。
 * 3. 根據 currentActive 的值，決定 prev、next 按鈕是否要 disabled。
 */
prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});
/**
 * @description 更新進度條。
 * 更新每個圓圈的 .active。
 * 更新藍色進度線寬度。
 * 更新 Prev 和 Next 的 disabled 狀態。
 */
function update() {
    //circles 是 NodeList，
    // forEach 迴圈每個 circle，index < currentActive 的 circle 加上 active class，否則移除 active class。  
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    // 計算進度條的寬度，公式為 (actives.length - 1) / (circles.length - 1) * 100%，
    // 因為進度條的寬度是依照已完成的步驟數量來計算的，actives.length - 1 是已完成的步驟數量，circles.length - 1 是總步驟數量。
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // 根據 currentActive 的值，決定 prev、next 按鈕是否要 disabled。
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}