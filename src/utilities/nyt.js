const API_KEY = 'xzt2RrbEiigM4JZMC4hHDl4cHYJo2wju'

const BASE_URL = 'https://api.nytimes.com/svc/';

const endpoints = {
    mostPopularByViews: 'mostpopular/v2/viewed/',
    homeTopStories: 'topstories/v2/',
}

async function fetchMostPopularByViews(days = 1){
    const url = new URL(`${days}.json`, BASE_URL + endpoints.mostPopularByViews);
    url.searchParams.set('api-key', API_KEY);
    const rensponse = await fetch(url);
    const data = await rensponse.json();

    return data
}

async function fetchHomeTopStories(section = 'home') {
    const url = new URL(`${section}.json`, BASE_URL + endpoints.homeTopStories);
    url.searchParams.set('api-key', API_KEY);
    const rensponse = await fetch(url);
    const data = await rensponse.json();

    return data
}

module.exports = {
    fetchMostPopularByViews,
    fetchHomeTopStories,
}