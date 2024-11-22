// https://blog.openreplay.com/implementing-pull-to-refresh-with-javascript/

const pullToRefresh = document.querySelector('.pull-to-refresh');
let touchStartY = 0;

document.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', e => {
    const touchY = e.touches[0].clientY;
    const touchDiff = touchY - touchStartY;
    
    if(touchDiff > 150 && window.scrollY === 0){
        pullToRefresh.classList.add('visible');
        e.preventDefault();
    }
});

document.addEventListener('touchend', e => {
    if(pullToRefresh.classList.contains('visible')){
        pullToRefresh.classList.remove('visible');
        location.reload();
    }
});