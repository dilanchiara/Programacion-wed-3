//Proporcione un ejemplo para convertir una promesa en un callback.
// Función original que devuelve una promesa
function obtenerNumero() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10); // Simulamos éxito
    }, 1000);
  });
}

// Función convertida a estilo callback
function obtenerNumeroCallback(callback) {
  obtenerNumero()
    .then(resultado => callback(null, resultado))
    .catch(error => callback(error, null));
}

// Uso de la versión con callback
obtenerNumeroCallback((error, resultado) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Resultado:", resultado);
  }
});