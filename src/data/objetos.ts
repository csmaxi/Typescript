export const objetos = [
	{
	  title: "1. Especificar el Tipo de un Objeto",
	  code: `
  let persona: { nombre: string; edad: number; esEmpleado: boolean } = {
	nombre: "Juan",
	edad: 30,
	esEmpleado: true
  };

  console.log(persona)
	  `,
	  explanation:
		"Puedes definir el tipo de un objeto explícitamente usando anotaciones de tipo, lo que asegura que el objeto tenga exactamente las propiedades y tipos definidos.",
	  level: "intermediate",
	},
	{
	  title: "2. Propiedades Opcionales",
	  code: `
  let persona: { nombre: string; edad: number; esEmpleado?: boolean } = {
	nombre: "Juan",
	edad: 30
  };

  console.log(persona)
	  `,
	  explanation:
		"Puedes declarar propiedades opcionales en un objeto utilizando el símbolo `?`, lo que permite que la propiedad pueda o no estar presente en el objeto.",
	  level: "intermediate",
	},
	{
	  title: "3. Propiedades de Solo Lectura",
	  code: `
  let persona: { readonly nombre: string; edad: number } = {
	nombre: "Juan",
	edad: 30
  };
  
  // persona.nombre = "Pedro"; // Error: no se puede asignar a 'nombre' porque es una propiedad de solo lectura.
  console.log(persona)
	  `,
	  explanation:
		"Puedes utilizar `readonly` para hacer que una propiedad sea de solo lectura, lo que impide que se modifique después de su inicialización.",
	  level: "intermediate",
	},
	{
	  title: "4. Interfaces",
	  code: `
  interface Persona {
	nombre: string;
	edad: number;
	esEmpleado?: boolean; // Propiedad opcional
  }
  
  let persona: Persona = {
	nombre: "Ana",
	edad: 25
  };

  console.log(persona)
	  `,
	  explanation:
		"Las interfaces permiten definir la estructura de un objeto de manera reutilizable y clara, especificando propiedades obligatorias y opcionales.",
	  level: "intermediate",
	},
	{
	  title: "5. Extensión de Interfaces",
	  code: `
 interface Persona {
  nombre: string;
  edad: number;
  esEmpleado?: boolean; // Propiedad opcional
}

let persona: Persona = {
  nombre: "Ana",
  edad: 25
};

console.log(persona);

interface Trabajador extends Persona {
  salario: number;
}

let empleado: Trabajador = {
  nombre: "Carlos",
  edad: 28,
  salario: 50000
};

console.log(empleado);
	  `,
	  explanation:
		"Puedes extender interfaces para crear nuevas interfaces que heredan propiedades de otras, añadiendo propiedades adicionales según sea necesario.",
	  level: "intermediate",
	},
  ];
  