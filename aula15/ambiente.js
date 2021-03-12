var num = [5,8,2,9,3]
num.push(1) // vai acrescentar 1 no ultimo arrauy
num.sort() // vai colocar em ordem
console.log(num)
console.log(`O vetor NUM tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(var pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

var valores = [5,3,7,4,8]
console.log(`O vetor VALORES tem ${valores.length} posições`) 
valores.sort()
console.log(valores)

for(var indice in valores){
    console.log(`A posição ${indice} tem o valor ${valores[indice]}`)
}

var posicao = valores.indexOf(7)
console.log(`O valor 7 está na posição ${posicao}`)