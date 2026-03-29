//Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible.
async function main() {
  try {
    const usuario = await obtenerUsuario(1);
    const posts = await obtenerPosts(usuario.id);
    const comentarios = await obtenerComentarios(posts[0]);

    console.log("Comentarios:", comentarios);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();