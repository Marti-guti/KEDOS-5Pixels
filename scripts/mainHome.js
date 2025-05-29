const hamburger = document.getElementById('hamburger-exist');
const mobileMenu = document.getElementById('mobileMenu');




hamburger.addEventListener('click', () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
});



