
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); /* ele previne o comportamento padrao, q seria apagar o q escrevi pra enviar para algum lugar*/

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
      exibeMensagensDeErro(erros);
      return;
    }
        
    /* coloca o tr q acabou de criar dentro da tabela q ja exitia no html*/    

  adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});


function adicionaPacienteNaTabela(paciente){

  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);


}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";/*LIMPA A MENSAGEM DE ERRO ANTERIOR*/

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){

  /*cria elementos no html*/
  var pacienteTr = document.createElement("tr"); /*criando um tr*/
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){

  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  
  return td;

}

function validaPaciente(paciente){

  var erros = []; /* faço arry para q possa informar os 2 erros, senao ele so aparece um tipo de erro*/

  if(paciente.nome.length == 0){
    erros.push("O nome nao pode ser em branco");
  }

  if(!validaPeso(paciente.peso)){
    erros.push("Peso inválido");
  }

  if(!validaAltura(paciente.altura)){
    erros.push("Altura inválida");
  }

  if(paciente.gordura.length == 0){
    erros.push("A gordura nao pode ser em branco");
  }

  if(paciente.peso.length == 0){
    erros.push("O peso nao pode ser em branco");
  }

  if(paciente.altura.length ==0){
    erros.push("A altura nao pode ser em branco");
  }
  return erros;

}

