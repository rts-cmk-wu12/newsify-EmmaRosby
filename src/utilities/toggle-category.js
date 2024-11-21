import sections from '../json/section.json'; 

const categories = sections.sections; 
console.log(categories);

const categoryToggleContainer = document.querySelector('.toggle');
const toggleStates = JSON.parse(localStorage.getItem('toggleStates')) || {};

function saveToggleStates() {
    localStorage.setItem('toggleStates', JSON.stringify(toggleStates));
}

categories.forEach(function(category, index) {
    const toggleElement = document.createElement('div');
    const toggleId = `toggle-${index}`;

    toggleElement.innerHTML = `
        <div class="toggle__category-wrapper__category">
            <img src="img/newsify_logo.svg" alt="logo">
            <h3 class="dark-mode-font">${category.name}</h3>
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

    if (!localStorage.getItem('toggleStates')) {
        categories.forEach((_, index) => {
            toggleStates[`toggle-${index}`] = true; 
        });
        saveToggleStates();
    }
});


