//Crear una función que invierta el orden de las palabras en una frase.
//let cad = miFuncion(“abcd”)
//console.log(obj) // dcba
function miFuncion(cadena) {
  let invertido = "";
  
  for (let i = cadena.length - 1; i >= 0; i--) {
    invertido += cadena[i];
  }

  return invertido;
}

console.log(miFuncion("abcd")); // dcba
