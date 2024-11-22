import sections from '../json/section.json'; 

const popularContainer = document.querySelector('#popularCategoryContainer');

const { hideDisabledCategories } = require ('./deselected-article.js');
const { fetchMostPopularByViews } = require ('./nyt.js');
const popularNews = await fetchMostPopularByViews(); 
console.log(popularNews); 

const newsSections = [...new Set(popularNews.results.map(sections => sections.section))];
console.log(newsSections);

function truncate(text, length){
    return text.slice(0, length) + '...';
}

newsSections.forEach(function(category) {
    const matchingArticles = popularNews.results.filter(article => article.section === category);
    const detailsElement = document.createElement('details')
    
    detailsElement.innerHTML = `
            <summary class="category__details__summary">
                <img src="img/newsify_logo.svg" alt="logo">
                <h2 class="dark-mode-font">${category}</h2>
            </summary>`

    matchingArticles.forEach(article => {
        const articleElement = document.createElement('article')
        articleElement.innerHTML = `
            <div class="category__details__article__all">
                <img src="./img/placeholder.svg" alt="">
                <div class="category__details__article__all__decsription">
                    <h3 class="dark-mode-font">${truncate(article.title, 30)}</h3>
                    <p class="dark-mode-font">${truncate(article.abstract, 60)}</p>
                </div>
            </div>
            <div class="swipeArticle-greenBox"><img src="./img/bookmarkWhite.svg" alt=""></div>`
                    
        articleElement.classList.add('category__details__article');
        detailsElement.append(articleElement);

    articleElement.addEventListener('click', () =>{
        window.open(article.url);
    })

})

    detailsElement.classList.add('category__details');
    popularContainer.append(detailsElement);
    hideDisabledCategories(category, detailsElement);
})  

