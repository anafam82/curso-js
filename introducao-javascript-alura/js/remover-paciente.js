var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();

    }, 500);

}); /* this. pega la de pacientes q esta fora dessa funcao..pega a que o evento ta atrelado,que é paciente. add .. entao qdd der duplo (db) clique ele some)
        target mostra quem foi clicado, o alvo
        parentNode - é o pai do target, apenas dele 
        
        .remove() faz sumir algo*/

