
let edad= prompt("Bienvenido, por favor ingrese su edad");


if (edad === "") {
    alert("Necesitas colocar tu edad");
} else if (edad < "18") {
    alert("No cumples con la edad");
} else {
    alert(" gracias por elegirnos");
}


//total compra carrito
const carrito= [
    {nombre: "Vino Catena Zapata Malbec", precio: 3250 },
    {nombre: "Vino Mosquita Muerta Tinto", precio: 3100},
    {nombre: "Vino Alamos Malbec", precio: 900},
    {nombre: "gin tanqueray", precio:5400},
];

let total = carrito.reduce((accum, p) => {
    return accum + p.precio;
},0);

console.log("El total de su compra es de " + total + " pesos." );

function primero(segundo) {
    setTimeout(function() {
        console.log("RECIBO:  ","Vino Catena Zapata Malbec, precio: 3250  ",
                    "Vino Mosquita Muerta Tinto, precio: 3100  ",
                    "Vino Alamos Malbec precio: 900  ",
                    "gin tanqueray, precio:5400");
                    segundo()
        },3000)
    
}

function segundo(){
    console.log("GRACIAS POR ELEGIRNOS");
}

primero(segundo);

let puntuacion= 0;

while (puntuacion <= 10){
    alert ("Califique del 1 al 10 que le pareció nuestro sitio " + puntuacion);
    puntuacion ++;
}
    

