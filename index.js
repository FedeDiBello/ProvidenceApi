function laCajaDePandora(numero){
    if (numero % 2 === 0) return  numero.toString(2);
    else {
        return numero.toString(16);
    }
};

function sofi() {
    return { nombre: "Sofía Bartoli",
        edad: 36,
        nacionalidad: "Argentina"
    }
};
