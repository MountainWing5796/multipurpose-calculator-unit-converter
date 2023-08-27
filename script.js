// Calculator Functionality

const simpleCalcRadio = document.querySelector('#simple');
const scientificCalcRadio = document.querySelector('#scientific')

const angleUnits = document.querySelector('.angle-units')
const scientificButtons = document.querySelector('.scientific')

simpleCalcRadio.addEventListener('click', ()=> {
    angleUnits.classList.add('displayNone')
    scientificButtons.classList.add('displayNone')
})

scientificCalcRadio.addEventListener('click', ()=> {
    angleUnits.classList.remove('displayNone')
    scientificButtons.classList.remove('displayNone')
})