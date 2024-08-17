export const arrays = [
  {
    title: "1. Declaración de Arrays",
    code: `
	  let numeros: number[] = [1, 2, 3, 4, 5];
	  let palabras: string[] = ['uno', 'dos', 'tres'];
	  
	  let Numeros: Array<number> = [1, 2, 3, 4, 5];
	  let Palabras: Array<string> = ['uno', 'dos', 'tres'];
	  `,
    explanation:
      "En TypeScript, puedes declarar arrays de varias maneras. Puedes usar corchetes [] o la sintaxis Array<tipo>. Ambas formas son equivalentes y se usan para almacenar múltiples valores del mismo tipo.",
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
	  `,
    explanation:
      "Puedes declarar arrays de más de una dimensión añadiendo más niveles de corchetes. En este caso, `matriz` es una matriz de 3x3, un array de arrays de números.",
    level: "basic",
  },
  {
    title: "3. Métodos Comunes de Arrays",
    code: `
	let numeros: number[] = [1, 2, 3, 4, 5];
	let palabras: string[] = ['uno', 'dos', 'tres'];

	  numeros.push(6); // numeros ahora es [1, 2, 3, 4, 5, 6]
	  
	  numeros.pop(); // elimina 6, dejando el array como [1, 2, 3, 4, 5]
	  
	  let cuadrados = numeros.map(n => n * n); // [1, 4, 9, 16, 25]
	  
	  let pares = numeros.filter(n => n % 2 === 0); // [2, 4]
	  
	  let suma = numeros.reduce((total, n) => total + n, 0); // 15
	  `,
    explanation:
      "Los arrays en TypeScript heredan todos los métodos de los arrays en JavaScript. Puedes usar métodos como `push`, `pop`, `map`, `filter` y `reduce` para manipular y trabajar con arrays de manera eficiente.",
    level: "basic",
  },
  {
    title: "4. Tipos de Datos en Arrays",
    code: `
	  let numeros: number[] = [1, 2, 3];
	  let palabras: string[] = ["a", "b", "c"];
	  
	  let mezcla: (number | string)[] = [1, "dos", 3, "cuatro"];
	  `,
    explanation:
      "Puedes definir arrays con tipos específicos para asegurar que solo los valores correctos se almacenen en el array. También puedes usar tipos de unión para permitir múltiples tipos de datos en el mismo array.",
    level: "basic",
  },
  {
    title: "5. Tuplas",
    code: `
	  let tupla: [string, number] = ["edad", 30];
	  `,
    explanation:
      "Las tuplas en TypeScript son arrays con un número fijo de elementos donde cada elemento puede tener un tipo diferente. En este caso, `tupla` debe tener un `string` y un `number` en ese orden.",
    level: "basic",
  },
  {
    title: "6. Array de Objetos",
    code: `
	  type Persona = {
		nombre: string;
		edad: number;
	  };
	  
	  let personas: Persona[] = [
		{ nombre: "Juan", edad: 25 },
		{ nombre: "Ana", edad: 28 },
	  ];
	  `,
    explanation:
      "Puedes tener arrays de objetos donde cada objeto sigue una estructura definida. Esto es útil para trabajar con colecciones de datos que tienen un formato consistente.",
    level: "basic",
  },
  {
    title: "7. Desestructuración de Arrays",
    code: `
	  let [primero, segundo] = numeros;
	  console.log(primero);  // 1
	  console.log(segundo);  // 2
	  `,
    explanation:
      "TypeScript soporta la desestructuración de arrays, lo que te permite asignar elementos del array a variables individuales de manera más concisa.",
    level: "basic",
  },
  {
    title: "8. Acceso y Mutación",
    code: `
	  let primerElemento = numeros[0];  // 1
	  
	  numeros[0] = 10;  // numeros ahora es [10, 2, 3, 4, 5]
	  `,
    explanation:
      "Acceder a un elemento del array y modificarlo es similar a JavaScript. Puedes usar índices para acceder a elementos específicos y asignar nuevos valores.",
    level: "basic",
  },
  {
    title: "9. Funciones y Arrays",
    code: `
	  function sumarElementos(arr: number[]): number {
		return arr.reduce((total, num) => total + num, 0);
	  }
	  
	  let resultado = sumarElementos([1, 2, 3, 4]); // 10
	  `,
    explanation:
      "Puedes definir funciones que trabajen con arrays, ya sea como argumentos o como valores de retorno. En este ejemplo, `sumarElementos` toma un array de números y devuelve la suma de sus elementos.",
    level: "basic",
  },
  {
    title: "10. Interfaces y Arrays",
    code: `
	  interface Persona {
		nombre: string;
		edad: number;
	  }
	  
	  let personas: Persona[] = [
		{ nombre: "Juan", edad: 30 },
		{ nombre: "Ana", edad: 25 }
	  ];
	  `,
    explanation:
      "Puedes usar interfaces para describir la forma de los arrays de objetos, asegurando que cada objeto en el array siga una estructura definida. Esto mejora la claridad y la seguridad del código.",
    level: "basic",
  },
  {
    title: "11. Tipos Genéricos",
    code: `
	  function invertirArray<T>(arr: T[]): T[] {
		return arr.reverse();
	  }
	  
	  let numerosInvertidos = invertirArray([1, 2, 3]); // [3, 2, 1]
	  let palabrasInvertidas = invertirArray(["a", "b", "c"]); // ["c", "b", "a"]
	  `,
    explanation:
      "Los tipos genéricos te permiten crear funciones que trabajan con arrays de cualquier tipo, aumentando la flexibilidad y reutilización del código. En este caso, `invertirArray` invierte el array sin importar el tipo de los elementos.",
    level: "basic",
  },
  {
    title: "12. Array con Valores Opcionales",
    code: `
	  let opcionales: (number | undefined)[] = [1, undefined, 3];
	  `,
    explanation:
      "Puedes crear arrays que contengan valores opcionales usando la notación `?`. Esto es útil cuando algunos elementos del array pueden estar ausentes o ser indefinidos.",
    level: "basic",
  },
];
