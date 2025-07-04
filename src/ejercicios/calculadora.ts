function validarNumero(n: unknown, nombre: string): number {
  if (typeof n !== "number" || isNaN(n)) {
    throw new Error(`${nombre} debe ser un número válido`);
  }
  return n;
}

export const suma = (a: number, b: number): number => {
  a = validarNumero(a, "a");
  b = validarNumero(b, "b");
  return a + b;
};

export const resta = (a: number, b: number): number => {
  a = validarNumero(a, "a");
  b = validarNumero(b, "b");
  return a - b;
};

export const multiplicacion = (a: number, b: number): number => {
  a = validarNumero(a, "a");
  b = validarNumero(b, "b");
  return a * b;
};

export const division = (a: number, b: number): number => {
  a = validarNumero(a, "a");
  b = validarNumero(b, "b");
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  const resultado = a / b;
  if (!isFinite(resultado)) {
    throw new Error("Resultado no finito (infinito o NaN)");
  }
  return resultado;
};
