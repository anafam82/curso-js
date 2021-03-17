

function calcular (){

    var a = Number.parseInt(window.prompt("Qual o valor de a?"))
    var b = Number.parseInt(window.prompt("Qual o valor de b?"))
    var c = Number.parseInt(window.prompt("Qual o valor de c?"))

    var total = (b*b) - (4*a*c)

    resultado.innerHTML = (`<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>
    <p>O cálculo realizado será <strong>&#8710 = ${b}<sup>2</sup> - 4. ${a}. ${c}</strong></p>
    <p>O valor calcula foi <strong><mark>&#8710 = ${total}</mark></strong></p>`)
}