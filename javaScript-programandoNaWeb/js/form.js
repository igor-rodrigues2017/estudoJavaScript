var botaoAdicionar = document.querySelector("#adicionar-bovino");
botaoAdicionar.addEventListener("click", function (event) /*function recebe como parâmetro o event */ { 
    event.preventDefault(); //previne comportamento padrão
    
    var form = document.querySelector("#form-adiciona");
    
    var bovino = montaBovino(form);
    
    if(!validaPeso(bovino.peso)){
        alert("dados com erro");
        return;
    }
    var bovinoTr = montaTr(bovino);
    var tabela = document.querySelector("#corpo-tabela");
    tabela.appendChild(bovinoTr);
    form.reset();

});

function montaBovino(form){
    var bovino = {
        id: form.id.value,
        sexo: form.sexo.value,
        nascimento: form.nascimento.value,
        peso: form.peso.value,
        pesoEmArrobas: calculaPesoEmArrobas(form.peso.value)
    }
    return bovino;
}

function montaTr(bovino){
    var bovinoTr = document.createElement("tr");
    bovinoTr.classList.add("bovino");
    
    var idTd = montarTd(bovino.id, "id");
    var sexoTd = montarTd(bovino.sexo, "sexo");
    var nascimentoTd = montarTd(bovino.nascimento, "nascimento");
    var pesoTd = montarTd(bovino.peso, "peso-kg" );
    var pesoArrobaTd = montarTd(bovino.pesoEmArrobas, "peso-arroba");
    var valorTd = montarTd(0, "valor");

    bovinoTr.appendChild(idTd);
    bovinoTr.appendChild(sexoTd);
    bovinoTr.appendChild(nascimentoTd);
    bovinoTr.appendChild(pesoTd);
    bovinoTr.appendChild(pesoArrobaTd);
    bovinoTr.appendChild(valorTd);

    return bovinoTr;
}

function montarTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
