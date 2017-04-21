/*
    Todos os destes foram utilizando o site jsfiddle
    https://jsfiddle.net/

    Para testar o json (objeto ) pode-se utilizar o site
    http://www.jsoneditoronline.org/ 
*/

var servico = "https://api.postmon.com.br/v1/cep/";
//var cep = "04101-300"; // cep existente
var cep = "12345-678";
function onCepDone(data){
	console.log(" A casa do codigo fica na ", data.logradouro);
}

function onCepError(error){
	console.log("Erro ",error.statusText);
}

$.getJSON(servico + cep)
	.done(onCepDone)
    .fail(onCepError);



/* exemplo com done e fail.
var servico = "https://livro-capitulo07.herokuapp.com/error";
var parametros = {nome : "Caro Leitor"};

var xhr = $.get(servico,parametros);

xhr.done(function(data){
	alert(data);
});

xhr.fail(function(data){
	alert('Fail '+data.responseText);
});
*/



/* exemplo sem done
$.get(servico,function(data){
	alert(data);
});

$.get(servico,parametros,function(data){
	alert(data);
});
*/
