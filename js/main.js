const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.header__nav a');

hamburger.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});

overlay.addEventListener('click', () => {
  header.classList.remove('menu-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
  });
});

const workItems = document.querySelectorAll('.js-work');
const workModal = document.querySelector('.work-modal');
const workFrame = document.querySelector('.work-modal__frame');
const workClose = document.querySelector('.work-modal__close');

workItems.forEach((item) => {
  item.addEventListener('click', () => {
    const url = item.dataset.url;
    workFrame.src = url;
    workModal.classList.add('is-show');
  });
});

workClose.addEventListener('click', () => {
  workModal.classList.remove('is-show');
  workFrame.src = '';
});

workModal.addEventListener('click', (e) => {
  if (e.target === workModal) {
    workModal.classList.remove('is-show');
    workFrame.src = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    workModal.classList.remove('is-show');
    workFrame.src = '';
  }
});

