const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav__link');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav__link--visible');
});
