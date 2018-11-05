//Alterando conteúdo utilizando querySelector: Seleciona o primeiro elemento com aquele id, class ou tag
var titulo = document.querySelector(".titulo-principal");
titulo.textContent = "Lista de Cadastro (Treino JS) - Titulo alterado com JS";

//calcula peso em Arrobas
function calculaPesoEmArrobas(pesoKg){
    var pesoEmArrobas = (pesoKg / 30);
    return pesoEmArrobas.toFixed(2);
}
function buscaBovinos() {
    var bovinos = document.querySelectorAll(".bovino");
    return bovinos;
}
//Buscando dados do bovino: querySelectorAll: seleciona todos e retorna um array
function trataBovinos(){
    var bovinos = buscaBovinos();
    bovinos.forEach(bovino => {
        var pesoKg = bovino.querySelector(".peso-kg").textContent;
        var tagPesoEmArrobas = bovino.querySelector(".peso-arroba");
        if(validaPeso(pesoKg)) {
            tagPesoEmArrobas.textContent = calculaPesoEmArrobas(pesoKg);
        }else{
            tagPesoEmArrobas.textContent = "Peso é inválido!";
            bovino.classList.add("invalido");
        }
    });
}

trataBovinos();

// Escutando eventos
var botaoCalcular = document.querySelector("#botao-calcular");
botaoCalcular.addEventListener("click", function(event){
    var formValorArroba = document.querySelector("#form-valorArroba");
    var valorArroba = formValorArroba.valorArroba.value;
    var bovinos = buscaBovinos();
    bovinos.forEach(bovino =>{
        var pesoEmArrobas = bovino.querySelector(".peso-arroba").textContent;
        var valorBovino = bovino.querySelector(".valor");
        valorBovino.textContent = valorArroba * pesoEmArrobas;
    })
});