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

function deleteDuplicates(text) {
    let textArray = text.split(' ');

    let filteredText = textArray.filter((item, index, array) => {
        if (textArray.includes(item, index + 1)) {
            return false;
        } else {
            return true;
        }
    }).join(' ');

    return filteredText;
}

function getResult() {
    textOutput.value = deleteDuplicates(textInput.value);
}