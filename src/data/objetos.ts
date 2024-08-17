export  const objetos = [
	{
		title: "1. Declaración Básica de Objetos",
		code: `
	  let persona = {
		nombre: "Juan",
		edad: 30,
		esEmpleado: true
	  };
	  `,
		explanation:
		  "Un objeto en TypeScript es una colección de pares clave-valor, donde las claves son cadenas (o símbolos) y los valores pueden ser de cualquier tipo. En este ejemplo, `persona` es un objeto con tres propiedades: `nombre`, `edad` y `esEmpleado`.",
		level: "intermediate",
	  },
	  {
		title: "2. Especificar el Tipo de un Objeto",
		code: `
	  let persona: { nombre: string; edad: number; esEmpleado: boolean } = {
		nombre: "Juan",
		edad: 30,
		esEmpleado: true
	  };
	  `,
		explanation:
		  "Puedes definir el tipo de un objeto explícitamente usando anotaciones de tipo. Esto asegura que `persona` tenga exactamente las propiedades definidas y con los tipos correctos.",
		level: "intermediate",
	  },
	  {
		title: "3. Propiedades Opcionales",
		code: `
	  let persona: { nombre: string; edad: number; esEmpleado?: boolean } = {
		nombre: "Juan",
		edad: 30
	  };
	  `,
		explanation:
		  "Puedes declarar propiedades opcionales en un objeto usando el símbolo `?`. En este ejemplo, `esEmpleado` es opcional, por lo que `persona` puede tenerla o no.",
		level: "intermediate",
	  },
	  {
		title: "4. Propiedades de Solo Lectura",
		code: `
	  let persona: { readonly nombre: string; edad: number } = {
		nombre: "Juan",
		edad: 30
	  };
	  
	  // persona.nombre = "Pedro"; // Error: no se puede asignar a 'nombre' porque es una propiedad de solo lectura.
	  `,
		explanation:
		  "Puedes declarar propiedades como de solo lectura utilizando el modificador `readonly`. Esto evita que esas propiedades se modifiquen después de la inicialización.",
		level: "intermediate",
	  },
	  {
		title: "5. Objetos con Propiedades Indexadas",
		code: `
	  let puntajes: { [nombre: string]: number } = {
		Juan: 10,
		Ana: 12,
		Pedro: 8
	  };
	  `,
		explanation:
		  "TypeScript te permite crear objetos donde las propiedades pueden tener nombres dinámicos utilizando tipos de índice. En este caso, `puntajes` es un objeto donde las claves son cadenas (`string`) y los valores son números (`number`).",
		level: "intermediate",
	  },
	  {
		title: "6. Interfaces",
		code: `
	  interface Persona {
		nombre: string;
		edad: number;
		esEmpleado?: boolean; // Propiedad opcional
	  }
	  
	  let persona: Persona = {
		nombre: "Ana",
		edad: 25
	  };
	  `,
		explanation:
		  "Las interfaces en TypeScript permiten definir la estructura de un objeto de una manera más reutilizable y clara. En este ejemplo, `Persona` define un objeto con propiedades opcionales y obligatorias.",
		level: "intermediate",
	  },
	  {
		title: "7. Extensión de Interfaces",
		code: `
	  interface Trabajador extends Persona {
		salario: number;
	  }
	  
	  let empleado: Trabajador = {
		nombre: "Carlos",
		edad: 28,
		salario: 50000
	  };
	  `,
		explanation:
		  "Puedes extender una interfaz para crear otra con propiedades adicionales o modificadas. En este caso, `Trabajador` extiende `Persona`, añadiendo la propiedad `salario`.",
		level: "intermediate",
	  },
	  {
		title: "8. Intersección de Tipos",
		code: `
	  interface Contacto {
		telefono: string;
	  }
	  
	  type EmpleadoContacto = Persona & Contacto;
	  
	  let empleadoContacto: EmpleadoContacto = {
		nombre: "Sara",
		edad: 32,
		telefono: "123-456-7890"
	  };
	  `,
		explanation:
		  "TypeScript permite crear tipos combinando varios tipos existentes usando el operador `&`. Esto es útil para crear objetos que deben cumplir con múltiples requisitos.",
		level: "intermediate",
	  },
	  {
		title: "9. Funciones Dentro de Objetos",
		code: `
	  let calculadora: {
		sumar: (a: number, b: number) => number;
		restar: (a: number, b: number) => number;
	  } = {
		sumar: (a, b) => a + b,
		restar: (a, b) => a - b
	  };
	  
	  let resultado = calculadora.sumar(5, 3); // 8
	  `,
		explanation:
		  "Los objetos en TypeScript pueden contener funciones (métodos). Puedes definir tipos para estas funciones dentro del objeto.",
		level: "intermediate",
	  },
	  {
		title: "10. Funciones como Propiedades de Objetos",
		code: `
	  interface Operaciones {
		sumar(a: number, b: number): number;
		restar(a: number, b: number): number;
	  }
	  
	  let operaciones: Operaciones = {
		sumar: (a, b) => a + b,
		restar: (a, b) => a - b
	  };
	  `,
		explanation:
		  "Las interfaces también permiten definir métodos en los objetos, proporcionando una forma estructurada de trabajar con funciones dentro de objetos.",
		level: "intermediate",
	  },
	  {
		title: "11. Type Aliases (Alias de Tipos)",
		code: `
	  type Persona = {
		nombre: string;
		edad: number;
	  };
	  
	  let persona: Persona = {
		nombre: "Luis",
		edad: 40
	  };
	  `,
		explanation:
		  "Puedes crear un alias de tipo para describir la forma de un objeto, similar a las interfaces. Esto es útil para simplificar la reutilización de tipos complejos.",
		level: "intermediate",
	  },
	  {
		title: "12. Desestructuración de Objetos",
		code: `
	  let persona = { nombre: "Eva", edad: 35 };
	  
	  let { nombre, edad } = persona;
	  
	  console.log(nombre); // "Eva"
	  console.log(edad);   // 35
	  `,
		explanation:
		  "La desestructuración te permite extraer propiedades de un objeto y asignarlas a variables individuales de manera más concisa y clara.",
		level: "intermediate",
	  },
	  {
		title: "13. Combinar Objetos",
		code: `
	  let direccion = { ciudad: "Madrid", pais: "España" };
	  let personaCompleta = { ...persona, ...direccion };
	  
	  console.log(personaCompleta); // { nombre: "Eva", edad: 35, ciudad: "Madrid", pais: "España" }
	  `,
		explanation:
		  "Puedes combinar múltiples objetos utilizando el operador de propagación (`...`). Esto te permite crear nuevos objetos combinando las propiedades de otros.",
		level: "intermediate",
	  },
	  {
		title: "14. Tipos de Objetos Anidados",
		code: `
	  interface Direccion {
		calle: string;
		ciudad: string;
	  }
	  
	  interface Persona {
		nombre: string;
		edad: number;
		direccion: Direccion; // Objeto anidado
	  }
	  
	  let persona: Persona = {
		nombre: "Carlos",
		edad: 27,
		direccion: {
		  calle: "Calle Falsa 123",
		  ciudad: "Lima"
		}
	  };
	  `,
		explanation:
		  "Los objetos pueden contener otros objetos, y TypeScript permite definir estos tipos de manera clara mediante interfaces anidadas.",
		level: "intermediate",
	  },
	  
];