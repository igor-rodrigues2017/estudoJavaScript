var botaoAdicionar = document.querySelector("#adicionar-bovino");
botaoAdicionar.addEventListener("click", function (event) /*function recebe como parâmetro o event */ { 
    event.preventDefault(); //previne comportamento padrão

    var form = document.querySelector("#form-adiciona");
    
    var id = form.id.value;
    var sexo = form.sexo.value;
    var nascimento = form.nascimento.value;
    var peso = form.peso.value;
    var pesoEmArrobas = calculaPesoEmArrobas(peso);
    
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
    pesoArrobaTd.textContent = pesoEmArrobas;

    bovinoTr.appendChild(idTd);
    bovinoTr.appendChild(sexoTd);
    bovinoTr.appendChild(nascimentoTd);
    bovinoTr.appendChild(pesoTd);
    bovinoTr.appendChild(pesoArrobaTd);
    bovinoTr.appendChild(valorTd);

    var tabela = document.querySelector("#corpo-tabela");
    tabela.appendChild(bovinoTr);
});