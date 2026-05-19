//================= CONTROLE DO MENU ====================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const toggleIcon = navToggle?.querySelector('i');


// Abre / Fecha o menu ao clicar
navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');

  // Alterna o ícone entre "Barras" e "X"
  if (navMenu?.classList.contains('open')) {
    toggleIcon?.setAttribute('class', 'fas fa-times');
  } else {
    toggleIcon?.setAttribute('class', 'fas fa-bars');
  }
});

// Fecha o menu se clicar em um link

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('open');
    toggleIcon?.setAttribute('class', 'fas fa-bars');
  });
});

// Fecha o menu ao clicar fora dele

window.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-toggle') && !event.target.closest('.nav-menu')) {
    navMenu?.classList.remove('open');
    toggleIcon?.setAttribute('class', 'fas fa-bars');
  }
});

//================= ANIMAÇÃO ====================

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

fadeElements.forEach((element) => {
  observer.observe(element);
});
