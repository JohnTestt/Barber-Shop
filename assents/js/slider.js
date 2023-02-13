let currentSlide = 0;
let slides = document.querySelectorAll('#slider img');


     const nextBtn = document.querySelector('#next-slide')
     .addEventListener('click', () => {

        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
     })

     
     const prevBtn = document.querySelector('#prev-slide')
     .addEventListener('click', () => {

        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
     })