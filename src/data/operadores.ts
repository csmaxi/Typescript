export const operadores = [
	{
		title: "1. Operadores de Asignación y Operadores Aritméticos Combinados",
		code: `
	  let x: number = 10; // x es de tipo number
	  x += 5; // x ahora es 15
	  x *= 2; // x ahora es 30
		`,
		explanation:
		  "En TypeScript, los operadores de asignación combinados como `+=`, `-=`, `*=`, `/=`, permiten realizar una operación aritmética y asignar el resultado a la misma variable en una sola expresión.",
		level: "basic",
	  },
	  {
		title: "2. Operadores de Comparación Estricta",
		code: `
	  let esIgualEstricto: boolean = 5 === "5"; // false
	  let esDiferenteEstricto: boolean = 5 !== "5"; // true
		`,
		explanation:
		  "TypeScript promueve el uso de operadores de comparación estricta `===` y `!==` en lugar de los operadores `==` y `!=`, ya que no realizan conversión de tipo implícita, lo que mejora la seguridad del tipo en las comparaciones.",
		level: "basic",
	  },
	  {
		title: "3. Operador Nullish Coalescing (??)",
		code: `
	  let nombre: string | null = null;
	  let nombrePorDefecto: string = nombre ?? "Anónimo";

	  console.log(nombrePorDefecto)
		`,
		explanation:
		  "El operador `??` devuelve el operando derecho si el operando izquierdo es `null` o `undefined`. Es especialmente útil para establecer valores predeterminados de forma segura.",
		level: "basic",
	  },
	  {
		title: "4. Operador de Encadenamiento Opcional (?.)",
		code: `
	  let persona: { nombre?: string } = { nombre: "Juan" };
	  let edad: number | undefined = persona?.edad;

	  console.log(persona)
		`,
		explanation:
		  "El operador `?.` permite acceder a propiedades o métodos de un objeto que podrían ser `null` o `undefined` sin causar un error. Esto facilita el manejo seguro de estructuras de datos complejas.",
		level: "basic",
	  },
	  {
		title: "5. Operadores Ternarios",
		code: `
	  let edad: number = 18;
	  let esAdulto: string = (edad >= 18) ? "Sí" : "No";

	  console.log(esAdulto)
		`,
		explanation:
		  "El operador ternario `? :` es una forma concisa de evaluar una condición y retornar uno de dos valores posibles. Es útil para simplificar declaraciones `if-else` simples en una sola línea.",
		level: "basic",
	  }
  ];
  