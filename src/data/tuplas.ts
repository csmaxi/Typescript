export const tuplas = [
	{
	  title: "1. Declaración de Tuplas",
	  code: `
  let miTupla: [string, number];
	  `,
	  explanation:
		"Las tuplas en TypeScript permiten definir arrays con tipos específicos para cada elemento y un orden fijo. En el ejemplo, `miTupla` debe contener un `string` seguido de un `number`.",
	  level: "intermediate",
	},
	{
	  title: "2. Inicialización de una Tupla",
	  code: `
  miTupla = ["Hola", 42];
	  `,
	  explanation:
		"Una vez declarada, puedes inicializar una tupla con valores que coincidan con los tipos definidos. Aquí, `miTupla` se inicializa con un `string` y un `number` en el orden adecuado.",
	  level: "intermediate",
	},
	{
	  title: "3. Acceso a Elementos de la Tupla",
	  code: `
  console.log(miTupla[0]); // "Hola"
  console.log(miTupla[1]); // 42
	  `,
	  explanation:
		"Puedes acceder a los elementos de una tupla usando índices, similar a los arrays. Cada elemento debe coincidir con el tipo especificado en la declaración de la tupla.",
	  level: "intermediate",
	},
	{
	  title: "4. Actualización de Elementos",
	  code: `
  miTupla[0] = "Adiós";
  miTupla[1] = 100;
  
  console.log(miTupla); // ["Adiós", 100]
	  `,
	  explanation:
		"Los elementos de una tupla pueden ser actualizados por índice, siempre que el nuevo valor respete el tipo definido para esa posición en la tupla.",
	  level: "intermediate",
	},
	{
	  title: "5. Tuplas Opcionales y Rest",
	  code: `
  let tuplaOpcional: [string, number?];
  tuplaOpcional = ["Texto"]; // Esto es válido
  
  let tuplaConRest: [number, ...string[]];
  tuplaConRest = [1, "a", "b", "c"];
	  `,
	  explanation:
		"Puedes definir elementos opcionales en una tupla usando `?` y usar el operador `...` para permitir un número variable de elementos de un tipo específico. Esto hace que las tuplas sean más flexibles.",
	  level: "intermediate",
	},
  ];
  