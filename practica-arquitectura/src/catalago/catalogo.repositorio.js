import { readFile, writeFile } from 'node:fs/promises';
import { ArchivoCorruptoError } from '../errors/index.js';

export function crearRepositorioCatalogo(rutaArchivo) {
  async function leerProductos() {
    try {
      const texto = await readFile(rutaArchivo, 'utf-8');
      return JSON.parse(texto);
    } catch (error) {
      if (error.code === "ENOENT") return [];
      if (error instanceof SyntaxError) {
        throw new ArchivoCorruptoError(rutaArchivo, { cause: error });
      }
      throw error;
    }
  }

  async function guardarProductos(productos) {
    const texto = JSON.stringify(productos, null, 2);
    await writeFile(rutaArchivo, texto, 'utf-8');
  }

  return { leerProductos, guardarProductos };
}