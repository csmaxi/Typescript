export const interfaces = [
  
    {
      title: "1. Definición Básica de una Interfaz",
      code: `
		interface Persona {
		  nombre: string;
		  edad: number;
		}
		
		let persona: Persona = {
		  nombre:"Juan",
		  edad:30};
		`,
      explanation:
        "Una interfaz en TypeScript define la estructura que debe tener un objeto. En este ejemplo, la interfaz `Persona` especifica que un objeto de este tipo debe tener propiedades `nombre` y `edad` con tipos `string` y `number`, respectivamente.",
      level: "intermediate",
    },
    {
      title: "2. Propiedades Opcionales",
      code: `
		interface Persona {
		  nombre: string;
		  edad: number;
		  direccion?: string;  // Propiedad opcional}
		
		let persona: Persona = {
		  nombre:"Ana",
		  edad:28};
		`,
      explanation:
        "Puedes declarar propiedades opcionales en una interfaz usando el símbolo `?`. Esto indica que no es obligatorio que un objeto incluya esta propiedad.",
      level: "intermediate",
    },
    {
      title: "3. Propiedades de Solo Lectura",
      code: `
		interface Producto {
		  readonly id: number;
		  nombre: string;
		  precio: number;
		}
		
		let producto: Producto = {
		  id:1,
		  nombre:"Laptop",
		  precio:1000};
		
		// producto.id = 2;  // Error: id es de solo lectura
		`,
      explanation:
        "Las propiedades de solo lectura (`readonly`) no pueden ser modificadas después de su inicialización. Esto es útil para definir valores constantes dentro de un objeto.",
      level: "intermediate",
    },
    {
      title: "4. Métodos en Interfaces",
      code: `
		interface Calculadora {
		  sumar(a: number, b: number): number;
		  restar(a: number, b: number): number;
		}
		
		let calculadora: Calculadora = {
		  sumar: (a, b) => a + b,
		  restar: (a, b) => a - b
		};
		
		console.log(calculadora.sumar(5,3));  // 8
		`,
      explanation:
        "Las interfaces pueden definir métodos, especificando sus nombres, parámetros y tipos de retorno. Esto asegura que los objetos que implementen la interfaz incluyan estos métodos con las firmas correctas.",
      level: "intermediate",
    },
    {
      title: "5. Interfaces para Funciones",
      code: `
		interface Operacion {
		  (a: number, b: number): number;
		}
		
		let multiplicar: Operacion = (a, b) => a * b;
		console.log(multiplicar(4,5));  // 20
		`,
      explanation:
        "Las interfaces también pueden describir la forma de funciones, permitiendo especificar los parámetros y el tipo de retorno. Esto es útil para tipar funciones de manera consistente.",
      level: "intermediate",
    },
    {
      title: "6. Herencia de Interfaces",
      code: `
		interface Persona {
		  nombre: string;
		  edad: number;
		}
		
		interface Empleado extends Persona {
		  salario: number;
		}
		
		let empleado: Empleado = {
		  nombre:"Carlos",
		  edad:35,
		  salario:50000};
		`,
      explanation:
        "Las interfaces pueden extender otras interfaces, heredando sus propiedades y métodos. Esto facilita la creación de interfaces más específicas sin necesidad de repetir definiciones.",
      level: "intermediate",
    },
    {
      title: "7. Extender Múltiples Interfaces",
      code: `
		interface A {
		  propA: string;
		}
		
		interface B {
		  propB: number;
		}
		
		interface C extends A, B {
		  propC: boolean;
		}
		
		let objeto: C = {
		  propA:"Hola",
		  propB:123,
		  propC:true};
		`,
      explanation:
        "Una interfaz puede extender múltiples interfaces, combinando todas sus propiedades y métodos. Esto permite crear estructuras más complejas a partir de componentes más simples.",
      level: "intermediate",
    },
    {
      title: "8. Interfaces con Propiedades Indexadas",
      code: `
		interface Diccionario {[clave: string]: string;
		}
		
		let diccionario: Diccionario = {"hola":"hello","mundo":"world"};
		`,
      explanation:
        "Las propiedades indexadas permiten definir objetos con propiedades dinámicas cuyos nombres no son predefinidos. Esto es útil para estructuras de datos flexibles como diccionarios.",
      level: "intermediate",
    },
    {
      title: "9. Interfaces para Arrays",
      code: `
		interface ArrayDeNumeros {[index: number]: number;
		}
		
		let numeros: ArrayDeNumeros = [1,2,3,4];
		`,
      explanation:
        "Las interfaces también pueden describir la estructura de arrays, especificando el tipo de los elementos que contienen. Esto ayuda a tipar correctamente los arrays en TypeScript.",
      level: "intermediate",
    },
    {
      title: "10. Interfaces y Clases",
      code: `
		interface Vehiculo {
		  marca: string;
		  arrancar(): void;
		}
		
		class Coche implements Vehiculo {
		  marca: string;
		
		  constructor(marca: string) {
			this.marca = marca;
		  }
		
		  arrancar() {
			console.log(\`\${this.marca} está arrancando\`);
		  }}
		
		let miCoche = new Coche("Toyota");
		miCoche.arrancar();  // "Toyota está arrancando"
		`,
      explanation:
        "Las clases pueden implementar interfaces, lo que las obliga a definir todos los miembros que la interfaz declara. Esto es útil para garantizar que las clases sigan un contrato específico.",
      level: "intermediate",
    },
    {
      title: "11. Interfaces vs. Type Aliases",
      code: `
		type Punto = {
		  x: number;
		  y: number;
		};
		
		interface Punto3D extends Punto {
		  z: number;
		}
		
		let punto: Punto3D = { x:1, y:2, z:3};
		`,
      explanation:
        "Las interfaces y los alias de tipo (`type`) pueden parecer similares, pero tienen diferencias clave. Las interfaces pueden extenderse y combinarse, mientras que los alias de tipo son más adecuados para tipos primitivos o complejos que no necesitan ser extendidos.",
      level: "intermediate",
    },
    {
      title: "12. Intersección de Interfaces",
      code: `
		interface Persona {
		  nombre: string;
		}
		
		interface Trabajador {
		  salario: number;
		}
		
		type PersonaTrabajador = Persona & Trabajador;
		
		let empleado: PersonaTrabajador = {
		  nombre:"Luis",
		  salario:45000};
		`,
      explanation:
        "La intersección de interfaces permite combinar múltiples interfaces en un solo tipo. Esto es útil cuando quieres que un objeto tenga propiedades de varias interfaces al mismo tiempo.",
      level: "intermediate",
    },
    {
      title: "13. Interfaces Extensibles",
      code: `
		interface Animal {
		  nombre: string;
		}
		
		interface Animal {
		  tipo: string;
		}
		
		let perro: Animal = {
		  nombre:"Firulais",
		  tipo:"Perro"};
		`,
      explanation:
        "TypeScript permite la extensión de interfaces incluso después de haber sido definidas, lo que facilita la adición de nuevas propiedades en contextos más grandes, como en bibliotecas o frameworks.",
      level: "intermediate",
    },
    {
      title: "14. Interfaces para Objetos Anidados",
      code: `
		interface Direccion {
		  calle: string;
		  ciudad: string;
		}
		
		interface Persona {
		  nombre: string;
		  direccion: Direccion;
		}
		
		let persona: Persona = {
		  nombre:"Eva",
		  direccion:{
			calle:"Calle Falsa 123",
			ciudad:"Madrid"}};
		`,
      explanation:
        "Las interfaces pueden definir objetos que contienen otros objetos, lo que permite describir estructuras de datos más complejas de manera clara y organizada.",
      level: "intermediate",
    },
    {
      title: "15. Interfaces para Generar Tipos Genéricos",
      code: `
		interface Respuesta<T> {
		  exito: boolean;
		  datos: T;
		}
		
		let respuesta: Respuesta<string> = {
		  exito:true,
		  datos:"Datos cargados correctamente"};
		`,
      explanation:
        "Las interfaces genéricas permiten trabajar con tipos que se definen en tiempo de uso. Esto hace que las interfaces sean más flexibles y reutilizables en diferentes contextos.",
      level: "intermediate",
    },
  
];
