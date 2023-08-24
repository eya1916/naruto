
document.addEventListener('DOMContentLoaded', () => {
    let currentSlideIndex = 0;
  
    function showSlide(index) {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    function plusSlides(n) {
      currentSlideIndex += n;
      const slides = document.querySelectorAll('.slide');
      if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
      } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
      }
      showSlide(currentSlideIndex);
    }
  
    showSlide(currentSlideIndex);
  
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    prevButton.addEventListener('click', () => {
      plusSlides(-1);
    });
  
    nextButton.addEventListener('click', () => {
      plusSlides(1);
    });
  });
  