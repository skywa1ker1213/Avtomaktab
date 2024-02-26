let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    goToSlide((index + 1) % slides.length);
}

function prev() {
    goToSlide((index - 1 + slides.length) % slides.length);
}

function goToSlide(newIndex) {
    slides[index].classList.remove('active');
    index = newIndex;
    slides[index].classList.add('active');
    updatePagination();
}

let allPaginateBtns = document.querySelectorAll('.pagination li');
let allSlides = document.querySelectorAll('.slide-container');

allPaginateBtns.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        clearPaginatedActive();
        el.classList.add('active');
        goToSlide(i);
    });
});

function clearPaginatedActive() {
    allPaginateBtns.forEach((el) => {
        el.classList.remove('active');
    });
}

function updatePagination() {
    clearPaginatedActive();
    allPaginateBtns[index].classList.add('active');
}