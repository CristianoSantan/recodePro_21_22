// quiero detectar os dados de meus dados

var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function(){
    // console.log("Dig. agora");
    // console.log(campoFiltro.value);
    console.log(this.value);

    var celulares = document.querySelectorAll(".celular");
    // criar o if para o campo input
    if(this.value.length > 0){
        console.log("Value completo")

        //primeiro criar o for
        for(var i = 0; i < celulares.length; i++){
            var celular = celulares[i];
            var tdNome = celular.querySelector(".info-nome");
            var nome = tdNome.textContent;  

            // exprecao regular:
            // 1 a palabra = this.value
            // 2 ignora maisculas e minusculas = "i"

            var palavraClave = new RegExp(this.value, "i"); 

            if(!palavraClave.test(nome)){  
                //criar a classe invisivel no CSS   
                celular.classList.add("invisivel");
            }else{
                console.log(nome);
                celular.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i < celulares.length; i++){
            var celular = celulares[i];
            celular.classList.remove("invisivel");
        }
    }

});