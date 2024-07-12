document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".navigation ul").classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseover', function () {
      this.classList.add('hover');
    });
    card.addEventListener('mouseout', function () {
      this.classList.remove('hover');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  cards.forEach(card => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollElements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25) && !el.classList.contains("visible")) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Initial check to see if any elements are already in view
  handleScrollAnimation();
});

