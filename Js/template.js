import { calculateDays, dateFormatter } from "./date.js";

export function insertHtml() {
    const div = document.querySelector('#end');
    const name = document.querySelector('#name').value;
    const date = dateFormatter();
    const cpf = document.querySelector('#cpf').value;
    const adress = document.getElementById('adress').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const complement = document.querySelector('#addressComplement').value;
    const addressNumber = document.querySelector('#addressNumber').value;
    const message = calculateDays();
    console.log(state);
    let messageAdress;

    if(complement === '' && city !=='' && state !=='') 
        messageAdress = `<p>${adress} , Cidade: ${city} ,  Uf: ${state} , nº: ${addressNumber} </p>`
    else if(complement !== ''  && city !== '' && state !== '')
        messageAdress = `<p> ${adress} , Cidade: ${city} , Uf: ${state} ,  nº: ${addressNumber} ,  Complemento:${complement} </p>`
    else if(complement !== ''  && city !== '')
        messageAdress = `<p> ${adress} , ${city} ,  ${addressNumber} ,  ${complement} </p>`
    else if(complement === ''  && city !== '')
        messageAdress = `<p> ${adress} , ${city} ,  ${addressNumber} </p>`

    
        let finish = `
        <p>Nome: ${(name.toUpperCase())} </p><br>
        <p>CPF: ${cpf} </p><br>
        <p>Data de Nascimento:  ${date} </p>
        <br>
        ${messageAdress}
        <br>
        <p>${ message }  </p>
        `
        div.innerHTML = finish;
        return;
}

export function toggleActiveClass(el, status) {
    if (status) {
        el.classList.add('sucess');
        el.classList.remove('error');
        return 0;
    }
    el.classList.remove('sucess');
    el.classList.add('error');
    return 1;
}