export const genericos = [
  {
    title: "1. Introducción a los Genéricos",
    code: `
  function identidad<T>(valor: T): T {
	return valor;
  }
  
  let numero = identidad<number>(10); // T es number
  let texto = identidad<string>("Hola"); // T es string

	console.log(numero);
	console.log(texto);
	  `,
    explanation:
      "Los genéricos permiten que las funciones y clases trabajen con cualquier tipo sin especificarlo explícitamente hasta que se usen. Aquí, `T` es un parámetro de tipo que se reemplaza por el tipo real cuando se llama a la función `identidad`.",
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
      "Los genéricos en funciones permiten que una función acepte y devuelva diferentes tipos de datos, aumentando su flexibilidad. `imprimirElemento` puede manejar cualquier tipo de dato que se le pase.",
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

console.log(primero);        // Esto mostrará 1 en la consola
console.log(primeraPalabra); // Esto mostrará "hola" en la consola
	  `,
    explanation:
      "Los genéricos son útiles para trabajar con arrays de cualquier tipo. En `obtenerPrimerElemento`, el tipo `T` asegura que la función puede trabajar con arrays de cualquier tipo y devolver el primer elemento del mismo tipo.",
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
      "Puedes restringir los tipos genéricos para que cumplan con ciertas condiciones. En este caso, `T` debe extender la interfaz `ConNombre`, lo que garantiza que cualquier objeto pasado a `saludar` tenga una propiedad `nombre`.",
    level: "intermediate",
  },
  {
    title: "5. Genéricos con Clases",
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
      "Las clases también pueden ser genéricas, permitiendo manejar diferentes tipos de datos con la misma clase. Aquí, `Caja` es una clase genérica que puede contener y manejar cualquier tipo de contenido.",
    level: "intermediate",
  },
];
