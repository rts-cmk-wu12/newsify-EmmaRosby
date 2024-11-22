const toggleDark = document.querySelector('#toggleDarkMode');

const background = document.querySelector('body');
const backgroundHeader = document.querySelector('header');
const backgroundFooter = document.querySelector('footer');

const fonts = document.querySelectorAll('.dark-mode-font');

const imagesDark = document.querySelectorAll('.dark-mode-img');
const imagesLight = document.querySelectorAll('.light-mode-img');


// On page load, get the theme from localStorage
const savedTheme = localStorage.getItem('theme'); 
let isDark = savedTheme === 'dark'; // Set the initial state based on localStorage

function toggleImages(showDark) {
    imagesDark.forEach(img => {
        img.style.display = showDark ? "block" : "none"; // Show dark mode images
    });
    imagesLight.forEach(img => {
        img.style.display = showDark ? "none" : "block"; // Show light mode images
    });
}

// Apply the saved theme
if (isDark) {
    background.style.backgroundColor = '#222222';
    backgroundHeader.style.backgroundColor = '#222222';
    backgroundFooter.style.backgroundColor = '#222222';
    fonts.forEach(font => font.style.color = '#D9D9D9');
    toggleImages(true)
} else {
    background.style.backgroundColor = '#FFFFFF';
    fonts.forEach(font => font.style.color = '#404040');
    toggleImages(false)
}

// Toggle the theme
toggleDark.addEventListener('click', () => {
    if (!isDark) {
        background.style.backgroundColor = '#222222';
        backgroundHeader.style.backgroundColor = '#222222';
        backgroundFooter.style.backgroundColor = '#222222';
        fonts.forEach(font => font.style.color = '#D9D9D9');
        toggleImages(true)
        localStorage.setItem('theme', 'dark'); // Save the theme as 'dark'

    } else {

        background.style.backgroundColor = '#FFFFFF';
        backgroundHeader.style.backgroundColor = '#FFFFFF';
        backgroundFooter.style.backgroundColor = '#FFFFFF';
        fonts.forEach(font => font.style.color = '#404040');
        toggleImages(false)
        localStorage.setItem('theme', 'light'); // Save the theme as 'light'
    }

    isDark = !isDark; // Toggle the state
    console.log("isDark:", isDark);
});

