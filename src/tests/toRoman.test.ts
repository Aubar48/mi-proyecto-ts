import { describe, it, expect } from "vitest";
import { toRoman } from "../ejercicios/toRoman";

describe("toRoman()", () => {
  it("convierte números a romanos", () => {
    expect(toRoman(1)).toBe("I");
    expect(toRoman(4)).toBe("IV");
    expect(toRoman(9)).toBe("IX");
    expect(toRoman(58)).toBe("LVIII"); // L=50 + V=5 + III=3
    expect(toRoman(1994)).toBe("MCMXCIV"); // M=1000 + CM=900 + XC=90 + IV=4
  });

  it("devuelve string vacío para 0 o números negativos", () => {
    expect(toRoman(0)).toBe("");
    expect(toRoman(-5)).toBe("");
  });
});
