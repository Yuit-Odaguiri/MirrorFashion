var $input_quantidade = document.querySelector("#qtd");
var $output_total = document.querySelector("#total");

$input_quantidade.oninput = function(){ //oninput é para quando um elemento input tem seu valor modificado. 
    var preco = document.querySelector("#preco").textContent; //selecionar o texto da tag "#preco". 
    preco = preco.replace("R$ ", ""); //substituir 'R$' por um 'espaço em branco'. 
    preco = preco.replace(",", ".");//substituir ',' por um '.' . 
    preco = parseFloat(preco); //converter texto em número com casa decimal.
    

    var quantidade = $input_quantidade.value; //selecionar o valor da tag "$input_quantidade"
    var total = quantidade * preco; 
    total = "R$ " + total.toFixed(2); //tofixed(2) limita a duas casa decimais. 
    total = total.replace(".", ",");//substituir '.' por um ',' . 
    $output_total.value = total; 
}