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
            return validateCity(myData) && validateAdress(myData) && validateDistrict(myData) && validateState(myData);
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

function validateAdress(adress) {
    if (adress.logradouro !== '') {
        const adressInput = document.getElementById('adress');
        adressInput.value = adress.logradouro;
        adressInput.disabled = true;
        return true
    }
    return false
}

function validateDistrict(district) {
    if (district.bairro !== '') {
        const districtInput = document.getElementById('district');
        districtInput.value = district.bairro;
        districtInput.disabled = true;
        return true
    }
    return false
}

export function validateState(state) {
    if (state.uf !== '') {
        const stateInput = document.getElementById('state');
        stateInput.value = state.uf;
        return true
    }
    return false
}