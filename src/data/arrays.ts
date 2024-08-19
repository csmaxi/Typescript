export const arrays = [
  {
    title: "1. Tipado de Arrays",
    code: `
let numeros: number[] = [1, 2, 3, 4, 5];
let palabras: string[] = ['uno', 'dos', 'tres'];

let Numeros: Array<number> = [1, 2, 3, 4, 5];
let Palabras: Array<string> = ['uno', 'dos', 'tres'];

console.log(palabras)
    `,
    explanation:
      "En TypeScript, puedes definir arrays con tipos específicos utilizando `tipo[]` o `Array<tipo>`, lo que asegura que solo se almacenen valores del tipo especificado.",
    level: "basic",
  },
  {
    title: "2. Arrays Multidimensionales",
    code: `
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz)
    `,
    explanation:
      "Puedes declarar arrays multidimensionales para almacenar datos en estructuras más complejas, como matrices o tablas, usando múltiples niveles de corchetes.",
    level: "basic",
  },
  {
    title: "3. Tipos de Datos en Arrays",
    code: `
let mezcla: (number | string)[] = [1, "dos", 3, "cuatro"];

console.log(mezcla)
    `,
    explanation:
      "Puedes utilizar tipos de unión para permitir que un array contenga más de un tipo de datos. Esto es útil cuando necesitas almacenar valores de diferentes tipos en un mismo array.",
    level: "basic",
  },
  {
    title: "4. Tuplas",
    code: `
let tupla: [string, number] = ["edad", 30];

console.log(tupla)
    `,
    explanation:
      "Las tuplas en TypeScript son arrays con un número fijo de elementos donde cada elemento tiene un tipo específico, lo que permite una estructura predefinida con múltiples tipos.",
    level: "basic",
  },
  {
    title: "5. Tipos Genéricos en Arrays",
    code: `
function invertirArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

let numerosInvertidos = invertirArray([1, 2, 3]); // [3, 2, 1]
let palabrasInvertidas = invertirArray(["a", "b", "c"]); // ["c", "b", "a"]

console.log(palabrasInvertidas)
    `,
    explanation:
      "Los tipos genéricos te permiten crear funciones y estructuras de datos que pueden trabajar con arrays de cualquier tipo, aumentando la flexibilidad y reutilización del código.",
    level: "basic",
  },
];
