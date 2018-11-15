// filtrar de acordo com os dados que são imputados;

var campoFiltra = document.querySelector("#filtro-paciente");
var bovinos = document.querySelectorAll(".bovino");

campoFiltra.addEventListener("input", function () {
    bovinos.forEach(bovino => {
        let tdId = bovino.querySelector(".id");
        let bovinoId = tdId.textContent;

        let expressao = new RegExp(this.value, "i"); //expressão regular recebe como parâmetros: o valor, caseSencive

        if (this.value.length > 0) {
            if (!expressao.test(bovinoId)) {
                bovino.classList.add("hidden");
            } else {
                bovino.classList.remove("hidden");
            }
        } else {
            bovinos.forEach(bovino => {
                bovino.classList.remove("hidden");
            });
        }
    });
});