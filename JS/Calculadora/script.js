function operacoesElementais() {
    var mylist = document.getElementById("myList");
    var resultado = document.getElementById("operacao").value = mylist.options[mylist.selectedIndex].text;
    return resultado;
}

function cacular(){

    var primeiraVariavel = document.querySelector("#primeiraVariavel")
    var opcion1 = primeiraVariavel.value;
    var primeiraVariavel = parseInt(opcion1);

    var segundaVariavel = document.querySelector("#segundaVariavel")
    var opcion2 = segundaVariavel.value;
    var segundaVariavel = parseInt(opcion2)

    var operacao = document.querySelector("#operacao")
    var recuperandoOperacao = operacao.value;

    var resultado = document.getElementById("resultado")

    if(recuperandoOperacao == "Adição"){
        resultado.innerText = primeiraVariavel + segundaVariavel;
    }
    if(recuperandoOperacao == "Substração"){
        resultado.innerText = primeiraVariavel - segundaVariavel;
    }
    if(recuperandoOperacao == "Multiplicação"){
        resultado.innerText = primeiraVariavel * segundaVariavel;
    }
    if(recuperandoOperacao == "Divisão"){
        if(segundaVariavel == 0){
            resultado.innerText = "Imposible divisão entre 0"
        }else{
            resultado.innerText = (primeiraVariavel / segundaVariavel).toFixed(2);
        }
        
    }
    
}
