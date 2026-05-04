const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.header__nav a');

const workItems = document.querySelectorAll('.js-work');
const workModal = document.querySelector('.work-modal');
const workFrame = document.querySelector('.work-modal__frame');
const workClose = document.querySelector('.work-modal__close');

const flowImg = document.querySelector('.flow-img');
const imgModal = document.querySelector('.img-modal');
const imgModalContent = document.querySelector('.img-modal__content');
const imgModalClose = document.querySelector('.img-modal__close');

const closeMenu = () => {
  if (header) header.classList.remove('menu-open');
  document.body.style.overflow = '';
};

const closeModal = () => {
  if (!workModal || !workFrame) return;
  workModal.classList.remove('is-show');
  workFrame.src = '';
  document.body.style.overflow = '';
};

const closeImgModal = () => {
  if (!imgModal || !imgModalContent) return;
  imgModal.classList.remove('is-show');
  imgModalContent.src = '';
  document.body.style.overflow = '';
};

const openModal = (url) => {
  if (!workModal || !workFrame) return;
  workFrame.src = url;
  workModal.classList.add('is-show');
  document.body.style.overflow = 'hidden';
};

if (hamburger) {
  hamburger.addEventListener('click', () => {
    header.classList.toggle('menu-open');
    document.body.style.overflow =
      header.classList.contains('menu-open') ? 'hidden' : '';
  });
}

if (overlay) {
  overlay.addEventListener('click', closeMenu);
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

workItems.forEach((item) => {
  item.addEventListener('click', () => {
    const url = item.dataset.url;
    if (url) openModal(url);
  });
});

if (workClose) {
  workClose.addEventListener('click', closeModal);
}

if (workModal) {
  workModal.addEventListener('click', (e) => {
    if (e.target === workModal) closeModal();
  });
}

if (flowImg && imgModal && imgModalContent) {
  flowImg.addEventListener('click', () => {
    imgModalContent.src = flowImg.src;
    imgModal.classList.add('is-show');
    document.body.style.overflow = 'hidden';
  });

  imgModal.addEventListener('click', (e) => {
    if (e.target === imgModal) closeImgModal();
  });
}

if (imgModalClose) {
  imgModalClose.addEventListener('click', closeImgModal);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeImgModal();
    closeMenu();
  }
});

const fadeItems = document.querySelectorAll('.js-fade');

if (fadeItems.length > 0) {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  }, { threshold: 0.2 });

  fadeItems.forEach((item) => {
    fadeObserver.observe(item);
  });
}