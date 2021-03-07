function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if(fano.value.length == 0 || fano.value > ano){
       window.alert(`[ERRO] Verifique os dados e tente novamente!`)
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       //res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = "Homem"
        if(idade >=0 && idade < 10){
           img.setAttribute('src', 'imagem/menino.png')
        } else if (idade < 21){
            img.setAttribute('src', 'iamgem/rapaz.png')
        } else if ( idade <60) {
            img.setAttribute('src', 'imagem/rapaz.png')
        } else {
            img.setAttribute('src', 'imagem/idoso.png')
        }
        

    } else if (fsex[1].checked){
        genero = "Mulher"
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'imagem/menina.png')
        } else if (idade < 21){
            img.setAttribute('src', 'imagem/moça.png')
        } else if ( idade <60) {
            img.setAttribute('src', 'imagem/adulta.png')
        } else {
            img.setAttribute('src', 'imagem/idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
   }
}