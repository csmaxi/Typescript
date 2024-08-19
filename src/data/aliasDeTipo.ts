export const aliasDeTipo = [
	{
	  title: "1. Definición Básica de Alias de Tipo",
	  code: `
  type Punto2D = {
	x: number;
	y: number;
  };
  
  const punto: Punto2D = { x: 10, y: 20 };

  console.log(punto)
	  `,
	  explanation:
		"Un alias de tipo te permite crear un nuevo nombre para un tipo existente. En este ejemplo, `Punto2D` es un alias para un objeto con propiedades `x` y `y`, simplificando el uso del tipo en el código.",
	  level: "advanced",
	},
	{
	  title: "2. Alias de Tipo para Tipos Básicos",
	  code: `
  type ID = string | number;
  
  const userId: ID = "user123";
  const orderId: ID = 456;

  console.log(userId)
	  `,
	  explanation:
		"Puedes usar alias de tipo para definir tipos complejos o combinados. En este caso, `ID` es un alias que puede ser un `string` o un `number`, permitiendo que `userId` y `orderId` usen el mismo alias de tipo.",
	  level: "advanced",
	},
	{
	  title: "3. Alias de Tipo para Funciones",
	  code: `
  type Operacion = (a: number, b: number) => number;
  
  const suma: Operacion = (x, y) => x + y;
  
  console.log(suma(5, 3)); // 8
	  `,
	  explanation:
		"Puedes crear alias para tipos de funciones, lo que ayuda a definir tipos de funciones más complejas de manera clara. Aquí, `Operacion` es un alias para una función que toma dos números y devuelve un número.",
	  level: "advanced",
	},
	{
	  title: "4. Alias de Tipo para Tipos Literales y Uniones",
	  code: `
  type Resultado = "exito" | "error";
  
  function manejarResultado(res: Resultado): void {
	if (res === "exito") {
	  console.log("La operación fue exitosa.");
	} else {
	  console.log("Ocurrió un error.");
	}
  }
  
  manejarResultado("exito"); // La operación fue exitosa.
	  `,
	  explanation:
		"Los alias de tipo también pueden combinar tipos literales y uniones. En este ejemplo, `Resultado` es un alias para un tipo que puede ser solo `'exito'` o `'error'`, lo que permite manejar estos valores específicos de manera más eficiente.",
	  level: "advanced",
	},
	{
	  title: "5. Alias de Tipo para Estructuras Complejas",
	  code: `
  type Usuario = {
	nombre: string;
	edad: number;
	direccion: {
	  calle: string;
	  ciudad: string;
	};
  };
  
  const usuario: Usuario = {
	nombre: "María",
	edad: 30,
	direccion: {
	  calle: "Av. Libertador",
	  ciudad: "Buenos Aires"
	}
  };

  console.log(usuario)
	  `,
	  explanation:
		"Los alias de tipo pueden ser útiles para definir estructuras de datos complejas. En este caso, `Usuario` es un alias que representa un objeto con una estructura anidada, simplificando el uso de tipos complejos en el código.",
	  level: "advanced",
	},
  ];
  