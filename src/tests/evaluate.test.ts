import { describe, it, expect } from 'vitest'
import { evaluate, ASTNode } from '../ejercicios/evaluate' 

describe('evaluate()', () => {
  it('evalúa un número simple', () => {
    const ast = evaluate("42");
    expect(ast).toEqual({ type: "Literal", value: 42 });
  });

  it('evalúa una suma simple', () => {
    const ast = evaluate("1 + 2");
    expect(ast).toEqual({
      type: "BinaryExpression",
      operator: "+",
      left: { type: "Literal", value: 1 },
      right: { type: "Literal", value: 2 },
    });
  });

  it('evalúa una expresión con precedencia multiplicación', () => {
    const ast = evaluate("3 + 5 * 2");
    expect(ast).toEqual({
      type: "BinaryExpression",
      operator: "+",
      left: { type: "Literal", value: 3 },
      right: {
        type: "BinaryExpression",
        operator: "*",
        left: { type: "Literal", value: 5 },
        right: { type: "Literal", value: 2 },
      },
    });
  });

  it('evalúa expresión con paréntesis', () => {
    const ast = evaluate("3 + 5 * (2 - 8)");
    expect(ast).toEqual({
      type: "BinaryExpression",
      operator: "+",
      left: { type: "Literal", value: 3 },
      right: {
        type: "BinaryExpression",
        operator: "*",
        left: { type: "Literal", value: 5 },
        right: {
          type: "BinaryExpression",
          operator: "-",
          left: { type: "Literal", value: 2 },
          right: { type: "Literal", value: 8 },
        },
      },
    });
  });

  it('evalúa función matemática simple', () => {
    const ast = evaluate("sin(0)");
    expect(ast).toEqual({
      type: "FunctionCall",
      name: "sin",
      argument: { type: "Literal", value: 0 },
    });
  });

  it('evalúa función matemática con expresión', () => {
    const ast = evaluate("cos(1 + 1)");
    expect(ast).toEqual({
      type: "FunctionCall",
      name: "cos",
      argument: {
        type: "BinaryExpression",
        operator: "+",
        left: { type: "Literal", value: 1 },
        right: { type: "Literal", value: 1 },
      },
    });
  });

  it('evalúa variable simple', () => {
    const ast = evaluate("pi");
    expect(ast).toEqual({
      type: "Variable",
      name: "pi",
    });
  });

  it('evalúa expresión con variable y función', () => {
    const ast = evaluate("sin(pi / 2)");
    expect(ast).toEqual({
      type: "FunctionCall",
      name: "sin",
      argument: {
        type: "BinaryExpression",
        operator: "/",
        left: { type: "Variable", name: "pi" },
        right: { type: "Literal", value: 2 },
      },
    });
  });

  it('lanza error con paréntesis no cerrado', () => {
    expect(() => evaluate("3 + (4 * 2")).toThrow('Paréntesis no cerrado');
  });

  it('lanza error con token inesperado', () => {
    expect(() => evaluate("3 + &")).toThrow('Token inesperado: &');
  });

  it('lanza error con tokens extra al final', () => {
    expect(() => evaluate("3 + 2 5")).toThrow(/Tokens inesperados al final/);
  });
});
