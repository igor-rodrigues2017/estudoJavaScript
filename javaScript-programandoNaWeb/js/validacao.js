function validaBovino(bovino){
    var erros = [];
    if(!validaPeso(bovino.peso)){
        erros.push("Peso inválido!");
    }

    if(bovino.id.length == 0){
        erros.push("Id inválido")
    }

    if(bovino.nascimento.length == 0){
        erros.push("Nascimento inválido")
    }
    return erros;
}

function validaPeso(pesoBovino){
    if(pesoBovino <= 0 || pesoBovino >= 3000){
        return false;
    } else{
        return true;
    } 
}