export async function searchCep() {
    const search = document.getElementById('search');
    const searchQuery = search.value;
    await $.ajax({
        type: 'GET',
        url: `https://viacep.com.br/ws/${searchQuery}/json/`,
        datatype: "json",
        success: function (result) {
            if (result.erro || result.uf == '' || result.localidade == '') return alert('Cep Inválido'); 
            else if(result.logradouro == '' && result.bairro == '') alert('Cep único para a cidade. Por favor preencher os dados do bairro e logradouro');
            else if(result.logradouro == '') alert('Cep único para o bairro. Por favor preencher os dados do logradouro');
            validateCEP(result);
        },
        error: function () {
            alert('Não foi Possível Encontrar o Cep');
        }
    });
}
function validateCEP(result){
    const validate = {
        city: () => {
            if (result.localidade != '' && result.localidade != undefined) {
                console.log("entrei validação cidade")
                const cityInput = document.getElementById('city');
                cityInput.value = result.localidade;
                cityInput.disabled = true;
            }
        },
        adress: () => {
            if (result.logradouro != ''&& result.logradouro != undefined){
                const adressInput = document.getElementById('adress');
                adressInput.value = adress.logradouro;
                adressInput.disabled = true;
            } 
        },
        district: () => {
            if (result.bairro != '' && result.bairro != undefined) {
                const districtInput = document.getElementById('district');
                districtInput.value = district.bairro;
                districtInput.disabled = true;
            }
        },
        state: () => {
            if (result.uf != '' && result.uf != undefined) {  
                const stateInput = document.getElementById('state');
                stateInput.value = result.uf;
                return true;
            }
        }
    } 
    Object.values(validate).forEach((callback) => {
        callback();
    })
}

function validateCity(result) {
    if (result.localidade === '' || result.erro || result.localidade == undefined) {
        alert('Cep Inválido');
        return false;
    }
    console.log("entrei validação cidade")
        const cityInput = document.getElementById('city');
        cityInput.value = result.localidade;
        cityInput.disabled = true;
        return true;
}

function validateAdress(adress) {
    if (adress.logradouro === '' || adress.erro) return false;
    console.log("entrei validação Endereço")

        const adressInput = document.getElementById('adress');
        adressInput.value = adress.logradouro;
        adressInput.disabled = true;
        return true;
   
}

function validateDistrict(district) {
    if (district.bairro === '' || district.erro) return false;
    console.log("entrei validação distrito")
        const districtInput = document.getElementById('district');
        districtInput.value = district.bairro;
        districtInput.disabled = true;
        return true;
    
}

export function validateState(state) {
    if (state.uf !== '' || state.erro) return false;
    console.log("entrei validação estado")
        const stateInput = document.getElementById('state');
        stateInput.value = state.uf;
        return true;
    
}