const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.header__nav a');

const closeMenu = () => {
  header.classList.remove('menu-open');
  document.body.style.overflow = '';
};

hamburger.addEventListener('click', () => {
  header.classList.toggle('menu-open');

  if (header.classList.contains('menu-open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

overlay.addEventListener('click', closeMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const workItems = document.querySelectorAll('.js-work');
const workModal = document.querySelector('.work-modal');
const workFrame = document.querySelector('.work-modal__frame');
const workClose = document.querySelector('.work-modal__close');

const openModal = (url) => {
  workFrame.src = url;
  workModal.classList.add('is-show');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  workModal.classList.remove('is-show');
  workFrame.src = '';
  document.body.style.overflow = '';
};

workItems.forEach((item) => {
  item.addEventListener('click', () => {
    const url = item.dataset.url;
    openModal(url);
  });
});

workClose.addEventListener('click', closeModal);

workModal.addEventListener('click', (e) => {
  if (e.target === workModal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeMenu();
  }
});

const fadeItems = document.querySelectorAll('.js-fade');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
    }
  });
}, {
  threshold: 0.2
});

fadeItems.forEach((item) => {
  fadeObserver.observe(item);
});