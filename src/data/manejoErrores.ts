export const manejoErrores = [
	{
	  title: "1. Estructura Básica de Try/Catch",
	  code: `
	  function dividir(a: number, b: number): number {
		try {
		  if (b === 0) {
			throw new Error("División por cero");
		  }
		  return a / b;
		} catch (error) {
		  console.error("Error:", error.message);
		  return 0;
		}
	  }
	  
	  console.log(dividir(10, 2)); // 5
	  console.log(dividir(10, 0)); // Error: División por cero
	  `,
	  explanation:
		"La estructura básica del bloque `try/catch` permite manejar errores en el código. El bloque `try` contiene el código que puede lanzar un error, mientras que el bloque `catch` maneja el error si ocurre. En este ejemplo, si `b` es cero, se lanza un error que es capturado y manejado en el bloque `catch`.",
	  level: "advanced",
	},
	{
	  title: "2. Tipado de Errores en Catch",
	  code: `
	  function manejarError(): void {
		try {
		  throw new Error("Algo salió mal");
		} catch (error) {
		  if (error instanceof Error) {
			console.error("Mensaje del error:", error.message);
		  } else {
			console.error("Error desconocido");
		  }
		}
	  }
	  
	  manejarError(); // Mensaje del error: Algo salió mal
	  `,
	  explanation:
		"En TypeScript, el tipo de `error` en el bloque `catch` no está garantizado. Puede ser un objeto de tipo `Error` o cualquier otro tipo. Usar `instanceof` para verificar si el `error` es una instancia de `Error` ayuda a manejarlo correctamente. Esto permite acceder de manera segura a las propiedades de `Error`, como `message`.",
	  level: "advanced",
	},
	{
	  title: "3. Tipado de Funciones con Errores",
	  code: `
	  function puedeFallir(): never {
		throw new Error("Error crítico");
	  }
	  
	  function ejecutar(): void {
		try {
		  puedeFallir();
		} catch (error) {
		  console.error("Error atrapado:", error);
		}
	  }
	  
	  ejecutar();
	  `,
	  explanation:
		"La función que siempre lanza un error se puede tipar como `never`, indicando que nunca devuelve un valor. En el bloque `try`, al llamar a una función que lanza un error, puedes manejar el error en el bloque `catch` de la función que lo llama, permitiendo un manejo de errores más estructurado.",
	  level: "advanced",
	},
	{
	  title: "4. Errores en Código Asíncrono",
	  code: `
	  async function tarea(): Promise<void> {
		try {
		  throw new Error("Error en la tarea");
		} catch (error) {
		  console.error("Error en tarea:", error);
		}
	  }
	  
	  tarea(); // Error en tarea: Error: Error en la tarea
	  `,
	  explanation:
		"En funciones asíncronas, el manejo de errores con `try/catch` funciona de manera similar a las funciones síncronas. Puedes usar `try/catch` para manejar errores que ocurren en operaciones asíncronas dentro de `async/await`. Esto garantiza que los errores en operaciones asíncronas sean capturados y manejados adecuadamente.",
	  level: "advanced",
	},
	{
	  title: "5. Errores y Funciones Genéricas",
	  code: `
	  function manejarErrorGenerico<T>(func: () => T): T | undefined {
		try {
		  return func();
		} catch (error) {
		  console.error("Error en función:", error);
		  return undefined;
		}
	  }
	  
	  const resultado = manejarErrorGenerico(() => {
		throw new Error("Error en función generica");
	  });
	  
	  console.log(resultado); // undefined
	  `,
	  explanation:
		"Puedes usar `try/catch` en funciones genéricas para manejar errores en funciones que pueden lanzar excepciones. En este ejemplo, `manejarErrorGenerico` recibe una función `func` y maneja cualquier error que ocurra durante su ejecución, retornando `undefined` en caso de error. Esto permite aplicar un manejo de errores consistente a varias funciones genéricas.",
	  level: "advanced",
	},
  ];
  