//Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible
function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, nombre: "Juan" });
    }, 1000);
  });
}

function obtenerPedidos(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["pedido1", "pedido2"]);
    }, 1000);
  });
}

function obtenerDetallePedido(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ pedido: pedido, detalle: "Detalle del pedido" });
    }, 1000);
  });
}