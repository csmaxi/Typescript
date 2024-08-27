export const cadenas = [
	{
	  title: "1. Declaración de Cadenas",
	  code: `
	  let saludo: string = "Hola, TypeScript!";
	  console.log(saludo);
	  `,
	  explanation:
		"En TypeScript, las cadenas se declaran utilizando el tipo 'string'. Aquí, la variable 'saludo' es una cadena que contiene el texto 'Hola, TypeScript!'.",
	  level: "basic",
	},
	{
	  title: "2. Concatenación de Cadenas",
	  code: `
	  let parte1: string = "Hola, ";
	  let parte2: string = "mundo!";
	  let mensajeCompleto: string = parte1 + parte2;
	  console.log(mensajeCompleto); // "Hola, mundo!"
	  `,
	  explanation:
		"Puedes concatenar (unir) cadenas utilizando el operador '+'. En este ejemplo, se concatenan 'parte1' y 'parte2' para formar 'mensajeCompleto'.",
	  level: "basic",
	},
	{
	  title: "3. Interpolación de Cadenas",
	  code: `
	  let nombre: string = "Ana";
	  let saludo: string = \`Hola, \${nombre}!\`;
	  console.log(saludo); // "Hola, Ana!"
	  `,
	  explanation:
		"La interpolación de cadenas permite insertar variables dentro de cadenas usando backticks (`) y la sintaxis '\${variable}'. Esto es útil para construir cadenas dinámicamente.",
	  level: "basic",
	},
	{
	  title: "4. Propiedad length de las Cadenas",
	  code: `
	  let palabra: string = "TypeScript";
	  console.log(palabra.length); // 10
	  `,
	  explanation:
		"La propiedad 'length' devuelve la longitud (número de caracteres) de una cadena. Aquí, se obtiene la longitud de la cadena 'TypeScript', que es 10.",
	  level: "basic",
	},
	{
	  title: "5. Acceso a Caracteres de una Cadena",
	  code: `
	  let palabra: string = "TypeScript";
	  console.log(palabra[0]); // "T"
	  console.log(palabra[4]); // "S"
	  `,
	  explanation:
		"Puedes acceder a caracteres específicos de una cadena usando la notación de corchetes con el índice del carácter. Los índices comienzan en 0. Aquí, se accede al primer y quinto carácter de la cadena 'TypeScript'.",
	  level: "basic",
	},
	{
	  title: "6. Convertir Cadenas a Mayúsculas y Minúsculas",
	  code: `
	  let saludo: string = "Hola, Mundo!";
	  console.log(saludo.toUpperCase()); // "HOLA, MUNDO!"
	  console.log(saludo.toLowerCase()); // "hola, mundo!"
	  `,
	  explanation:
		"Los métodos 'toUpperCase()' y 'toLowerCase()' convierten una cadena a mayúsculas o minúsculas, respectivamente. Aquí, se convierten todas las letras de 'saludo' a mayúsculas y luego a minúsculas.",
	  level: "basic",
	},
	{
	  title: "7. Buscar Subcadenas con indexOf",
	  code: `
	  let frase: string = "Aprender TypeScript es divertido";
	  console.log(frase.indexOf("TypeScript")); // 9
	  console.log(frase.indexOf("JavaScript")); // -1
	  `,
	  explanation:
		"El método 'indexOf()' busca una subcadena en una cadena y devuelve el índice de la primera aparición. Si la subcadena no se encuentra, devuelve -1. En este ejemplo, 'TypeScript' comienza en el índice 9 y 'JavaScript' no se encuentra.",
	  level: "basic",
	},
	{
	  title: "8. Extraer Subcadenas con slice y substring",
	  code: `
	  let frase: string = "TypeScript es poderoso";
	  console.log(frase.slice(0, 10)); // "TypeScript"
	  console.log(frase.substring(11)); // "es poderoso"
	  `,
	  explanation:
		"'slice()' y 'substring()' se utilizan para extraer partes de una cadena. 'slice(start, end)' extrae la subcadena desde el índice 'start' hasta 'end' (excluido), mientras que 'substring(start, end)' funciona de manera similar pero no acepta índices negativos.",
	  level: "basic",
	},
	{
	  title: "9. Reemplazar Parte de una Cadena",
	  code: `
	  let frase: string = "JavaScript es genial";
	  let nuevaFrase: string = frase.replace("JavaScript", "TypeScript");
	  console.log(nuevaFrase); // "TypeScript es genial"
	  `,
	  explanation:
		"El método 'replace()' reemplaza una subcadena por otra en una cadena. En este ejemplo, se reemplaza 'JavaScript' por 'TypeScript' en la cadena 'frase'.",
	  level: "basic",
	},
	{
	  title: "10. Separar Cadenas con split",
	  code: `
	  let nombres: string = "Ana,Juan,Carlos";
	  let arrayNombres: string[] = nombres.split(",");
	  console.log(arrayNombres); // ["Ana", "Juan", "Carlos"]
	  `,
	  explanation:
		"El método 'split()' divide una cadena en un array de subcadenas utilizando un separador. Aquí, la cadena 'nombres' se divide en un array usando la coma (',') como separador.",
	  level: "basic",
	}
  ];
  