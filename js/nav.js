const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');
const aLink = document.querySelectorAll('nav li a');
const cPage = location.href;

toggleMenu.addEventListener('click', () => {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
  document.body.classList.toggle('no-scroll');
});

for(i = 0; i < aLink.length; i++) {
  if(aLink[i].href == cPage) {
    aLink[i].classList.toggle('curr');
  };
};