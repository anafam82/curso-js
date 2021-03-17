

function calcular(){
var nome = window.prompt("Qual o nome do funcionário?")
var salario = Number.parseFloat(window.prompt(`Qual o salário de ${nome}?`))
var reajuste = Number.parseFloat(window.prompt(`O salário de ${nome} será reajustado em qual porcentagem?`))
var aumento = salario * (reajuste/100)
var aum = aumento.toFixed(2)
var total = salario + aumento
var tot = total.toFixed(2)

res.innerHTML = (`<h2>${nome} recebeu um aumento salarial!</h2>
<p>O salaário atual era ${salario}.</p>
<p>Com o reajuste de ${reajuste}%, o salário vai aumentar R$ ${aum} no próximo mês.</p>
<p>E a partir daí, ${nome} vai passar a ganhar R$ ${tot}</p>`)
}