const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const getResultButton = document.getElementById('getResultButton');

document.addEventListener('DOMContentLoaded', () => {
    textInput.value = '';
    textOutput.value = '';

    if (!textInput.value) {
        getResultButton.setAttribute('disabled', 'disabled');
        getResultButton.classList.add('button-disabled');
    }
});

textInput.addEventListener('input', validate);

getResultButton.addEventListener('click', getResult);

function validate() {
    if (textInput.value) {
        getResultButton.removeAttribute('disabled');
        getResultButton.classList.remove('button-disabled');
    } else {
        getResultButton.setAttribute('disabled', 'disabled');
        getResultButton.classList.add('button-disabled');
    }
}

function shuffleStringCharacters(string) {
    let charactersArray = string.split('');

    let shuffledIndexes = [];
    let resultFinal = [];

    while (shuffledIndexes.length < string.length) {
        let randomCharacter = Math.floor(Math.random() * string.length);

        if (!shuffledIndexes.includes(randomCharacter)) {
            shuffledIndexes.push(randomCharacter);
            resultFinal.push(charactersArray[randomCharacter]);
        }
    }

    return resultFinal.join('');
}

function getResult() {
    textOutput.value = shuffleStringCharacters(textInput.value);
}