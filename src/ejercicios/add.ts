export function add(input: string): number {
  if (!input.trim()) return 0;

  const numeros = input
    .split(',')
    .map(n => n.trim())
    .map(n => parseFloat(n))
    .filter(n => !isNaN(n));

  return numeros.reduce((acc, curr) => acc + curr, 0);
}
