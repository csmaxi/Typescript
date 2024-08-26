export const union = [
	{
	  title: "1. Unión de Tipos Básicos",
	  code: `
	  function imprimirId(id: number | string): void {
		console.log("ID:", id);
	  }
  
	  imprimirId(123); // Salida: ID: 123
	  imprimirId("ABC"); // Salida: ID: ABC
	  `,
	  explanation:
		"Los tipos de unión permiten que una variable o parámetro acepte múltiples tipos de valores. En este ejemplo, la función 'imprimirId' puede aceptar tanto números como cadenas.",
	  level: "advanced",
	},
	{
	  title: "2. Unión con Tipos de Objeto",
	  code: `
	  interface Usuario {
		nombre: string;
		edad: number;
	  }
  
	  interface Admin {
		nombre: string;
		rol: string;
	  }
  
	  function mostrarInfo(persona: Usuario | Admin): void {
		console.log("Nombre:", persona.nombre);
		if ("edad" in persona) {
		  console.log("Edad:", persona.edad);
		} else {
		  console.log("Rol:", persona.rol);
		}
	  }
  
	  const usuario: Usuario = { nombre: "Ana", edad: 30 };
	  const admin: Admin = { nombre: "Luis", rol: "Administrador" };
  
	  mostrarInfo(usuario); // Salida: Nombre: Ana, Edad: 30
	  mostrarInfo(admin); // Salida: Nombre: Luis, Rol: Administrador
	  `,
	  explanation:
		"Puedes usar tipos de unión con objetos y verificar el tipo en tiempo de ejecución usando `in` o `typeof`. En este caso, 'mostrarInfo' maneja tanto 'Usuario' como 'Admin' y usa `in` para distinguir entre ellos.",
	  level: "advanced",
	},
	{
	  title: "3. Unión con Tipos Literal",
	  code: `
	  type Resultado = "éxito" | "error";
  
	  function manejarResultado(resultado: Resultado): void {
		if (resultado === "éxito") {
		  console.log("Operación exitosa.");
		} else {
		  console.log("Ocurrió un error.");
		}
	  }
  
	  manejarResultado("éxito"); // Salida: Operación exitosa.
	  manejarResultado("error"); // Salida: Ocurrió un error.
	  `,
	  explanation:
		"Los tipos de unión también pueden incluir tipos literales específicos. En este ejemplo, 'Resultado' puede ser solo 'éxito' o 'error', y la función maneja esos valores de manera específica.",
	  level: "advanced",
	},
	{
	  title: "4. Unión de Tipos y Tipos Opcionales",
	  code: `
	  function procesarDato(dato: number | string | null): void {
		if (dato === null) {
		  console.log("No se proporcionó dato.");
		} else {
		  console.log("Dato:", dato);
		}
	  }
  
	  procesarDato(42); // Salida: Dato: 42
	  procesarDato("Hola"); // Salida: Dato: Hola
	  procesarDato(null); // Salida: No se proporcionó dato.
	  `,
	  explanation:
		"Puedes combinar tipos de unión con valores opcionales como `null`. En este ejemplo, 'procesarDato' acepta números, cadenas y null, y maneja cada caso de manera diferente.",
	  level: "advanced",
	},
	{
	  title: "5. Unión con Tipos de Array",
	  code: `
	  function sumarNumeros(o: number[] | [number, number]): number {
		if (Array.isArray(o) && o.length === 2) {
		  return o[0] + o[1];
		}
		return o.reduce((a, b) => a + b, 0);
	  }
  
	  console.log(sumarNumeros([1, 2, 3])); // Salida: 6
	  console.log(sumarNumeros([4, 5])); // Salida: 9
	  `,
	  explanation:
		"Puedes usar tipos de unión con arrays para permitir diferentes estructuras de datos. En este ejemplo, 'sumarNumeros' puede aceptar un array de números o una tupla específica de dos números y sumar los elementos adecuadamente.",
	  level: "advanced",
	},
	{
	  title: "6. Unión con Tipos Genéricos",
	  code: `
	  function obtenerValor<T>(valor: T | null): T | null {
		return valor;
	  }
  
	  console.log(obtenerValor(42)); // Salida: 42
	  console.log(obtenerValor(null)); // Salida: null
	  `,
	  explanation:
		"Los tipos de unión también pueden usarse con tipos genéricos. En este caso, 'obtenerValor' puede manejar cualquier tipo T junto con null, proporcionando flexibilidad en el tipo de valor que se puede aceptar.",
	  level: "advanced",
	},
	{
	  title: "7. Unión en Parámetros de Función",
	  code: `
	  function procesarEntrada(entrada: string | number): void {
		if (typeof entrada === "string") {
		  console.log("Cadena de texto:", entrada);
		} else {
		  console.log("Número:", entrada);
		}
	  }
  
	  procesarEntrada("Texto"); // Salida: Cadena de texto: Texto
	  procesarEntrada(123); // Salida: Número: 123
	  `,
	  explanation:
		"Los tipos de unión permiten que los parámetros de una función acepten múltiples tipos. En este ejemplo, 'procesarEntrada' puede aceptar tanto strings como números y maneja cada tipo adecuadamente usando `typeof`.",
	  level: "advanced",
	},
	{
	  title: "8. Unión con Tipos de Objetos Complejos",
	  code: `
	  interface Rectangle {
		tipo: "rectángulo";
		ancho: number;
		alto: number;
	  }
  
	  interface Circulo {
		tipo: "círculo";
		radio: number;
	  }
  
	  type Forma = Rectangle | Circulo;
  
	  function calcularArea(form: Forma): number {
		if (form.tipo === "rectángulo") {
		  return form.ancho * form.alto;
		} else {
		  return Math.PI * (form.radio ** 2);
		}
	  }
  
	  console.log(calcularArea({ tipo: "rectángulo", ancho: 5, alto: 10 })); // Salida: 50
	  console.log(calcularArea({ tipo: "círculo", radio: 3 })); // Salida: 28.274333882308138
	  `,
	  explanation:
		"Puedes usar tipos de unión con tipos de objetos complejos para manejar diferentes estructuras de datos. En este caso, 'Forma' puede ser un rectángulo o un círculo, y la función 'calcularArea' calcula el área según el tipo de forma proporcionado.",
	  level: "advanced",
	},
	{
	  title: "9. Unión con Tipos en Objetos Anidados",
	  code: `
	  interface NodoHoja {
		tipo: "hoja";
		valor: number;
	  }
  
	  interface NodoInterior {
		tipo: "interior";
		izquierda: Nodo | null;
		derecha: Nodo | null;
	  }
  
	  type Nodo = NodoHoja | NodoInterior;
  
	  function procesarNodo(nodo: Nodo): void {
		if (nodo.tipo === "hoja") {
		  console.log("Valor de hoja:", nodo.valor);
		} else {
		  console.log("Nodo interior con hijos.");
		  if (nodo.izquierda) procesarNodo(nodo.izquierda);
		  if (nodo.derecha) procesarNodo(nodo.derecha);
		}
	  }
  
	  const hoja: NodoHoja = { tipo: "hoja", valor: 1 };
	  const nodo: NodoInterior = { tipo: "interior", izquierda: hoja, derecha: null };
  
	  procesarNodo(nodo);
	  `,
	  explanation:
		"Los tipos de unión también se pueden usar en estructuras de datos más complejas, como árboles. En este caso, 'Nodo' puede ser una hoja o un nodo interior, y 'procesarNodo' maneja cada tipo de nodo de manera adecuada.",
	  level: "advanced",
	},
	{
	  title: "10. Unión con Tipos de Función",
	  code: `
	  function manejarCallback(callback: (() => void) | null): void {
		if (callback) {
		  callback();
		} else {
		  console.log("No se proporcionó callback.");
		}
	  }
  
	  manejarCallback(() => console.log("Callback ejecutado.")); // Salida: Callback ejecutado.
	  manejarCallback(null); // Salida: No se proporcionó callback.
	  `,
	  explanation:
		"Puedes usar tipos de unión para funciones que aceptan diferentes tipos de callbacks o funciones. En este caso, 'manejarCallback' acepta una función o null, y ejecuta el callback si está presente.",
	  level: "advanced",
	}
  ];
  