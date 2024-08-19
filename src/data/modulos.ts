export const modulos = [
	{
	  title: "1. Importación y Exportación Básica",
	  code: `
	  // archivo: matematicas.ts
	  export function sumar(a: number, b: number): number {
		return a + b;
	  }
  
	  // archivo: main.ts
	  import { sumar } from './matematicas';
  
	  console.log(sumar(2, 3)); // 5
	  `,
	  explanation:
		"TypeScript permite la importación y exportación de funciones, objetos y variables entre archivos. En este ejemplo, la función `sumar` se exporta desde `matematicas.ts` y se importa en `main.ts` para su uso.",
	  level: "advanced",
	},
	{
	  title: "2. Exportación de Múltiples Elementos",
	  code: `
	  // archivo: utilidades.ts
	  export function restar(a: number, b: number): number {
		return a - b;
	  }
  
	  export const PI = 3.14;
  
	  // archivo: main.ts
	  import { restar, PI } from './utilidades';
  
	  console.log(restar(5, 3)); // 2
	  console.log(PI); // 3.14
	  `,
	  explanation:
		"Puedes exportar múltiples elementos desde un archivo y luego importarlos según sea necesario. En `utilidades.ts`, tanto la función `restar` como la constante `PI` se exportan y se importan en `main.ts`.",
	  level: "advanced",
	},
	{
	  title: "3. Exportación por Defecto",
	  code: `
	  // archivo: saludo.ts
	  export default function saludo(nombre: string): string {
		return \`Hola, \${nombre}!\`;
	  }
  
	  // archivo: main.ts
	  import saludo from './saludo';
  
	  console.log(saludo("Juan")); // Hola, Juan!
	  `,
	  explanation:
		"La exportación por defecto permite exportar un solo valor por defecto desde un archivo. En `saludo.ts`, la función `saludo` se exporta como valor por defecto y se importa sin usar llaves en `main.ts`.",
	  level: "advanced",
	},
	{
	  title: "4. Importación de Todo el Contenido de un Módulo",
	  code: `
	  // archivo: funciones.ts
	  export function sumar(a: number, b: number): number {
		return a + b;
	  }
	  
	  export function restar(a: number, b: number): number {
		return a - b;
	  }
  
	  // archivo: main.ts
	  import * as funciones from './funciones';
  
	  console.log(funciones.sumar(2, 3)); // 5
	  console.log(funciones.restar(5, 3)); // 2
	  `,
	  explanation:
		"Puedes importar todo el contenido de un módulo bajo un único nombre utilizando `import * as`. En `main.ts`, `funciones` es un objeto que contiene todas las exportaciones de `funciones.ts`.",
	  level: "advanced",
	},
	{
	  title: "5. Módulos y Espacios de Nombres (Namespaces)",
	  code: `
	  // archivo: matematicas.ts
	  export namespace Matemáticas {
		export function multiplicar(a: number, b: number): number {
		  return a * b;
		}
	  }
  
	  // archivo: main.ts
	  import { Matemáticas } from './matematicas';
  
	  console.log(Matemáticas.multiplicar(2, 3)); // 6
	  `,
	  explanation:
		"Los módulos y los espacios de nombres (namespaces) son formas de organizar el código en TypeScript. Mientras que los módulos usan `import` y `export`, los namespaces permiten organizar funciones y clases dentro de un contenedor lógico. En `matematicas.ts`, `Matemáticas` es un namespace que agrupa funciones relacionadas.",
	  level: "advanced",
	},
  ];
  