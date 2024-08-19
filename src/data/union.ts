export const union = [
	{
	  title: "1. Definición Básica de Tipos de Unión",
	  code: `
  let id: number | string;
  
  id = 101; // válido
  id = "ABC123"; // válido
  // id = true; // Error: 'boolean' no es asignable a 'number | string'
	  `,
	  explanation:
		"Los tipos de unión permiten que una variable sea de uno o varios tipos especificados, separados por `|`. En este ejemplo, `id` puede ser un número o una cadena, pero no otros tipos como booleanos.",
	  level: "advanced",
	},
	{
	  title: "2. Uso de Tipos de Unión en Funciones",
	  code: `
  function imprimirId(id: number | string): void {
	console.log(\`El ID es: \${id}\`);
  }
  
  imprimirId(123); // El ID es: 123
  imprimirId("ABC123"); // El ID es: ABC123
	  `,
	  explanation:
		"Los tipos de unión son útiles en funciones para aceptar múltiples tipos de parámetros. Aquí, `imprimirId` puede manejar tanto números como cadenas.",
	  level: "advanced",
	},
	{
	  title: "3. Guardias de Tipo (Type Guards)",
	  code: `
  function imprimirLongitud(x: string | number): void {
	if (typeof x === "string") {
	  console.log(\`La longitud de la cadena es: \${x.length}\`);
	} else {
	  console.log(\`El valor numérico es: \${x}\`);
	}
  }
  
  imprimirLongitud("Hola"); // La longitud de la cadena es: 4
  imprimirLongitud(1234); // El valor numérico es: 1234
	  `,
	  explanation:
		"Las guardias de tipo, como `typeof` y `instanceof`, permiten manejar correctamente los diferentes tipos en una unión. `typeof` verifica tipos primitivos y `instanceof` verifica instancias de clases.",
	  level: "advanced",
	},
	{
	  title: "4. Acceder a Propiedades y Métodos en Tipos de Unión",
	  code: `
  function imprimirTextoOMetros(valor: string | number): void {
	// Error si intentas acceder directamente a una propiedad específica de un tipo
	// console.log(valor.length); // Error: Property 'length' does not exist on type 'number'.
	if (typeof valor === "string") {
	  console.log(\`La longitud del texto es: \${valor.length}\`);
	} else {
	  console.log(\`El valor en metros es: \${valor}\`);
	}
  }
  
  imprimirTextoOMetros("Hola"); // La longitud del texto es: 4
  imprimirTextoOMetros(50); // El valor en metros es: 50
	  `,
	  explanation:
		"Para acceder a propiedades o métodos específicos de un tipo en una unión, debes verificar primero el tipo usando guardias de tipo para evitar errores de tipo.",
	  level: "advanced",
	},
	{
	  title: "5. Unión con Tipos de Objeto",
	  code: `
  type Punto2D = {
	x: number;
	y: number;
  };
  
  type Punto3D = {
	x: number;
	y: number;
	z: number;
  };
  
  function imprimirPunto(punto: Punto2D | Punto3D): void {
	console.log(\`Punto en X: \${punto.x}, Y: \${punto.y}\`);
	if ('z' in punto) {
	  console.log(\`Z: \${punto.z}\`); // Solo accede a z si está presente
	}
  }
  
  imprimirPunto({ x: 10, y: 20 }); // Punto en X: 10, Y: 20
  imprimirPunto({ x: 15, y: 25, z: 35 }); // Punto en X: 15, Y: 25, Z: 35
	  `,
	  explanation:
		"Puedes usar tipos de unión para manejar objetos con estructuras variadas. En este caso, `imprimirPunto` maneja tanto puntos en 2D como en 3D, verificando la presencia de la propiedad `z` antes de acceder a ella.",
	  level: "advanced",
	},
  ];
  