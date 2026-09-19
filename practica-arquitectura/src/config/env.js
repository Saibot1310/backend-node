import path from 'node:path';

function requerido(nombre, porDefecto) {
  const valor = process.env[nombre] ?? porDefecto;
  if (valor === undefined) {
    throw new Error(`Falta la variable de entorno obligatoria: ${nombre}`);
  }
  return valor;
}

export const config = Object.freeze({
  entorno: requerido("NODE_ENV", "development"),
  rutaCatalogo: path.resolve(requerido("RUTA_CATALOGO", "./data/catalogo.json")),
});