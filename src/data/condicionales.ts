export const condicionales = [
	{
	  title: "1. Estructura Básica de Condicionales `if`",
	  code: `
  let edad: number = 18;
  if (edad >= 18) {
	console.log("Es mayor de edad");
  }
	  `,
	  explanation:
		"La estructura `if` evalúa una condición booleana y ejecuta el bloque de código asociado si la condición es `true`. Es la forma más básica de control de flujo en TypeScript.",
	  level: "basic",
	},
	{
	  title: "2. Condicionales `if-else`",
	  code: `
  let hora: number = 10;
  if (hora < 12) {
	console.log("Buenos días");
  } else {
	console.log("Buenas tardes");
  }
	  `,
	  explanation:
		"La estructura `if-else` permite definir un bloque alternativo de código que se ejecuta cuando la condición en el `if` es `false`. Esto es útil para manejar diferentes escenarios en función de una condición.",
	  level: "basic",
	},
	{
	  title: "3. Condicionales Anidados",
	  code: `
  let nota: number = 85;
  if (nota >= 90) {
	console.log("Sobresaliente");
  } else if (nota >= 80) {
	console.log("Notable");
  } else {
	console.log("Aprobado");
  }
	  `,
	  explanation:
		"Las estructuras `else if` permiten evaluar múltiples condiciones en secuencia. Se ejecuta el primer bloque cuyo `if` es `true`, lo que permite manejar varios casos específicos.",
	  level: "basic",
	},
	{
	  title: "4. Operador Ternario `? :` para Condiciones Simples",
	  code: `
  let esActivo: boolean = true;
  let estado: string = esActivo ? "Activo" : "Inactivo";

  console.log(estado)
	  `,
	  explanation:
		"El operador ternario `? :` es una forma compacta de realizar una evaluación condicional que devuelve uno de dos valores posibles según el resultado de la condición. Es útil para simplificar condiciones simples en una sola línea.",
	  level: "basic",
	},
	{
	  title: "5. Switch Case para Condiciones Múltiples",
	  code: `
  let dia: string = "Lunes";
  switch (dia) {
	case "Lunes":
	  console.log("Inicio de semana");
	  break;
	case "Viernes":
	  console.log("Fin de semana");
	  break;
	default:
	  console.log("Día cualquiera");
  }
	  `,
	  explanation:
		"El `switch` es útil para evaluar una variable contra múltiples valores posibles (`case`). Se ejecuta el bloque correspondiente al primer `case` que coincide, y se puede usar `default` para manejar cualquier caso no especificado.",
	  level: "basic",
	}
  ];
  