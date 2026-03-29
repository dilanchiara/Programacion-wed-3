// Proporcione un ejemplo para convertir un callback en una promesa
// Función original con callback
function leerArchivo(nombre, callback) {
  setTimeout(() => {
    if (!nombre) {
      callback("Error: nombre inválido", null);
    } else {
      callback(null, "Contenido del archivo: " + nombre);
    }
  }, 1000);
}

// Conversión a promesa
function leerArchivoPromise(nombre) {
  return new Promise((resolve, reject) => {
    leerArchivo(nombre, (error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}

// Uso de la promesa
leerArchivoPromise("datos.txt")
  .then(resultado => console.log("Resultado:", resultado))
  .catch(error => console.error("Error:", error));