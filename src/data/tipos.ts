export const tipos = [
  {
    title: "1. Declaración de Variables y Tipado Estático",
    code: `
	let nombre: string = "Juan";
	let edad: number = 30;
	let esActivo: boolean = true;
	
	let ciudad = "Madrid"; // TypeScript infiere que es de tipo string
	let año = 2024;        // TypeScript infiere que es de tipo number
	`,
    explanation:
      "En TypeScript, puedes declarar variables de diferentes tipos. Puedes especificar el tipo explícitamente o dejar que TypeScript lo infiera según el valor asignado.",
    level: "basic",
  },
  {
    title: "2. Tipos Básicos",
    code: `
	let saludo: string = "Hola, mundo";
	
	let entero: number = 42;
	let decimal: number = 3.14;
	
	let esValido: boolean = true;
	`,
    explanation:
      "TypeScript soporta tipos básicos como `string` para texto, `number` para números (tanto enteros como decimales), y `boolean` para valores de verdad.",
    level: "basic",
  },
  {
    title: "3. Tipos Especiales",
    code: `
	let valor: any = "podría ser cualquier cosa";
	valor = 42;  // Ahora es un número
	
	let dato: unknown = "podría ser cualquier cosa";
	if (typeof dato === "string") {
		console.log(dato.toUpperCase()); // Safe porque sabemos que es un string
	}
	
	function saludar(): void {
		console.log("Hola");
	}
	
	let algo: null = null;
	let sinValor: undefined = undefined;
	`,
    explanation:
      "TypeScript incluye tipos especiales como `any`, `unknown`, `void`, `null` y `undefined`, que son útiles en diferentes situaciones para manejar la flexibilidad o ausencia de valores.",
    level: "basic",
  },
  {
    title: "4. Unión de Tipos",
    code: `
	let id: number | string;
	id = 123;
	id = "ABC123";
	`,
    explanation:
      "La unión de tipos te permite declarar variables que acepten más de un tipo, lo cual es útil para manejar casos donde un valor puede ser de diferentes tipos.",
    level: "basic",
  },
  {
    title: "5. Tipos Literales",
    code: `
	let direccion: "norte" | "sur" | "este" | "oeste";
	direccion = "norte"; // Válido
	direccion = "centro"; // Error: "centro" no es un valor permitido
	`,
    explanation:
      "Los tipos literales restringen los valores que una variable puede tomar, limitándolos a un conjunto específico de opciones.",
    level: "basic",
  },
  {
    title: "6. Enumeraciones (Enums)",
    code: `
	enum Dia {
		Lunes,
		Martes,
		Miercoles,
		Jueves,
		Viernes,
		Sabado,
		Domingo
	}
	
	let diaLibre: Dia = Dia.Sabado;
	`,
    explanation:
      "Las enumeraciones permiten definir un conjunto de valores con nombres significativos, facilitando la lectura y mantenimiento del código.",
    level: "basic",
  },
  {
    title: "7. Intersecciones de Tipos",
    code: `
	interface Usuario {
		nombre: string;
	}
	
	interface Trabajador {
		empresa: string;
	}
	
	let empleado: Usuario & Trabajador = {
		nombre: "Juan",
		empresa: "TechCorp"
	};
	`,
    explanation:
      "Las intersecciones de tipos permiten combinar múltiples tipos en uno solo, asegurando que un valor cumpla con todas las restricciones impuestas por los tipos combinados.",
    level: "basic",
  },
  {
    title: "8. Tipos Personalizados (Type Aliases)",
    code: `
	type ID = number | string;
	
	let miID: ID = 123;
	miID = "ABC123";
	`,
    explanation:
      "Los alias de tipos permiten crear nombres más descriptivos para tipos o combinaciones de tipos, lo que mejora la claridad y mantenimiento del código.",
    level: "basic",
  },
  {
    title: "9. Funciones Tipadas",
    code: `
	function suma(a: number, b: number): number {
		return a + b;
	}
	
	let resultado = suma(5, 10); // 15
	`,
    explanation:
      "Puedes definir funciones con tipos para los parámetros y el valor de retorno, lo que garantiza que la función se use correctamente.",
    level: "basic",
  },
  {
    title: "10. Tipos de Funciones",
    code: `
	let operacion: (x: number, y: number) => number;
	operacion = (x, y) => x + y;
	`,
    explanation:
      "Los tipos de funciones te permiten definir la firma de una función, especificando el tipo de sus argumentos y su valor de retorno.",
    level: "basic",
  },
  {
    title: "11. Interfaces",
    code: `
	interface Producto {
		nombre: string;
		precio: number;
	}
	
	let producto: Producto = {
		nombre: "Laptop",
		precio: 999.99
	};
	`,
    explanation:
      "Las interfaces en TypeScript permiten definir la forma de un objeto, asegurando que los objetos cumplan con una estructura específica.",
    level: "basic",
  },
  {
    title: "12. Tipos Genéricos",
    code: `
	function envolverEnArray<T>(valor: T): T[] {
		return [valor];
	}
	
	let numeroArray = envolverEnArray(42); // [42]
	let cadenaArray = envolverEnArray("Hola"); // ["Hola"]
	`,
    explanation:
      "Los tipos genéricos permiten crear componentes que funcionen con cualquier tipo, aumentando la flexibilidad y reutilización del código.",
    level: "basic",
  },
  {
    title: "13. Tipos Opcionales",
    code: `
	interface Usuario {
		nombre: string;
		edad?: number;
	}
	
	let usuario: Usuario = {
		nombre: "Ana"
	};
	`,
    explanation:
      "Puedes usar tipos opcionales en interfaces para que ciertas propiedades no sean obligatorias, permitiendo mayor flexibilidad en la definición de objetos.",
    level: "basic",
  },
];
