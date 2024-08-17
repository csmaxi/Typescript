export const genericos = [
	{
		title: "1. Introducción a los Genéricos",
		code: `
	  function identidad<T>(valor: T): T {
		return valor;
	  }
	  
	  let numero = identidad<number>(10); // T es number
	  let texto = identidad<string>("Hola"); // T es string
		`,
		explanation:
		  "Un genérico es un tipo de dato que no está especificado hasta que realmente se usa. En este ejemplo, `T` es un parámetro de tipo que actúa como un marcador de posición para el tipo real que se proporcionará al llamar a la función. La función `identidad` simplemente devuelve el valor recibido, pero ahora puede manejar cualquier tipo de dato.",
		level: "intermediate",
	  },
	  {
		title: "2. Usar Genéricos con Funciones",
		code: `
	  function imprimirElemento<T>(elemento: T): void {
		console.log(elemento);
	  }
	  
	  imprimirElemento<number>(5);   // 5
	  imprimirElemento<string>("Hola"); // "Hola"
		`,
		explanation:
		  "Los genéricos en funciones permiten que la función sea más flexible y útil. En este ejemplo, `imprimirElemento` puede aceptar cualquier tipo de dato, mostrando su valor en la consola.",
		level: "intermediate",
	  },
	  {
		title: "2a. Inferencia de Tipos",
		code: `
	  function identidad<T>(valor: T): T {
		return valor;
	  }
	  
	  let valor1 = identidad(10); // TypeScript infiere que T es number
	  let valor2 = identidad("Hola"); // TypeScript infiere que T es string
		`,
		explanation:
		  "En muchos casos, TypeScript puede inferir el tipo genérico, por lo que no es necesario especificarlo explícitamente. Aquí, TypeScript deduce el tipo de `T` según el tipo del valor que se pasa a la función.",
		level: "intermediate",
	  },
	  {
		title: "3. Genéricos con Arrays",
		code: `
	  function obtenerPrimerElemento<T>(arr: T[]): T {
		return arr[0];
	  }
	  
	  let primero = obtenerPrimerElemento([1, 2, 3]); // 1 (T es number)
	  let primeraPalabra = obtenerPrimerElemento(["hola", "mundo"]); // "hola" (T es string)
		`,
		explanation:
		  "Los genéricos son especialmente útiles con arrays, ya que permiten trabajar con arrays de cualquier tipo de dato. En este ejemplo, `obtenerPrimerElemento` devuelve el primer elemento del array, sin importar el tipo de los elementos.",
		level: "intermediate",
	  },
	  {
		title: "4. Restricciones en Genéricos",
		code: `
	  interface ConNombre {
		nombre: string;
	  }
	  
	  function saludar<T extends ConNombre>(objeto: T): void {
		console.log("Hola, " + objeto.nombre);
	  }
	  
	  let persona = { nombre: "Juan", edad: 25 };
	  saludar(persona); // "Hola, Juan"
		`,
		explanation:
		  "Puedes aplicar restricciones a los tipos genéricos para que solo acepten ciertos tipos. En este ejemplo, `T` debe ser un tipo que tenga una propiedad `nombre`. Esto garantiza que el objeto pasado a `saludar` tenga la propiedad `nombre`.",
		level: "intermediate",
	  },
	  {
		title: "5. Genéricos con Interfaces",
		code: `
	  interface Caja<T> {
		contenido: T;
	  }
	  
	  let cajaDeString: Caja<string> = { contenido: "Un mensaje" };
	  let cajaDeNumero: Caja<number> = { contenido: 100 };
		`,
		explanation:
		  "Puedes usar genéricos en interfaces para definir estructuras de datos más flexibles. En este ejemplo, la interfaz `Caja` puede contener un contenido de cualquier tipo, lo que la hace reutilizable para diferentes tipos de datos.",
		level: "intermediate",
	  },
	  {
		title: "6. Genéricos con Clases",
		code: `
	  class Caja<T> {
		contenido: T;
	  
		constructor(contenido: T) {
		  this.contenido = contenido;
		}
	  
		obtenerContenido(): T {
		  return this.contenido;
		}
	  }
	  
	  let cajaDeString = new Caja<string>("Texto");
	  console.log(cajaDeString.obtenerContenido()); // "Texto"
	  let cajaDeNumero = new Caja<number>(123);
	  console.log(cajaDeNumero.obtenerContenido()); // 123
		`,
		explanation:
		  "Las clases también pueden ser genéricas, permitiendo que manejen diferentes tipos de datos sin tener que redefinir la clase para cada tipo. En este ejemplo, la clase `Caja` puede manejar cualquier tipo de contenido.",
		level: "intermediate",
	  },
	  {
		title: "7. Genéricos con Tipos y Type Aliases",
		code: `
	  type Par<T> = [T, T];
	  
	  let parDeNumeros: Par<number> = [1, 2];
	  let parDeStrings: Par<string> = ["hola", "mundo"];
		`,
		explanation:
		  "Los genéricos también pueden ser utilizados con alias de tipo para definir tipos más complejos y reutilizables. Aquí, `Par` es un alias de tipo que representa un par de valores del mismo tipo.",
		level: "intermediate",
	  },
	  {
		title: "8. Genéricos con Funciones Asíncronas",
		code: `
	  async function obtenerDato<T>(dato: T): Promise<T> {
		return dato;
	  }
	  
	  obtenerDato<number>(42).then(dato => console.log(dato)); // 42
		`,
		explanation:
		  "Puedes usar genéricos en funciones que trabajan con promesas o en código asíncrono. En este ejemplo, `obtenerDato` es una función asíncrona que devuelve una promesa que resuelve con el valor del tipo genérico `T`.",
		level: "intermediate",
	  },
	  {
		title: "9. Funciones Genéricas con Varios Parámetros de Tipo",
		code: `
	  function combinar<T, U>(a: T, b: U): [T, U] {
		return [a, b];
	  }
	  
	  let combinado = combinar<string, number>("edad", 30);
	  console.log(combinado); // ["edad", 30]
		`,
		explanation:
		  "Puedes definir funciones genéricas que acepten múltiples parámetros de tipo. En este ejemplo, `combinar` acepta dos valores de diferentes tipos y los devuelve como un par.",
		level: "intermediate",
	  },
	  {
		title: "10. Herencia en Genéricos",
		code: `
	  class CajaConIdentidad<T, U> extends Caja<T> {
		id: U;
	  
		constructor(contenido: T, id: U) {
		  super(contenido);
		  this.id = id;
		}
	  
		obtenerIdentidad(): U {
		  return this.id;
		}
	  }
	  
	  let cajaConIdentidad = new CajaConIdentidad<string, number>("Libro", 123);
	  console.log(cajaConIdentidad.obtenerContenido()); // "Libro"
	  console.log(cajaConIdentidad.obtenerIdentidad()); // 123
		`,
		explanation:
		  "Puedes extender clases genéricas y mantener o ajustar el comportamiento genérico. En este ejemplo, `CajaConIdentidad` hereda de `Caja` y añade un nuevo tipo genérico para la propiedad `id`.",
		level: "intermediate",
	  },
	  {
		title: "11. Funciones Genéricas de Utilidad",
		code: `
	  let numeros: Array<number> = [1, 2, 3];
	  let palabras: Array<string> = ["uno", "dos", "tres"];
		`,
		explanation:
		  "TypeScript incluye algunas funciones genéricas útiles como `Array<T>` y `Promise<T>`. Aquí, `Array<number>` es un array de números y `Array<string>` es un array de cadenas.",
		level: "intermediate",
	  }
	  
];