export type ASTNode = 
  | { type: 'Literal'; value: number }
  | { type: 'BinaryExpression'; operator: string; left: ASTNode; right: ASTNode };

export type Evaluate = (expression: string) => ASTNode;

export const evaluate: Evaluate = (expression: string) => {
  // Limpiar espacios
  const tokens = tokenize(expression);
  let pos = 0;

  function tokenize(str: string): string[] {
    const re = /\s*([()+\-*/]|\d+(\.\d+)?|\S)\s*/g;
    const result: string[] = [];
    let m;
    while ((m = re.exec(str)) !== null) {
      result.push(m[1]);
    }
    return result;
  }

  function parseExpression(): ASTNode {
    let node = parseTerm();

    while (pos < tokens.length && (tokens[pos] === '+' || tokens[pos] === '-')) {
      const operator = tokens[pos++];
      const right = parseTerm();
      node = {
        type: 'BinaryExpression',
        operator,
        left: node,
        right,
      };
    }
    return node;
  }

  function parseTerm(): ASTNode {
    let node = parseFactor();

    while (pos < tokens.length && (tokens[pos] === '*' || tokens[pos] === '/')) {
      const operator = tokens[pos++];
      const right = parseFactor();
      node = {
        type: 'BinaryExpression',
        operator,
        left: node,
        right,
      };
    }
    return node;
  }

  function parseFactor(): ASTNode {
    const token = tokens[pos++];

    if (token === '(') {
      const node = parseExpression();
      if (tokens[pos++] !== ')') {
        throw new Error('Paréntesis no cerrado');
      }
      return node;
    }

    const value = parseFloat(token);
    if (!isNaN(value)) {
      return { type: 'Literal', value };
    }

    throw new Error(`Token inesperado: ${token}`);
  }

  const ast = parseExpression();

  if (pos < tokens.length) {
    throw new Error(`Tokens inesperados al final: ${tokens.slice(pos).join(' ')}`);
  }

  return ast;
};
