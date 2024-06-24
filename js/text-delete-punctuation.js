const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const resultButton = document.getElementById('getResultButton');
const resultCount = document.querySelector('.result-count');

document.addEventListener('DOMContentLoaded', () => {
    textInput.value = '';
    textOutput.value = '';
    resultCount.textContent = 0;

    if (!textInput.value) {
        resultButton.setAttribute('disabled', 'disabled');
        resultButton.classList.add('button-disabled');
    }
});

textInput.addEventListener('input', validate);

getResultButton.addEventListener('click', getResult);

function validate() {
    if (textInput.value) {
        resultButton.removeAttribute('disabled');
        resultButton.classList.remove('button-disabled');
    } else {
        resultButton.setAttribute('disabled', 'disabled');
        resultButton.classList.add('button-disabled');
    }
}

function removePunctuation(text) {
    return text.replace(/[!"%&'()*,-./:;?[\]^_`{|}~]/g, "");
}

function countRemovedPunctuationCharacters(text) {
    return text.length - text.replace(/[!"%&'()*,-./:;?[\]^_`{|}~]/g, "").length;
}

function getResult() {
    textOutput.value = removePunctuation(textInput.value);
    resultCount.textContent = countRemovedPunctuationCharacters(textInput.value)
}