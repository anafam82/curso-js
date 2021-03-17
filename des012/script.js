


function verificar (){
    
    var precoAnt = Number.parseFloat(window.prompt("Qual era o preço anterior do produto?"))
    var precoAtual = Number.parseFloat(window.prompt("Qual é o preço atual do produto?"))
    var dif = Math.abs(precoAtual - precoAnt)

    var perc = (dif/precoAnt)*100
    var percfin = perc.toFixed(2)
    
    if (precoAtual > precoAnt){
        res.innerHTML = `<p>O produto custava R$ ${precoAnt} e agora custa R$ ${precoAtual}.</p>
        <p>Hoje o produto está mais caro.</p>
        <p>O preço subiu R$ ${dif} em relação ao preço anterior.</p>
        <p>Uma variação de ${percfin}% para cima.</p>`
    } else {
        res.innerHTML = `<p>O produto custava R$ ${precoAnt} e agora custa R$ ${precoAtual}.</p>
        <p>Hoje o produto está mais barato.</p>
        <p>O preço caiu R$ ${dif} em relação ao preço anterior.</p>
        <p>Uma variação de ${percfin}% para baixo.</p>`
    }
}