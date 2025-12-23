function laCajaDePandora(numero){
    
    if (numero % 2 === 0) {
    
        return numero.toString(2);
    } else {
       
        return numero.toString(16);
    }
}

function lailaMolina() {
    return {
        nombre: "Laila Molina",
        edad: 32,
        nacionalidad: "Argentina"
    };
}
