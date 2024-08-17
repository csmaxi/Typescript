export const funciones = [
	{
		title: "1. Declaración de Funciones",
		code: `
	  function sumar(a: number, b: number): number {
		return a + b;
	  }
	  `,
		explanation:
		  "Las funciones en TypeScript pueden ser declaradas de manera similar a JavaScript, pero puedes especificar los tipos de los parámetros y el tipo de retorno. En este ejemplo, `a` y `b` son parámetros de tipo `number` y la función `sumar` devuelve un valor de tipo `number`.",
		level: "basic",
	  },
	  {
		title: "1a. Función Anónima",
		code: `
	  let multiplicar = function (a: number, b: number): number {
		return a * b;
	  };
	  `,
		explanation:
		  "Las funciones anónimas (o funciones lambda) pueden ser asignadas a variables. Aquí también puedes especificar los tipos de los parámetros y el tipo de retorno.",
		level: "basic",
	  },
	  {
		title: "1b. Funciones Flecha",
		code: `
	  let dividir = (a: number, b: number): number => a / b;
	  `,
		explanation:
		  "Las funciones flecha son una sintaxis más concisa para definir funciones anónimas. En este ejemplo, `dividir` es una función flecha que toma dos parámetros `a` y `b` y devuelve su cociente.",
		level: "basic",
	  },
	  {
		title: "2. Parámetros Opcionales",
		code: `
	  function saludar(nombre: string, saludo?: string): string {
		return saludo ? \`\${saludo}, \${nombre}\` : \`Hola, \${nombre}\`;
	  }
	  
	  console.log(saludar("Juan")); // "Hola, Juan"
	  console.log(saludar("Juan", "Buenos días")); // "Buenos días, Juan"
	  `,
		explanation:
		  "Puedes declarar parámetros opcionales en una función utilizando el símbolo `?`. Los parámetros opcionales deben estar siempre después de los obligatorios.",
		level: "basic",
	  },
	  {
		title: "3. Parámetros con Valores por Defecto",
		code: `
	  function elevar(base: number, exponente: number = 2): number {
		return Math.pow(base, exponente);
	  }
	  
	  console.log(elevar(3)); // 9 (3^2)
	  console.log(elevar(3, 3)); // 27 (3^3)
	  `,
		explanation:
		  "Puedes establecer valores por defecto para los parámetros, que se usarán si no se proporciona un valor al llamar la función.",
		level: "basic",
	  },
	  {
		title: "4. Parámetros Rest",
		code: `
	  function sumarTodos(...numeros: number[]): number {
		return numeros.reduce((total, num) => total + num, 0);
	  }
	  
	  console.log(sumarTodos(1, 2, 3, 4)); // 10
	  `,
		explanation:
		  "El operador `...` permite que una función acepte un número variable de argumentos como un array.",
		level: "basic",
	  },
	  {
		title: "5. Sobrecarga de Funciones",
		code: `
	  function combinar(a: string, b: string): string;
	  function combinar(a: number, b: number): number;
	  function combinar(a: any, b: any): any {
		if (typeof a === "string" && typeof b === "string") {
		  return a + b;
		} else if (typeof a === "number" && typeof b === "number") {
		  return a + b;
		}
	  }
	  
	  console.log(combinar("Hola", "Mundo")); // "HolaMundo"
	  console.log(combinar(5, 10)); // 15
	  `,
		explanation:
		  "TypeScript permite la sobrecarga de funciones, donde una función puede tener múltiples firmas (o versiones) que aceptan diferentes tipos o cantidades de parámetros.",
		level: "basic",
	  },
	  {
		title: "6. Funciones como Tipos",
		code: `
	  let operar: (x: number, y: number) => number;
	  
	  operar = (a, b) => a + b;
	  console.log(operar(2, 3)); // 5
	  
	  operar = (a, b) => a * b;
	  console.log(operar(2, 3)); // 6
	  `,
		explanation:
		  "En TypeScript, las funciones pueden ser tratadas como tipos, lo que te permite asignar funciones a variables que siguen una firma específica.",
		level: "basic",
	  },
	  {
		title: "7. Funciones con Tipos Genéricos",
		code: `
	  function invertir<T>(array: T[]): T[] {
		return array.reverse();
	  }
	  
	  let numeros = invertir([1, 2, 3]); // [3, 2, 1]
	  let letras = invertir(["a", "b", "c"]); // ["c", "b", "a"]
	  `,
		explanation:
		  "Puedes crear funciones genéricas que trabajan con cualquier tipo de datos. Los tipos genéricos se especifican con `<T>`.",
		level: "basic",
	  },
	  {
		title: "8. Funciones que Devuelven Objetos",
		code: `
	  function crearPersona(nombre: string, edad: number): { nombre: string; edad: number } {
		return { nombre, edad };
	  }
	  
	  let persona = crearPersona("Ana", 28);
	  console.log(persona.nombre); // "Ana"
	  `,
		explanation:
		  "Una función puede devolver un objeto. Puedes definir el tipo del objeto devuelto, lo que ayuda a mantener un código más seguro y predecible.",
		level: "basic",
	  },
	  {
		title: "9. Funciones Asíncronas",
		code: `
	  async function obtenerDatos(): Promise<string> {
		return "Datos obtenidos";
	  }
	  
	  obtenerDatos().then(resultado => console.log(resultado)); // "Datos obtenidos"
	  `,
		explanation:
		  "Las funciones asíncronas en TypeScript se declaran utilizando la palabra clave `async` y pueden devolver una `Promise`.",
		level: "basic",
	  },
	  {
		title: "10. Funciones como Propiedades de Objetos",
		code: `
	  interface Calculadora {
		sumar(a: number, b: number): number;
		restar(a: number, b: number): number;
	  }
	  
	  let calculadora: Calculadora = {
		sumar: (a, b) => a + b,
		restar: (a, b) => a - b
	  };
	  
	  console.log(calculadora.sumar(5, 2)); // 7
	  `,
		explanation:
		  "Las funciones también pueden ser definidas como propiedades de un objeto o dentro de interfaces. En este ejemplo, la interfaz `Calculadora` define la firma de dos métodos.",
		level: "basic",
	  },
	  {
		title: "11. Funciones Callback",
		code: `
	  function procesarCallback(a: number, b: number, callback: (resultado: number) => void): void {
		let resultado = a + b;
		callback(resultado);
	  }
	  
	  procesarCallback(3, 7, (resultado) => console.log("Resultado: ", resultado)); // "Resultado: 10"
	  `,
		explanation:
		  "Las funciones en TypeScript pueden ser pasadas como parámetros a otras funciones, conocidas como callbacks. Esto es útil para ejecutar una función después de que otra haya terminado.",
		level: "basic",
	  },
	  {
		title: "12. Declaraciones de Función Recursiva",
		code: `
	  function factorial(n: number): number {
		if (n <= 1) return 1;
		return n * factorial(n - 1);
	  }
	  
	  console.log(factorial(5)); // 120
	  `,
		explanation:
		  "Las funciones recursivas son aquellas que se llaman a sí mismas. En TypeScript, puedes definirlas con tipos estrictos para asegurar que la recursión funcione correctamente.",
		level: "basic",
	  },
	  {
		title: "13. Sobrecarga con Diferentes Tipos de Retorno",
		code: `
	  function obtenerValor(valor: string): string;
	  function obtenerValor(valor: number): number;
	  function obtenerValor(valor: boolean): boolean;
	  function obtenerValor(valor: any): any {
		return valor;
	  }
	  
	  let stringResult = obtenerValor("Texto");
	  let numberResult = obtenerValor(123);
	  let booleanResult = obtenerValor(true);
	  
	  console.log(stringResult); // "Texto"
	  console.log(numberResult); // 123
	  console.log(booleanResult); // true
	  `,
		explanation:
		  "En TypeScript, puedes definir una función que devuelva diferentes tipos de valores dependiendo de la sobrecarga utilizada.",
		level: "basic",
	  },
	  
]