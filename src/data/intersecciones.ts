export const intersecciones = [
	{
	  title: "1. Definición Básica de Tipos de Intersección",
	  code: `
  type A = { nombre: string; };
  type B = { edad: number; };
  
  type C = A & B;
  
  const persona: C = { nombre: "Juan", edad: 30 };

  console.log(persona)
	  `,
	  explanation:
		"Los tipos de intersección se definen usando el operador `&` y permiten combinar varios tipos en uno solo. En este ejemplo, `C` combina los tipos `A` y `B`, resultando en un tipo que tiene las propiedades de ambos.",
	  level: "advanced",
	},
	{
	  title: "2. Intersección de Tipos de Objeto",
	  code: `
  type Trabajador = { puesto: string; };
  type Persona = { nombre: string; edad: number; };
  
  type Empleado = Persona & Trabajador;
  
  const empleado: Empleado = { nombre: "Ana", edad: 28, puesto: "Desarrolladora" };

  console.log(empleado)
	  `,
	  explanation:
		"Puedes combinar tipos de objetos para crear tipos más complejos. En este ejemplo, `Empleado` es una intersección de `Persona` y `Trabajador`, requiriendo que un objeto tenga las propiedades de ambos tipos.",
	  level: "advanced",
	},
	{
	  title: "3. Intersección con Tipos Funcionales",
	  code: `
  type A = () => void;
  type B = () => string;
  
  type C = A & B;
  
  const funcion: C = () => "Hola";
  
  const resultado: string = funcion();

  console.log(resultado)
	  `,
	  explanation:
		"Las intersecciones también se pueden aplicar a tipos de funciones. En este caso, `C` es una intersección de dos tipos de funciones, lo que significa que `funcion` debe cumplir con ambos tipos, devolviendo un `string` en este caso.",
	  level: "advanced",
	},
	{
	  title: "4. Intersección con Tipos de Unión",
	  code: `
  type Base = { id: number; };
  type Estado = { activo: boolean; };
  
  type Usuario = Base & Estado & { nombre: string; };
  
  const usuario: Usuario = { id: 1, activo: true, nombre: "Luis" };

  console.log(usuario)
	  `,
	  explanation:
		"Puedes combinar tipos de intersección con tipos de unión para crear tipos aún más específicos. Aquí, `Usuario` combina `Base`, `Estado`, y un tipo literal adicional, requiriendo todas las propiedades especificadas.",
	  level: "advanced",
	},
	{
	  title: "5. Uso de Intersecciones en Funciones y Clases",
	  code: `
  class Persona {
	constructor(public nombre: string, public edad: number) {}
  }
  
  type Trabajador = { puesto: string; };
  
  type Empleado = Persona & Trabajador;
  
  const empleado = new Persona("Carlos", 40) as Empleado;
  empleado.puesto = "Gerente";
  
  console.log(empleado.nombre); // Carlos
  console.log(empleado.puesto); // Gerente
	  `,
	  explanation:
		"Las intersecciones pueden ser útiles al trabajar con clases, permitiendo que una clase implemente múltiples interfaces o tipos. En este ejemplo, `Empleado` combina la clase `Persona` con un tipo adicional `Trabajador` para crear un objeto que contiene propiedades de ambos.",
	  level: "advanced",
	},
  ];
  