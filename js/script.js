const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const fadeElements = document.querySelectorAll('.fade-in, .section-heading, .about-card, .procedure-card, .highlight-card, .gallery-grid img, .contact-info, .map-frame');

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-toggle') && !event.target.closest('.nav-menu')) {
    navMenu?.classList.remove('open');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach((element) => {
  observer.observe(element);
});
