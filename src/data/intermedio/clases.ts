export const clases = [
	{
	  title: "1. Definir una Clase Básica",
	  code: `
	  class Persona {
		nombre: string;
		edad: number;
  
		constructor(nombre: string, edad: number) {
		  this.nombre = nombre;
		  this.edad = edad;
		}
  
		saludar(): void {
		  console.log(\`Hola, mi nombre es \${this.nombre} y tengo \${this.edad} años.\`);
		}
	  }
  
	  const persona = new Persona("Ana", 30);
	  persona.saludar();
	  `,
	  explanation:
		"Una clase en TypeScript define un modelo para los objetos, con propiedades y métodos. En este ejemplo, la clase 'Persona' tiene un constructor y un método para saludar.",
	  level: "intermediate",
	},
	{
	  title: "2. Herencia en Clases",
	  code: `
	  class Animal {
		nombre: string;
  
		constructor(nombre: string) {
		  this.nombre = nombre;
		}
  
		hacerSonido(): void {
		  console.log("Sonido genérico");
		}
	  }
  
	  class Perro extends Animal {
		hacerSonido(): void {
		  console.log("Guau!");
		}
	  }
  
	  const miPerro = new Perro("Rex");
	  miPerro.hacerSonido();
	  `,
	  explanation:
		"La herencia permite que una clase extienda otra, heredando sus propiedades y métodos. En este ejemplo, la clase 'Perro' extiende a 'Animal' y sobrescribe el método 'hacerSonido'.",
	  level: "intermediate",
	},
	{
	  title: "3. Métodos Estáticos",
	  code: `
	  class Calculadora {
		static sumar(a: number, b: number): number {
		  return a + b;
		}
	  }
  
	  console.log(Calculadora.sumar(5, 3));
	  `,
	  explanation:
		"Los métodos estáticos se llaman en la clase misma y no en instancias individuales. En este ejemplo, el método 'sumar' es estático y se accede directamente desde la clase 'Calculadora'.",
	  level: "intermediate",
	},
	{
	  title: "4. Propiedades y Métodos Privados",
	  code: `
	  class CuentaBancaria {
		private saldo: number;
  
		constructor(inicial: number) {
		  this.saldo = inicial;
		}
  
		depositar(monto: number): void {
		  this.saldo += monto;
		}
  
		obtenerSaldo(): number {
		  return this.saldo;
		}
	  }
  
	  const cuenta = new CuentaBancaria(100);
	  cuenta.depositar(50);
	  console.log(cuenta.obtenerSaldo());
	  `,
	  explanation:
		"Las propiedades y métodos privados se definen usando la palabra clave `private` y no pueden ser accedidos desde fuera de la clase. En este caso, 'saldo' es privado y solo puede ser modificado a través de métodos públicos.",
	  level: "intermediate",
	},
	{
	  title: "5. Propiedades y Métodos Protegidos",
	  code: `
	  class Vehiculo {
		protected marca: string;
  
		constructor(marca: string) {
		  this.marca = marca;
		}
	  }
  
	  class Coche extends Vehiculo {
		mostrarMarca(): void {
		  console.log(this.marca);
		}
	  }
  
	  const coche = new Coche("Toyota");
	  coche.mostrarMarca();
	  `,
	  explanation:
		"Las propiedades y métodos protegidos se definen con `protected` y solo pueden ser accedidos dentro de la clase y sus subclases. En este ejemplo, 'marca' es protegida y accesible en la subclase 'Coche'.",
	  level: "intermediate",
	},
	{
	  title: "6. Clases Abstractas",
	  code: `
	  abstract class Forma {
		abstract area(): number;
  
		descripcion(): string {
		  return "Una forma con un área.";
		}
	  }
  
	  class Cuadrado extends Forma {
		lado: number;
  
		constructor(lado: number) {
		  super();
		  this.lado = lado;
		}
  
		area(): number {
		  return this.lado * this.lado;
		}
	  }
  
	  const cuadrado = new Cuadrado(4);
	  console.log(cuadrado.area());
	  console.log(cuadrado.descripcion());
	  `,
	  explanation:
		"Las clases abstractas no pueden ser instanciadas directamente y pueden contener métodos abstractos que deben ser implementados por las subclases. En este ejemplo, 'Forma' es abstracta y define un método abstracto 'area'.",
	  level: "intermediate",
	},
	{
	  title: "7. Implementar Interfaces en Clases",
	  code: `
	  interface Vehiculo {
		velocidad: number;
		acelerar(): void;
	  }
  
	  class Coche implements Vehiculo {
		velocidad: number = 0;
  
		acelerar(): void {
		  this.velocidad += 10;
		  console.log(\`Velocidad: \${this.velocidad} km/h\`);
		}
	  }
  
	  const coche = new Coche();
	  coche.acelerar();
	  `,
	  explanation:
		"Las clases pueden implementar interfaces para asegurar que cumplan con el contrato definido por la interfaz. En este ejemplo, la clase 'Coche' implementa la interfaz 'Vehiculo' y proporciona una implementación para el método 'acelerar'.",
	  level: "intermediate",
	},
	{
	  title: "8. Clases con Constructores Opcionales",
	  code: `
	  class Libro {
		titulo: string;
		autor?: string;
  
		constructor(titulo: string, autor?: string) {
		  this.titulo = titulo;
		  this.autor = autor;
		}
  
		descripcion(): string {
		  return \`\${this.titulo} por \${this.autor || "Desconocido"}\`;
		}
	  }
  
	  const libro1 = new Libro("1984");
	  const libro2 = new Libro("El Gran Gatsby", "F. Scott Fitzgerald");
  
	  console.log(libro1.descripcion());
	  console.log(libro2.descripcion());
	  `,
	  explanation:
		"Los parámetros opcionales en un constructor permiten crear instancias de una clase con diferentes combinaciones de argumentos. En este ejemplo, 'autor' es opcional en el constructor de 'Libro'.",
	  level: "intermediate",
	},
	{
	  title: "9. Clases con Getters y Setters",
	  code: `
	  class Persona {
		private _edad: number;
  
		constructor(edad: number) {
		  this._edad = edad;
		}
  
		get edad(): number {
		  return this._edad;
		}
  
		set edad(valor: number) {
		  if (valor > 0) {
			this._edad = valor;
		  }
		}
	  }
  
	  const persona = new Persona(25);
	  console.log(persona.edad);
	  persona.edad = 30;
	  console.log(persona.edad);
	  `,
	  explanation:
		"Los getters y setters permiten definir métodos especiales para obtener y establecer el valor de una propiedad. En este caso, 'edad' tiene un getter y un setter que controlan cómo se accede y modifica el valor de la propiedad privada '_edad'.",
	  level: "intermediate",
	},
	{
	  title: "10. Clases con Propiedades Estáticas",
	  code: `
	  class Contador {
		static cuenta: number = 0;
  
		static incrementar(): void {
		  Contador.cuenta++;
		}
  
		static obtenerCuenta(): number {
		  return Contador.cuenta;
		}
	  }
  
	  Contador.incrementar();
	  console.log(Contador.obtenerCuenta());
	  `,
	  explanation:
		"Las propiedades y métodos estáticos pertenecen a la clase en sí misma en lugar de a instancias individuales. En este ejemplo, 'cuenta' y los métodos 'incrementar' y 'obtenerCuenta' son estáticos y se accede a ellos a través de la clase 'Contador'.",
	  level: "intermediate",
	}
  ];
  