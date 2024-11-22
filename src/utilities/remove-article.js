function removeArticle(articleElement, articleKey) {
    if(localStorage.getItem(articleKey)){
        localStorage.removeItem(articleKey);
        articleElement.remove();
    }
}

export function addSwipeHandler(articleElement, article) {
    let startX = 0;
    let currentX = 0;
    let offsetX = 0;
    let isDragging = false;

    const redBox = articleElement.querySelector('.swipeArticle-redBox');

    // Start drag
    articleElement.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
        articleElement.classList.add('dragging');
        console.log('hello');
        
    });

    // Dragging
    // Clamp the offset to the width of the red box
    articleElement.addEventListener('touchmove', e => {
        if (!isDragging) return;

        currentX = e.touches[0].clientX; // Current touch position
        offsetX = currentX - startX; // Calculate drag distance

        if (offsetX < 0) {
            const clampedOffset = Math.max(offsetX, -redBox.offsetWidth); // Clamp to red box width
            articleElement.style.transform = `translateX(${clampedOffset}px)`;
        }
    });

    articleElement.addEventListener('touchend', () => {
        isDragging = false;

        if (offsetX <= -redBox.offsetWidth / 2) {
            // Dragged far enough to reveal red box
            articleElement.style.transform = `translateX(-${redBox.offsetWidth}px)`; // Fully reveal red box

            setTimeout(() => {
                const articleKey = article.title;
                removeArticle(articleElement, articleKey);
                articleElement.remove();
            }); 
        } else {
            
            articleElement.style.transform = 'translateX(0)';
            redBox.style.transform = `translateX(-${redBox.offsetWidth}px)`;
        }

        articleElement.classList.remove('dragging');
    });

}


