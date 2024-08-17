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
	  `,
	  explanation:
		"Una clase en TypeScript se define con la palabra clave 'class'. Aquí, la clase 'Persona' tiene propiedades y métodos que definen su comportamiento.",
	  level: "intermediate",
	},
	{
	  title: "2. Instanciación de Clases",
	  code: `
	  let persona1 = new Persona("Juan", 30);
	  persona1.saludar(); // "Hola, me llamo Juan y tengo 30 años."
	  `,
	  explanation:
		"Para crear una instancia de una clase, se utiliza la palabra clave 'new', seguida del nombre de la clase y los parámetros requeridos.",
	  level: "intermediate",
	},
	{
	  title: "3. Modificadores de Acceso",
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
	  `,
	  explanation:
		"Los modificadores de acceso como 'public' y 'private' controlan la visibilidad de las propiedades y métodos dentro de una clase.",
	  level: "intermediate",
	},
	{
	  title: "4. Herencia",
	  code: `
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
		"La herencia permite que una clase hija herede propiedades y métodos de una clase padre usando la palabra clave 'extends'.",
	  level: "intermediate",
	},
	{
	  title: "5. Métodos y Propiedades Estáticas",
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
		"Las propiedades y métodos estáticos pertenecen a la clase en sí, en lugar de a las instancias de la clase. Se acceden usando el nombre de la clase.",
	  level: "intermediate",
	},
	{
	  title: "6. Interfaces y Clases",
	  code: `
	  interface Transporte {
		velocidad: number;
		mover(): void;
	  }
  
	  class Coche implements Transporte {
		velocidad: number;
  
		constructor(velocidad: number) {
		  this.velocidad = velocidad;
		}
  
		mover(): void {
		  console.log(\`El coche se mueve a \${this.velocidad} km/h.\`);
		}
	  }
  
	  let miCoche = new Coche(120);
	  miCoche.mover(); // "El coche se mueve a 120 km/h."
	  `,
	  explanation:
		"Las interfaces en TypeScript definen un contrato que las clases deben cumplir. Una clase puede implementar una o más interfaces.",
	  level: "intermediate",
	},
	{
	  title: "7. Clases Abstractas",
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
		"Las clases abstractas no pueden ser instanciadas directamente. Están diseñadas para ser extendidas y pueden contener métodos abstractos que deben ser implementados por las subclases.",
	  level: "intermediate",
	},
	{
	  title: "8. Getters y Setters",
	  code: `
	  class Rectangulo {
		private _ancho: number = 0;
		private _alto: number = 0;
  
		get area(): number {
		  return this._ancho * this._alto;
		}
  
		set dimensiones({ ancho, alto }: { ancho: number, alto: number }) {
		  this._ancho = ancho;
		  this._alto = alto;
		}
	  }
  
	  let rectangulo = new Rectangulo();
	  rectangulo.dimensiones = { ancho: 10, alto: 5 };
	  console.log(rectangulo.area); // 50
	  `,
	  explanation:
		"Los getters y setters permiten controlar el acceso a las propiedades de una clase, proporcionando una capa adicional de abstracción.",
	  level: "intermediate",
	},
	{
	  title: "9. Parámetros Opcionales y Predeterminados en Constructores",
	  code: `
	  class Usuario {
		nombre: string;
		edad?: number; // Opcional
  
		constructor(nombre: string, edad?: number) {
		  this.nombre = nombre;
		  if (edad) {
			this.edad = edad;
		  }
		}
	  }
  
	  let usuario1 = new Usuario("Carlos");
	  let usuario2 = new Usuario("Ana", 25);
	  `,
	  explanation:
		"Puedes hacer que ciertos parámetros en los constructores sean opcionales utilizando '?'. También puedes definir valores predeterminados para estos parámetros.",
	  level: "intermediate",
	},
	{
	  title: "10. Parámetros con Valores Predeterminados",
	  code: `
	  class Producto {
		nombre: string;
		precio: number;
  
		constructor(nombre: string, precio: number = 100) {
		  this.nombre = nombre;
		  this.precio = precio;
		}
	  }
  
	  let producto1 = new Producto("Tablet");
	  let producto2 = new Producto("Laptop", 800);
	  `,
	  explanation:
		"Al definir valores predeterminados para los parámetros de un constructor, puedes simplificar la creación de instancias de una clase cuando no todos los valores son requeridos.",
	  level: "intermediate",
	},
  ];
  