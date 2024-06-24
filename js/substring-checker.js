const stringInput = document.getElementById('stringInput');
const substringInput = document.getElementById('substringInput');
const getResultButton = document.getElementById('substringButton');
const result = document.querySelector('.result-count');

document.addEventListener('DOMContentLoaded', () => {
    stringInput.value = '';
    substringInput.value = '';
    result.textContent = 0;

    if (!stringInput.value && !substringInput.value) {
        getResultButton.setAttribute('disabled', 'disabled');
        getResultButton.classList.add('button-disabled');
    }
});

stringInput.addEventListener('input', validate);

substringInput.addEventListener('input', validate);

getResultButton.addEventListener('click', getResult);

function validate() {
    if (stringInput.value && substringInput.value) {
        getResultButton.removeAttribute('disabled');
        getResultButton.classList.remove('button-disabled');
    } else {
        getResultButton.setAttribute('disabled', 'disabled');
        getResultButton.classList.add('button-disabled');
    }
}

function getSubstringCount(string, substring) {
    let counter = 0;
    string.split(' ').forEach((item, index) => { if (item.includes(substring)) counter++; });
    return counter;
}

function getResult() {
    result.textContent = getSubstringCount(stringInput.value, substringInput.value);
}