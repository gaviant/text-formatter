const stringInput = document.getElementById('stringInput');
const getResultButton = document.getElementById('getResultButton');
const result = document.querySelector('.result-count');

document.addEventListener('DOMContentLoaded', () => {
    stringInput.value = '';
    result.textContent = 'Нет';

    if (!stringInput.value) {
        getResultButton.setAttribute('disabled', 'disabled');
        getResultButton.classList.add('button-disabled');
    }
});

stringInput.addEventListener('input', validate);

getResultButton.addEventListener('click', getResult);

function validate() {
    if (stringInput.value) {
        getResultButton.removeAttribute('disabled');
        getResultButton.classList.remove('button-disabled');
    } else {
        getResultButton.setAttribute('disabled', 'disabled');
        getResultButton.classList.add('button-disabled');
    }
}

function checkPalindrome(string) {
    return (
        string.replace(/[^a-zA-Zа-яА-Я]/g, "")
            .toLowerCase()
            .split('')
            .join('') === string.replace(/[^a-zA-Zа-яА-Я]/g, "")
                .toLowerCase()
                .split('')
                .reverse()
                .join('')
    );
}

function getResult() {
    result.textContent = checkPalindrome(stringInput.value) === true ? 'Да' : 'Нет';
}