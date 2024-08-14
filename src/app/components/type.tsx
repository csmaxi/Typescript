// Definicion

type Nombre = string;
let miNombre: Nombre = "Juan";

// Tipos Compuestos

type Puntos = {
  x: number;
  y: number;
};

let punto2: Puntos = { x: 10, y: 20 };

// Tipos union

type ID = number | string;
let usuarioID: ID = 101;

usuarioID = "ABD!@#";

// Tipos intersection

type A = { a: number };
type B = { b: string };

type C = A & B;

let combinado: C = { a: 1, b: "hola" };

// Tipos Literales 

type CardinalDirection = "Norte" | "Sur" | "Este" | "Oeste";

let direction: CardinalDirection;
direction = "Norte";

// Tipos Función 

type buscador = (fuete: string, subcadena: string) => boolean;

let buscando : Buscador;

buscar = function(fuente: string, subcadena: string) {
	return fuente.includes(subcadena);
};

console.log(buscar("Hola, mundo", "mundo"));

// Tipos Alias con Generics 

type Caja<T> = {
	contenido: T ;
};

let cajaDeNumero: Caja<number> = {contenido: 123};
let cajaDeTexto: Caja<string> = {contenido: "Hola"};

// Tipos Combinados


type Personal = {
    nombre: string;
    edad: number;
};

type Empleados = Persona & {
    empresa: string;
};

let empleado: Empleado = {
    nombre: "Ana",
    edad: 30,
    empresa: "TechCorp"
};


// EJEMPLO 