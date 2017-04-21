Object.prototype.includes = function(construtor){
    var objeto = new construtor();

    for(var propriedade in objeto){
        if(objeto.hasOwnProperty(propriedade)){
            this.prototype[propriedade] = objeto[propriedade]
        }
    }
};


function Animal(){
    this.comer = function(){
        console.log("Eu como");
    }
    this.respirar = function(){
        console.log("Eu respiro");
    }
}

function Nadador(){
    this.nadar = function(){
        console.log("Eu nado.");
    }
}

function Peixe(){
    this.respirar = function(){
        console.log("Eu respiro embaixo d'água");
    };
}
Peixe.prototype = new Animal();
Peixe.includes(Nadador);

function Mamifero(){
    this.mamar = function(){
        console.log("Eu mamo");
    }
}
Mamifero.prototype = new Animal();

function Gato(){
    this.miar = function(){
        console.log("Miau!");
    }
}
Gato.prototype = new Mamifero();

function Cachorro(){
    this.latir = function(){
        console.log("Au Au!");
    }
    this.comer = function(){
        console.log("Eu como ração");
    }

}
Cachorro.prototype = new Mamifero();


var animal = new Animal();
console.log("---------Animal");
animal.comer();
animal.respirar();

var peixe = new Peixe();
console.log("---------peixe");
peixe.comer();
peixe.respirar();
peixe.nadar();


var mamifero = new Mamifero();
console.log("---------Mamifero");
mamifero.comer();
mamifero.respirar();
mamifero.mamar();


var gato = new Gato();
console.log("---------Gato");
gato.comer();
gato.respirar();
gato.mamar();
gato.miar();

var cachorro = new Cachorro();
console.log("---------Cachorro");
cachorro.comer();
cachorro.respirar();
cachorro.mamar();
cachorro.latir();
