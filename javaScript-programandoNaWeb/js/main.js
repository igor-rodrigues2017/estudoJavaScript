//Alterando conteúdo utilizando querySelector: Seleciona o primeiro elemento com aquele id, class ou tag
var titulo = document.querySelector(".titulo-principal");
titulo.textContent = "Lista de Cadastro (Treino JS) - Titulo alterado com JS";

//Buscando dados do bovino: querySelectorAll: seleciona todos e retorna um array
var bovinos = document.querySelectorAll(".bovino");
bovinos.forEach(bovino => {
    var pesoKg = bovino.querySelector(".peso-kg").textContent;
    var tagPesoEmArrobas = bovino.querySelector(".peso-arroba");
    if(pesoKg <= 0 || pesoKg >= 1500) {
        tagPesoEmArrobas.textContent = "Peso é inválido!";
        // adicona uma classe classList.add
        bovino.classList.add("invalido");
    }else{
        tagPesoEmArrobas.textContent = (pesoKg / 30).toFixed(2);
    }
});

// Escitando eventos
var botaoCalcular = document.querySelector("#botao-calcular");
botaoCalcular.addEventListener("click", function(event){
    var formValorArroba = document.querySelector("#form-valorArroba");
    var valorArroba = formValorArroba.valorArroba.value;
    bovinos.forEach(bovino =>{
        var pesoEmArrobas = bovino.querySelector(".peso-arroba").textContent;
        var valorBovino = bovino.querySelector(".valor");
        valorBovino.textContent = valorArroba * pesoEmArrobas;
    })
});

var botaoAdicionar = document.querySelector("#adicionar-bovino");
botaoAdicionar.addEventListener("click", function (event) /*function recebe como parâmetro o event */ { 
    event.preventDefault(); //previne comportamento padrão

    var form = document.querySelector("#form-adiciona");
    var id = form.id.value;
    var sexo = form.sexo.value;
    var nascimento = form.nascimento.value;
    var peso = form.peso.value;

    var bovinoTr = document.createElement("tr");
    var idTd = document.createElement("td");
    var sexoTd = document.createElement("td");
    var nascimentoTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var pesoArrobaTd = document.createElement("td");
    var valorTd = document.createElement("td");

    idTd.textContent = id;
    sexoTd.textContent = sexo;
    nascimentoTd.textContent = nascimento;
    pesoTd.textContent = peso;
    console.log(bovinoTr);

    bovinoTr.appendChild(idTd);
    bovinoTr.appendChild(sexoTd);
    bovinoTr.appendChild(nascimentoTd);
    bovinoTr.appendChild(pesoTd);
    bovinoTr.appendChild(pesoArrobaTd);
    bovinoTr.appendChild(valorTd);

    var tabela = document.querySelector("#corpo-tabela");
    tabela.appendChild(bovinoTr);
    return null; 

});

//Pegando dados do form
