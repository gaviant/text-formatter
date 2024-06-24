const burger = document.querySelector('.burger__menu');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    if (burger.style.rotate == '') {
        burger.style.rotate = '90deg';
        nav.style.display = 'flex';
    } else {
        burger.style.rotate = '';
        nav.style.display = 'none';
    }
});