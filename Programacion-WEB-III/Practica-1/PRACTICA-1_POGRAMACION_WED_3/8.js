//Realizar un código para ejecutar una función callback después 2 segundos
function miFuncion(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}
miFuncion(() => {
  console.log("Callback ejecutado después de 2 segundos");
});
