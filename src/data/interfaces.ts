export const interfaces = [
	{
	  title: "1. Definición Básica de una Interfaz",
	  code: `
  interface Persona {
	nombre: string;
	edad: number;
  }
  
  let persona: Persona = {
	nombre: "Juan",
	edad: 30
  };

  console.log(persona)
	  `,
	  explanation:
		"Una interfaz define la estructura de un objeto, especificando qué propiedades debe tener y sus tipos. En este caso, `Persona` requiere las propiedades `nombre` (string) y `edad` (number).",
	  level: "intermediate",
	},
	{
	  title: "2. Propiedades Opcionales",
	  code: `
  interface Persona {
	nombre: string;
	edad: number;
	direccion?: string;  // Propiedad opcional
  }
  
  let persona: Persona = {
	nombre: "Ana",
	edad: 28
  };

  console.log(persona)
	  `,
	  explanation:
		"Puedes usar el símbolo `?` para hacer que ciertas propiedades sean opcionales en una interfaz. Esto indica que el objeto puede o no tener esta propiedad.",
	  level: "intermediate",
	},
	{
	  title: "3. Métodos en Interfaces",
	  code: `
  interface Calculadora {
	sumar(a: number, b: number): number;
	restar(a: number, b: number): number;
  }
  
  let calculadora: Calculadora = {
	sumar: (a, b) => a + b,
	restar: (a, b) => a - b
  };
  
  console.log(calculadora.sumar(5, 3));  // 8
	  `,
	  explanation:
		"Las interfaces pueden incluir métodos, especificando sus firmas (nombre, parámetros y tipo de retorno). Esto asegura que cualquier objeto que implemente la interfaz tenga estos métodos.",
	  level: "intermediate",
	},
	{
	  title: "4. Interfaces para Funciones",
	  code: `
  interface Operacion {
	(a: number, b: number): number;
  }
  
  let multiplicar: Operacion = (a, b) => a * b;
  console.log(multiplicar(4, 5));  // 20
	  `,
	  explanation:
		"Las interfaces también pueden definir la forma de funciones, especificando los parámetros y el tipo de retorno. Esto es útil para garantizar que las funciones se adhieran a una firma específica.",
	  level: "intermediate",
	},
	{
	  title: "5. Herencia de Interfaces",
	  code: `
  interface Persona {
	nombre: string;
	edad: number;
  }
  
  interface Empleado extends Persona {
	salario: number;
  }
  
  let empleado: Empleado = {
	nombre: "Carlos",
	edad: 35,
	salario: 50000
  };

  console.log(empleado)
	  `,
	  explanation:
		"Las interfaces pueden extenderse, permitiendo que una interfaz herede propiedades y métodos de otra. Esto facilita la creación de interfaces más específicas sin duplicar código.",
	  level: "intermediate",
	},
  ];
  