function funcionario(){

}
/*
function funcionario(nome,cargo,salario){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}*/


var paulo = new funcionario('Paulo','teste1',5000);
var pedro = new funcionario('Pedro','teste2',2500);

funcionario.prototype.nome = "<sem nome>";
funcionario.prototype.cargo = "<sem Cargo>";
funcionario.prototype.salario = NaN;


console.log("Pedro ",pedro.nome,' Cargo', pedro.cargo, ' Salario :',pedro.salario);
console.log("Paulo ",paulo.nome,' Cargo', paulo.cargo, ' Salario :',paulo.salario);
