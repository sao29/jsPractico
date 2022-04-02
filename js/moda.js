
list = [];




function crearLista(list) {
    l = document.getElementById('list-values');
    l.innerHTML = '';

    list.forEach((element, index) => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `${index + 1}-El numero agregado es : ${element}`;

        l.appendChild(listElement);
    });
}

function btnAgregarNumeros() {
    cleanError('form');
    const element = document.getElementById('addValue');
    const value = parseInt(element.value);
    element.value = '';

    if (Number.isNaN(value) || value < 0) {
        e = document.getElementById('errorAddValue');
        e.innerHTML = 'Ingrese un valor válido para la lista de números';
        return false;
    }
    
    list.push(value);
    crearLista(list);
}

function btnDeleteNum() {
    cleanError('form');
    const element = document.getElementById('removeValue');
    let value = parseInt(element.value);
    element.value = '';

    if (Number.isNaN(value) || value <= 0) {
        e = document.getElementById('errorRemoveValue');
        e.innerHTML = 'Ingrese una posición válida de la lista de numeros';
        return false;
    }

    value -= 1;

    list.splice(value, 1);
    crearLista(list);
}

function SelecFormula () {
    const i = document.getElementById('formulaSelect').value;
    const btn = document.getElementById('btn-render');
    cleanError('form');
  
          if (i == '1'){
            btn.setAttribute('onclick', 'renderMediaAritmetica();');
            btn.innerText = 'Calcular Media Aritmetica'
          }
          else if (i == '2' ){
            btn.setAttribute('onclick', 'renderMediaArmonica();');
            btn.innerText = 'Calcular Media Armonica'
          }
          else if (i == '3' ){
            btn.setAttribute('onclick', 'renderMediaGeometrica();');
            btn.innerText = 'Calcular Media Geometrica'
          }
          else if (i == '4' ){
            btn.setAttribute('onclick', 'renderModa();');
            btn.innerText = 'Calcular Moda'
          }
          else if (i == '5' ){
            btn.setAttribute('onclick', 'renderMediana();');
            btn.innerText = 'Calcular Mediana'
          }
}

function cleanError (id) {
  const errors = document.getElementById(id).querySelectorAll('.error');
  for (e of errors) {
      e.innerHTML = '';
  }
}



function checkList() {
    if (list.length == 0) {
        e = document.getElementById('errorList');
        e.innerHTML = '<strong>Ingrese valores en la Lista.</strong>';
        return false;
    }
    return true;
}


// Promedios

function calcularMediaAritmetica(list) {
    const sumaList = list.reduce(
        (valorAcumulado, nuevoElemento) => {
            return valorAcumulado + nuevoElemento;
        }, 0
    );

    const mediaAritmetica = sumaList / list.length;
    return parseFloat(mediaAritmetica.toFixed(2))
}

function renderMediaAritmetica() {
    if (checkList(list)){
        const r = calcularMediaAritmetica(list);
 
 

     
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

        resultH2.innerHTML = 'Media Aritmetica';
        resultH4.innerHTML = `La Media Aritmetica es: <strong class="unit"> ${r}</strong>`;
    }
}

function calcularMediaGeometrica (list) {
    const multiplicacionList = list.reduce(
        (valorAcumulado, nuevoElemento) => {
            return valorAcumulado * nuevoElemento;
        }, 1
    );

    const mediaGeometrica = multiplicacionList ** (1/list.length);
    return parseFloat(mediaGeometrica.toFixed(3));
}

function renderMediaGeometrica() {
    if (checkList(list)){
        const r = calcularMediaGeometrica(list);
       
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

     
        resultH2.innerHTML = 'Media Geometrica';

        resultH4.innerHTML = `La Media Geometrica es: <strong class="unit"> ${r}</strong>`;
    }
}

function calcularMediaArmonica (list) {
    const sumaList = list.reduce(
        (valorAcumulado, nuevoElemento) => valorAcumulado + (1 / nuevoElemento), 0
    );

    console.log(sumaList);

    const mediaArmonica = list.length / sumaList;
    return parseFloat(mediaArmonica.toFixed(3));
}

function renderMediaArmonica() {
    if (checkList(list)){
        const r = calcularMediaArmonica(list);

    


       
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

      
        resultH2.innerHTML = 'Media Armonica';

        resultH4.innerHTML = `La Media Armonica es: <strong class="unit"> ${r}</strong>`;
    }
}

// Modas

function calcularModa () {
    const listaCount = {};

    list.map(
        function (e) {
            if (listaCount[e]) {
                listaCount[e] += 1;
            } else {
                listaCount[e] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1][0];
    return moda;
}

function renderModa() {
    if (checkList(list)){
        const r = calcularModa();
 
             
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

     
        resultH2.innerHTML = 'Moda';

        resultH4.innerHTML = `La Moda es: <strong class="unit"> ${r}</strong>`;
    }
}

// Mediana

function esPar(value) {
    return value % 2 === 0 ? true : false; 
}


function calcularMediana (lista) {
    // Ordenamos la lista
    const listaOrdenada = lista.sort( 
        function(a, b) {
            return a - b;
        }
    )
    
    // Ubicamos elementos y calculamos
    const mitadLista = parseInt(listaOrdenada.length / 2);

    if (esPar(listaOrdenada.length)) {
        // dos elementos
        const elemento1 = listaOrdenada[mitadLista-1];
        const elemento2 = listaOrdenada[mitadLista];

        const mediana = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana;

    } else {
        // un elemento
        const mediana = lista[mitadLista];
        return mediana;

    }
}

function renderMediana() {
    if (checkList(list)){
        r = calcularMediana(list);
   
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

   
        resultH2.innerHTML = 'Mediana';

        resultH4.innerHTML = `La Mediana es: <strong class="unit"> ${r}</strong>`;
    }
}