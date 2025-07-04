import { describe, it, expect } from 'vitest';
import { add } from '../ejercicios/add';

describe('add()', () => {
  it('suma números separados por comas', () => {
    expect(add("1,2,3")).toBe(6);
  });

  it('devuelve 0 para string vacío', () => {
    expect(add("")).toBe(0);
  });

  it('ignora espacios y convierte a número', () => {
    expect(add(" 4 , 5 ,6")).toBe(15);
  });

  it('ignora valores no numéricos', () => {
    expect(add("1,abc,2")).toBe(3);
  });

  it('puede manejar números decimales', () => {
    expect(add("1.5,2.5")).toBe(4);
  });
});
