import insertHtml from './template.js';
import * as cep from './searchCep.js'
import * as validate from './validate.js'

$('#advanced').on('click', function (e) {
    e.preventDefault();
    if (validate.validatePersonalInformation()) {
        $('#adress-tab').tab('show');
    }
})

$('#return').on('click', function (e) {
    $('#dice-tab').tab('show');
})

$('#next').on('click', function (e) {
    e.preventDefault();
    if (validate.validatePersonalInformation() && validate.validateAdress()) {
        insertHtml();
        $('#finish-tab').tab('show');
    }
})
const btnSearchCep = document.querySelector('#searchBtn');
btnSearchCep.addEventListener('click', () => {
    cep.searchCep();
})


