import { describe, it, expect } from 'vitest'
import { suma, resta, multiplicacion, division } from '../ejercicios/calculadora'

describe('suma()', () => {
  it('suma dos números', () => {
    expect(suma(2, 3)).toBe(5)
  })
  it('resta dos números', () => {
    expect(resta(4, 3)).toBe(1)
  })
  it('multiplicacion dos números', () => {
    expect(multiplicacion(2, 3)).toBe(6)
  })
  it('division dos números', () => {
    expect(division(4, 2)).toBe(2)
  })
  
})
