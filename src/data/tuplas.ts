export const tuplas = [
	{
		title: "1. Declaración de Tuplas",
		code: `
	  let miTupla: [string, number];
	  `,
		explanation:
		  "Para declarar una tupla en TypeScript, se especifica el tipo de cada elemento dentro de un array, en el orden en que deben aparecer. En este ejemplo, miTupla es una tupla que debe contener dos elementos: el primer elemento es un string y el segundo elemento es un number.",
		level: "intermediate",
	  },
	  {
		title: "2. Inicialización de una Tupla",
		code: `
	  miTupla = ["Hola", 42];
	  `,
		explanation:
		  "Después de declarar la tupla, puedes inicializarla asignando valores que coincidan con los tipos especificados. Aquí, la tupla miTupla tiene el valor 'Hola' en su primer elemento (de tipo string) y 42 en su segundo elemento (de tipo number).",
		level: "intermediate",
	  },
	  {
		title: "3. Acceso a Elementos de la Tupla",
		code: `
	  console.log(miTupla[0]); // "Hola"
	  console.log(miTupla[1]); // 42
	  `,
		explanation:
		  "Puedes acceder a los elementos de una tupla de la misma manera que lo harías con un array, utilizando índices.",
		level: "intermediate",
	  },
	  {
		title: "4. Actualización de Elementos",
		code: `
	  miTupla[0] = "Adiós";
	  miTupla[1] = 100;
	  
	  console.log(miTupla); // ["Adiós", 100]
	  `,
		explanation:
		  "Puedes actualizar los elementos de una tupla accediendo a ellos por su índice, siempre y cuando el nuevo valor sea del tipo correcto.",
		level: "intermediate",
	  },
	  {
		title: "5. Añadir Elementos",
		code: `
	  let otraTupla: [string, number, boolean] = ["Texto", 10, true];
	  otraTupla.push(false); // Esto es válido si el tipo está definido para permitir más elementos
	  console.log(otraTupla); // ["Texto", 10, true, false]
	  `,
		explanation:
		  "En versiones más recientes de TypeScript, puedes agregar elementos a una tupla utilizando métodos como push, pero estos elementos deben ser del tipo esperado si están especificados como parte de la tupla. Sin embargo, si la tupla tiene una longitud fija, añadir elementos más allá de esa longitud puede causar errores de tipo.",
		level: "intermediate",
	  },
	  {
		title: "6. Destructuración de Tuplas",
		code: `
	  let [saludo, numero] = miTupla;
	  console.log(saludo); // "Adiós"
	  console.log(numero); // 100
	  `,
		explanation:
		  "Puedes desestructurar una tupla en variables separadas utilizando la sintaxis de desestructuración.",
		level: "intermediate",
	  },
	  {
		title: "7. Tuplas Opcionales y Rest",
		code: `
	  let tuplaOpcional: [string, number?];
	  tuplaOpcional = ["Texto"]; // Esto es válido
	  
	  let tuplaConRest: [number, ...string[]];
	  tuplaConRest = [1, "a", "b", "c"];
	  `,
		explanation:
		  "Puedes definir elementos opcionales en una tupla usando el operador ?. Además, el operador rest (...) permite definir una tupla con un número variable de elementos, siempre que sean del mismo tipo.",
		level: "intermediate",
	  },
	  {
		title: "8. Tuplas y Tipos de Datos Complejos",
		code: `
	  let tuplaCompleja: [string, { edad: number }, [boolean, string]];
	  tuplaCompleja = ["Juan", { edad: 30 }, [true, "Activo"]];
	  `,
		explanation:
		  "Las tuplas también pueden contener tipos complejos como objetos o incluso otras tuplas. En este ejemplo, la tupla contiene un string, un objeto con una propiedad edad de tipo number, y una tupla que contiene un boolean y un string.",
		level: "intermediate",
	  },
	  {
		title: "9. Uso de Tuplas en Funciones",
		code: `
	  function devuelveTupla(): [string, number] {
		return ["Hola", 42];
	  }
	  
	  let [mensaje, valor] = devuelveTupla();
	  console.log(mensaje); // "Hola"
	  console.log(valor); // 42
	  `,
		explanation:
		  "Las tuplas pueden ser útiles para devolver múltiples valores de una función. En este caso, la función devuelve una tupla con un string y un number.",
		level: "intermediate",
	  },
	  {
		title: "10. Tuplas vs. Arrays",
		code: `
	  let arreglo: number[] = [1, 2, 3];
	  let tupla: [number, string] = [1, "texto"];
	  `,
		explanation:
		  "A diferencia de los arrays, las tuplas tienen una longitud fija que se define al declararlas. Cada elemento de una tupla puede tener un tipo diferente, mientras que los arrays suelen contener elementos del mismo tipo.",
		level: "intermediate",
	  },
	  
];