import { describe, it, expect } from 'vitest';
import { fizzBuzz } from '../ejercicios/fizzBuzz';

describe('fizzBuzz()', () => {
  it('devuelve "Fizz" si es divisible por 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it('devuelve "Buzz" si es divisible por 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it('devuelve "FizzBuzz" si es divisible por 3 y 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it('devuelve el número como string si no es divisible por 3 ni por 5', () => {
    expect(fizzBuzz(7)).toBe("7");
    expect(fizzBuzz(8)).toBe("8");
  });
});

describe('fizzBuzz() con negativos y decimales', () => {
  it('devuelve "FizzBuzz" para múltiplos negativos de 3 y 5', () => {
    expect(fizzBuzz(-15)).toBe("FizzBuzz");
  });

  it('devuelve "Fizz" para múltiplos negativos de 3', () => {
    expect(fizzBuzz(-3)).toBe("Fizz");
  });

  it('devuelve "Buzz" para múltiplos negativos de 5', () => {
    expect(fizzBuzz(-5)).toBe("Buzz");
  });

  it('devuelve número como string para decimales no divisibles', () => {
    expect(fizzBuzz(7.5)).toBe("7.5");
  });

  it('devuelve "Fizz" para decimales divisibles por 3', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it('devuelve "FizzBuzz" para decimales divisibles por 3 y 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});

