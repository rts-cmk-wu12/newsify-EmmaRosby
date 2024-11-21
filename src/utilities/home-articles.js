import sections from '../json/section.json'; 

const homeContainer = document.querySelector('#homeCategoryContainer');

const { fetchHomeTopStories } = require ('./nyt.js');
const homeNews = await fetchHomeTopStories();
console.log(homeNews);

const newsSections = [...new Set(homeNews.results.map(sections => sections.section))];
console.log(newsSections);

function truncate(text, length){
    return text.slice(0, length) + '...';
}

newsSections.forEach(function(category) {
    const matchingArticles = homeNews.results.filter(article => article.section === category);
    const detailsElement = document.createElement('details')
    
    detailsElement.innerHTML = `
            <summary class="category__details__summary">
                <img src="img/newsify_logo.svg" alt="logo">
                <h2 class="dark-mode-font">${category}</h2>
            </summary>`

    matchingArticles.forEach(article => {
        const articleElement = document.createElement('article')
        articleElement.innerHTML = `
                
                    <img src="./img/placeholder.svg" alt="">
                    <div class="category__details__article__decsription">
                        <h3 class="dark-mode-font">${article.title}</h3>
                        <p class="dark-mode-font">${truncate(article.abstract, 60)}</p>
                    </div>
                
                <div class="drag-to-bookmark">
                    <img src="./img/bookmarkWhite.svg" alt="">
                </div>
                `
                    
        articleElement.classList.add('category__details__article');
        detailsElement.append(articleElement);

    articleElement.addEventListener('click', () =>{
        window.open(article.url);
    })

})

    detailsElement.classList.add('category__details');
    homeContainer.append(detailsElement);
})  
