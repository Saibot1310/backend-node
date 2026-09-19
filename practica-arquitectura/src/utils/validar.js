export function esCadenaNoVacia(valor) {
  return typeof valor === "string" && valor.trim().length > 0;
}

export function esNumeroPositivo(valor) {
  return typeof valor === "number" && Number.isFinite(valor) && valor > 0;
}