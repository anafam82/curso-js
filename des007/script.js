var cotacao = window.prompt("Antes de mais nada. Quanto está a cotação do dólar agora?")
var cot = Number(cotacao)

function converter (){
    var carteira = window.prompt("Quanto você tem na carteira?")
    var cart = Number(carteira)
    var res = window.document.getElementById('resultado')
    res.innerHTML = `<p> Com R$ ${cart} na carteira, e com a cotação do dólar a ${cot} reais, você vai conseguir comprar US$ ${cart/cot}.`
}