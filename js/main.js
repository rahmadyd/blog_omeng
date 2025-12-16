document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-secondary');

  if (!toggle || !nav) {
    console.log('ELEMEM TIDAK DITEMUKAN');
    return;
  }

  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    console.log('BURGER DIKLIK');
  });
});


window.addEventListener('scroll', () => {
  const progressBar = document.getElementById('progressBar');

  if (!progressBar) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = (scrollTop / docHeight) * 100;

  progressBar.style.width = scrollPercent + '%';
});



const navbar = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('is-sticky');
  } else {
    navbar.classList.remove('is-sticky');
  }
});