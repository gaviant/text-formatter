const stringInput = document.getElementById('stringInput');
const stringInput2 = document.getElementById('stringInput2');
const getResultButton = document.getElementById('getResultButton');
const result = document.querySelector('.result-count');

document.addEventListener('DOMContentLoaded', () => {
    stringInput.value = '';
    result.textContent = 'Нет';

    if (!stringInput.value && !stringInput2.value) {
        getResultButton.setAttribute('disabled', 'disabled');
        getResultButton.classList.add('button-disabled');
    }
});

stringInput.addEventListener('input', validate);

stringInput2.addEventListener('input', validate);

getResultButton.addEventListener('click', getResult);

function validate() {
    if (stringInput.value && stringInput2.value) {
        getResultButton.removeAttribute('disabled');
        getResultButton.classList.remove('button-disabled');
    } else {
        getResultButton.setAttribute('disabled', 'disabled');
        getResultButton.classList.add('button-disabled');
    }
}

function checkAnagramWord(word1, word2) {
    return word1.toLowerCase().split('').sort().toString() == word2.toLowerCase().split('').sort().toString();
}

function getResult() {
    result.textContent = checkAnagramWord(stringInput.value, stringInput2.value) === true ? 'Да' : 'Нет';
}