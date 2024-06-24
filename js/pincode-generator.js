const lengthValue = document.getElementById('lengthInput');
const rangeLine = document.getElementById('range');
const button = document.getElementById('getResultButton');
const resultPincodeElement = document.querySelector('.pincode');
const copyButton = document.querySelector('.copy-icon');
const notification = document.querySelector('.notification');
const reg = /[A-Za-zА-Я-а-яЁё!"%&'()*,-./:;?@#$+<>=[\]^_`{|}~]/g;

document.addEventListener('DOMContentLoaded', () => {
    lengthValue.value = 4;
    rangeLine.value = 4;
    resultPincodeElement.textContent = generatePincode(lengthValue.value)
});

rangeLine.addEventListener('input', () => {
    lengthValue.value = rangeLine.value;
});

lengthValue.addEventListener('input', () => {
    rangeLine.value = lengthValue.value;
    lengthValue.value = lengthValue.value.replace(reg, '');
});

button.addEventListener('click', getResult)

copyButton.addEventListener('click', copyToClipboard)

function getResult() {
    resultPincodeElement.textContent = generatePincode(lengthValue.value)
}

function generatePincode(length) {
    let pincode = '';
    let numbers = '1234567890';

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * numbers.length);
        pincode += numbers.at(randomNumber)
    }

    return pincode;
}

function copyToClipboard() {
    notification.style.zIndex = '25';
    const tempInput = document.createElement("textarea");
    tempInput.value = resultPincodeElement.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showCopyNotification();
    setTimeout(hideCopyNotification, 700)
}

function showCopyNotification() {
    notification.style.opacity = 1;
}
function hideCopyNotification() {
    notification.style.opacity = 0;
    notification.style.zIndex = '';
}