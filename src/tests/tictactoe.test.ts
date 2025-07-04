import { describe, it, expect } from 'vitest';
import { checkWinner } from '../ejercicios/tictactoe'; // ajustá ruta

describe('checkWinner', () => {
  it('detecta ganador en fila 3x3', () => {
    const board = [
      ['X', 'X', 'X'],
      ['O', '', 'O'],
      ['', '', '']
    ];
    expect(checkWinner(board)).toBe('X');
  });

  it('detecta ganador en columna 3x3', () => {
    const board = [
      ['O', 'X', ''],
      ['O', 'X', ''],
      ['O', '', '']
    ];
    expect(checkWinner(board)).toBe('O');
  });

  it('detecta ganador en diagonal principal 3x3', () => {
    const board = [
      ['X', 'O', ''],
      ['', 'X', 'O'],
      ['', '', 'X']
    ];
    expect(checkWinner(board)).toBe('X');
  });

  it('detecta ganador en diagonal secundaria 3x3', () => {
    const board = [
      ['', '', 'O'],
      ['', 'O', 'X'],
      ['O', 'X', '']
    ];
    expect(checkWinner(board)).toBe('O');
  });

  it('retorna null si no hay ganador', () => {
    const board = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O']
    ];
    expect(checkWinner(board)).toBe(null);
  });

  it('detecta ganador en tablero 4x4 fila', () => {
    const board = [
      ['X', 'X', 'X', 'X'],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', '']
    ];
    expect(checkWinner(board)).toBe('X');
  });

  it('detecta ganador en tablero 4x4 columna', () => {
    const board = [
      ['O', '', '', ''],
      ['O', '', '', ''],
      ['O', '', '', ''],
      ['O', '', '', '']
    ];
    expect(checkWinner(board)).toBe('O');
  });

  it('lanza error si tablero no es cuadrado', () => {
    const board = [
      ['X', 'O'],
      ['O', 'X'],
      ['X', 'O']
    ];
    expect(() => checkWinner(board)).toThrow('El tablero debe ser cuadrado');
  });
});
