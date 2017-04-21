function funcionario(nome,cargo,salario){
    var nome = nome;
    var cargo = cargo;
    var salario = salario;

    this.descricao = function(){
        return "Nome: "+nome+" -> Cargo: "+cargo+" -> Salario "+salario;
    }
}

var paulo = new funcionario('Paulo','teste1',5000);
var pedro = new funcionario('Pedro','teste2',2500);

console.log(pedro.descricao())
console.log(paulo.descricao())
