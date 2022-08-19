import { calculateDays, dateFormatter }  from "./date.js";

export default function insertHtml() {
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

    if (complement === '') {
        let finish = `
        <p>Nome: `+ (name.toUpperCase()) + `</p><br>
        <p>CPF: `+ cpf + `</p><br>
        <p>Data de Nascimento: `+ date + `</p>
        <br>
        <p>`+ adress + `,` + city + `, ` + state + `, ` + addressNumber + ` </p>
        <br>
        <p>`+ message + ` </p>
        `
        div.innerHTML = finish;
    }
    else {
        let finish = `
        <p>Nome: `+ (name.toUpperCase()) + `</p><br>
        <p>CPF: `+ cpf + `</p><br>
        <p>Data de Nascimento: `+ date + `</p>
        <br>
        <p>`+ adress + `,` + city + `, ` + state + `, ` + addressNumber + ` , ` + complement + `</p>
        <br>
        <p>`+ message + ` </p>
        `
        div.innerHTML = finish;
    }
}
