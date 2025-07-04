import { describe, it, expect } from 'vitest';
import { add } from '../ejercicios/add';

describe('add()', () => {
  it('suma con coma', () => {
    expect(add("1,2,3")).toBe(6);
  });

  it('suma con punto y coma', () => {
    expect(add("4;5;6")).toBe(15);
  });

  it('suma con espacios', () => {
    expect(add("1 2 3")).toBe(6);
  });

  it('suma con saltos de línea', () => {
    expect(add("1\n2\n3")).toBe(6);
  });

  it('suma con combinación de delimitadores', () => {
    expect(add("1,2\n3;4 5")).toBe(15);
  });

  it('soporta números negativos', () => {
    expect(add("-1,-2,3")).toBe(0);
  });

  it('soporta decimales', () => {
    expect(add("1.5,2.5")).toBe(4);
  });

  it('soporta notación científica', () => {
    expect(add("1e2,2e1")).toBe(120); // 100 + 20
    expect(add("-2.5e-1,1")).toBe(0.75);
  });

  it('ignora texto no numérico', () => {
    expect(add("4,abc,5")).toBe(9);
  });

  it('devuelve 0 para string vacío', () => {
    expect(add("")).toBe(0);
  });
});
