var celulares = document.querySelectorAll(".celular");
// mostramos nuestros celulares

var tabela = document.querySelector(".table");

console.log(tabela)

tabela.addEventListener("dblclick", function(event)
{
    //this.remove() --- remove a tabela

    // mostra quem sufriu o evento
    // console.log(event.target);

    // deleta a propriedade que foi clicada
    // event.target.remove();
    
    //preciso deletar ao pai - parentNode

    // 2da opcao
    // var alvoEvento = event.target;
    // console.log(alvoEvento);
    // var paiDoAlvo = alvoEvento.parentNode; // TR = celular = remover
    // paiDoAlvo.remove();

    event.target.parentNode.classList.add("efeito-desaparece"); // add uma classe para o efeito de desvanecimento

    // segura um poquinho 

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);

    
});

// 1ra funcion para eliminar

// celulares.forEach(function(celular){
    // escutar doble click

//     celular.addEventListener("dblclick", function(){
//         console.log("Voce me pusho dois vezes")
// donho do evento == celular 
//         this.remove();
//     });
// });