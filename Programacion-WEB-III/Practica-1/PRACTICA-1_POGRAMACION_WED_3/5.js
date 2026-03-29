//Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
//al revés).
//let band = miFuncion(“oruro”)
//console.log(band) // true
//let band = miFuncion(“hola”)
//console.log(band) // false
function miFuncion(cadena) {
  cadena = cadena.toLowerCase();
  let invertida = cadena.split("").reverse().join("");
  return cadena === invertida;
}

let band = miFuncion("oruro");
console.log(band); // true

band = miFuncion("hola");
console.log(band); // false
