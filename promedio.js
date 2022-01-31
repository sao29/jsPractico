const lista1 =[
    100,
    200,
    300,
    500
];

// let sumarLista1 = 0;
// for (let i = 0; i<lista1.length; i++){
//     sumarLista1 = sumarLista1 + lista1[i];
// }

// const promedioLista1 = sumarLista1 / lista1.length;



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