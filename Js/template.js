import {calculateDays, dateFormatter } from "./date.js";

export function validateForm(){ 
    pageView('#pag2');
}

export function validateReturn(){
    pageView('#pag1');
}

export function validateFinish(){
    pageView("#pag3");
    insertHtml();
} 
function insertHtml(){
    const div = document.querySelector('#end');
    const name = document.querySelector('#name').value;
    const date = dateFormatter();
    const cpf = document.querySelector('#cpf').value;
    const adress = document.getElementById('adress').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const message = calculateDays();
    
    let finish = `
    <p>Nome: `+(name.toUpperCase())+`</p><br>
    <p>CPF: `+cpf+`</p><br>
    <p>Data de Nascimento: `+date+`</p>
    <br>
    <p>`+adress+`,`+city+`, `+state+` </p>
    <br>
    <p>`+message+` </p>
    `
    div.innerHTML = finish;
}
export function validadeteEdit(){
    pageView('#pag2');
}
 function pageView(id)
{
    const sections = document.querySelectorAll('section');
    const el = document.querySelector(id);
    sections.forEach(( element)=>{
        element.classList.add('hidden');
    })
    el.classList.remove('hidden');
}