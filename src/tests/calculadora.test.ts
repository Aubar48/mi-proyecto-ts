import { describe, it, expect } from 'vitest'
import { suma, resta, multiplicacion, division } from '../ejercicios/calculadora'

describe('Calculadora con validaciones', () => {
  describe('suma()', () => {
    it('suma dos números', () => {
      expect(suma(2, 3)).toBe(5)
    })

    it('lanza error si un argumento no es número', () => {
      // @ts-expect-error intencional
      expect(() => suma('2', 3)).toThrow('a debe ser un número válido')
      
      expect(() => suma(2, NaN)).toThrow('b debe ser un número válido')
    })

    it('suma números negativos', () => {
      expect(suma(-2, -3)).toBe(-5)
    })
  })

  describe('resta()', () => {
    it('resta dos números', () => {
      expect(resta(4, 3)).toBe(1)
    })

    it('lanza error si un argumento no es número', () => {
      // @ts-expect-error
      expect(() => resta('4', 3)).toThrow('a debe ser un número válido')
      // @ts-expect-error
      expect(() => resta(4, undefined)).toThrow('b debe ser un número válido')
    })

    it('resta números negativos', () => {
      expect(resta(-4, -3)).toBe(-1)
    })
  })

  describe('multiplicacion()', () => {
    it('multiplica dos números', () => {
      expect(multiplicacion(2, 3)).toBe(6)
    })

    it('lanza error si un argumento no es número', () => {
      // @ts-expect-error
      expect(() => multiplicacion(null, 3)).toThrow('a debe ser un número válido')
      // @ts-expect-error
      expect(() => multiplicacion(2, {})).toThrow('b debe ser un número válido')
    })

    it('multiplica números negativos', () => {
      expect(multiplicacion(-2, -3)).toBe(6)
      expect(multiplicacion(-2, 3)).toBe(-6)
    })
  })

  describe('division()', () => {
    it('divide dos números', () => {
      expect(division(4, 2)).toBe(2)
    })

    it('lanza error si un argumento no es número', () => {
      // @ts-expect-error
      expect(() => division('4', 2)).toThrow('a debe ser un número válido')
      
      expect(() => division(4, NaN)).toThrow('b debe ser un número válido')
    })

    it('lanza error al dividir por cero', () => {
      expect(() => division(4, 0)).toThrow('No se puede dividir por cero')
    })

    it('divide números negativos', () => {
      expect(division(-6, 3)).toBe(-2)
      expect(division(6, -3)).toBe(-2)
      expect(division(-6, -3)).toBe(2)
    })
  })
})
