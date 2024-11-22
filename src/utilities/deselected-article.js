// Liva

import sectionsData from '../json/section.json';

const categories = sectionsData.sections;
const toggleStates = JSON.parse(localStorage.getItem('toggleStates'));
const onlyLetters = /[^a-zA-Z]/g;

export function hideDisabledCategories(articleCategory, detailsElement) {
    
    categories.forEach(category => {
        if (articleCategory.toLowerCase().replace(onlyLetters, '') === category) {
            if (!toggleStates[`toggle-${category}`]) {
                detailsElement.style.display='none';
            }
        }
    });
}