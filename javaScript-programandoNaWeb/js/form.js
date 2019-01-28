const botaoAdicionar = document.querySelector("#adicionar-bovino");

function adicionarBovinoNaTabela(bovino) {
    let bovinoTr = montaTr(bovino);
    let tabela = document.querySelector("#corpo-tabela");
    tabela.appendChild(bovinoTr);
}

botaoAdicionar.addEventListener("click", function (event) /*function recebe como parâmetro o event */ {
    event.preventDefault(); //previne comportamento padrão
    
    let form = document.querySelector("#form-adiciona");
    
    let bovino = montaBovino(form);
    
    let erros = validaBovino(bovino);

    if(erros.length > 0){
        exibeMensagensErros(erros);
        return;
    }
    adicionarBovinoNaTabela(bovino);
    form.reset();
    document.querySelector("#erros").classList.add("hidden");

});

function exibeMensagensErros(erros){
    let mensagens = document.querySelector("#erros");
        mensagens.innerHTML = ""; //deixa o conteúdo de texto vazio 
        mensagens.classList.remove("hidden");
        erros.forEach(erro => {
            var tagLi = document.createElement("li");
            tagLi.textContent = erro;
            tagLi.classList.add("erro");   
            mensagens.appendChild(tagLi);
        });
}

function montaBovino(form){
    let bovino = {
        id: form.id.value,
        sexo: form.sexo.value,
        nascimento: form.nascimento.value,
        peso: form.peso.value,
        pesoEmArrobas: calculaPesoEmArrobas(form.peso.value)
    }
    return bovino;
}

function montarTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function montaTr(bovino){
    let bovinoTr = document.createElement("tr");
    bovinoTr.classList.add("bovino");
    
    let idTd = montarTd(bovino.id, "id");
    let sexoTd = montarTd(bovino.sexo, "sexo");
    let nascimentoTd = montarTd(bovino.nascimento, "nascimento");
    let pesoTd = montarTd(bovino.peso, "peso-kg" );
    let pesoArrobaTd = montarTd(bovino.pesoEmArrobas, "peso-arroba");
    let valorTd = montarTd(0, "valor");

    bovinoTr.appendChild(idTd);
    bovinoTr.appendChild(sexoTd);
    bovinoTr.appendChild(nascimentoTd);
    bovinoTr.appendChild(pesoTd);
    bovinoTr.appendChild(pesoArrobaTd);
    bovinoTr.appendChild(valorTd);

    return bovinoTr;
}