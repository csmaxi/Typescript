interface Persona {
  nombre: string;
  edad: number;
}

let juan: Persona = {
  nombre: "Juan",
  edad: 30,
};

// Propiedades opcionales

interface Persona2 {
  nombre: string;
  edad: number;
  direccion?: string;
}

let ana: Persona2 = {
  nombre: "ana",
  edad: 25,
};

// Solo lectura

interface Punto {
  readonly x: number;
  readonly y: number;
}

let punto1: Punto = { x: 10, y: 20 };

// Métodos en una interfaz

interface Person {
  nombre: string;
  edad: number;
  saludar(): void;
}

let maria: Person = {
  nombre: "Maria",
  edad: 28,
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

maria.saludar();

// Interfaces de Funciones

interface Buscador {
  (fuente: string, subcadena: string): boolean;
}

let buscar: Buscador;
buscar = function (fuente: string, subcadena: string) {
  return fuente.includes(subcadena);
};

console.log(buscar("Hola, mundo", "mundo"));



// Extender Interfaces



interface Obreros{
  nombre: string;
  edad: number;
}

interface Repositor extends Obreros {
  empresa: string;
}

let trabajador: Repositor = {
  nombre: "Luis",
  edad: 35,
  empresa: "TechCorp",
};



// Combinar interfaces 


interface Ventana {
	titulo:string;
}

interface Ventana {
	tamaño: number;
}

let miVentana: Ventana = {
	titulo: "Mi ventana",
	tamaño: 100
}

// Implementación de Interfaces en Clases


interface Persona {
	nombre: string;
	edad: number;
	saludar(): void;
}

class Usuario implements Persona {
	nombre: string;
	edad: number;

	constructor(nombre:string, edad:number) {
		this.nombre = nombre;
		this.edad = edad;
	}
	saludar(): void {
		console.log(`Hola, mi nombre es ${this.nombre}`)
	}
}
let usuario = new Usuario("Pedro", 40);
usuario.saludar();