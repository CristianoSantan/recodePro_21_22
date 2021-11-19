
var celulares = document.querySelectorAll(".celular");


console.log("Tamanho de meu array " + celulares.length);

for(var i = 0; i < celulares.length; i++){

    var celular = celulares[i]

    var precoDoCel = celular.querySelector(".info-preco");
    var preco = precoDoCel.textContent;

    var porcentajeDoCel = celular.querySelector(".info-desconto");
    var porcentaje = porcentajeDoCel.textContent;

    var total = celular.querySelector(".info-total");

    // validando o preco e o porcentaje

    var precoVal = ValidandoPreco(preco);
    var porcentajeVal = ValidandoPorcentaje(porcentaje);

    if(!precoVal){
        total.textContent = "Preco invalidao"
        celular.classList.add("dados-invalidos")
    }

    if(!porcentajeVal){
        total.textContent = "Desconto invalido"
        celular.classList.add("dados-invalidos");
    }

    if(precoVal && porcentajeVal){
        total.textContent = calcularTotal(preco, porcentaje);
    }
}


function calcularTotal(preco, porcentaje){
    var desconto = porcentaje / 100;
    var calculoTotal = (preco - ( preco * desconto)).toFixed(2);
    return calculoTotal;
}

function ValidandoPreco(preco){
    if(preco > 0 &&  preco <= 10000){
        return true;
    }else{
        return false;
    }
}
function ValidandoPorcentaje(porcentaje){
    if(porcentaje > 0 && porcentaje <= 50){
        return true;
    }else{
        return false;
    }
}

