export const manejoErrores = [
	{
	  title: "1. Uso Básico de `try`/`catch`",
	  code: `
	  // archivo: uso-basico-try-catch.ts
	  function dividir(a: number, b: number): number {
		try {
		  if (b === 0) {
			throw new Error("No se puede dividir por cero");
		  }
		  return a / b;
		} catch (error) {
		  console.error("Error:", error.message);
		  return 0; // Valor por defecto en caso de error
		}
	  }
  
	  console.log(dividir(10, 2));
	  console.log(dividir(10, 0));
	  `,
	  explanation:
		"El bloque `try` ejecuta el código que podría lanzar un error, mientras que `catch` captura y maneja el error. Aquí, `dividir` maneja el caso cuando el divisor es cero.",
	  level: "advanced",
	},
	{
	  title: "2. Manejo de Errores en Funciones",
	  code: `
	  // archivo: manejo-errores-en-funciones.ts
	  function calcularRaizCuadrada(numero: number): number {
		if (numero < 0) {
		  throw new Error("El número no puede ser negativo");
		}
		return Math.sqrt(numero);
	  }
  
	  try {
		console.log(calcularRaizCuadrada(9));
		console.log(calcularRaizCuadrada(-9));
	  } catch (error) {
		console.error("Error:", error.message);
	  }
	  `,
	  explanation:
		"Puedes lanzar errores personalizados dentro de funciones usando `throw`. Estos errores deben ser capturados por `try`/`catch` cuando se llaman a las funciones.",
	  level: "advanced",
	},
	{
	  title: "3. Uso de `finally` para Código de Limpieza",
	  code: `
	  // archivo: uso-finally.ts
	  function leerArchivo(nombre: string): string {
		try {
		  if (nombre === "") {
			throw new Error("El nombre del archivo no puede estar vacío");
		  }
		  return "Contenido del archivo";
		} finally {
		  console.log("Se ejecuta siempre, sin importar si hubo error");
		}
	  }
  
	  console.log(leerArchivo("archivo.txt"));
	  console.log(leerArchivo(""));
	  `,
	  explanation:
		"El bloque `finally` se ejecuta siempre, independientemente de si se lanzó un error o no. Es útil para realizar tareas de limpieza o liberar recursos.",
	  level: "advanced",
	},
	{
	  title: "4. Manejo de Errores con `try`/`catch` en Clases",
	  code: `
	  // archivo: manejo-errores-en-clases.ts
	  class Calculadora {
		dividir(a: number, b: number): number {
		  try {
			if (b === 0) {
			  throw new Error("No se puede dividir por cero");
			}
			return a / b;
		  } catch (error) {
			console.error("Error:", error.message);
			return 0; // Valor por defecto en caso de error
		  }
		}
	  }
  
	  const calc = new Calculadora();
	  console.log(calc.dividir(10, 2));
	  console.log(calc.dividir(10, 0));
	  `,
	  explanation:
		"El manejo de errores en métodos de clases es similar al manejo en funciones normales. Aquí, el método `dividir` de la clase `Calculadora` maneja la división por cero.",
	  level: "advanced",
	},
	{
	  title: "5. Creación de Errores Personalizados",
	  code: `
	  // archivo: errores-personalizados.ts
	  class MiError extends Error {
		constructor(mensaje: string) {
		  super(mensaje);
		  this.name = "MiError";
		}
	  }
  
	  function lanzarError(): void {
		throw new MiError("Este es un error personalizado");
	  }
  
	  try {
		lanzarError();
	  } catch (error) {
		if (error instanceof MiError) {
		  console.error("Error personalizado:", error.message);
		} else {
		  console.error("Error desconocido:", error);
		}
	  }
	  `,
	  explanation:
		"Puedes crear tus propios tipos de errores extendiendo la clase `Error`. Esto permite manejar errores personalizados de manera más específica.",
	  level: "advanced",
	},
	{
	  title: "6. Manejo de Errores en Promesas",
	  code: `
	  // archivo: manejo-errores-en-promesas.ts
	  function tarea(): Promise<string> {
		return new Promise((resolve, reject) => {
		  reject(new Error("Error en la promesa"));
		});
	  }
  
	  tarea()
		.then(resultado => console.log(resultado))
		.catch(error => console.error("Error en la promesa:", error.message));
	  `,
	  explanation:
		"Cuando trabajas con promesas, puedes manejar errores con `catch`. Aquí, la promesa es rechazada y el error se maneja en el bloque `catch`.",
	  level: "advanced",
	},
	{
	  title: "7. Encadenamiento de Promesas y Manejo de Errores",
	  code: `
	  // archivo: encadenamiento-promesas.ts
	  function primeraTarea(): Promise<number> {
		return Promise.resolve(10);
	  }
  
	  function segundaTarea(x: number): Promise<number> {
		return Promise.reject(new Error("Error en la segunda tarea"));
	  }
  
	  primeraTarea()
		.then(segundaTarea)
		.then(resultado => console.log(resultado))
		.catch(error => console.error("Error encadenado:", error.message));
	  `,
	  explanation:
		"En el encadenamiento de promesas, un error puede ser capturado en cualquier punto de la cadena usando `catch`. Aquí, el error en `segundaTarea` se maneja al final de la cadena.",
	  level: "advanced",
	},
	{
	  title: "8. Uso de `try`/`catch` con `setTimeout`",
	  code: `
	  // archivo: try-catch-con-settimeout.ts
	  function tareaAsincrona(): Promise<string> {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			reject(new Error("Error en tarea asíncrona"));
		  }, 1000);
		});
	  }
  
	  async function ejecutarTarea(): Promise<void> {
		try {
		  const resultado = await tareaAsincrona();
		  console.log(resultado);
		} catch (error) {
		  console.error("Error en setTimeout:", error.message);
		}
	  }
  
	  ejecutarTarea();
	  `,
	  explanation:
		"El uso de `setTimeout` con promesas también se maneja con `try`/`catch`. Aquí, el error en la tarea asíncrona es capturado y manejado correctamente.",
	  level: "advanced",
	},
	{
	  title: "9. Manejo de Errores con Eventos",
	  code: `
	  // archivo: manejo-errores-en-eventos.ts
	  document.getElementById('boton')?.addEventListener('click', () => {
		try {
		  throw new Error("Error al hacer clic");
		} catch (error) {
		  console.error("Error en el evento:", error.message);
		}
	  });
	  `,
	  explanation:
		"Puedes manejar errores en manejadores de eventos con `try`/`catch`. Aquí, el error generado al hacer clic en un botón se captura y maneja en el manejador del evento.",
	  level: "advanced",
	},
	{
	  title: "10. Manejo de Errores en Interacciones con APIs",
	  code: `
	  // archivo: manejo-errores-en-api.ts
	  async function obtenerDatosDeApi(url: string): Promise<any> {
		try {
		  const respuesta = await fetch(url);
		  if (!respuesta.ok) {
			throw new Error("Error en la respuesta de la API");
		  }
		  return await respuesta.json();
		} catch (error) {
		  console.error("Error al obtener datos de la API:", error.message);
		  return null; // Valor por defecto en caso de error
		}
	  }
  
	  obtenerDatosDeApi("https://api.example.com/datos")
		.then(data => console.log(data));
	  `,
	  explanation:
		"Cuando trabajas con APIs, es importante manejar tanto errores de red como errores de respuesta. Aquí, se capturan errores de la respuesta y se manejan adecuadamente.",
	  level: "advanced",
	},
  ];
  