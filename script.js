function isElementVisible(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateElementsOnScroll() {
  var elements = document.querySelectorAll('.scroll-right, .scroll-left');

  elements.forEach(function(element) {
      if (isElementVisible(element)) {
          element.classList.add('animate-scroll');
      } else {
          element.classList.remove('animate-scroll');
      }
  });
}

window.addEventListener('scroll', function() {
  animateElementsOnScroll();
});

animateElementsOnScroll();
