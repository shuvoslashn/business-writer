// js for menu icon
const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
