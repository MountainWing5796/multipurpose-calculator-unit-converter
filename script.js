// Calculator Functionality

const simpleCalcRadio = document.querySelector('[data-simple-radio]');
const scientificCalcRadio = document.querySelector('[data-scientific-radio]');

const angleUnits = document.querySelector('[data-angle-units]');
const scientificButtons = document.querySelector('[data-scientific-buttons]');

const inputScreen = document.querySelector('[data-input-screen]');
const resultScreen = document.querySelector('[data-result-screen]');

let firstNumber = '', secondNumber = '';
function numberEnter(num) {
    if (num == '0' && firstNumber === '0') {
        firstNumber = '0';
    } else if (num != '0' && firstNumber === '0') {
        firstNumber = num;
    } else {
        firstNumber = firstNumber + num;
    }
    inputScreen.textContent = firstNumber;
    console.log(typeof(num))
}

const numberButtons = document.querySelectorAll('[data-number]');
numberButtons.forEach((num)=> {
    num.addEventListener('click', ()=> {
        let numPress = num.dataset.number;
        numberEnter(numPress);
    })
})



simpleCalcRadio.addEventListener('click', ()=> {
    angleUnits.classList.add('displayNone')
    scientificButtons.classList.add('displayNone')
})

scientificCalcRadio.addEventListener('click', ()=> {
    angleUnits.classList.remove('displayNone')
    scientificButtons.classList.remove('displayNone')
})

