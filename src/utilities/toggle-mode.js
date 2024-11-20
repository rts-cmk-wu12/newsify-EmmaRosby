const toggleDark = document.querySelector('#toggleDarkMode');
const background = document.querySelector('body');
const fonts = document.querySelectorAll('.dark-mode-font'); // Select all font elements

// On page load, get the theme from localStorage
const savedTheme = localStorage.getItem('theme'); 
let isDark = savedTheme === 'dark'; // Set the initial state based on localStorage

// Apply the saved theme
if (isDark) {
    background.style.backgroundColor = '#222222';
    fonts.forEach(font => font.style.color = '#D9D9D9');
} else {
    background.style.backgroundColor = '#FFFFFF';
    fonts.forEach(font => font.style.color = '#404040');
}

// Toggle the theme
toggleDark.addEventListener('click', () => {
    if (isDark) {
        background.style.backgroundColor = '#FFFFFF';
        fonts.forEach(font => font.style.color = '#404040');
        localStorage.setItem('theme', 'light'); // Save the theme as 'light'
    } else {
        background.style.backgroundColor = '#222222';
        fonts.forEach(font => font.style.color = '#D9D9D9');
        localStorage.setItem('theme', 'dark'); // Save the theme as 'dark'
    }
    
    isDark = !isDark; // Toggle the state
    console.log("isDark:", isDark);
});

