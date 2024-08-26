export const objetos = [
	{
	  title: "1. Declaración de Objetos",
	  code: `
	  let persona: { nombre: string; edad: number } = {
		nombre: "Ana",
		edad: 30
	  };
	  console.log(persona);
	  `,
	  explanation:
		"En TypeScript, puedes declarar un objeto especificando el tipo de sus propiedades. En este ejemplo, 'persona' es un objeto con propiedades 'nombre' (cadena de texto) y 'edad' (número).",
	  level: "intermediate",
	},
	{
	  title: "2. Acceso a Propiedades de un Objeto",
	  code: `
	  let persona = { nombre: "Luis", edad: 25 };
	  console.log(persona.nombre); // Luis
	  console.log(persona['edad']); // 25
	  `,
	  explanation:
		"Puedes acceder a las propiedades de un objeto usando la notación de punto o corchetes. En este caso, se accede a 'nombre' y 'edad' del objeto 'persona' de ambas maneras.",
	  level: "intermediate",
	},
	{
	  title: "3. Modificar Propiedades de un Objeto",
	  code: `
	  let persona = { nombre: "Carlos", edad: 40 };
	  persona.edad = 41;
	  console.log(persona); // { nombre: "Carlos", edad: 41 }
	  `,
	  explanation:
		"Las propiedades de un objeto se pueden modificar directamente. Aquí, la propiedad 'edad' del objeto 'persona' se actualiza a 41.",
	  level: "intermediate",
	},
	{
	  title: "4. Métodos en Objetos",
	  code: `
	  let coche = {
		marca: "Toyota",
		modelo: "Corolla",
		año: 2020,
		describir: function() {
		  return \`\${this.marca} \${this.modelo}, \${this.año}\`;
		}
	  };
	  console.log(coche.describir()); // Toyota Corolla, 2020
	  `,
	  explanation:
		"Los objetos pueden tener métodos que actúan sobre sus propiedades. En este ejemplo, el método 'describir' devuelve una cadena con la información del coche.",
	  level: "intermediate",
	},
	{
	  title: "5. Tipos de Objetos con Interfaces",
	  code: `
	  interface Persona {
		nombre: string;
		edad: number;
	  }
  
	  let persona: Persona = {
		nombre: "María",
		edad: 28
	  };
	  console.log(persona);
	  `,
	  explanation:
		"Las interfaces en TypeScript permiten definir tipos para objetos. La interfaz 'Persona' define el tipo de las propiedades que un objeto debe tener. Aquí, 'persona' es un objeto que cumple con la interfaz 'Persona'.",
	  level: "intermediate",
	},
	{
	  title: "6. Propiedades Opcionales en Interfaces",
	  code: `
	  interface Persona {
		nombre: string;
		edad?: number;
	  }
  
	  let persona1: Persona = { nombre: "Juan" };
	  let persona2: Persona = { nombre: "Ana", edad: 22 };
	  console.log(persona1);
	  console.log(persona2);
	  `,
	  explanation:
		"Puedes definir propiedades opcionales en interfaces usando el signo de interrogación (?). En este ejemplo, la propiedad 'edad' es opcional en la interfaz 'Persona'.",
	  level: "intermediate",
	},
	{
	  title: "7. Tipos de Propiedades en Objetos",
	  code: `
	  
	  let usuario: { nombre: string; edad: number; esActivo: boolean } = {
		nombre: "Laura",
		edad: 35,
		esActivo: true
	  };
	  console.log(usuario);
	  `,
	  explanation:
		"Un objeto puede tener propiedades de diferentes tipos. En este caso, 'usuario' tiene propiedades de tipo cadena de texto, número y booleano.",
	  level: "intermediate",
	},
	{
	  title: "8. Objetos Anidados",
	  code: `
	  let empresa = {
		nombre: "TechCorp",
		ubicacion: {
		  ciudad: "Madrid",
		  pais: "España"
		},
		empleados: ["Ana", "Luis", "Carlos"]
	  };
	  console.log(empresa.ubicacion.ciudad); // Madrid
	  `,
	  explanation:
		"Los objetos pueden contener otros objetos. Aquí, 'empresa' tiene una propiedad 'ubicacion' que es otro objeto con propiedades 'ciudad' y 'pais'.",
	  level: "intermediate",
	},
	{
	  title: "9. Propiedades de Índice en Objetos",
	  code: `
	  let puntuaciones: { [jugador: string]: number } = {
		"Ana": 100,
		"Luis": 150
	  };
	  console.log(puntuaciones["Ana"]); // 100
	  `,
	  explanation:
		"Puedes definir objetos con propiedades de índice usando la notación de corchetes. En este ejemplo, 'puntuaciones' es un objeto donde las claves son cadenas y los valores son números.",
	  level: "intermediate",
	},
	{
	  title: "10. Objetos con Funciones Anónimas como Propiedades",
	  code: `
	  let calculadora = {
		sumar: (a: number, b: number): number => a + b,
		restar: (a: number, b: number): number => a - b
	  };
	  console.log(calculadora.sumar(5, 3)); // 8
	  console.log(calculadora.restar(5, 3)); // 2
	  `,
	  explanation:
		"Los objetos en TypeScript pueden tener funciones anónimas como propiedades. Aquí, 'calculadora' tiene métodos para sumar y restar números.",
	  level: "intermediate",
	}
  ];
  