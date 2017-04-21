/*
Com JQuery
----------------------------------------------------*/
$(function(){
	$(".quantity").change( function(){
		writeTotal(calculateTotalProducts())
	})
})

function readTotal(){
	var total = $("#total").text();
	return moneyTextToFloat(total);
}

function writeTotal(value){
	var total = floatToMoneyText(value);
	$("#total").text(total);
}

function calculateTotalProducts(){
	var produtos = $(".produto") ;
	var totalProdutos = 0;

	/* For Iteracao
	*/
	produtos.each(function(pos,produto){
		var produto 	= $(produto);
		var quantidade 	= moneyTextToFloat(produto.find(".quantity").val() );
		var preco 		= moneyTextToFloat(produto.find(".price").text() );
		totalProdutos += (preco*quantidade);
	});
	/* For Tradicional

	for (var i=0; i<produtos.length;i++) {
		var produto 	= $(produtos[0]);
		var quantidade 	= moneyTextToFloat(produto.find(".quantity").val() );
		var preco 		= moneyTextToFloat(produto.find(".price").text() );
		totalProdutos += (preco*quantidade);
	}
	*/

	return totalProdutos;

}


/*
Sem JQuery
----------------------------------------------------*/

function moneyTextToFloat(text){
  var cleanText = text.replace("R$ ","").replace(",",".");
  return parseFloat(cleanText);
}

function floatToMoneyText(value){
	var text = (value < 1 ? "0" : "")+ Math.floor(value*100);
	text = "R$ "+text;
	return text.substr(0,text.length-2)+","+text.substr(-2);
}
