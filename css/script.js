const modal = document.getElementById('modal-register');
const openButtons = document.querySelectorAll('hero-button');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('is-open');
  });
});