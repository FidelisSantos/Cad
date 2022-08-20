export function validatePersonalInformation() {
    const name = document.querySelector('#name');
    const date = document.querySelector('#date');
    const cpf = document.querySelector('#cpf');
    const regex = /[0-9]/;
    if (name.value !== '' && date.value !== '' && cpf.value.length === 11 && cpf.value !== '00000000000' && !regex.test(name.value) && validateAge()) {
        name.classList.add('sucess');
        date.classList.add('sucess');
        cpf.classList.add('sucess');
        return true
    }
    validateAge()
    if (name.value === '' || regex.test(name.value)) {
        name.classList.remove('sucess');
        name.classList.add('error');
    }
    if (name.value !== '' && !regex.test(name.value)) {
        name.classList.remove('error');
        name.classList.add('sucess');
    }
    if (cpf.value.length !== 11 || cpf.value === '00000000000') {
        console.log('erro')
        cpf.classList.remove('sucess');
        cpf.classList.add('error');
    }
    if (cpf.value.length === 11 && cpf.value !== '00000000000') {
        console.log('entrei')
        cpf.classList.remove('error');
        cpf.classList.add('sucess');
    }

    return false
}

export function validateAdress() {
    const cep = document.querySelector('#search');
    const adress = document.querySelector('#adress');
    const district = document.querySelector('#district');
    const addressNumber = document.querySelector('#addressNumber');
    const city = document.querySelector('#city');
    if (cep.value !== '' && adress.value !== '' && district.value !== '' && addressNumber.value !== '' && addressNumber.value > 0 && city.value !== '') {
        city.classList.add('sucess');
        cep.classList.add('sucess');
        adress.classList.add('sucess');
        district.classList.add('sucess');
        addressNumber.classList.add('sucess');
        return true
    }
    if (cep.value === '') {
        cep.classList.remove('sucess');
        cep.classList.add('error');
    }
    if (cep.value !== '') {
        cep.classList.remove('error');
        cep.classList.add('sucess');
    }
    if (adress.value === '') {
        adress.classList.remove('sucess');
        adress.classList.add('error');
    }
    if (adress.value !== '') {
        adress.classList.remove('error');
        adress.classList.add('sucess');
    }
    if (district.value === '') {
        district.classList.remove('sucess');
        district.classList.add('error');
    }
    if (district.value !== '') {
        district.classList.remove('error');
        district.classList.add('sucess');
    }
    if (addressNumber.value !== '' && addressNumber.value > 0) {
        addressNumber.classList.remove('error');
        addressNumber.classList.add('sucess');
    }
    if (addressNumber.value === '' || addressNumber.value <= 0) {
        addressNumber.classList.remove('sucess');
        addressNumber.classList.add('error');
    }
    if (city.value === '') {
        city.classList.remove('sucess');
        city.classList.add('error');
    }
    if (city.value !== '') {
        city.classList.remove('error');
        city.classList.add('sucess');
    }
    return false
}

function validateAge() {
    const date = document.querySelector('#date');
    let today = new Date();
    let bday = new Date(date.value);
    let age = today.getFullYear() - bday.getFullYear();
    let month = today.getMonth() - bday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() <= bday.getDate())) {
        age--;
    }
    if (age >= 0) {
        date.classList.remove('error');
        date.classList.add('sucess');
        return true
    }
    date.classList.remove('sucess');
    date.classList.add('error');
    return false
}