export const bucles = [
	{
	  title: "1. Bucle for",
	  code: `
  for (let i: number = 0; i < 5; i++) {
	console.log(i);
  }
	  `,
	  explanation:
		"El bucle `for` se usa para iterar un número específico de veces. En este ejemplo, `i` se inicializa en 0, el bucle continúa mientras `i < 5`, e `i` se incrementa en 1 después de cada iteración.",
	  level: "basic",
	},
	{
	  title: "2. Bucle while",
	  code: `
  let i: number = 0;
  
  while (i < 5) {
	console.log(i);
	i++;
  }
	  `,
	  explanation:
		"El bucle `while` ejecuta un bloque de código mientras se cumpla una condición. En este caso, el bucle continúa mientras `i < 5` sea verdadero.",
	  level: "basic",
	},
	{
	  title: "3. Bucle for...of",
	  code: `
  const numeros: number[] = [1, 2, 3, 4, 5];
  
  for (const numero of numeros) {
	console.log(numero);
  }
	  `,
	  explanation:
		"El bucle `for...of` se usa para iterar sobre elementos de arrays y otros objetos iterables, como cadenas y mapas. En este ejemplo, `numero` toma el valor de cada elemento del array `numeros`.",
	  level: "basic",
	},
	{
	  title: "4. Uso de break y continue",
	  code: `
  for (let i: number = 0; i < 10; i++) {
	if (i === 5) {
	  break; // Salir del bucle cuando i sea 5
	}
	console.log(i);
  }
	  `,
	  explanation:
		"El `break` se usa para salir de un bucle antes de que la condición de finalización sea verdadera. En este ejemplo, el bucle se interrumpe cuando `i` es igual a 5.",
	  level: "basic",
	},
	{
	  title: "5. Bucles Anidados",
	  code: `
  for (let i: number = 0; i < 3; i++) {
	for (let j: number = 0; j < 3; j++) {
	  console.log(\`i = \${i}, j = \${j}\`);
	}
  }
	  `,
	  explanation:
		"Los bucles anidados son útiles para manejar estructuras de datos multidimensionales. En este ejemplo, el bucle interior se ejecuta completamente por cada iteración del bucle exterior, imprimiendo todas las combinaciones posibles de `i` y `j`.",
	  level: "basic",
	}
  ];
  