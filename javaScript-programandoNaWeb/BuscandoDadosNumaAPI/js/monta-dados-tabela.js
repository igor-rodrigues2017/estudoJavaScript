function montarTd(dado){
    let td = document.createElement("td");
    td.textContent = dado;
    return td;
}

function montaTr(paciente) {
    let tr = document.createElement("tr");

    let nomeTd = montarTd(paciente.nome);
    let pesoTd = montarTd(paciente.peso);
    let alturaTd = montarTd(paciente.altura);
    let gorduraTd = montarTd(paciente.gordura);
    let imcTd = montarTd(paciente.imc);

    tr.appendChild(nomeTd);
    tr.appendChild(pesoTd);
    tr.appendChild(alturaTd);
    tr.appendChild(gorduraTd);
    tr.appendChild(imcTd);

    return tr;
}

function adionaPacienteNaTabela(paciente) {
    let tabela = document.querySelector("#corpo-tabela");
    let trPaciente = montaTr(paciente);
    tabela.appendChild(trPaciente);
}