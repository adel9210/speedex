const navToggleButton = document.querySelector('.nav__toggle');
const navCloseButton = document.querySelector('.nav__close');
const navItems = document.querySelector('.nav__items');



navToggleButton.addEventListener('click', () => {
    navItems.classList.toggle('mobile-view')
})

navCloseButton.addEventListener('click', () => {
    navItems.classList.remove('mobile-view')
})