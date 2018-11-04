function validaPeso(pesoKg){
    if(pesoKg <= 0 || pesoKg >= 1500){
        return false;
    } else{
        return true;
    }
}