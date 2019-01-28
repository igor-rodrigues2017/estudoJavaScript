const botaoBuscarDados = document.querySelector("#buscar-dados");

//   buscando pacientes requesição para uma api AJAX
botaoBuscarDados.addEventListener("click", function () {
    console.log("carregando...");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            let pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(paciente => {
                adionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log("Não encontrei nada...")
        }
    });
    xhr.send();
});