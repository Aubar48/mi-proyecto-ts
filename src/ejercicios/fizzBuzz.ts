export type FizzBuzz = (number: number) => string;

export const fizzBuzz: FizzBuzz = (number: number): string => {
  // Función auxiliar para comprobar divisibilidad con decimales
  const esDivisible = (num: number, divisor: number): boolean => {
    const resultado = num / divisor;
    return Number.isInteger(resultado);
  };

  if (esDivisible(number, 3) && esDivisible(number, 5)) return "FizzBuzz";
  if (esDivisible(number, 3)) return "Fizz";
  if (esDivisible(number, 5)) return "Buzz";

  return number.toString();
};
