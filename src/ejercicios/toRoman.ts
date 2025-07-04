export type ToRoman = (number: number) => string;

export const toRoman: ToRoman = (num: number): string => {
  if (num <= 0) return ""; // No hay representación romana para 0 o negativos

  const valores = [
    { valor: 1000, simbolo: "M" },
    { valor: 900, simbolo: "CM" },
    { valor: 500, simbolo: "D" },
    { valor: 400, simbolo: "CD" },
    { valor: 100, simbolo: "C" },
    { valor: 90, simbolo: "XC" },
    { valor: 50, simbolo: "L" },
    { valor: 40, simbolo: "XL" },
    { valor: 10, simbolo: "X" },
    { valor: 9, simbolo: "IX" },
    { valor: 5, simbolo: "V" },
    { valor: 4, simbolo: "IV" },
    { valor: 1, simbolo: "I" },
  ];

  let resultado = "";
  let numero = num;

  for (const { valor, simbolo } of valores) {
    while (numero >= valor) {
      resultado += simbolo;
      numero -= valor;
    }
  }

  return resultado;
};
