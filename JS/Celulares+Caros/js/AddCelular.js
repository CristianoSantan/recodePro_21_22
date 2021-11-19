
// botoa
var addCelular = document.querySelector("#btn-add-celular");
console.log(addCelular.textContent)


addCelular.addEventListener("click", function(event){
    // SEGURA ANTES DE USAR - PREVENIR O FORMATO PADRAO 
    event.preventDefault();
    console.log("click no botao adicionar");
    // criar o id no form ====> add-form

    var addNovoCelular = document.querySelector("#add-celular")
    console.log(addNovoCelular);
    // conseguimos pegar os dados da tavela com a ajuda do NAME e o VALUE que PEGA DATO
    console.log(addNovoCelular.nome.value)
    console.log(addNovoCelular.preco.value)

    // criamos a variavel celular para oter dados do formulario
    var celular = dadosDoformulario(addNovoCelular);

    var erros = validadorDeDado(celular);

    if(erros.length > 0){
        montandoListaErros(erros);
        return;
    }
    
    // Vamos a criara a funcao criando TR con os dados do celular
    celularTr = criandoTr(celular);

    var tabela = document.querySelector("#cel-table");

    tabela.appendChild(celularTr);

    addNovoCelular.reset();

    // reseteamos a lista de error.
    var mensagensErro = document.querySelector(".lista");
    mensagensErro.innerHTML = "";

});

function montandoListaErros(erros){
    var listaLu = document.querySelector(".lista");
    listaLu.innerHTML = ""; 
    for(var i = 0; i < erros.length; i++){
        var erroLi = montandoLi(erros[i]);
        //Vamos a votar como filho ao ErroLi
        listaLu.appendChild(erroLi)
    }

    return lista;
}

function montandoLi(dado){
    var item = document.createElement("li");
    item.textContent = dado;
    item.classList.add("lista-erros");

    return item;
}

function validadorDeDado(celular){
    var erros = [];
    if(!ValidandoPorcentaje(celular.desconto)) 
        erros.push("Error no desconto");
    if(!ValidandoPreco(celular.preco)) 
        erros.push("Error no preço");

    return erros;
}


function criandoTr(celular){

    var celularTr = document.createElement("tr");
    celularTr.classList.add("celular");

    var nomeTd = montaTd(celular.nome, "info-nome");
    var anoTd = montaTd(celular.ano, "info-ano");
    var precoTd = montaTd(celular.preco, "info-preco");
    var descontoTd = montaTd(celular.desconto, "info-desconto");

    celularTr.appendChild(nomeTd);
    celularTr.appendChild(anoTd);
    celularTr.appendChild(precoTd);
    celularTr.appendChild(descontoTd);

    celularTr.appendChild(montaTd(celular.total, "info-total"))

    return celularTr;

}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe)
    td.textContent = dado;

    return td
}

function dadosDoformulario(form){
    var celular = {
        nome : form.nome.value,
        ano : form.ano.value,
        preco : form.preco.value,
        desconto : form.desconto.value,
        total : calcularTotal(form.preco.value, form.desconto.value)
    } 
    return celular;
}

