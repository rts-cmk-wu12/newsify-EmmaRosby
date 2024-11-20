const background = document.querySelector('body');
const fonts = document.querySelectorAll('.dark-mode-font');

const savedTheme = localStorage.getItem('theme'); 
let isDark = savedTheme === 'dark'; 

if (isDark) {
    background.style.backgroundColor = '#222222';
    fonts.forEach(font => font.style.color = '#D9D9D9');
} else {
    background.style.backgroundColor = '#FFFFFF';
    fonts.forEach(font => font.style.color = '#404040');
}