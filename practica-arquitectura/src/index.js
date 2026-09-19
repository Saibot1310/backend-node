import { config } from './config/env.js'
import { crearRepositorioCatalogo } from "./catalago/catalogo.repositorio.js"
import { crearServicioCatalogo } from './catalago/catalogo.servicio.js';
import { DominioError } from './errors/index.js';

async function main() {
  const repositorio = crearRepositorioCatalogo(config.rutaCatalogo);
  const catalogo = crearServicioCatalogo(repositorio);

  const producto = await catalogo.agregarProducto({ nombre: "Monitor", precio: 30 });
  console.log("Producto agregado:", producto);

  console.log("Catálogo actual:", await catalogo.listarProductos());
}

main().catch(error => {
  if (error instanceof DominioError) {
    console.error(`Error de dominio: ${error.message}`);
  } else {
    console.error('Error inesperado:', error);
  }
  process.exitCode = 1;
});