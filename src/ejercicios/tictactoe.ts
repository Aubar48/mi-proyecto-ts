export type CheckWinner = (board: string[][]) => string | null;

export const checkWinner: CheckWinner = (board) => {
  const n = board.length;

  // Validamos que sea tablero cuadrado
  if (!board.every(row => row.length === n)) {
    throw new Error("El tablero debe ser cuadrado");
  }

  // Función para verificar si todos los elementos en un array son iguales y no vacíos
  function allEqual(arr: string[]): boolean {
    return arr.every(cell => cell === arr[0] && cell !== "");
  }

  // Revisar filas
  for (let i = 0; i < n; i++) {
    if (allEqual(board[i])) return board[i][0];
  }

  // Revisar columnas
  for (let j = 0; j < n; j++) {
    const col = [];
    for (let i = 0; i < n; i++) {
      col.push(board[i][j]);
    }
    if (allEqual(col)) return col[0];
  }

  // Revisar diagonal principal
  const diag1 = [];
  for (let i = 0; i < n; i++) {
    diag1.push(board[i][i]);
  }
  if (allEqual(diag1)) return diag1[0];

  // Revisar diagonal secundaria
  const diag2 = [];
  for (let i = 0; i < n; i++) {
    diag2.push(board[i][n - 1 - i]);
  }
  if (allEqual(diag2)) return diag2[0];

  // Si no hay ganador
  return null;
};
