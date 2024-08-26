export const bucles = [
	{
	  title: "1. Bucle `for` Básico",
	  code: `
	  for (let i = 0; i < 5; i++) {
		console.log(i);
	  }
	  `,
	  explanation:
		"El bucle `for` permite ejecutar un bloque de código un número específico de veces. En este ejemplo, el bucle imprime los números del 0 al 4 en la consola.",
	  level: "basic",
	},
	{
	  title: "2. Bucle `while`",
	  code: `
	  let i: number = 0;
  
	  while (i < 5) {
		console.log(i);
		i++;
	  }
	  `,
	  explanation:
		"El bucle `while` ejecuta un bloque de código mientras una condición sea verdadera. En este caso, el bucle continúa ejecutándose hasta que 'i' sea 5.",
	  level: "basic",
	},
	{
	  title: "3. Bucle `do-while`",
	  code: `
	  let i: number = 0;
  
	  do {
		console.log(i);
		i++;
	  } while (i < 5);
	  `,
	  explanation:
		"El bucle `do-while` es similar al `while`, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de ejecutar el código.",
	  level: "basic",
	},
	{
	  title: "4. Bucle `for...of`",
	  code: `
	  const frutas: string[] = ["manzana", "banana", "cereza"];
  
	  for (const fruta of frutas) {
		console.log(fruta);
	  }
	  `,
	  explanation:
		"El bucle `for...of` itera sobre los elementos de una colección iterable, como un array. En este ejemplo, se imprimen cada una de las frutas en el array.",
	  level: "basic",
	},
	{
	title: "5. Bucle `for...in`",
	code: `
	const numeros = [1, 2, 3, 4, 5];
	
	for (let indice in numeros) {
		console.log(indice); // Imprime los índices: 0, 1, 2, 3, 4
		console.log(numeros[indice]); // Imprime los valores: 1, 2, 3, 4, 5
	}
	`,
	explanation:
		"El bucle `for...in` se utiliza para iterar sobre las claves de un objeto, incluyendo arrays. En este ejemplo, el bucle itera sobre los índices del array 'numeros', imprimiendo tanto los índices como los valores en cada iteración.",
	level: "basic",
	  }
	  
	  ,
	{
	  title: "6. Romper un Bucle con `break`",
	  code: `
	  for (let i = 0; i < 10; i++) {
		if (i === 5) {
		  break;
		}
		console.log(i);
	  }
	  `,
	  explanation:
		"La declaración `break` se usa para salir de un bucle antes de que la condición sea falsa. En este caso, el bucle se detiene cuando 'i' alcanza el valor 5.",
	  level: "basic",
	},
	{
	  title: "7. Continuar un Bucle con `continue`",
	  code: `
	  for (let i = 0; i < 10; i++) {
		if (i % 2 === 0) {
		  continue;
		}
		console.log(i);
	  }
	  `,
	  explanation:
		"La declaración `continue` omite la iteración actual del bucle y pasa a la siguiente. En este caso, se imprimen solo los números impares del 0 al 9.",
	  level: "basic",
	},
	{
	  title: "8. Bucle `for` con `break` y `continue`",
	  code: `
	  for (let i = 0; i < 10; i++) {
		if (i === 5) {
		  break;
		}
		if (i % 2 === 0) {
		  continue;
		}
		console.log(i);
	  }
	  `,
	  explanation:
		"En un bucle `for`, puedes combinar `break` y `continue` para controlar el flujo de ejecución. En este ejemplo, los números impares menores que 5 se imprimen antes de que el bucle se rompa.",
	  level: "basic",
	},
	{
	  title: "9. Bucle Anidado",
	  code: `
	  for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 2; j++) {
		  console.log(\`\${i} - \${j}\`);
		}
	  }
	  `,
	  explanation:
		"Los bucles anidados permiten realizar iteraciones dentro de otras iteraciones. En este ejemplo, se imprimen combinaciones de los índices de dos bucles anidados.",
	  level: "basic",
	},
	{
	  title: "10. Uso de `for...of` con Mapas",
	  code: `
	  const mapa = new Map([
		["clave1", "valor1"],
		["clave2", "valor2"]
	  ]);
  
	  for (const [clave, valor] of mapa) {
		console.log(\`\${clave}: \${valor}\`);
	  }
	  `,
	  explanation:
		"El bucle `for...of` también puede usarse para iterar sobre mapas (`Map`). En este ejemplo, se imprimen las claves y valores del mapa.",
	  level: "basic",
	}
  ];
  