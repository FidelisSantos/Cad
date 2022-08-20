import { toggleActiveClass as template } from './template.js';

export function validatePersonalInformation() {
    const name = document.querySelector('#name');
    const date = document.querySelector('#date');
    const cpf = document.querySelector('#cpf');
    let today = new Date();
    let bday = new Date(date.value);
    let age = today.getFullYear() - bday.getFullYear();
    let month = today.getMonth() - bday.getMonth();
    let error = 0;
    const regex = /[0-9]/;
    const validate = {
        name: () => {
            let status = (name.value !== '' && !regex.test(name.value));
            error += template(name, status);
        },
        cpf: () => {
            let status = (cpf.value.length === 11 && cpf.value !== '00000000000');
            error += template(cpf, status);
        },
        date: () => {
            if (month < 0 || (month === 0 && today.getDate() <= bday.getDate())) {
                age--;
            }
            let status = (age >= 0);
            error += template(date, status);
        }
    }
    Object.values(validate).forEach((callback) => {
        callback();
    })
    return !error
}

export function validateAdress() {
    const cep = document.querySelector('#search');
    const adress = document.querySelector('#adress');
    const district = document.querySelector('#district');
    const addressNumber = document.querySelector('#addressNumber');
    const city = document.querySelector('#city');
    let error = 0;
    const validate = {
        cep: () => {
            let status = (cep.value !== '');
            error += template(cep, status);
        },
        adress: () => {
            let status = (adress.value !== '');
            error += template(adress, status);
        },
        district: () => {
            let status = (district.value !== '');
            error += template(district, status);
        },
        addressNumber: () => {
            let status = (addressNumber.value !== '' && addressNumber.value > 0);
            error += template(addressNumber, status);
        },
        city: () => {
            let status = (city.value !== '');
            error += template(city, status);
        }
    }
    Object.values(validate).forEach((callback) => {
        callback();
    })
    return !error
}