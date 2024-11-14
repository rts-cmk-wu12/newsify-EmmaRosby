const container = document.querySelector('#slider');
const slider = document.querySelector('#slider__roll');
const dots = document.querySelector('#slider__dots');
const next = document.querySelector('#slider__next');

const infoOne = document.querySelector('#slidr__infoOne');
const infoTwo = document.querySelector('#slidr__infoTwo');
const infoThree = document.querySelector('#slidr__infoThree');

Array.from(slider.children).forEach((index) => {
    dots.innerHTML += `<div class="dot ${index == 0 ? 'fill' : ''}"></div>`;
});

let currentIndex = 0;
const sliderWindowWidth = slider.offsetWidth;

function sliderDots (){
    Array.from(dots.children).forEach((dot, index) => {
        if (currentIndex === index) {
            dot.classList.add("currentDot")
        } else (
            dot.classList.remove("currentDot")
        )
    })
}

next.addEventListener('click', () => {
    let newIndex = currentIndex;

    if (newIndex < slider.children.length - 1) {
        newIndex = currentIndex + 1;
    }
    
    currentIndex = newIndex;
    const offset = newIndex * sliderWindowWidth;
    
    slider.animate([{ transform: `translateX(-${offset}px)` }], { duration: 300, fill: 'both' })

    sliderDots();   
}) 

sliderDots();





