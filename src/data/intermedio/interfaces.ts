export const interfaces = [
	{
	  title: "1. Definir una Interfaz Básica",
	  code: `
	  interface Persona {
		nombre: string;
		edad: number;
	  }
  
	  const persona: Persona = {
		nombre: "Ana",
		edad: 30
	  };
  
	  console.log(persona);
	  `,
	  explanation:
		"Una interfaz en TypeScript define un contrato para objetos, especificando qué propiedades y métodos deben estar presentes. En este ejemplo, la interfaz 'Persona' define dos propiedades: 'nombre' y 'edad'.",
	  level: "intermediate",
	},
	{
	  title: "2. Interfaz con Métodos",
	  code: `
	  interface Animal {
		nombre: string;
		hacerSonido(): void;
	  }
  
	  class Perro implements Animal {
		nombre: string;
  
		constructor(nombre: string) {
		  this.nombre = nombre;
		}
  
		hacerSonido(): void {
		  console.log("Guau!");
		}
	  }
  
	  const miPerro = new Perro("Rex");
	  miPerro.hacerSonido();
	  `,
	  explanation:
		"Las interfaces pueden definir métodos además de propiedades. En este ejemplo, la interfaz 'Animal' incluye el método 'hacerSonido', que debe ser implementado por cualquier clase que la implemente.",
	  level: "intermediate",
	},
	{
	  title: "3. Interfaz Opcional",
	  code: `
	  interface Vehiculo {
		marca: string;
		modelo?: string;
	  }
  
	  const coche: Vehiculo = {
		marca: "Toyota"
	  };
  
	  console.log(coche);
	  `,
	  explanation:
		"Las propiedades de una interfaz pueden ser opcionales usando el signo de interrogación (`?`). En este caso, la propiedad 'modelo' de la interfaz 'Vehiculo' es opcional y puede no estar presente en el objeto.",
	  level: "intermediate",
	},
	{
	  title: "4. Interfaz con Índices",
	  code: `
	  interface Diccionario {
		[clave: string]: string;
	  }
  
	  const traducciones: Diccionario = {
		"hola": "hello",
		"mundo": "world"
	  };
  
	  console.log(traducciones["hola"]);
	  `,
	  explanation:
		"Las interfaces también pueden definir tipos de índice para propiedades con claves dinámicas. En este ejemplo, 'Diccionario' permite cualquier número de propiedades con claves de tipo string y valores de tipo string.",
	  level: "intermediate",
	},
	{
	  title: "5. Interfaz Extendida",
	  code: `
	  interface Animal {
		nombre: string;
	  }
  
	  interface Mascota extends Animal {
		edad: number;
	  }
  
	  const mascota: Mascota = {
		nombre: "Miau",
		edad: 3
	  };
  
	  console.log(mascota);
	  `,
	  explanation:
		"Las interfaces pueden extenderse para crear nuevas interfaces que incluyen las propiedades de las interfaces base. En este ejemplo, 'Mascota' extiende 'Animal', añadiendo una propiedad 'edad'.",
	  level: "intermediate",
	},
	{
	  title: "6. Interfaz en Funciones",
	  code: `
	  interface Operacion {
		(a: number, b: number): number;
	  }
  
	  const sumar: Operacion = (a, b) => a + b;
  
	  console.log(sumar(5, 3));
	  `,
	  explanation:
		"Las interfaces pueden ser usadas para definir tipos de funciones. En este ejemplo, la interfaz 'Operacion' define una función que acepta dos números y devuelve un número. La función 'sumar' se ajusta a esta interfaz.",
	  level: "intermediate",
	},
	{
	  title: "7. Interfaz con Propiedades de Solo Lectura",
	  code: `
	  interface Configuracion {
		readonly apiUrl: string;
		timeout: number;
	  }
  
	  const config: Configuracion = {
		apiUrl: "https://api.example.com",
		timeout: 5000
	  };
  
	  // config.apiUrl = "https://api.newurl.com"; // Error: no se puede modificar una propiedad de solo lectura
	  console.log(config);
	  `,
	  explanation:
		"Las propiedades de solo lectura en una interfaz se definen usando la palabra clave `readonly`. Esto asegura que el valor de la propiedad no pueda ser modificado después de su inicialización.",
	  level: "intermediate",
	},
	{
	  title: "8. Interfaz para Tipos de Objetos Compuestos",
	  code: `
	  interface Usuario {
		nombre: string;
		direccion: {
		  calle: string;
		  ciudad: string;
		};
	  }
  
	  const usuario: Usuario = {
		nombre: "Pedro",
		direccion: {
		  calle: "Calle Falsa",
		  ciudad: "Ciudad Real"
		}
	  };
  
	  console.log(usuario);
	  `,
	  explanation:
		"Las interfaces pueden incluir propiedades que a su vez son objetos. En este ejemplo, la interfaz 'Usuario' incluye una propiedad 'direccion', que es un objeto con sus propias propiedades.",
	  level: "intermediate",
	},
	{
	  title: "9. Interfaz para Tipos Genéricos",
	  code: `
	  interface Respuesta<T> {
		datos: T;
		error?: string;
	  }
  
	  const respuesta: Respuesta<number[]> = {
		datos: [1, 2, 3],
		error: undefined
	  };
  
	  console.log(respuesta.datos);
	  `,
	  explanation:
		"Las interfaces genéricas permiten crear interfaces que pueden manejar diferentes tipos de datos. En este ejemplo, 'Respuesta<T>' usa un tipo genérico 'T' para definir el tipo de la propiedad 'datos'.",
	  level: "intermediate",
	},
	{
	  title: "10. Interfaz con Propiedades Estáticas",
	  code: `
	  interface Matematica {
		(x: number, y: number): number;
		PI: number;
	  }
  
	  const sumar: Matematica = (x, y) => x + y;
	  sumar.PI = 3.14159;
  
	  console.log(sumar(5, 3));
	  console.log(sumar.PI);
	  `,
	  explanation:
		"Puedes añadir propiedades estáticas a funciones que implementan interfaces. En este caso, la interfaz 'Matematica' define una función y una propiedad estática 'PI', que se puede acceder a través de la función.",
	  level: "intermediate",
	}
  ];
  