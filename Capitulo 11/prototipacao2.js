var lista = ["verde","amarelo","branco","azul"];

/* procedural */
console.log("---Procedural-----------------------------------------");

function capitaliza(lista){
    var resultado = new Array();
    for (var i = 0; i < lista.length; i++) {
        var primeiro = lista[i].slice(0,1);
        var demais = lista[i].substr(1);
        resultado.push(primeiro.toUpperCase() + demais );
    }
    return resultado;
}

console.log(lista);
console.log(capitaliza(lista));


/* com prototipacao */
console.log("--Com prototipacao------------------------------------");
Array.prototype.capitaliza = function(){
    var resultado = new Array();
    for (var i = 0; i < this.length; i++) {
        var primeiro = this[i].slice(0,1);
        var demais = this[i].substr(1);
        resultado.push(primeiro.toUpperCase() + demais );
    }
    return resultado;
}

console.log(lista);
console.log(lista.capitaliza());
