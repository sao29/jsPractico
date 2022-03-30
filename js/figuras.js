//codigo del cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados de cuadrado son: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado *4;
} 

//console.log("el perimetro del cuadrado es: "+ perimetroCuadrado + "cm");


function areCuadrado(lado){
    return lado * lado;
}

//console.log("el area es : "+ areCuadrado + "cm^2");
console.groupEnd();
//codigo de triangualo

console.group("triangulo");


// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("los lados del triangulo son: "+ ladoTriangulo +"cm,"+ladoTriangulo2 +"cm,"+baseTriangulo +"cm");
// const alturaTriangulo =5.5;
// console.log("la altura del trinangulo es: "+ alturaTriangulo+"cm");
function perimetroTriangulo( lado1, lado2, base){
    return lado1 + lado2 + base;
}
// const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
// console.log("el perimetro del trinagulo es: " +perimetroTriangulo + "cm");
function areaTriangulo(base, altura){
    return (base * altura )/2;

}
// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("el area del tringualo es: "+ areaTriangulo+" cm^2");
console.groupEnd();


//codigo del circulo 
console.group("Circulo");

//Radio
// const radioCirculo = 4;
// console.log("el radio del circulo es "+ radioCirculo+ "cm")
// //Diametro

function diametroCirculo(radio){
    return radio *2;

}
// const diametroCirculo = radioCirculo *2;
// console.log("el diametro del circulo es "+ diametroCirculo);
//PI
const PI = Math.PI;
console.log("el valor de pi es: "+ PI);

// //Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro *PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("el perimetro es: "+ perimetroCirculo + "cm");

// //Area
function areaCirculo(radio){
    return (radio * radio) *PI;

}
// const areaCirculo = (radioCirculo * radioCirculo)* PI;
// console.log("el area del circulo es: "+ areaCirculo + "cm");
console.groupEnd();

// Aqui interactuamos con el html



function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areCuadrado(value);
    alert(area);

}

function buttonPeriTriangulo(){
    var input = document.getElementById("inputLado1");
    const lado1= Number (input.value);
    var input2 = document.getElementById("inputLado2");
    const lado2= Number (input2.value);
    var input3 = document.getElementById("inputBase");
    const base=  Number (input3.value);

    const perTrinagulo = perimetroTriangulo(lado1, lado2,base);
    alert (perTrinagulo)
}


function  buttonAreaTriangulo (){
    var input = document.getElementById("inputBase");
    const base = input.value;
    var input2 = document.getElementById("inputAltura");
    const altura = input2.value;

    const areaDelTriangulo = areaTriangulo(base,altura);    
    alert(areaDelTriangulo);
}

function AreadelCirculo(){
    const input = document.getElementById("circuloInput");
    const aCirculo = input.value;

    const showCircle =  perimetroCirculo(aCirculo);
    alert (showCircle);
}


function perimetrodelCirculo(){
    const input = document.getElementById("circuloInput");
    const aCirculo = input.value;

    const showCircle =  areaCirculo(aCirculo);
    alert (showCircle);
}