
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
const languageButton = document.querySelector('#languageButton');
let language = 'pt';

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 40);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

languageButton.addEventListener('click', () => {
  language = language === 'pt' ? 'en' : 'pt';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-pt][data-en]').forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  languageButton.textContent = language === 'pt' ? 'EN' : 'PT';
  document.title = language === 'pt'
    ? 'Quinta de São Martinho | Alojamento junto ao Gerês'
    : 'Quinta de São Martinho | Accommodation near Gerês';
});

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.dataset.alt || '';
    lightbox.showModal();
  });
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox.open) lightbox.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
