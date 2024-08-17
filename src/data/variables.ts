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
		"En TypeScript, las variables son contenedores que almacenan datos y pueden cambiar su valor a lo largo del tiempo. Puedes declarar una variable utilizando las palabras clave `let`, `const`, o `var`. `let` se usa para variables que pueden cambiar, `const` para constantes que no cambian, y `var` para variables con un ámbito de función, aunque `var` es menos recomendado en TypeScript.",
	  level: "basic",
	},
	{
	  title: "2. Inferencia de Tipos",
	  code: `
  let mensaje = "Hola, Mundo!"; // Inferido como string
  let numero = 42;              // Inferido como number
  
  let esActivo = true; // Inferido como boolean
	  `,
	  explanation:
		"TypeScript puede inferir el tipo de una variable basándose en el valor que se le asigna durante su declaración. Esto significa que no siempre es necesario especificar el tipo explícitamente, lo que simplifica el código.",
	  level: "basic",
	},
	{
	  title: "3. Tipos Básicos",
	  code: `
  let nombre: string = "Carlos";
  let edad: number = 25;
  let esEstudiante: boolean = true;
  
  // nombre = 123; // Esto generará un error porque \`nombre\` es de tipo string
	  `,
	  explanation:
		"TypeScript soporta varios tipos de datos básicos, como `string`, `number`, `boolean`, entre otros. Puedes declarar variables con tipos específicos para garantizar que solo contengan valores de ese tipo.",
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
	  `,
	  explanation:
		"Además de los tipos básicos, TypeScript permite declarar variables con tipos compuestos, como arrays, tuplas y objetos. Los arrays especifican el tipo de sus elementos, las tuplas tienen un número fijo de elementos con tipos diferentes, y los objetos definen el tipo de cada propiedad.",
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
		"TypeScript permite declarar variables que pueden contener más de un tipo de dato utilizando uniones de tipos (`|`). Esto es útil cuando una variable puede tener diferentes tipos de datos, dependiendo del contexto.",
	  level: "basic",
	},
	{
	  title: "6. Variables y Ámbito (Scope)",
	  code: `
  {
	let mensaje = "Hola!";
	console.log(mensaje); // "Hola!"
  }
  // console.log(mensaje); // Error: mensaje no está definido
  
  function ejemplo() {
	var texto = "Hola desde la función!";
	console.log(texto);
  }
  
  let saludo = "Hola, Mundo!";
  function mostrarSaludo() {
	console.log(saludo);
  }
  mostrarSaludo(); // "Hola, Mundo!"
	  `,
	  explanation:
		"El ámbito de una variable define dónde puede ser accesible dentro del código. TypeScript soporta tres tipos de ámbito: bloque, función y global. Las variables declaradas con `let` y `const` tienen un ámbito de bloque, las declaradas con `var` tienen un ámbito de función, y las declaradas fuera de cualquier función o bloque tienen un ámbito global.",
	  level: "basic",
	},
	{
	  title: "7. Variables con Tipos Literales",
	  code: `
  let estado: "activo" | "inactivo";
  estado = "activo";
  // estado = "pendiente"; // Error: "pendiente" no es un valor permitido
  
  let rol: "admin" | "usuario" | "invitado" = "usuario";
	  `,
	  explanation:
		"Los tipos literales permiten especificar variables que solo pueden contener un valor específico. Esto es útil para definir variables que representan estados o constantes específicas dentro de tu aplicación.",
	  level: "basic",
	}
  ];
  