import insertHtml from './template.js';
import * as data from './data.js'
import * as validate from './validate.js'

$('#advanced').on('click', function (e) 
{
    e.preventDefault();
    if(validate.validateForm1())
    {
        $('#adress-tab').tab('show');
    }
})

$('#return').on('click', function (e) 
{
    $('#dice-tab').tab('show');
})

$('#next').on('click', function (e) 
{
    e.preventDefault();
    if(validate.validateForm1() && validate.validateAdress())
    {
        insertHtml();
        $('#finish-tab').tab('show');
    }
})
const btnC = document.querySelector('#searchBtn');
btnC.addEventListener('click', () => {
    data.searchCep();
})


