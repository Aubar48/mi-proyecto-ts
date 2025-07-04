# 🧪 Práctica de Katas con TDD

Este repositorio está destinado a la práctica de **katas** utilizando la metodología **TDD (Test-Driven Development)**. El objetivo es mejorar habilidades de programación, diseño y testing escribiendo primero los tests y luego el código necesario para que pasen.

🧩 ¿Qué es una Kata?
Una kata es un ejercicio de programación pequeño que se puede repetir muchas veces para mejorar tu fluidez al escribir código limpio, bien estructurado y probado.

💡 Filosofía TDD
Red – Escribir un test que falle

Green – Escribir el código mínimo para que el test pase

Refactor – Mejorar el diseño sin romper los tests

---

- ✅ Ejercicios incluidos
- ✅ **add(string)**: suma los números contenidos en un string, incluyendo soporte para delimitadores personalizados, números negativos y notación científica.
- ✅ **Operaciones básicas**: suma, resta, multiplicación y división con validaciones (números negativos, división por cero, etc.).
- ✅ **fizzBuzz**: devuelve "Fizz" si el número es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos. Soporta números negativos y decimales.
- ✅ **tictactoe**: evalúa un tablero de Ta-Te-Ti y determina si hay un ganador (X u O), considerando filas, columnas y diagonales. Soporta tableros de tamaño variable.
- ✅ **toRoman**: convierte un número entero a su representación en números romanos (ej: 1994 → "MCMXCIV").

🔜 Katas adicionales por agregar proximamente (Bowling game, Game of life, etc.)

---

## 🛠️ Tecnologías utilizadas

- **TypeScript** — Lenguaje principal
- **Vitest** — Framework de testing rápido y moderno compatible con Vite
- **Node.js** — Entorno de ejecución

---

## 🛠️ Arquitectura del proyecto

- mi-proyecto-ts/
- ├── src/ejercicios      # Código fuente
- │   └── calculadora.ts  # Ejemplo: funciones matemáticas
- ├── tests/              # Tests escritos con Vitest
- │   └── calculadora.test.ts
- ├── package.json
- ├── tsconfig.json
- └── README.md

---

## ⚙️ Instalación

1. Cloná el repositorio:

```bash
- git clone https://github.com/Aubar48/mi-proyecto-ts
- cd nombre-del-repo
- npm install
- npm run vitest



