export const variables = [
{
	title: "1. Declaración de Variables con let",
	code: `
	let mensaje: string = "Hola, mundo!";
	console.log(mensaje);
	`,
	explanation:
	"La palabra clave 'let' permite declarar variables que pueden ser reasignadas. En este caso, 'mensaje' es una variable de tipo cadena de texto inicializada con 'Hola, mundo!'.",
	level: "basic",
},
{
	title: "2. Declaración de Variables con const",
	code: `
	const PI: number = 3.14159;
	console.log(PI);
	`,
	explanation:
	"La palabra clave 'const' declara variables cuyo valor no puede ser reasignado. Aquí, 'PI' es una constante de tipo número que no puede cambiar una vez inicializada.",
	level: "basic",
},
{
	title: "3. Tipos de Variables Inferidos",
	code: `
	let edad = 25; // Tipo inferido como number
	let nombre = "Ana"; // Tipo inferido como string
	console.log(edad, nombre);
	`,
	explanation:
	"TypeScript puede inferir el tipo de una variable a partir del valor inicial. En este ejemplo, 'edad' se infiere como número y 'nombre' como cadena de texto.",
	level: "basic",
},
{
	title: "4. Variables con Tipos Específicos",
	code: `
	let precio: number = 99.99;
	let disponible: boolean = true;
	console.log(precio, disponible);
	`,
	explanation:
	"Puedes especificar el tipo de una variable para asegurar que solo se le asignen valores del tipo esperado. Aquí, 'precio' es un número y 'disponible' es un booleano.",
	level: "basic",
},
{
	title: "5. Variables en Bloques de Código",
	code: `
	function ejemplo() {
	let local: string = "Variable local";
	console.log(local);
	}
	ejemplo();
	// console.log(local); // Error: local no está definido aquí
	`,
	explanation:
	"Las variables declaradas con 'let' tienen alcance de bloque, lo que significa que solo están disponibles dentro del bloque de código en el que se declaran. La variable 'local' solo está disponible dentro de la función 'ejemplo'.",
	level: "basic",
},
{
	title: "6. Variables Opcionales con Tipos Union",
	code: `
	let identificador: string | number = "ID123";
	identificador = 456;
	console.log(identificador);
	`,
	explanation:
	"Puedes usar tipos unión para permitir que una variable tenga más de un tipo. En este ejemplo, 'identificador' puede ser tanto una cadena de texto como un número.",
	level: "basic",
},
{
	title: "7. Variables con Arrays",
	code: `
	let numeros: number[] = [1, 2, 3, 4, 5];
	console.log(numeros);
	`,
	explanation:
	"Puedes declarar variables que contienen arrays especificando el tipo de sus elementos. Aquí, 'numeros' es un array de números.",
	level: "basic",
},
{
	title: "8. Variables con Objetos",
	code: `
	let usuario: { nombre: string; edad: number } = {
	nombre: "Luis",
	edad: 28
	};
	console.log(usuario);
	`,
	explanation:
	"Las variables también pueden ser objetos con propiedades definidas. En este caso, 'usuario' es un objeto con propiedades 'nombre' (cadena de texto) y 'edad' (número).",
	level: "basic",
},
{
	title: "9. Variables con Tipos Literales",
	code: `
	let estado: "activo" | "inactivo" = "activo";
	estado = "inactivo";
	console.log(estado);
	`,
	explanation:
	"Los tipos literales permiten especificar un conjunto limitado de valores para una variable. En este ejemplo, 'estado' solo puede ser 'activo' o 'inactivo'.",
	level: "basic",
},
{
	title: "10. Variables con Tipos Any",
	code: `
	let variable: any = "cadena";
	variable = 123;
	variable = true;
	console.log(variable);
	`,
	explanation:
	"El tipo 'any' permite que una variable pueda tener cualquier tipo de valor. Aunque es flexible, su uso se debe limitar para mantener la seguridad de tipos. Aquí, 'variable' cambia de tipo cadena a número y luego a booleano.",
	level: "basic",
}
  ];
  