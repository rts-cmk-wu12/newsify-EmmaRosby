import sections from '../json/section.json'; 

const categories = sections.sections; 
console.log(categories);

const categoryToggleContainer = document.querySelector('.toggle');
let toggleStates = JSON.parse(localStorage.getItem('toggleStates')) || {};

if(!localStorage.getItem('toggleStates')){
    toggleStates = categories.reduce((acc, category) => {
        acc[`toggle-${category}`] = true;
        return acc;
    }, {});
    localStorage.setItem('toggleStates', JSON.stringify(toggleStates));
}

function saveToggleStates() {
    localStorage.setItem('toggleStates', JSON.stringify(toggleStates));
}

categories.forEach(function(category) {
    const toggleElement = document.createElement('div');
    const toggleId = `toggle-${category}`;

    toggleElement.innerHTML = `
        <div class="toggle__category-wrapper__category">
            <img src="img/newsify_logo.svg" alt="logo">
            <h3 class="dark-mode-font">${category}</h3>
        </div>
        <label class="toggle__category-wrapper__switch" id="${toggleId}">
            <input type="checkbox" ${toggleStates[toggleId] ? 'checked' : ''}>
            <span class="toggle__category-wrapper__switch__slider"></span>
        </label>
    `;

    toggleElement.classList.add('toggle__category-wrapper');
    categoryToggleContainer.append(toggleElement);

    const checkbox = toggleElement.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        toggleStates[toggleId] = checkbox.checked; 
        saveToggleStates(); 
    });

});


