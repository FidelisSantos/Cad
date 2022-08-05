export function searchCep(){
        const search = document.getElementById('search');
        const searchQuery = search.value;
    $.ajax({
        type: 'GET',
        url: `https://viacep.com.br/ws/${searchQuery}/json/`,
        datatype: "json",
        success: function(result)
        {
            let myData = result;
            validateState(myData);
            return validateCity(myData) && validateAdress(myData) && validateDisctrict(myData) && validateState(myData);
        },
        erro: function()
        {
            alert('Não foi Possível Encontrar o Cep');
        }
    });    
}

function validateCity(result){
    if(result.localidade !== '')
    {
        const cityInp = document.getElementById('city');
        cityInp.value = result.localidade;
        cityInp.disabled = true;
        return true
    } 
        return false
}
function validateAdress(result){
    if(result.logradouro !== '')
    {
        const adressInp = document.getElementById('adress');
        adressInp.value = result.logradouro;
        adressInp.disabled = true;
        return true
    } 
        return false
}

function validateDisctrict(result){
    if(result.bairro !== '')
    {
        const districtInp = document.getElementById('district');
        districtInp.value = result.bairro;
        districtInp.disabled = true;
        return true
    } 
        return false
}



export function validateState(result){
    if(result.uf !== '')
    {
        const stateInp = document.getElementById('state');
        stateInp.value = result.uf;
        return true
    } 
        return false
}