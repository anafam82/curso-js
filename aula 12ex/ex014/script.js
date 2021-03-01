function carregar() {
    
var msg = window.document.getElementById('msg')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'imagem/manhatransppeq.png'
    document.body.style.background = '#c7ccc8'
} else if (hora >= 12 && hora <= 18){
    //Boa tarde
    img.src = 'imagem/tardetransppeq.png'
    document.body.style.background ='#b86d34'
} else {
    //boa noite
    img.src = 'imagem/noite transppeq.png'
    document.body.style.background = '#091e3b'
}
}