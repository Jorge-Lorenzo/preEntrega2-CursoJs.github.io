let edad= 18;
let ingresEdad= parseInt(prompt("Por favor ingrese su edad"));

if (ingresEdad >= edad) {
    alert("Bienvenido a nuestro sitio");    
}
else if (ingresEdad < edad) {
    alert("No cumples con la mayoría de edad");
    
}

//TOTAL COMPRA DE CARRITO
const carrito= [
    {nombre: "Vino Catena Zapata Malbec", precio: 3250 },
    {nombre: "Vino Mosquita Muerta Tinto", precio: 3100},
    {nombre: "Vino Alamos Malbec", precio: 900},
    {nombre: "gin tanqueray", precio:5400},
];

let total = carrito.reduce((accum, p) => {
    return accum + p.precio;
},0);

alert("El total de su compra es de " + total + " pesos.");

function primero(segundo) {
        alert("RECIBO:  Vino Catena Zapata Malbec precio: 3250, Vino Mosquita Muerta Tinto precio: 3100 Vino Alamos Malbec precio: 900, gin tanqueray, precio:5400".toUpperCase());
        segundo()
}

function segundo(){
    alert("GRACIAS POR ELEGIRNOS");
}

primero(segundo);

//TOTAl DE COMPRA CON PRECIO DE ENVÍO

const flete = carrito.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio + 1000
    }
})

alert(precio)