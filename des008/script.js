

function calcular (){
    var produto = window.prompt("Qual o nome do produto que você está comprando?")
    var valor = window.prompt(`Qual o preço de ${produto}?`)
   var v = Number(valor)
    var desc = v * 0.10
    var d = desc.toFixed(2)
    var tot = v - desc
    var total = tot.toFixed(2)
    var res = window.document.getElementById("res")
    res.innerHTML = 
    `<p><h2>Calculando desconto de 10% para ${produto}. </h2></p>
    <p>O preço original era ${v}.</p>
    <p>Você acaba de ganhar R$ ${d} de desconto (-10%).</p>
    <p>No fim, você vai pagar R$ ${total} no produto ${produto}.</p>`
}