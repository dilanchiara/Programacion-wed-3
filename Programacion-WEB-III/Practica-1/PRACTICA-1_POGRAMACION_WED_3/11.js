//Proporcione un ejemplo concreto de encadenamiento de promesas.
function paso1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 1 completado");
      resolve(5);
    }, 1000);
  });
}
function paso2(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 2 completado");
      resolve(valor * 2);
    }, 1000);
  });
}
function paso3(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 3 completado");
      resolve(valor - 3);
    }, 1000);
  });
}
// Encadenamiento de promesas
paso1()
  .then(resultado1 => paso2(resultado1))
  .then(resultado2 => paso3(resultado2))
  .then(resultadoFinal => {
    console.log("Resultado final:", resultadoFinal);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });