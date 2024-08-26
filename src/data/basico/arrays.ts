export const arrays = [
  {
    title: "1. Declaración de Arrays",
    code: `
    let numeros: number[] = [1, 2, 3, 4, 5];
    console.log(numeros);
    `,
    explanation:
      "En TypeScript, puedes declarar arrays especificando el tipo de sus elementos seguido de '[]'. En este caso, 'numeros' es un array de números.",
    level: "basic",
  },
  {
    title: "2. Acceso a Elementos de un Array",
    code: `
    let frutas: string[] = ["Manzana", "Banana", "Naranja"];
    console.log(frutas[0]); // Manzana
    console.log(frutas[2]); // Naranja
    `,
    explanation:
      "Puedes acceder a los elementos de un array usando su índice, que comienza en 0. En este ejemplo, se accede a la primera y la tercera fruta del array 'frutas'.",
    level: "basic",
  },
  {
    title: "3. Modificar Elementos de un Array",
    code: `
    let colores: string[] = ["Rojo", "Verde", "Azul"];
    colores[1] = "Amarillo";
    console.log(colores); // ["Rojo", "Amarillo", "Azul"]
    `,
    explanation:
      "Los elementos de un array se pueden modificar asignando un nuevo valor al índice correspondiente. Aquí, el segundo color en el array 'colores' se cambia de 'Verde' a 'Amarillo'.",
    level: "basic",
  },
  {
    title: "4. Métodos de Arrays: push y pop",
    code: `
    let numeros: number[] = [1, 2, 3];
    numeros.push(4); // Añadir al final
    console.log(numeros); // [1, 2, 3, 4]
    numeros.pop(); // Eliminar el último elemento
    console.log(numeros); // [1, 2, 3]
    `,
    explanation:
      "Los métodos 'push' y 'pop' permiten añadir y eliminar elementos al final del array, respectivamente. En este ejemplo, 'push' añade un 4 al array, y 'pop' lo elimina.",
    level: "basic",
  },
  {
    title: "5. Métodos de Arrays: shift y unshift",
    code: `
    let letras: string[] = ["b", "c", "d"];
    letras.unshift("a"); // Añadir al inicio
    console.log(letras); // ["a", "b", "c", "d"]
    letras.shift(); // Eliminar el primer elemento
    console.log(letras); // ["b", "c", "d"]
    `,
    explanation:
      "'unshift' añade elementos al inicio del array, mientras que 'shift' elimina el primer elemento. Aquí, 'a' se añade al inicio y luego se elimina.",
    level: "basic",
  },
  {
    title: "6. Iterar sobre Arrays con forEach",
    code: `
    let nombres: string[] = ["Ana", "Luis", "Carlos"];
    nombres.forEach(nombre => {
      console.log(nombre);
    });
    `,
    explanation:
      "El método 'forEach' permite ejecutar una función para cada elemento del array. En este caso, se imprime cada nombre en el array 'nombres'.",
    level: "basic",
  },
  {
    title: "7. Mapear Arrays con map",
    code: `
    let numeros: number[] = [1, 2, 3, 4];
    let cuadrados = numeros.map(num => num * num);
    console.log(cuadrados); // [1, 4, 9, 16]
    `,
    explanation:
      "'map' crea un nuevo array aplicando una función a cada elemento del array original. Aquí, se calcula el cuadrado de cada número en 'numeros'.",
    level: "basic",
  },
  {
    title: "8. Filtrar Arrays con filter",
    code: `
    let edades: number[] = [18, 22, 16, 40, 12];
    let mayoresDeEdad = edades.filter(edad => edad >= 18);
    console.log(mayoresDeEdad); // [18, 22, 40]
    `,
    explanation:
      "El método 'filter' crea un nuevo array con todos los elementos que cumplen con una condición. En este ejemplo, se filtran las edades mayores o iguales a 18.",
    level: "basic",
  },
  {
    title: "9. Reducir Arrays con reduce",
    code: `
    let numeros: number[] = [1, 2, 3, 4];
    let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log(suma); // 10
    `,
    explanation:
      "'reduce' permite combinar todos los elementos de un array en un solo valor, aplicando una función acumulativa. Aquí, se suman todos los números del array 'numeros'.",
    level: "basic",
  },
  {
    title: "10. Arrays Multidimensionales",
    code: `
    let matriz: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    console.log(matriz[1][2]); // 6
    `,
    explanation:
      "Puedes crear arrays de arrays, llamados arrays multidimensionales. En este caso, 'matriz' es un array de 3x3, y se accede al valor en la segunda fila y tercera columna.",
    level: "basic",
  }
];
