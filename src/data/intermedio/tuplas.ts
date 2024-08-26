export const tuplas = [
  {
    title: "1. Tupla Básica",
    code: `
	  let persona: [string, number] = ["Ana", 25];
	  console.log(persona); // Salida: ["Ana", 25]
	  `,
    explanation:
      "Las tuplas en TypeScript permiten almacenar un conjunto de valores de tipos distintos en un solo array. En este caso, 'persona' es una tupla que almacena un string (nombre) y un número (edad).",
    level: "intermediate",
  },
  {
    title: "2. Acceso a Elementos de una Tupla",
    code: `
	  let coordenadas: [number, number] = [40.7128, -74.0060];
	  console.log(coordenadas[0]); // Salida: 40.7128
	  console.log(coordenadas[1]); // Salida: -74.0060
	  `,
    explanation:
      "Puedes acceder a los elementos de una tupla utilizando índices, igual que en los arrays. En este ejemplo, se accede a la latitud y longitud de una coordenada.",
    level: "intermediate",
  },
  {
    title: "3. Tuplas con Elementos Opcionales",
    code: `
	let contacto: [string, number?] = ["Ana", 123456789];
	console.log(contacto); // Salida: ["Ana", 123456789]

	contacto = ["Luis"]; // También es válido
	console.log(contacto); // Salida: ["Luis"]
	  `,
    explanation:
      "Las tuplas pueden tener elementos opcionales. En este caso, el número de teléfono es opcional, por lo que la tupla puede contener solo el nombre.",
    level: "intermediate",
  },
  {
    title: "4. Tuplas con Etiquetas de Propiedad",
    code: `
	
	let empleado: [nombre: string, edad: number, puesto: string] = ["Ana", 30, "Desarrolladora"];
	console.log(empleado); // Salida: ["Ana", 30, "Desarrolladora"]
	  `,
    explanation:
      "Puedes etiquetar los elementos de una tupla para mejorar la legibilidad del código. Esto no cambia la forma en que se almacenan los datos, pero facilita la comprensión del propósito de cada elemento.",
    level: "intermediate",
  },
  {
    title: "5. Tuplas con Tipos Mixtos",
    code: `
	let mezcla: [string, number, boolean] = ["Texto", 42, true];
	console.log(mezcla); // Salida: ["Texto", 42, true]
	  `,
    explanation:
      "Las tuplas pueden contener una mezcla de tipos de datos. En este ejemplo, 'mezcla' contiene un string, un número y un booleano.",
    level: "intermediate",
  },
  {
    title: "6. Uso de Tuplas en Funciones",
    code: `
	function procesarDatos(): [number, string] {
	return [200, "Éxito"];
	}

	const [codigo, mensaje] = procesarDatos();
	console.log(codigo); // Salida: 200
	console.log(mensaje); // Salida: "Éxito"
	  `,
    explanation:
      "Puedes usar tuplas como tipos de retorno en funciones. En este caso, 'procesarDatos' devuelve una tupla con un número y un string, y luego se desestructura para obtener esos valores.",
    level: "intermediate",
  },
  {
    title: "7. Tuplas en Arrays",
    code: `
	let tuplas: [string, number][] = [
	["Ana", 30],
	["Luis", 28]
	];

	console.log(tuplas); // Salida: [["Ana", 30], ["Luis", 28]]
	  `,
    explanation:
      "Puedes tener arrays de tuplas. En este ejemplo, 'tuplas' es un array que contiene varias tuplas, cada una con un string y un número.",
    level: "intermediate",
  },
  {
    title: "8. Tuplas y Funciones Genéricas",
    code: `
	function intercambiar<T, U>(tupla: [T, U]): [U, T] {
	return [tupla[1], tupla[0]];
	}

	const resultado = intercambiar([1, "Hola"]);
	console.log(resultado); // Salida: ["Hola", 1]
	  `,
    explanation:
      "Las tuplas pueden trabajar con funciones genéricas para crear operaciones más flexibles. En este ejemplo, la función 'intercambiar' toma una tupla de dos elementos y devuelve una nueva tupla con los elementos intercambiados.",
    level: "intermediate",
  },
  {
    title: "9. Tuplas con Desestructuración",
    code: `
	const [nombre, edad] = ["Ana", 25] as [string, number];
	console.log(nombre); // Salida: Ana
	console.log(edad); // Salida: 25
	`,
    explanation:
      "Puedes desestructurar tuplas de manera similar a los arrays. En este caso, se desestructura una tupla para obtener el nombre y la edad como variables separadas.",
    level: "intermediate",
  },
  {
    title: "10. Tuplas con Rest Parameters",
    code: `
	function concatenarTupla<T>(primerElemento: T, ...resto: T[]): [T, ...T[]] {
	return [primerElemento, ...resto];
	}

	const resultado = concatenarTupla("Primero", "Segundo", "Tercero");
	console.log(resultado); // Salida: ["Primero", "Segundo", "Tercero"]
	  `,
    explanation:
      "Las tuplas pueden combinarse con parámetros rest para crear estructuras más flexibles. En este ejemplo, la función 'concatenarTupla' acepta un primer elemento y un número variable de elementos adicionales, y devuelve una tupla que contiene todos estos elementos.",
    level: "intermediate",
  },
];
