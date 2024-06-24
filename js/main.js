const backPreviousPageButton = document.querySelector('.back-button');
const backPreviousPageButtonIcon = document.querySelector('.back-button__icon');
const backPreviousPageButtonText = document.querySelector('.back-button__text');

backPreviousPageButton.addEventListener('mouseover', () => {
    backPreviousPageButtonIcon.style.stroke = '#fff';
    backPreviousPageButtonText.style.color = '#fff';
})

backPreviousPageButton.addEventListener('mouseout', () => {
    backPreviousPageButtonIcon.style.stroke = '';
    backPreviousPageButtonText.style.color = '';
})

backPreviousPageButton.addEventListener('click', () => { history.back() })