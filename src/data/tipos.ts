export const tipos = [
  {
    title: "1. Declaración de Variables y Tipado Estático",
    code: `
let nombre: string = "Juan";
let edad: number = 30;
let esActivo: boolean = true;

let ciudad = "Madrid"; // TypeScript infiere que es de tipo string
let año = 2024;        // TypeScript infiere que es de tipo number

console.log(ciudad)
    `,
    explanation:
      "En TypeScript, puedes declarar variables con tipos específicos o permitir que TypeScript infiera el tipo basado en el valor asignado, lo que proporciona un tipado estático y seguro.",
    level: "basic",
  },
  {
    title: "2. Tipos Especiales",
    code: `
let valor: any = "podría ser cualquier cosa";
valor = 42;  // Ahora es un número

let dato: unknown = "podría ser cualquier cosa";
if (typeof dato === "string") {
  console.log(dato.toUpperCase()); 
}

function saludar(): void {
  console.log("Hola");
}

saludar()

let algo: null = null;
let sinValor: undefined = undefined;

console.log(algo)
    `,
    explanation:
      "TypeScript incluye tipos especiales como `any`, `unknown`, `void`, `null`, y `undefined`, que son útiles para manejar situaciones donde la flexibilidad o la ausencia de un valor son necesarias.",
    level: "basic",
  },
  {
    title: "3. Unión de Tipos",
    code: `
let id: number | string;
id = 123;
id = "ABC123";
    `,
    explanation:
      "La unión de tipos permite que una variable acepte más de un tipo, lo que es útil en situaciones donde un valor puede variar entre diferentes tipos.",
    level: "basic",
  },
  {
    title: "4. Tipos Literales",
    code: `
let direccion: "norte" | "sur" | "este" | "oeste";
direccion = "norte"; // Válido
direccion = "centro"; // Error: "centro" no es un valor permitido
    `,
    explanation:
      "Los tipos literales restringen los valores que una variable puede tomar, limitándolos a un conjunto específico de opciones, lo que añade seguridad al código.",
    level: "basic",
  },
  {
    title: "5. Funciones Tipadas",
    code: `
function suma(a: number, b: number): number {
  return a + b;
}

let resultado = suma(5, 10); // 15

console.log(resultado)
    `,
    explanation:
      "Puedes definir funciones con tipos para sus parámetros y su valor de retorno, lo que garantiza que las funciones sean utilizadas correctamente y que los valores retornados sean del tipo esperado.",
    level: "basic",
  }
];
