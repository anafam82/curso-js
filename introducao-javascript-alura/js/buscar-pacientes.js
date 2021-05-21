var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes..");

    var xhr = new XMLHttpRequest(); /*vai requisitar os dados da api*/

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); /*open abre a conexao e o get é o que eu quero fazer*/

    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");
       
        if(xhr.status == 200){  /* status 200 diz q deu certo, 404 é erro*/
            erroAjax.classList.add("invivsivel");
            var resposta = xhr.responseText; /*escuta resposta*/
            var pacientes = JSON.parse(resposta); /*transformou o dado q veio como string em um array*/
            
            pacientes.forEach(function(paciente){
                 adicionaPacienteNaTabela(paciente); 
            });  
        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        } 
        
    });
    
    xhr.send();
});

