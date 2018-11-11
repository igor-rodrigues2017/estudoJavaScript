var bovinos = buscaBovinos();


//duplo Clique remove o bovino: Remover colocando um Escutador no elemento pai:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    let elementoRemovido = event.target.parentNode; /*elemento pai do alvo*/
    elementoRemovido.classList.add("fadeOut");
    setTimeout(function () {
        elementoRemovido.remove();
    }, 500);
});