// Header shrink on scroll
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (window.scrollY > 10) header.classList.add('shrink');
  else header.classList.remove('shrink');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Scroll reveal for .fade-in
const revealables = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealables.forEach(el => io.observe(el));

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();


// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}
function filterMenu(category){const items=document.querySelectorAll('.menu-item');items.forEach(i=>{if(category==='all'||i.classList.contains(category)){i.style.display='block'}else{i.style.display='none'}})}