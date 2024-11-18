const { fetchMostPopularByViews } = require ('./utilities/nyt.js');
const popularNews = fetchMostPopularByViews(); 
console.log(popularNews);
