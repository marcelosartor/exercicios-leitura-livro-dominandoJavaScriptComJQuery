window.onload = onDocumentLoad;

function onDocumentLoad(){
	console.log('Entrei em onDocumentLoad' );
	var textEdits = document.getElementsByClassName('quantity');
	for (var i = 0; i < textEdits.length; i++) {
		textEdits[i].onchange = quantidadeMudou;
	}
}

function calculateTotalProducts(){
	var produtos = document.getElementsByClassName("produto") ;
	var totalProdutos = 0;
	for (var i=0; i<produtos.length;i++) {
		var precoTxt = produtos[i].getElementsByClassName('price')[0].innerHTML;
		var quantidadeTxt = produtos[i].getElementsByClassName('quantity')[0].value;
		var preco = moneyTextToFloat(precoTxt);
		var quantidade = moneyTextToFloat(quantidadeTxt);
		var subTotal = (preco*quantidade);


		totalProdutos += subTotal

	}
	return totalProdutos;
}

function moneyTextToFloat(text){
  var cleanText = text.replace("R$ ","").replace(",",".");
  return parseFloat(cleanText);
}

function floatToMoneyText(value){
	var text = (value < 1 ? "0" : "")+ Math.floor(value*100);
	text = "R$ "+text;
	return text.substr(0,text.length-2)+","+text.substr(-2);
}

function writeTotal(value){
	var total = document.getElementById("total");
	total.innerHTML = floatToMoneyText(value);
}

function readTotal(){
	return moneyTextToFloat(document.getElementById('total').innerHTML);
}

function quantidadeMudou(){
	writeTotal(calculateTotalProducts())
}
/*
function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
	var total = document.getElementById("total");
	return moneyTextToFloat(total.innerHTML);
}

function writeTotal(value) {
	var total = document.getElementById("total");
	total.innerHTML = floatToMoneyText(value);
}

function calculateTotalProducts() {
	var produtos = document.getElementsByClassName("produto");

	var totalProdutos = 0;

	for(var pos = 0; pos < produtos.length; pos++) {
		var priceElements = produtos[pos].getElementsByClassName("price");
		var priceText = priceElements[0].innerHTML;
		var price = moneyTextToFloat(priceText);

		var qtyElements = produtos[pos].getElementsByClassName("quantity");
		var qtyText = qtyElements[0].value;
		var quantity = moneyTextToFloat(qtyText);

		var subtotal = quantity * price;

		totalProdutos += subtotal;

	}

	return totalProdutos;
}

function onQuantityChange() {
	writeTotal(calculateTotalProducts());
}

function onDocumentLoad() {
	var textEdits = document.getElementsByClassName("quantity");

	for(var i = 0; i < textEdits.length; i++) {
		textEdits[i].onchange = onQuantityChange;
	}
}

window.onload = onDocumentLoad;
*/
