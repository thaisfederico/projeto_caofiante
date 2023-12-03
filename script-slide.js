let currentIndex = 0;

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.divDetalheImg.slide');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 + '%';
    document.querySelector('.divDetalheImg.slider').style.transform = 'translateX(' + offset + ')';
}

// Inicie o slider
showSlide(currentIndex);
