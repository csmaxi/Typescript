export const asyncAwait = [
	{
	  title: "1. Definición de Funciones Asíncronas",
	  code: `
	  async function obtenerDatos(): Promise<string> {
		return "Datos obtenidos";
	  }
		obtenerDatos()
	  `,
	  explanation:
		"Las funciones asíncronas se definen usando la palabra clave `async` antes de la declaración de la función. Esto indica que la función devuelve una `Promise` y permite el uso de `await` dentro de ella. En este ejemplo, `obtenerDatos` es una función asíncrona que devuelve una `Promise` que se resuelve con un string.",
	  level: "advanced",
	},
	{
	  title: "2. Uso de Await",
	  code: `
	  async function procesarDatos(): Promise<void> {
		const datos = await obtenerDatos();
		console.log(datos); // Datos obtenidos
	  }
  
	  procesarDatos();
	  `,
	  explanation:
		"Dentro de una función `async`, puedes usar `await` para esperar a que una `Promise` se resuelva. El valor de la `Promise` resuelta se asigna a la variable `datos`. El uso de `await` hace que la ejecución de la función se pause hasta que la `Promise` se resuelva.",
	  level: "advanced",
	},
	{
	  title: "3. Manejo de Errores con Try/Catch",
	  code: `
	  async function obtenerDatosConError(): Promise<string> {
		throw new Error("Error al obtener datos");
	  }
  
	  async function procesarDatos() {
		try {
		  const datos = await obtenerDatosConError();
		  console.log(datos);
		} catch (error) {
		  console.error("Error:", error.message); // Error al obtener datos
		}
	  }
  
	  procesarDatos();
	  `,
	  explanation:
		"Puedes manejar errores en funciones asíncronas utilizando bloques `try/catch`. Si la `Promise` es rechazada, el control pasa al bloque `catch`, donde puedes manejar el error. En este ejemplo, `obtenerDatosConError` lanza un error, que es capturado y manejado en el bloque `catch` de `procesarDatos`.",
	  level: "advanced",
	},
	{
	  title: "4. Tipado de Funciones Asíncronas",
	  code: `
	  async function calcularSuma(a: number, b: number): Promise<number> {
		return a + b;
	  }
  
	  async function mostrarSuma() {
		const suma = await calcularSuma(5, 10);
		console.log(suma); // 15
	  }
  
	  mostrarSuma();
	  `,
	  explanation:
		"Las funciones asíncronas pueden ser tipadas de manera similar a las funciones regulares. Debes especificar el tipo de valor que la `Promise` resolverá en la declaración de la función. En este caso, `calcularSuma` devuelve una `Promise` que se resuelve con un `number`.",
	  level: "advanced",
	},
	{
	  title: "5. Llamadas Concurrentes con Await",
	  code: `
	  async function tarea1(): Promise<string> {
		return "Resultado de tarea1";
	  }
  
	  async function tarea2(): Promise<string> {
		return "Resultado de tarea2";
	  }
  
	  async function ejecutarTareas() {
		const [resultado1, resultado2] = await Promise.all([tarea1(), tarea2()]);
		console.log(resultado1); // Resultado de tarea1
		console.log(resultado2); // Resultado de tarea2
	  }
  
	  ejecutarTareas();
	  `,
	  explanation:
		"Puedes ejecutar múltiples promesas concurrentemente usando `Promise.all` con `await`. Esto es útil cuando tienes varias operaciones asíncronas que no dependen unas de otras y quieres esperar a que todas terminen antes de continuar. En este ejemplo, `tarea1` y `tarea2` se ejecutan en paralelo y sus resultados se obtienen juntos.",
	  level: "advanced",
	},
  ];
  