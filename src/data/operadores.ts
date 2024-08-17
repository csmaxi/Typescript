export const operadores = [
	{
		title: "1. Operadores Aritméticos",
		
		 
			subtitle: "Suma (+)",
			code: `
	  let suma = 5 + 3; // 8
			`,
			explanation: 
			  "El operador de suma `+` suma dos operandos.",
			level: "basic",
		  },
		  {
			subtitle: "Resta (-)",
			code: `
	  let resta = 5 - 3; // 2
			`,
			explanation: 
			  "El operador de resta `-` resta el segundo operando del primero.",
			level: "basic",
		  },
		  {
			subtitle: "Multiplicación (*)",
			code: `
	  let multiplicacion = 5 * 3; // 15
			`,
			explanation: 
			  "El operador de multiplicación `*` multiplica dos operandos.",
			level: "basic",
		  },
		  {
			subtitle: "División (/)",
			code: `
	  let division = 10 / 2; // 5
			`,
			explanation: 
			  "El operador de división `/` divide el primer operando por el segundo.",
			level: "basic",
		  },
		  {
			subtitle: "Módulo (%)",
			code: `
	  let modulo = 10 % 3; // 1
			`,
			explanation: 
			  "El operador de módulo `%` devuelve el resto de la división del primer operando por el segundo.",
			level: "basic",
		  },
		  {
			subtitle: "Exponenciación (**)",
			code: `
	  let potencia = 2 ** 3; // 8
			`,
			explanation: 
			  "El operador de exponenciación `**` eleva el primer operando a la potencia del segundo.",
			level: "basic",
		  },
		
	
	  {
		title: "2. Operadores de Asignación",
		
		  
			subtitle: "Asignación simple (=)",
			code: `
	  let x = 10;
			`,
			explanation: 
			  "El operador de asignación `=` asigna el valor del operando derecho al operando izquierdo.",
			level: "basic",
		  },
		  {
			subtitle: "Asignación de suma (+=)",
			code: `
	  x += 5; // x ahora es 15
			`,
			explanation: 
			  "El operador de asignación de suma `+=` suma el valor del operando derecho al operando izquierdo y asigna el resultado al operando izquierdo.",
			level: "basic",
		  },
		  {
			subtitle: "Asignación de resta (-=)",
			code: `
	  x -= 3; // x ahora es 12
			`,
			explanation: 
			  "El operador de asignación de resta `-=` resta el valor del operando derecho del operando izquierdo y asigna el resultado al operando izquierdo.",
			level: "basic",
		  },
		  {
			subtitle: "Asignación de multiplicación (*=)",
			code: `
	  x *= 2; // x ahora es 24
			`,
			explanation: 
			  "El operador de asignación de multiplicación `*=` multiplica el operando izquierdo por el operando derecho y asigna el resultado al operando izquierdo.",
			level: "basic",
		  },
		  {
			subtitle: "Asignación de división (/=)",
			code: `
	  x /= 4; // x ahora es 6
			`,
			explanation: 
			  "El operador de asignación de división `/=` divide el operando izquierdo por el operando derecho y asigna el resultado al operando izquierdo.",
			level: "basic",
		  },
		  {
			subtitle: "Asignación de módulo (%=)",
			code: `
	  x %= 5; // x ahora es 1
			`,
			explanation: 
			  "El operador de asignación de módulo `%=` calcula el módulo del operando izquierdo respecto al operando derecho y asigna el resultado al operando izquierdo.",
			level: "basic",
		  },
	
	  {
		title: "3. Operadores de Comparación",
		
			subtitle: "Igualdad (==)",
			code: `
	  let esIgual = 5 == "5"; // true
			`,
			explanation: 
			  "El operador de igualdad `==` compara dos valores para igualdad después de la conversión de tipo.",
			level: "basic",
		  },
		  {
			subtitle: "Desigualdad (!=)",
			code: `
	  let esDiferente = 5 != "5"; // false
			`,
			explanation: 
			  "El operador de desigualdad `!=` compara dos valores para desigualdad después de la conversión de tipo.",
			level: "basic",
		  },
		  {
			subtitle: "Igualdad estricta (===)",
			code: `
	  let esIgualEstricto = 5 === "5"; // false
			`,
			explanation: 
			  "El operador de igualdad estricta `===` compara dos valores para igualdad sin conversión de tipo.",
			level: "basic",
		  },
		  {
			subtitle: "Desigualdad estricta (!==)",
			code: `
	  let esDiferenteEstricto = 5 !== "5"; // true
			`,
			explanation: 
			  "El operador de desigualdad estricta `!==` compara dos valores para desigualdad sin conversión de tipo.",
			level: "basic",
		  },
		  {
			subtitle: "Mayor que (>)",
			code: `
	  let esMayor = 10 > 5; // true
			`,
			explanation: 
			  "El operador de mayor que `>` devuelve `true` si el operando izquierdo es mayor que el derecho.",
			level: "basic",
		  },
		  {
			subtitle: "Mayor o igual que (>=)",
			code: `
	  let esMayorIgual = 10 >= 10; // true
			`,
			explanation: 
			  "El operador de mayor o igual que `>=` devuelve `true` si el operando izquierdo es mayor o igual que el derecho.",
			level: "basic",
		  },
		  {
			subtitle: "Menor que (<)",
			code: `
	  let esMenor = 5 < 10; // true
			`,
			explanation: 
			  "El operador de menor que `<` devuelve `true` si el operando izquierdo es menor que el derecho.",
			level: "basic",
		  },
		  {
			subtitle: "Menor o igual que (<=)",
			code: `
	  let esMenorIgual = 5 <= 5; // true
			`,
			explanation: 
			  "El operador de menor o igual que `<=` devuelve `true` si el operando izquierdo es menor o igual que el derecho.",
			level: "basic",
		  },
	
	  {
		title: "4. Operadores Lógicos",
		
			subtitle: "AND lógico (&&)",
			code: `
	  let andLogico = true && false; // false
			`,
			explanation: 
			  "El operador AND lógico `&&` devuelve `true` si ambos operandos son `true`.",
			level: "basic",
		  },
		  {
			subtitle: "OR lógico (||)",
			code: `
	  let orLogico = true || false; // true
			`,
			explanation: 
			  "El operador OR lógico `||` devuelve `true` si al menos uno de los operandos es `true`.",
			level: "basic",
		  },
		  {
			subtitle: "NOT lógico (!)",
			code: `
	  let notLogico = !true; // false
			`,
			explanation: 
			  "El operador NOT lógico `!` invierte el valor booleano del operando.",
			level: "basic",
		  },
		
	  {
		title: "5. Operadores Bit a Bit (Bitwise)",
		
			subtitle: "AND bit a bit (&)",
			code: `
	  let andBitwise = 5 & 1; // 1 (0101 & 0001 = 0001)
			`,
			explanation: 
			  "El operador AND bit a bit `&` realiza un AND a nivel de bit entre dos operandos.",
			level: "basic",
		  },
		  {
			subtitle: "OR bit a bit (|)",
			code: `
	  let orBitwise = 5 | 1; // 5 (0101 | 0001 = 0101)
			`,
			explanation: 
			  "El operador OR bit a bit `|` realiza un OR a nivel de bit entre dos operandos.",
			level: "basic",
		  },
		  {
			subtitle: "XOR bit a bit (^)",
			code: `
	  let xorBitwise = 5 ^ 1; // 4 (0101 ^ 0001 = 0100)
			`,
			explanation: 
			  "El operador XOR bit a bit `^` realiza un XOR a nivel de bit entre dos operandos.",
			level: "basic",
		  },
		  {
			subtitle: "Desplazamiento a la izquierda (<<)",
			code: `
	  let desplazIzquierda = 5 << 1; // 10 (0101 << 1 = 1010)
			`,
			explanation: 
			  "El operador de desplazamiento a la izquierda `<<` desplaza los bits del operando a la izquierda.",
			level: "basic",
		  },
		  {
			subtitle: "Desplazamiento a la derecha (>>)",
			code: `
	  let desplazDerecha = 5 >> 1; // 2 (0101 >> 1 = 0010)
			`,
			explanation: 
			  "El operador de desplazamiento a la derecha `>>` desplaza los bits del operando a la derecha.",
			level: "basic",
		  },
	
	  {
		title: "6. Operadores Ternarios",
		code: `
	  let edad = 18;
	  let esAdulto = (edad >= 18) ? "Sí" : "No";
	  console.log(esAdulto); // "Sí"
		`,
		explanation: 
		  "El operador ternario `? :` es una forma compacta de escribir una declaración condicional `if-else`. Devuelve el primer valor si la condición es `true`, de lo contrario devuelve el segundo valor.",
		level: "basic",
	  },
	  {
		title: "7. Operadores de Concatenación",
		code: `
	  let saludo = "Hola, " + "mundo!";
	  console.log(saludo); // "Hola, mundo!"
		`,
		explanation: 
		  "El operador de suma `+` también se utiliza para concatenar cadenas de texto.",
		level: "basic",
	  },
	  {
		title: "8. Operador de Coma",
		code: `
	  let resultado = (1 + 2, 3 + 4);
	  console.log(resultado); // 7
		`,
		explanation: 
		  "El operador de coma `,` evalúa cada uno de sus operandos de izquierda a derecha y devuelve el valor del último operando.",
		level: "basic",
	  },
	  {
		title: "9. Operadores de Nullish Coalescing (??)",
		code: `
	  let nombre = null;
	  let nombrePorDefecto = nombre ?? "Anónimo";
	  console.log(nombrePorDefecto); // "Anónimo"
		`,
		explanation: 
		  "El operador `??` devuelve el operando derecho cuando el operando izquierdo es `null` o `undefined`. Es útil para establecer valores predeterminados.",
		level: "basic",
	  },
	  {
		title: "10. Operador de Encadenamiento Opcional (?.)",
		code: `
	  let persona = { nombre: "Juan" };
	  let edad = persona?.edad;
	  console.log(edad); // undefined (en lugar de un error)
		`,
		explanation: 
		  "El operador `?.` permite acceder a propiedades o métodos de un objeto que podrían ser `null` o `undefined` sin causar un error. Retorna `undefined` si la propiedad no existe.",
		level: "basic",
	  }
	  
];