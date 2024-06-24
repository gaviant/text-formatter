const textInput = document.getElementById('input');
const textOutput = document.getElementById('output');
const buttonToLowerCase = document.getElementById('changeToLowerCase');
const buttonToUpperCase = document.getElementById('changeToUpperCase');
const buttonToAlternativeCase = document.getElementById('changeToAlternativeCase');
const buttonToInvertCase = document.getElementById('changeToInvertCase');

document.addEventListener('DOMContentLoaded', () => {
    textInput.value = '';
    textOutput.value = '';

    if (!textInput.value) {
        buttonToLowerCase.setAttribute('disabled', 'disabled');
        buttonToLowerCase.classList.add('button-disabled');
        buttonToUpperCase.setAttribute('disabled', 'disabled');
        buttonToUpperCase.classList.add('button-disabled');
        buttonToAlternativeCase.setAttribute('disabled', 'disabled');
        buttonToAlternativeCase.classList.add('button-disabled');
        buttonToInvertCase.setAttribute('disabled', 'disabled');
        buttonToInvertCase.classList.add('button-disabled');
    }
});

textInput.addEventListener('input', validate);

textOutput.addEventListener('input', validate);

buttonToLowerCase.addEventListener('click', () => {
    textOutput.value = changeTextCase(textInput.value, 'lower')
})

buttonToUpperCase.addEventListener('click', () => {
    textOutput.value = changeTextCase(textInput.value, 'upper')
})

buttonToAlternativeCase.addEventListener('click', () => {
    textOutput.value = changeTextCase(textInput.value, 'alternate')
})

buttonToInvertCase.addEventListener('click', () => {
    textOutput.value = changeTextCase(textInput.value, 'invert')
})

function validate() {
    if (textInput.value) {
        buttonToLowerCase.removeAttribute('disabled');
        buttonToLowerCase.classList.remove('button-disabled');
        buttonToUpperCase.removeAttribute('disabled');
        buttonToUpperCase.classList.remove('button-disabled');
        buttonToAlternativeCase.removeAttribute('disabled');
        buttonToAlternativeCase.classList.remove('button-disabled');
        buttonToInvertCase.removeAttribute('disabled');
        buttonToInvertCase.classList.remove('button-disabled');
    } else {
        buttonToLowerCase.setAttribute('disabled', 'disabled');
        buttonToLowerCase.classList.add('button-disabled');
        buttonToUpperCase.setAttribute('disabled', 'disabled');
        buttonToUpperCase.classList.add('button-disabled');
        buttonToAlternativeCase.setAttribute('disabled', 'disabled');
        buttonToAlternativeCase.classList.add('button-disabled');
        buttonToInvertCase.setAttribute('disabled', 'disabled');
        buttonToInvertCase.classList.add('button-disabled');
    }
}

function changeTextCase(text, targetCase) {
    const textCase = {
        lower() {
            return text.toLowerCase();
        },
        upper() {
            return text.toUpperCase();
        },
        alternate() {
            return text.toLowerCase().split('').map((character, index) => {
                if (index % 2 !== 0) {
                    return character.toUpperCase();
                } else {
                    return character.toLowerCase();
                }
            }).join('');
        },
        invert() {
            let lowerText = text.toLowerCase();
            return text.split('').map((character, index) => {
                if (character === lowerText[index]) {
                    return character.toUpperCase();
                } else {
                    return character.toLowerCase();
                }
            }).join('');
        }
    }

    switch (targetCase) {
        case 'lower':
            return textCase.lower();
        case 'upper':
            return textCase.upper();
        case 'alternate':
            return textCase.alternate();
        case 'invert':
            return textCase.invert();
        default:
            return false;
    }
}