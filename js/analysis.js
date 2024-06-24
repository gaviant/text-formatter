const stringInput = document.getElementById('stringInput');
const getResultButton = document.getElementById('getResultButton');

const resultTotalCharacters = document.getElementById('resultTotalCharacters');
const resultCyrillicCharacters = document.getElementById('resultCyrillicCharacters');
const resultTotalWords = document.getElementById('resultTotalWords');
const resultTotalVowels = document.getElementById('resultTotalVowels');
const resultTotalNumbers = document.getElementById('resultTotalNumbers');
const resultTotalLatinCharacters = document.getElementById('resultTotalLatinCharacters');
const resultTotalSentences = document.getElementById('resultTotalSentences');
const resultTotalConsonants = document.getElementById('resultTotalConsonants');

document.addEventListener('DOMContentLoaded', () => {
    stringInput.value = '';
    resultTotalCharacters.textContent = 0;
    resultCyrillicCharacters.textContent = 0;
    resultTotalWords.textContent = 0;
    resultTotalVowels.textContent = 0;
    resultTotalNumbers.textContent = 0;
    resultTotalLatinCharacters.textContent = 0;
    resultTotalSentences.textContent = 0;
    resultTotalConsonants.textContent = 0;

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

// подсчет количества слов в тексте
function countWords(text) {
    return text
        .replace(/[^a-zA-Zа-яА-Я\s]/g, "")
        .split(' ')
        .length;
}

// подсчет латинских символов
function countLatinCharacters(text) {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let counter = 0;

    text.split('').forEach((item) => {
        if (charset.includes(item)) counter++;
    })

    return counter;
}

// подсчет кириллических символов
function countCyrillicCharacters(text) {
    let charset = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let counter = 0;

    text.split('').forEach((item) => {
        if (charset.includes(item)) counter++;
    })

    return counter;
}

// подсчет количества цифр в тексте
function countNumbers(text) {
    let splittedText = text.split('');

    let numbersCounter = splittedText.filter((item, index) => {
        item = Number(item);
        if (typeof item === 'number' && !isNaN(item)) {
            return true;
        } else {
            return false;
        }
    });

    numbersCounter = numbersCounter.filter((item) => {
        if (item === ' ') {
            return false;
        } else {
            return true;
        }
    })

    return numbersCounter.length;
}

// подсчет количества символов
function countStringCharacters(text) {
    let textArray = text.split('');

    return textArray.length;
}

// подсчет согласных (RU)
function countConsonants(text) {
    let consonants = 'бвгджзйклмнпрстфхцчшщ';
    let consonantsCounter = 0;

    text.replace(/[^a-zA-Zа-яА-Я]/g, "").split('').forEach(character => {
        if (consonants.includes(character)) consonantsCounter++;
    });

    return consonantsCounter;
}

// подсчет гласных (RU)
function countVowels(text) {
    let vowels = 'аеёиоуэюя';
    let vowelsCounter = 0;

    text.replace(/[^a-zA-Zа-яА-Я]/g, "").split('').forEach(character => {
        if (vowels.includes(character)) vowelsCounter++;
    });

    return vowelsCounter;
}

// подсчет количества предложений текста
function countSentences(text) {
    return text.replace(/[!?]/g, ".").split('. ').length;
}

function getResult() {
    resultTotalCharacters.textContent = countStringCharacters(stringInput.value);
    resultCyrillicCharacters.textContent = countCyrillicCharacters(stringInput.value);
    resultTotalWords.textContent = countWords(stringInput.value);
    resultTotalVowels.textContent = countVowels(stringInput.value);
    resultTotalNumbers.textContent = countNumbers(stringInput.value);
    resultTotalLatinCharacters.textContent = countLatinCharacters(stringInput.value);
    resultTotalSentences.textContent = countSentences(stringInput.value);
    resultTotalConsonants.textContent = countConsonants(stringInput.value);
}