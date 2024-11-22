// Function to save an article to localStorage
function saveArticle(article) {
  const key = article.title;
  localStorage.setItem(key, JSON.stringify(article));
  console.log(`Article with key '${key}' saved to localStorage.`);
}

export function addSwipeHandler(articleElement, article) {
  let startX = 0;
  let currentX = 0;
  let offsetX = 0;
  let isDragging = false;

  const greenBox = articleElement.querySelector('.swipeArticle-greenBox');

  // Start drag
  articleElement.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
    articleElement.classList.add('dragging');
  });

  // Dragging
  articleElement.addEventListener('touchmove', e => {
    if (!isDragging) return;

    currentX = e.touches[0].clientX;
    offsetX = currentX - startX; // Calculate drag distance

    if (offsetX < 0) {
      // Dragging left
      const clampedOffset = Math.max(offsetX, -greenBox.offsetWidth); // Clamp offset to green box width
      articleElement.style.transform = `translateX(${clampedOffset}px)`; // Move green box with the article
    }
  });

  // End drag
  articleElement.addEventListener('touchend', () => {
    isDragging = false;

    if (offsetX < -50) {
      // Reveal green box
      articleElement.style.transform = `translateX(-4rem)`; // Fully reveal green box

      setTimeout(() => {
        saveArticle(article);
        articleElement.style.transform = 'translateX(0)';
        greenBox.remove();
      });
    } else {
      // Snap back if not dragged far enough
      articleElement.style.transform = 'translateX(0)';
      greenBox.remove(); // Keep green box in place
    }

    articleElement.classList.remove('dragging');
  });
}
