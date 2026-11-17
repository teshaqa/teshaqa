const navigationToggle = document.querySelector('.nav-toggle');
const navigation = document.getElementById('navigimi');

if (navigationToggle && navigation) {
  navigationToggle.hidden = false;
  navigationToggle.addEventListener('click', () => {
    const expanded = navigationToggle.getAttribute('aria-expanded') === 'true';
    navigationToggle.setAttribute('aria-expanded', String(!expanded));
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) navigationToggle.setAttribute('aria-expanded', 'false');
  });
  document.querySelector('.nav').addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigationToggle.getAttribute('aria-expanded') === 'true') {
      navigationToggle.setAttribute('aria-expanded', 'false');
      navigationToggle.focus();
    }
  });
}

const lightbox = document.querySelector('.lightbox');

if (lightbox && typeof lightbox.showModal === 'function') {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('figcaption');

  for (const link of document.querySelectorAll('[data-lightbox]')) {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      caption.textContent = link.dataset.lightbox;
      lightbox.showModal();
    });
  }

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

for (const year of document.querySelectorAll('[data-year]')) {
  year.textContent = new Date().getFullYear();
}
