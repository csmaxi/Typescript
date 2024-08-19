export const variables = [
	{
	  title: "1. Declaración de Variables",
	  code: `
  let nombre: string = "Juan";
  nombre = "Ana";
  
  const edad: number = 30;
  // edad = 31; // Esto generará un error, ya que \`edad\` es una constante
  
  var ciudad: string = "Madrid";
  ciudad = "Barcelona";
	  `,
	  explanation:
		"En TypeScript, las variables se declaran utilizando `let`, `const`, o `var`. `let` se usa para variables que pueden cambiar, `const` para constantes, y `var` para variables con un ámbito de función. Sin embargo, se recomienda evitar `var` en favor de `let` y `const`.",
	  level: "basic",
	},
	{
	  title: "2. Inferencia de Tipos",
	  code: `
  let mensaje = "Hola, Mundo!"; // Inferido como string
  let numero = 42;              // Inferido como number
  
  let esActivo = true; // Inferido como boolean

  console.log(mensaje)
	  `,
	  explanation:
		"TypeScript puede inferir automáticamente el tipo de una variable basado en el valor asignado. Esto simplifica la sintaxis, aunque puedes especificar el tipo explícitamente si es necesario.",
	  level: "basic",
	},
	{
	  title: "3. Tipos Básicos",
	  code: `
  let nombre: string = "Carlos";
  let edad: number = 25;
  let esEstudiante: boolean = true;
  
  // nombre = 123; // Esto generará un error porque \`nombre\` es de tipo string

  console.log(nombre)
	  `,
	  explanation:
		"TypeScript soporta tipos básicos como `string`, `number`, y `boolean`. Declarar variables con tipos específicos ayuda a evitar errores al asegurarse de que solo contengan datos del tipo correcto.",
	  level: "basic",
	},
	{
	  title: "4. Tipos Compuestos y Complejos",
	  code: `
  let numeros: number[] = [1, 2, 3, 4];
  let palabras: string[] = ["uno", "dos", "tres"];
  
  let tupla: [string, number] = ["edad", 30];
  
  let persona: { nombre: string, edad: number } = {
	nombre: "Lucía",
	edad: 22
  };

  console.log(persona)
	  `,
	  explanation:
		"Además de los tipos básicos, TypeScript permite crear tipos compuestos como arrays, tuplas y objetos, donde puedes definir los tipos de los elementos o propiedades.",
	  level: "basic",
	},
	{
	  title: "5. Uniones de Tipos",
	  code: `
  let identificador: string | number;
  identificador = "ABC123";
  identificador = 123456;
  
  let resultado: boolean | string;
  resultado = true;
  resultado = "Éxito";
	  `,
	  explanation:
		"Las uniones de tipos (`|`) permiten que una variable acepte más de un tipo de dato. Esto es útil cuando el valor de la variable puede variar entre diferentes tipos.",
	  level: "basic",
	}
  ];
  