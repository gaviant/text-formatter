const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const resultButton = document.getElementById('getResultButton');

document.addEventListener('DOMContentLoaded', () => {
    textInput.value = '';
    textOutput.value = '';

    if (!textInput.value) {
        resultButton.setAttribute('disabled', 'disabled');
        resultButton.classList.add('button-disabled');
    }
});

textInput.addEventListener('input', validate);

resultButton.addEventListener('click', getResult);

function validate() {
    if (textInput.value) {
        resultButton.removeAttribute('disabled');
        resultButton.classList.remove('button-disabled');
    } else {
        resultButton.setAttribute('disabled', 'disabled');
        resultButton.classList.add('button-disabled');
    }
}

function reverseText(text) {
    return text
        .split('')
        .reverse()
        .join('');
}

function getResult() {
    textOutput.value = reverseText(textInput.value);
}