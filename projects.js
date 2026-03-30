const modals = [
  { open: 'open-skincare', modal: 'modal-skincare', close: 'close-skincare' },
  { open: 'open-arduino',  modal: 'modal-arduino',  close: 'close-arduino'  },
  { open: 'open-bert',     modal: 'modal-bert',     close: 'close-bert'     },
  { open: 'open-food',     modal: 'modal-food',     close: 'close-food'     },
];

modals.forEach(({ open, modal, close }) => {
  const openBtn  = document.getElementById(open);
  const modalEl  = document.getElementById(modal);
  const closeBtn = modalEl.querySelector('.' + close);

  openBtn.addEventListener('click', () => {
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const dismiss = () => {
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', dismiss);
  modalEl.addEventListener('click', (e) => { if (e.target === modalEl) dismiss(); });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach((m) => {
      m.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});
