var amigo = {nome:'jose', sexo:'M', peso: 85.5, 
engordar(p=0){
    console.log("Engordou") 
    this.peso += p
}}

amigo.engordar(2)
console.log(typeof amigo)
console.log(amigo)
console.log(amigo.nome)
console.log(amigo.peso)