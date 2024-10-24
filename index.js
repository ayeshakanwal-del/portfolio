
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const menuOptions = document.querySelectorAll('.menu-option');


menuIcon.addEventListener('click', function() {
  mobileMenu.classList.add('open');  
});


closeBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('open');  
});


menuOptions.forEach(option => {
  option.addEventListener('click', function() {
    mobileMenu.classList.remove('open'); 


    const targetSection = document.querySelector(option.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
