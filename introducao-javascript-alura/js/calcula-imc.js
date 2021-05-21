
	var titulo = (document.querySelector('.container'));
	titulo.textContent = "Aparecida Nutricionista";
	
    
    var pacientes = document.querySelectorAll(".paciente");
   
   
   for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if(!pesoValido){
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "PESO INVÁLIDO";
        paciente.style.backgroundColor = "red"; /* outra forma de alterar  o css, mas é mais manual e nao é o jeito melhor de fazer...melhor fazer abaixo*/ 
    }

    if(!alturaValida){
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "ALTURA INVÁLIDA";
        paciente.classList.add("paciente-invalido"); /* adicionou ao css essa classe e manipula pelo csss*/
    }

   if(alturaValida && pesoValido){

        var imc = calculaImc(peso, altura);

        tdImc.textContent = imc;
   }
  
  }

  function validaPeso(peso){

    if(peso >= 0 && peso < 1000){
        return true;
    } else{
        return false;
    }

  }


  function validaAltura(altura){
      if(altura >= 0 && altura <= 3.0){
          return true;
      } else{
          return false;
      }
  }


  function calculaImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura*altura);

    return imc.toFixed(2); /* limita o numero de casas*/

}
