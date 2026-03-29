//Proporcione un ejemplo para migrar una función con promesas a async/await
// Función que devuelve una promesa
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos obtenidos correctamente");
    }, 1000);
  });
}

// Uso con promesas (.then)
obtenerDatos()
  .then(resultado => {
    console.log("Con .then():", resultado);
  })
  .catch(error => {
    console.error("Error:", error);
  });
async function obtenerDatosAsync() {
  try {
    const resultado = await obtenerDatos();
    console.log("Con async/await:", resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamada a la función async
obtenerDatosAsync();