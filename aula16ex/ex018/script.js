
var num = document.getElementById("fnum")  ///ou document.querySelector("input#fnum")
var lista = document.querySelector("select#flista")
var res = document.querySelector("div#res")
var valores = []


function isnumero(n){

    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
    valores.push(Number(num.value))
    var item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`  // texto dentro do select
    lista.appendChild(item) // aprece dentro do select
    res.innerHTML = "" //depois q aparece o texto , se acrescentar novo valor , o texto some
} else {
 window.alert("Valor inválido ou já encontrado na lista.")   
}
num.value =''
num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar")
    } else {

        var tot = valores.length //saber o tamanho do array
     

        var maior = valores[0]
        var menor = valores [0]
        var soma = 0
        var media = 0
        for(var posicao in valores){
            soma += valores[posicao]
            if (valores[posicao] > maior) 
            {maior = valores[posicao]}
            if (valores [posicao] < menor)
            {menor = valores[posicao]}

        }
        
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media} </p>`
    }
}