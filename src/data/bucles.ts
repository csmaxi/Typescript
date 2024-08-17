export const bucles = [
	{
		title: "1. Bucle for",
		code: `
	  for (let i = 0; i < 5; i++) {
		console.log(i);
	  }
		`,
		explanation:
		  "El bucle `for` es uno de los bucles más comunes y se usa para iterar un número específico de veces. En este ejemplo, `i` se inicializa en 0, el bucle continúa mientras `i < 5`, e `i` se incrementa en 1 después de cada iteración.",
		level: "basic",
	  },
	  {
		title: "2. Bucle while",
		code: `
	  let i = 0;
	  
	  while (i < 5) {
		console.log(i);
		i++;
	  }
		`,
		explanation:
		  "El bucle `while` ejecuta un bloque de código mientras se cumpla una condición. En este caso, el bucle continúa ejecutándose mientras `i < 5` sea verdadero. Es importante asegurarse de modificar la variable `i` dentro del bucle para evitar un bucle infinito.",
		level: "basic",
	  },
	  {
		title: "3. Bucle do...while",
		code: `
	  let i = 0;
	  
	  do {
		console.log(i);
		i++;
	  } while (i < 5);
		`,
		explanation:
		  "El bucle `do...while` es similar al `while`, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de la ejecución del bloque. En este caso, el bloque de código se ejecuta una vez antes de evaluar `i < 5`.",
		level: "basic",
	  },
	  {
		title: "4. Bucle for...in",
		code: `
	  let persona = {
		nombre: "Juan",
		edad: 25,
		ciudad: "Madrid"
	  };
	  
	  for (let clave in persona) {
		console.log(\`\${clave}: \${persona[clave]}\`);
	  }
		`,
		explanation:
		  "El bucle `for...in` se usa para iterar sobre las propiedades enumerables de un objeto. En este ejemplo, `clave` tomará el valor de cada propiedad del objeto `persona`, y `persona[clave]` se usa para acceder al valor de la propiedad correspondiente.",
		level: "basic",
	  },
	  {
		title: "5. Bucle for...of",
		code: `
	  let numeros = [1, 2, 3, 4, 5];
	  
	  for (let numero of numeros) {
		console.log(numero);
	  }
		`,
		explanation:
		  "El bucle `for...of` se usa para iterar sobre elementos de arrays y otros objetos iterables, como cadenas y mapas. En este ejemplo, `numero` tomará el valor de cada elemento del array `numeros`.",
		level: "basic",
	  },
	  {
		title: "6. Uso de break y continue",
		code: `
	  for (let i = 0; i < 10; i++) {
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
		title: "Uso de continue",
		code: `
	  for (let i = 0; i < 10; i++) {
		if (i % 2 === 0) {
		  continue; // Saltar los números pares
		}
		console.log(i); // Imprime solo números impares
	  }
		`,
		explanation:
		  "El `continue` se usa para saltar a la siguiente iteración del bucle, omitiendo el resto del código en la iteración actual. En este ejemplo, el bucle salta los números pares y solo imprime los números impares.",
		level: "basic",
	  },
	  {
		title: "7. Iterar sobre Cadenas",
		code: `
	  let texto = "Hola";
	  
	  for (let i = 0; i < texto.length; i++) {
		console.log(texto[i]);
	  }
		`,
		explanation:
		  "Puedes usar bucles para iterar sobre caracteres en una cadena. En este ejemplo, el bucle `for` recorre cada carácter en la cadena `texto` e imprime cada uno.",
		level: "basic",
	  },
	  {
		title: "8. Uso de Bucles con Mapas y Conjuntos",
		code: `
	  let mapa = new Map<string, number>();
	  mapa.set("uno", 1);
	  mapa.set("dos", 2);
	  
	  for (let [clave, valor] of mapa) {
		console.log(\`\${clave}: \${valor}\`);
	  }
		`,
		explanation:
		  "Para iterar sobre mapas (`Map`), puedes usar un bucle `for...of` para recorrer pares clave-valor. En este ejemplo, se imprime cada clave y valor del mapa `mapa`.",
		level: "basic",
	  },
	  {
		title: "Uso de Bucles con Conjuntos",
		code: `
	  let conjunto = new Set<number>([1, 2, 3, 4, 5]);
	  
	  for (let valor of conjunto) {
		console.log(valor);
	  }
		`,
		explanation:
		  "Para iterar sobre conjuntos (`Set`), puedes usar un bucle `for...of` para recorrer cada valor del conjunto. En este ejemplo, se imprime cada valor en el conjunto `conjunto`.",
		level: "basic",
	  },
	  {
		title: "9. Bucles Anidados",
		code: `
	  for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
		  console.log(\`i = \${i}, j = \${j}\`);
		}
	  }
		`,
		explanation:
		  "Puedes tener bucles dentro de otros bucles, lo que es útil para manejar estructuras de datos multidimensionales. En este ejemplo, el bucle interior se ejecuta completamente por cada iteración del bucle exterior, imprimiendo todas las combinaciones posibles de `i` y `j`.",
		level: "basic",
	  }
	  
]