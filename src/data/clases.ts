export const clases = [
	{
		title: "1. Declaración de Clases",
		code: `
  class Persona {
	nombre: string;
	edad: number;
  
	constructor(nombre: string, edad: number) {
	  this.nombre = nombre;
	  this.edad = edad;
	}
  
	saludar(): void {
	  console.log(\`Hola, me llamo \${this.nombre} y tengo \${this.edad} años.\`);
	}
  }
	 const persona = new Persona("Juan", 30);
persona.saludar(); // Esto debería mostrar "Hola, me llamo Juan y tengo 30 años." en la consola
	  `,
		explanation:
			"Las clases en TypeScript se definen con la palabra clave `class`. Aquí, `Persona` es una clase con propiedades y métodos que definen su comportamiento y estructura.",
		level: "intermediate",
	},
	{
		title: "2. Modificadores de Acceso",
		code: `
  class Persona {
	public nombre: string;
	private edad: number;
  
	constructor(nombre: string, edad: number) {
	  this.nombre = nombre;
	  this.edad = edad;
	}
  
	public saludar(): void {
	  console.log(\`Hola, me llamo \${this.nombre}.\`);
	}
  
	private mostrarEdad(): void {
	  console.log(\`Tengo \${this.edad} años.\`);
	}
  }
	const persona = new Persona("Juan", 30);
persona.saludar(); // Esto debería mostrar "Hola, me llamo Juan." en la consola

// persona.mostrarEdad(); // Esto causaría un error porque mostrarEdad es un método privado

	  `,
		explanation:
			"Los modificadores de acceso (`public`, `private`, `protected`) controlan la visibilidad de propiedades y métodos en una clase. `public` es accesible desde fuera de la clase, `private` solo dentro de la clase, y `protected` dentro de la clase y sus subclases.",
		level: "intermediate",
	},
	{
		title: "3. Herencia",
		code: `
class Persona {
  public nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  public saludar(): void {
    console.log(\`Hola, me llamo \${this.nombre}.\`);
  }

  protected mostrarEdad(): void {
    console.log(\`Tengo \${this.edad} años.\`);
  }
}
  class Empleado extends Persona {
	salario: number;
  
	constructor(nombre: string, edad: number, salario: number) {
	  super(nombre, edad);
	  this.salario = salario;
	}
  
	mostrarSalario(): void {
	  console.log(\`Mi salario es \${this.salario} euros.\`);
	}
  }
  
  let empleado1 = new Empleado("Ana", 28, 3000);
  empleado1.saludar();        // "Hola, me llamo Ana."
  empleado1.mostrarSalario(); // "Mi salario es 3000 euros."
	  `,
		explanation:
			"La herencia permite que una clase (`Empleado`) herede propiedades y métodos de otra clase (`Persona`) utilizando la palabra clave `extends`. Esto facilita la reutilización de código y la creación de jerarquías de clases.",
		level: "intermediate",
	},
	{
		title: "4. Métodos y Propiedades Estáticas",
		code: `
  class Matematica {
	static PI: number = 3.1416;
  
	static calcularAreaCirculo(radio: number): number {
	  return this.PI * radio * radio;
	}
  }
  
  console.log(Matematica.PI);                    // 3.1416
  console.log(Matematica.calcularAreaCirculo(5)); // 78.54
	  `,
		explanation:
			"Las propiedades y métodos estáticos pertenecen a la clase en sí, no a las instancias de la clase. Se accede a ellos mediante el nombre de la clase y no requieren instanciar la clase.",
		level: "intermediate",
	},
	{
		title: "5. Clases Abstractas",
		code: `
  abstract class Animal {
	constructor(public nombre: string) {}
  
	abstract hacerSonido(): void; // Método abstracto
  
	mover(): void {
	  console.log(\`\${this.nombre} se está moviendo.\`);
	}
  }
  
  class Perro extends Animal {
	hacerSonido(): void {
	  console.log("Guau guau");
	}
  }
  
  let miPerro = new Perro("Max");
  miPerro.mover();       // "Max se está moviendo."
  miPerro.hacerSonido(); // "Guau guau"
	  `,
		explanation:
			"Las clases abstractas no se pueden instanciar directamente y pueden contener métodos abstractos que deben ser implementados por las subclases. Esto define un contrato para las clases que heredan de ella.",
		level: "intermediate",
	},
];
