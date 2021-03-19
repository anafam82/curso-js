

function calcular(){
    var nome = window.prompt("Qual o nome do aluno?")
    var prNota = Number.parseFloat(window.prompt(`Qual a primeira nota de ${nome}?`))
    var segNota = Number.parseFloat(window.prompt(`Qual a segunda nota de ${nome}?`))

    var media = (prNota + segNota)/2

    if(media < 3.0){
        resultado.innerHTML = (`<p><h2>Analisando a situação de ${nome}</h2></p>
        <p> Com as notas ${prNota} e ${segNota}, a <strong>média é ${media}</strong></p>
        <p>Com a média abaixo de 3,0 o aluno está <strong><mark id="rep">REPROVADO</mark></strong></p>`)
    } else if (media <= 6.0 && media >=3.0){
        resultado.innerHTML = (`<p><h2>Analisando a situação de ${nome}</h2></p>
        <p>Com as notas ${prNota} e ${segNota}, a <strong>média é ${media}</strong></p>
        <p>Com a média entre 3,0 a 6,0, o aluno está em <strong id="rec">RECUPERAÇÃO</strong></p>`)
    } else {
        resultado.innerHTML = (`<p><h2>Analisando a situação de ${nome}</h2></p>
        <p>Com as notas ${prNota} e ${segNota}, a <strong>médoa é ${media}</strong></p>
        <p>Com a média acima de 6,0, o aluno está <strong><mark id="aprov">APROVADO</mark></strong></p>`)
    }
}