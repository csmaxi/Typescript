export const condicionales = [
	{
		title: "1. Condicionales Básicos: if, else if, else",
		code: `
	  let numero = 10;
	  
	  if (numero > 5) {
		console.log("El número es mayor que 5");
	  }
		`,
		explanation:
		  "La declaración `if` se utiliza para ejecutar un bloque de código solo si se cumple una condición. En este ejemplo, el código dentro del `if` se ejecutará porque `numero` es mayor que 5.",
		level: "basic",
	  },
	  {
		title: "1a. Uso de else",
		code: `
	  let numero = 3;
	  
	  if (numero > 5) {
		console.log("El número es mayor que 5");
	  } else {
		console.log("El número es menor o igual a 5");
	  }
		`,
		explanation:
		  "Puedes usar `else` para definir un bloque de código que se ejecutará si la condición del `if` es falsa. Aquí, el código dentro de `else` se ejecutará porque `numero` es menor o igual a 5.",
		level: "basic",
	  },
	  {
		title: "1b. Uso de else if",
		code: `
	  let numero = 5;
	  
	  if (numero > 5) {
		console.log("El número es mayor que 5");
	  } else if (numero === 5) {
		console.log("El número es igual a 5");
	  } else {
		console.log("El número es menor que 5");
	  }
		`,
		explanation:
		  "`else if` se usa para probar múltiples condiciones. Si la primera condición es falsa, se evaluarán las condiciones adicionales. Aquí, el código dentro de `else if` se ejecutará porque `numero` es igual a 5.",
		level: "basic",
	  },
	  {
		title: "2. Operador Ternario",
		code: `
	  let edad = 18;
	  let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
	  console.log(mensaje);
		`,
		explanation:
		  "El operador ternario es una manera compacta de escribir una declaración `if-else`. Es ideal para condiciones simples. Aquí, si `edad` es mayor o igual a 18, `mensaje` será 'Eres mayor de edad'. De lo contrario, será 'Eres menor de edad'.",
		level: "basic",
	  },
	  {
		title: "3. Switch Case",
		code: `
	  let dia = 3;
	  let nombreDia: string;
	  
	  switch (dia) {
		case 1:
		  nombreDia = "Lunes";
		  break;
		case 2:
		  nombreDia = "Martes";
		  break;
		case 3:
		  nombreDia = "Miércoles";
		  break;
		case 4:
		  nombreDia = "Jueves";
		  break;
		case 5:
		  nombreDia = "Viernes";
		  break;
		case 6:
		  nombreDia = "Sábado";
		  break;
		case 7:
		  nombreDia = "Domingo";
		  break;
		default:
		  nombreDia = "Día no válido";
	  }
	  
	  console.log(nombreDia); // "Miércoles"
		`,
		explanation:
		  "`switch` es una alternativa al uso de múltiples `if-else`. Es útil cuando tienes que comparar una variable con muchos valores posibles. Aquí, dependiendo del valor de `dia`, `nombreDia` será asignado a un día específico.",
		level: "basic",
	  },
	  {
		title: "4. Evaluación de Condiciones Compuestas",
		code: `
	  let edad = 20;
	  let tieneLicencia = true;
	  
	  if (edad >= 18 && tieneLicencia) {
		console.log("Puedes conducir");
	  }
		`,
		explanation:
		  "Puedes combinar múltiples condiciones usando operadores lógicos como `&&` (AND). En este ejemplo, ambas condiciones deben ser verdaderas para que el bloque de código se ejecute.",
		level: "basic",
	  },
	  {
		title: "4a. Uso de || (OR)",
		code: `
	  let diaLaboral = false;
	  let esFeriado = true;
	  
	  if (diaLaboral || esFeriado) {
		console.log("No tienes que trabajar hoy");
	  }
		`,
		explanation:
		  "El operador `||` (OR) se utiliza para ejecutar el código si al menos una de las condiciones es verdadera. Aquí, el mensaje se imprimirá porque `esFeriado` es `true`.",
		level: "basic",
	  },
	  {
		title: "4b. Uso de ! (NOT)",
		code: `
	  let esDeNoche = true;
	  
	  if (!esDeNoche) {
		console.log("Es de día");
	  } else {
		console.log("Es de noche");
	  }
		`,
		explanation:
		  "El operador `!` se utiliza para negar una condición. En este ejemplo, el mensaje 'Es de noche' se imprimirá porque `esDeNoche` es `true`.",
		level: "basic",
	  },
	  {
		title: "5. Condicionales en Expresiones Avanzadas",
		code: `
	  let numero = 15;
	  
	  let resultado = (numero % 2 === 0) ? "par" : "impar";
	  console.log(\`El número es \${resultado}\`); // "El número es impar"
		`,
		explanation:
		  "En TypeScript, puedes utilizar condicionales en expresiones más complejas, como el uso del operador ternario para determinar si un número es par o impar.",
		level: "basic",
	  },
	  {
		title: "6. Type Guards (Guardianes de Tipo)",
		code: `
	  function imprimirLongitud(x: string | number): void {
		if (typeof x === "string") {
		  console.log(\`La longitud de la cadena es \${x.length}\`);
		} else {
		  console.log(\`El valor numérico es \${x}\`);
		}
	  }
	  
	  imprimirLongitud("Hola Mundo"); // "La longitud de la cadena es 11"
	  imprimirLongitud(12345); // "El valor numérico es 12345"
		`,
		explanation:
		  "Los guardianes de tipo (`type guards`) permiten crear condiciones que dependen del tipo de una variable. Esto es útil cuando se trabaja con tipos de unión en TypeScript.",
		level: "basic",
	  },
	  {
		title: "7. Condiciones con Tipos Literales",
		code: `
	  type Respuesta = "sí" | "no" | "tal vez";
	  
	  function responder(respuesta: Respuesta): string {
		if (respuesta === "sí") {
		  return "Has respondido afirmativamente";
		} else if (respuesta === "no") {
		  return "Has respondido negativamente";
		} else {
		  return "No estás seguro";
		}
	  }
	  
	  console.log(responder("sí")); // "Has respondido afirmativamente"
		`,
		explanation:
		  "Puedes usar tipos literales en combinación con condicionales para crear flujos de control altamente específicos. Aquí, la función `responder` devuelve diferentes mensajes según el valor de `respuesta`.",
		level: "basic",
	  },
	  {
		title: "8. Condiciones con Valores Nullish (Nullish Coalescing)",
		code: `
	  let valor: string | null = null;
	  let mensaje = valor ?? "Valor por defecto";
	  console.log(mensaje); // "Valor por defecto"
		`,
		explanation:
		  "El operador nullish coalescing (`??`) se usa para proporcionar un valor predeterminado cuando una variable es `null` o `undefined`. En este ejemplo, `mensaje` toma el valor 'Valor por defecto' porque `valor` es `null`.",
		level: "basic",
	  },
	  {
		title: "9. Short-Circuiting",
		code: `
	  let usuario = null;
	  
	  if (usuario && usuario.nombre) {
		console.log(\`Nombre de usuario: \${usuario.nombre}\`);
	  } else {
		console.log("Usuario no válido");
	  }
		`,
		explanation:
		  "Las evaluaciones condicionales de operadores lógicos pueden 'cortar el circuito' (short-circuiting). Con `&&`, si la primera condición es falsa, el resto de las condiciones no se evalúan. Aquí, el mensaje 'Usuario no válido' se imprimirá porque `usuario` es `null`.",
		level: "basic",
	  }
	  
];