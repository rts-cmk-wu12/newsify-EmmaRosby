import sections from '../json/section.json';

const archiveContainer = document.querySelector('#archiveCategoryContainer');

const { fetchHomeTopStories } = require('./nyt.js');
const archiveNews = await fetchHomeTopStories();
console.log(archiveNews);


function truncate(text, length) {
    return text.slice(0, length) + '...';
}

archiveNews.results.forEach(function (article) {
    for (var i = 0; i < localStorage.length; i++) {
        if (article.title == localStorage.key(i)) {
            const articleElement = document.createElement('article')
            articleElement.innerHTML = `
                <div class="category__details__article__all">
                    <img src="./img/placeholder.svg" alt="">
                    <div class="category__details__article__all__decsription">
                        <h3 class="dark-mode-font">${truncate(article.title, 30)}</h3>
                        <p class="dark-mode-font">${truncate(article.abstract, 60)}</p>
                    </div>
                </div>
                <div class="swipeArticle-redBox"><img src="./img/trashcanWhite.svg" alt=""></div>`

            articleElement.classList.add('category__details__article');
            archiveContainer.append(articleElement);



            articleElement.addEventListener('click', () => {
                window.open(article.url);
            })
        }
    }
})  