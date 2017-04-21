console.log("Sem curring------------------");

function hey(text,nome){
    console.log(text, "," ,nome);
}

hey("Bom dia","Marcelo");
hey("Bom dia","Joao");


console.log("Com curring------------------");
function ola(text){
    return function(nome){
        console.log(text, "," ,nome);
    }
}

var bomDia = ola("Bom dia");

bomDia("Marcelo");
bomDia("Joao");
