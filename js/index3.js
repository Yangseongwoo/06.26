document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.icon');

  images.forEach(image => {
    image.addEventListener('click', function() {
      const slideContainer = document.createElement('div');
      slideContainer.classList.add('slide-container');
      document.body.appendChild(slideContainer);

      setTimeout(() => {
        slideContainer.classList.add('slide-in');
      }, 10);

      slideContainer.addEventListener('transitionend', () => {
        document.body.classList.add('fade-out');

        document.body.addEventListener('animationend', () => {
          window.location.href = 'ui1.html';
        });
      });
    });
  });
});
