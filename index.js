
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');


closeBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('open'); 
});

const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', function() {
  mobileMenu.classList.add('open'); 
});
