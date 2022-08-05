import * as e from './template.js';
import * as data from './data.js'
import * as validate from './validate.js'

const btnA = document.querySelector('#advanced')
btnA.addEventListener('click', (event) => {

    event.preventDefault();
    if(validate.validateForm1())
    {
        e.validateForm();
    }
    
})

const btnB = document.querySelector('#return')
btnB.addEventListener('click', () => {
    e.validateReturn();
})

const btnC = document.querySelector('#searchBtn');
btnC.addEventListener('click', () => {
    data.searchCep();
})

const btnD = document.querySelector('#next');
btnD.addEventListener('click', (event) => {
    event.preventDefault();
    if(validate.validateAdress())
    {
        e.validateFinish();
    }  
})

const btnE = document.querySelector('#edit')
btnE.addEventListener('click', () => {
    e.validadeteEdit();
})
