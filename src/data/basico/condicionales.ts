export const condicionales = [
	{
	  title: "1. Declaración `if` Básica",
	  code: `
	  let edad: number = 18;
  
	  if (edad >= 18) {
		console.log("Eres mayor de edad.");
	  }
	  `,
	  explanation:
		"La declaración `if` permite ejecutar un bloque de código si una condición es verdadera. En este ejemplo, si 'edad' es mayor o igual a 18, se imprime un mensaje en la consola.",
	  level: "basic",
	},
	{
	  title: "2. Declaración `if-else`",
	  code: `
	  let edad: number = 16;
  
	  if (edad >= 18) {
		console.log("Eres mayor de edad.");
	  } else {
		console.log("Eres menor de edad.");
	  }
	  `,
	  explanation:
		"La declaración `if-else` permite ejecutar uno de dos bloques de código dependiendo de si la condición es verdadera o falsa. En este caso, si 'edad' es menor de 18, se imprime un mensaje diferente.",
	  level: "basic",
	},
	{
	  title: "3. Declaración `if-else if-else`",
	  code: `
	  let edad: number = 20;
  
	  if (edad < 13) {
		console.log("Eres un niño.");
	  } else if (edad < 18) {
		console.log("Eres un adolescente.");
	  } else {
		console.log("Eres un adulto.");
	  }
	  `,
	  explanation:
		"La declaración `if-else if-else` permite manejar múltiples condiciones. En este ejemplo, dependiendo del valor de 'edad', se imprime un mensaje correspondiente al rango etario.",
	  level: "basic",
	},
	{
	  title: "4. Operador Ternario",
	  code: `
	  let edad: number = 25;
	  let mensaje: string = edad >= 18 ? "Eres adulto" : "Eres menor de edad";
	  console.log(mensaje);
	  `,
	  explanation:
		"El operador ternario `condition ? expr1 : expr2` es una forma concisa de escribir una expresión `if-else`. Evalúa la condición y elige entre dos expresiones basadas en el resultado.",
	  level: "basic",
	},
	{
	  title: "5. Declaración `switch`",
	  code: `
	  let dia: number = 3;
  
	  switch (dia) {
		case 1:
		  console.log("Lunes");
		  break;
		case 2:
		  console.log("Martes");
		  break;
		case 3:
		  console.log("Miércoles");
		  break;
		default:
		  console.log("Día no válido");
	  }
	  `,
	  explanation:
		"La declaración `switch` permite seleccionar entre múltiples bloques de código basados en el valor de una expresión. Cada `case` representa una posible coincidencia, y `default` se ejecuta si no hay coincidencia.",
	  level: "basic",
	},
	{
	  title: "6. `switch` con Tipos de Datos Compuestos",
	  code: `
	  let color: string = "rojo";
  
	  switch (color) {
		case "rojo":
		  console.log("El color es rojo.");
		  break;
		case "verde":
		  console.log("El color es verde.");
		  break;
		case "azul":
		  console.log("El color es azul.");
		  break;
		default:
		  console.log("Color desconocido.");
	  }
	  `,
	  explanation:
		"El `switch` también puede manejar casos con valores de tipo cadena. En este ejemplo, el valor de 'color' determina qué mensaje se imprime.",
	  level: "basic",
	},
	{
	  title: "7. Operador `&&` en Condiciones",
	  code: `
	  let edad: number = 22;
	  let tieneLicencia: boolean = true;
  
	  if (edad >= 18 && tieneLicencia) {
		console.log("Puedes conducir.");
	  } else {
		console.log("No puedes conducir.");
	  }
	  `,
	  explanation:
		"El operador lógico `&&` (AND) permite combinar múltiples condiciones. En este caso, la condición completa es verdadera solo si ambas partes lo son: 'edad' debe ser mayor o igual a 18 y 'tieneLicencia' debe ser verdadero.",
	  level: "basic",
	},
	{
	  title: "8. Operador `||` en Condiciones",
	  code: `
	  let edad: number = 16;
	  let tienePermiso: boolean = true;
  
	  if (edad >= 18 || tienePermiso) {
		console.log("Puedes asistir al evento.");
	  } else {
		console.log("No puedes asistir al evento.");
	  }
	  `,
	  explanation:
		"El operador lógico `||` (OR) permite que una condición sea verdadera si al menos una de las condiciones individuales es verdadera. Aquí, el acceso al evento es permitido si 'edad' es mayor o igual a 18 o si 'tienePermiso' es verdadero.",
	  level: "basic",
	},
	{
	  title: "9. Condicionales en Expresiones",
	  code: `
	  let edad: number = 21;
	  let esMayorDeEdad: boolean = edad >= 18;
  
	  console.log(esMayorDeEdad ? "Eres mayor de edad." : "Eres menor de edad.");
	  `,
	  explanation:
		"Puedes usar el operador ternario dentro de expresiones para evaluar condiciones y generar resultados basados en el valor de las variables. Aquí, el resultado de 'esMayorDeEdad' determina el mensaje que se imprime.",
	  level: "basic",
	},
	{
	  title: "10. Condicionales en Objetos",
	  code: `
	  let usuario: { nombre: string; edad: number } = { nombre: "Ana", edad: 17 };
  
	  console.log({
		mensaje: usuario.edad >= 18 ? "Es adulto" : "Es menor de edad",
		nombre: usuario.nombre
	  });
	  `,
	  explanation:
		"Puedes usar condicionales dentro de objetos para determinar valores basados en condiciones. En este ejemplo, 'mensaje' en el objeto se determina por el valor de 'edad' del 'usuario'.",
	  level: "basic",
	}
  ];
  