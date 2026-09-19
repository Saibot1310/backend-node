export class DominioError extends Error {
  constructor(mensaje, options) {
    super(mensaje, options);
    this.name = this.constructor.name;
  }
}

export class ProductoNoEncontradoError extends DominioError {
  constructor(id, options) {
    super(`No existe un producto con id ${id}`, options);
  }
}

export class ArchivoCorruptoError extends DominioError {
  constructor(ruta, options) {
    super(`El archivo ${ruta} existe pero no contiene JSON válido`, options);
  }
}