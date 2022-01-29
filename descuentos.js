// const precioOriginal = 120;
// const descuento = 18;
//precio * (100 - descuento)/ 100

function calcularPrecioConDescuento(precio, descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento =(precio * porcentajePrecioConDescuento)/100;

return precioConDescuento;

}


function buttonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount")
    const discoutValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discoutValue);

   const resultP = document.getElementById("ResultP");
   resultP.innerText = "El precio con descuento es: $"+ precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });