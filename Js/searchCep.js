export function searchCep() {
    const search = document.getElementById('search');
    const searchQuery = search.value;
    $.ajax({
        type: 'GET',
        url: `https://viacep.com.br/ws/${searchQuery}/json/`,
        datatype: "json",
        success: function (result) {
            let myData = result;
            validateState(myData);
            return validateCity(myData) && validateAdress(myData) && validateDisctrict(myData) && validateState(myData);
        },
        erro: function () {
            alert('Não foi Possível Encontrar o Cep');
        }
    });
}

function validateCity(result) {
    if (result.localidade !== '') {
        const cityInput = document.getElementById('city');
        cityInput.value = result.localidade;
        cityInput.disabled = true;
        return true
    }
    return false
}

function validateAdress(result) {
    if (result.logradouro !== '') {
        const adressInput = document.getElementById('adress');
        adressInput.value = result.logradouro;
        adressInput.disabled = true;
        return true
    }
    return false
}

function validateDisctrict(result) {
    if (result.bairro !== '') {
        const districtInput = document.getElementById('district');
        districtInput.value = result.bairro;
        districtInput.disabled = true;
        return true
    }
    return false
}

export function validateState(result) {
    if (result.uf !== '') {
        const stateInput = document.getElementById('state');
        stateInput.value = result.uf;
        return true
    }
    return false
}