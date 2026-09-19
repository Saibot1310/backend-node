import { ProductoNoEncontradoError } from "../errors/index.js";
import { esCadenaNoVacia, esNumeroPositivo } from "../utils/validar.js";

export function crearServicioCatalogo(repositorio) {
  async function listarProductos() {
    return repositorio.leerProductos();
  }

  async function agregarProducto({nombre, precio}) {
    if (!esCadenaNoVacia(nombre)) {
      throw new Error("El nombre del producto es obligatorio");
    }

    if (!esNumeroPositivo(precio)) {
      throw new Error("El precio debe ser un número mayor a 0");
    }

    const productos = await repositorio.leerProductos();
    const nuevoId = productos.length > 0 ? Math.max(...productos.map(producto => producto.id + 1)) : 1;

    console.log(nuevoId);
    const producto = { id: nuevoId, nombre, precio };

    productos.push(producto);
    await repositorio.guardarProductos(productos);
    return producto;
  }

  async function eliminarProducto(id) {
    const productos = await repositorio.leerProductos();

    const existe = productos.some(producto => producto.id === id);

    if (!existe) {
      throw new ProductoNoEncontradoError(id);
    }

    const restantes = productos.filter(producto => producto.id !== id);
    await repositorio.guardarProductos(restantes);
  }

  return { listarProductos, agregarProducto, eliminarProducto };
}