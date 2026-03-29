//Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
//elementos de un arreglo, mediante desestructuración
let arreglo = [10, 20, 30, 40, 50];

let [ , , ...resto] = arreglo;

console.log(resto); // [30, 40, 50]
