export const asyncAwait = [
	{
	  title: "1. Función Asíncrona Básica",
	  code: `
	  // archivo: funcion-asincra-basica.ts
	  async function obtenerMensaje(): Promise<string> {
		return "Hola, mundo!";
	  }
  
	  obtenerMensaje().then(mensaje => console.log(mensaje));
	  `,
	  explanation:
		"Una función asíncrona se declara con `async` y devuelve una promesa. `obtenerMensaje` devuelve una cadena envuelta en una promesa.",
	  level: "advanced",
	},
	{
	  title: "2. Uso Básico de `await`",
	  code: `
	  // archivo: uso-basico-await.ts
	  async function sumar(a: number, b: number): Promise<number> {
		return a + b;
	  }
  
	  async function mostrarResultado(): Promise<void> {
		const resultado = await sumar(5, 3);
		console.log(resultado);
	  }
  
	  mostrarResultado();
	  `,
	  explanation:
		"Dentro de una función `async`, `await` se usa para esperar el resultado de una promesa antes de continuar con el código.",
	  level: "advanced",
	},
	{
	  title: "3. Esperar Múltiples Promesas",
	  code: `
	  // archivo: esperar-multiples-promesas.ts
	  function retraso(ms: number): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, ms));
	  }
  
	  async function esperar(): Promise<void> {
		console.log("Esperando 2 segundos...");
		await retraso(2000);
		console.log("Hecho!");
	  }
  
	  esperar();
	  `,
	  explanation:
		"Puedes usar `await` para esperar a que se complete una promesa. En este ejemplo, `esperar` hace una pausa de 2 segundos antes de continuar.",
	  level: "advanced",
	},
	{
	  title: "4. Encadenamiento de Promesas",
	  code: `
	  // archivo: encadenamiento-promesas.ts
	  async function obtenerNumero(): Promise<number> {
		return 42;
	  }
  
	  async function procesarNumero(): Promise<void> {
		const numero = await obtenerNumero();
		console.log(\`El número es: \${numero}\`);
	  }
  
	  procesarNumero();
	  `,
	  explanation:
		"Usa `await` para encadenar la resolución de promesas y trabajar con el valor devuelto. Aquí, `procesarNumero` obtiene un número y lo muestra.",
	  level: "advanced",
	},
	{
	  title: "5. Funciones Asíncronas con Parámetros",
	  code: `
	  // archivo: async-con-parametros.ts
	  async function multiplicar(a: number, b: number): Promise<number> {
		return a * b;
	  }
  
	  async function mostrarResultado(a: number, b: number): Promise<void> {
		const resultado = await multiplicar(a, b);
		console.log(\`El resultado es: \${resultado}\`);
	  }
  
	  mostrarResultado(4, 5);
	  `,
	  explanation:
		"Las funciones `async` pueden aceptar parámetros. En este ejemplo, `mostrarResultado` multiplica dos números y muestra el resultado.",
	  level: "advanced",
	},
	{
	  title: "6. Funciones `async` en Clases",
	  code: `
	  // archivo: async-en-clases.ts
	  class ApiService {
		async obtenerDatos(): Promise<string> {
		  return "Datos obtenidos";
		}
	  }
  
	  const apiService = new ApiService();
	  apiService.obtenerDatos().then(datos => console.log(datos));
	  `,
	  explanation:
		"Los métodos dentro de una clase también pueden ser `async`. `obtenerDatos` es un método asíncrono que devuelve una promesa con una cadena.",
	  level: "advanced",
	},
	{
	  title: "7. Uso de `await` con `Promise.all`",
	  code: `
	  // archivo: promise-all.ts
	  function tarea1(): Promise<string> {
		return new Promise(resolve => setTimeout(() => resolve("Tarea 1 completada"), 1000));
	  }
  
	  function tarea2(): Promise<string> {
		return new Promise(resolve => setTimeout(() => resolve("Tarea 2 completada"), 500));
	  }
  
	  async function realizarTareas(): Promise<void> {
		const [resultado1, resultado2] = await Promise.all([tarea1(), tarea2()]);
		console.log(resultado1);
		console.log(resultado2);
	  }
  
	  realizarTareas();
	  `,
	  explanation:
		"Puedes ejecutar múltiples promesas en paralelo usando `Promise.all` con `await`. Espera a que todas las promesas se resuelvan antes de continuar.",
	  level: "advanced",
	},
	{
	  title: "8. `await` en Funciones Asíncronas Concurrentes",
	  code: `
	  // archivo: async-concurrente.ts
	  async function fetchData(url: string): Promise<string> {
		const response = await fetch(url);
		return response.text();
	  }
  
	  async function procesarDatos(): Promise<void> {
		const datos = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
		console.log(datos);
	  }
  
	  procesarDatos();
	  `,
	  explanation:
		"`await` permite que una función espere los resultados de una operación asíncrona. En este caso, `procesarDatos` obtiene datos de una API y los imprime.",
	  level: "advanced",
	},
	{
	  title: "9. `await` con Funciones de Espera Personalizadas",
	  code: `
	  // archivo: esperar-personalizado.ts
	  function retraso(ms: number): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, ms));
	  }
  
	  async function hacerPausa(): Promise<void> {
		console.log("Pausa...");
		await retraso(1000);
		console.log("Pausa terminada.");
	  }
  
	  hacerPausa();
	  `,
	  explanation:
		"Puedes usar `await` con funciones personalizadas que devuelven promesas. `hacerPausa` espera 1 segundo antes de continuar.",
	  level: "advanced",
	},
	{
	  title: "10. `await` con Funciones Asíncronas en `for` Loops",
	  code: `
	  // archivo: async-for-loop.ts
	  async function tarea(id: number): Promise<string> {
		return new Promise(resolve => setTimeout(() => resolve(\`Tarea \${id} completada\`), 1000));
	  }
  
	  async function realizarTareas(): Promise<void> {
		for (let i = 1; i <= 3; i++) {
		  const resultado = await tarea(i);
		  console.log(resultado);
		}
	  }
  
	  realizarTareas();
	  `,
	  explanation:
		"Puedes usar `await` dentro de bucles para esperar a que cada promesa se resuelva antes de pasar a la siguiente iteración. Aquí, cada tarea se completa secuencialmente.",
	  level: "advanced",
	}
  ];
  