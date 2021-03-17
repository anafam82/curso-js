
function verificar (){

var ano = Number.parseInt(window.prompt("Qual é o ano que você pretende verificar?"))

if((ano % 4 == 0) || (ano % 400 == 0) && (ano % 100 !== 0)){
    res.innerHTML = `<p><h2>Analisando o ano de ${ano}...</h2></p>
    <p>O ano de ${ano} <strong><mark id="ebis">É ANO BISSEXTO</mark></strong></p>`
} else {res.innerHTML = `<p><h2>Analisando o ano de ${ano}...</h2></p>
<p>O ano de ${ano} <strong><mark id="nbis">NÃO É ANO BISSEXTO</mark></strong></p>`}
}