//slide
const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    removeCurrentActivities();
    slide.classList.add('active');
  });
});

function removeCurrentActivities() {
  slides.forEach(slide => {
    slide.classList.remove('active')
  });
}