// slider variables
const sliderSlide = document.querySelector('.slider-slide');
const sliderImages = document.querySelectorAll('img');
const sliderContainer = document.querySelector('.slider-container');
const arrowsContainer = document.querySelector('.arrows-container');

console.log(sliderSlide)
console.log(sliderImages)

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
let size;
//const size = sliderImages[0].clientWidth;
sliderImages[0].onload = function() {
    size = this.width;
    sliderContainer.style.width = `${size}px`;
    arrowsContainer.style.width = `${size}px`;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Buttons listeners
nextBtn.addEventListener('click', () => {
    if (counter >= sliderImages.length-1) { return };
    sliderSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter)
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0 ) { return };
    sliderSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter)
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

sliderSlide.addEventListener('transitionend', () => {
    console.log(sliderImages[counter]);
    if (sliderImages[counter].id === 'lastClone') {
        sliderSlide.style.transition = "none";
        counter = sliderImages.length-2;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (sliderImages[counter].id === 'firstClone') {
        sliderSlide.style.transition = "none";
        counter = sliderImages.length-counter;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
