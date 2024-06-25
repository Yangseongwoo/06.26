$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray('.text2');

    textElements.forEach(text2 => {
      gsap.to(text2, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text2,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  });


  let activeIndex = 0;

  const groups = document.getElementsByClassName("card-group");
  
  const handleNextClick = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
    currentGroup.dataset.status = "after";
  
    nextGroup.dataset.status = "becoming-active-from-before";
  
    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };
  
  const handlePreviousClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
    currentGroup.dataset.status = "before";
  
    nextGroup.dataset.status = "becoming-active-from-after";
  
    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };



  /* mouse cusor */
