function calcularMediaAritmetica(lista){
    // let sumarLista = 0;
    // for (let i = 0; i<lista1.length; i++){
    //     sumarLista = sumarLista + lista[i];
    // }
    const sumarLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumarLista / lista.length;
    return promedioLista;

}

const lista1 = [
    100,
    200,
    500,
  
    4000000
];

const mitadLista1 = parseInt(lista1.length /2);

function esPar(numerito){
    if(numerito % 2 ===0){
        return true;
    }
    else{
        return false;
    }

}
let mediana;

if(esPar(lista1.length) ){ //lista1 es para?
    const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2]);
    mediana = promedioElemento1y2;
// nesitamos dos elementos 
// el promedio 
// mediana
}
else {
    mediana = lista1[mitadLista1];
    //posicion mitadLista1 dentro de lista1
    // es la mediana 
}