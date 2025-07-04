export function add(input: string): number {
  if (!input.trim()) return 0;

  // Reemplazamos todos los delimitadores posibles por comas
  const delimitadores = /[,\n; ]+/;

  const numeros = input
    .split(delimitadores)
    .map(n => n.trim())
    .map(n => Number(n)) // soporta notación científica y decimales
    .filter(n => !isNaN(n));

  return numeros.reduce((acc, curr) => acc + curr, 0);
}
