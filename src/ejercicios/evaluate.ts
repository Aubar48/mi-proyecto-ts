export type ASTNode =
  | { type: 'Literal'; value: number }
  | { type: 'BinaryExpression'; operator: string; left: ASTNode; right: ASTNode }
  | { type: 'FunctionCall'; name: string; argument: ASTNode }
  | { type: 'Variable'; name: string };

export type Evaluate = (expression: string) => ASTNode;

export const evaluate: Evaluate = (expression: string) => {
  const tokens = tokenize(expression);
  let pos = 0;

  function tokenize(str: string): string[] {
    // Reconoce números, operadores, paréntesis y palabras (funciones, variables)
    const re = /\s*([()+\-*/]|[a-zA-Z_][a-zA-Z0-9_]*|\d+(\.\d+)?|\S)\s*/g;
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

    // Si es identificador: función o variable
    if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
      // Si siguiente token es '(', es función
      if (tokens[pos] === '(') {
        pos++; // consumir '('
        const arg = parseExpression();
        if (tokens[pos++] !== ')') {
          throw new Error('Paréntesis no cerrado en función');
        }
        return {
          type: 'FunctionCall',
          name: token,
          argument: arg,
        };
      } else {
        // Sino, es variable
        return {
          type: 'Variable',
          name: token,
        };
      }
    }

    // Número literal
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
