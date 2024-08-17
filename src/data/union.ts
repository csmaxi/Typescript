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
	"La sintaxis para definir un tipo de unión es simplemente separar los tipos posibles con el símbolo | (barra vertical). En este ejemplo, `id` puede ser un número o una cadena, pero no puede ser de otro tipo como booleano o array.",
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
	"Puedes usar tipos de unión en parámetros y tipos de retorno de funciones. En este ejemplo, la función `imprimirId` acepta tanto números como cadenas, y puede manejar cualquiera de ellos.",
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
	"Cuando usas tipos de unión, necesitas asegurarte de manejar cada tipo correctamente. Para ello, puedes usar guardias de tipo. `typeof` es útil para verificar tipos primitivos, mientras que `instanceof` se usa para verificar instancias de clases específicas.",
level: "advanced",
},
{
title: "Usando typeof",
code: `
	function imprimirLongitud(x: string | number): void {
		if (typeof x === "string") {
		console.log(\`La longitud de la cadena es: \${x.length}\`);
		} else {
		console.log(\`El valor numérico es: \${x}\`);
		}
	}
	`,
explanation:
	"`typeof` es útil para verificar tipos primitivos. En este ejemplo, se usa `typeof` para diferenciar entre cadenas y números y manejar cada uno de manera adecuada.",
level: "advanced",
},
{
title: "Usando instanceof",
code: `
	class Perro {
		ladrar() {
		console.log("Guau!");
		}
	}
	
	class Gato {
		maullar() {
		console.log("Miau!");
		}
	}
	
	function hacerSonido(animal: Perro | Gato): void {
		if (animal instanceof Perro) {
		animal.ladrar();
		} else {
		animal.maullar();
		}
	}
	
	let miPerro = new Perro();
	let miGato = new Gato();
	
	hacerSonido(miPerro); // Guau!
	hacerSonido(miGato); // Miau!
	`,
explanation:
	"`instanceof` es útil para verificar si un objeto es una instancia de una clase específica. En este ejemplo, `hacerSonido` usa `instanceof` para determinar si el objeto es un `Perro` o un `Gato` y llama al método correspondiente.",
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
	"Para acceder a propiedades o métodos que no son compartidos por todos los tipos de la unión, necesitas primero hacer una verificación del tipo. En este ejemplo, se usa `typeof` para verificar el tipo y acceder a las propiedades de manera segura.",
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
	"Puedes usar tipos de unión con objetos para representar estructuras más complejas. En este ejemplo, la función `imprimirPunto` puede manejar tanto puntos en 2D como en 3D, y solo accede a la propiedad `z` si está presente en el objeto.",
level: "advanced",
},
{
title: "6. Tipos de Unión y null o undefined",
code: `
	function saludar(nombre: string | null): void {
		if (nombre === null) {
		console.log("Hola, extraño!");
		} else {
		console.log(\`Hola, \${nombre}!\`);
		}
	}
	
	saludar(null); // Hola, extraño!
	saludar("Juan"); // Hola, Juan!
	`,
explanation:
	"Los tipos de unión son útiles para manejar valores opcionales o que pueden ser `null` o `undefined`. En este ejemplo, la función `saludar` maneja el caso en el que el nombre es `null` y el caso en el que es una cadena de texto.",
level: "advanced",
},
{
title: "7. Combinación de Tipos de Unión con Tipos Literales",
code: `
	type Resultado = "exito" | "error";
	
	function imprimirResultado(resultado: Resultado): void {
		if (resultado === "exito") {
		console.log("Operación exitosa");
		} else {
		console.log("Ocurrió un error");
		}
	}
	
	imprimirResultado("exito"); // Operación exitosa
	imprimirResultado("error"); // Ocurrió un error
	// imprimirResultado("pendiente"); // Error: Argument of type '"pendiente"' is not assignable to parameter of type 'Resultado'.
	`,
explanation:
	"Los tipos de unión se pueden combinar con tipos literales para restringir aún más los valores permitidos. En este ejemplo, `Resultado` solo puede ser `'exito'` o `'error'`, y cualquier otro valor causará un error.",
level: "advanced",
},
{
title: "8. Unión y Arrays",
code: `
	let mezcla: (number | string)[] = [1, "dos", 3, "cuatro"];
	
	mezcla.forEach((elemento) => {
		if (typeof elemento === "string") {
		console.log(\`Texto: \${elemento}\`);
		} else {
		console.log(\`Número: \${elemento}\`);
		}
	});
	`,
explanation:
	"También puedes usar tipos de unión para definir arrays que contengan elementos de diferentes tipos. En este ejemplo, el array `mezcla` contiene tanto números como cadenas de texto, y se usa `typeof` para distinguir entre ellos al imprimir.",
level: "advanced",
},
];
