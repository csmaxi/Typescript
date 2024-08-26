export const modulos = [
	{
	  title: "1. Creación de un Módulo Básico",
	  code: `
	  // archivo: matematicas.ts
	  export function sumar(a: number, b: number): number {
		return a + b;
	  }
  
	  export function restar(a: number, b: number): number {
		return a - b;
	  }
	  `,
	  explanation:
		"Puedes crear un módulo exportando funciones, variables o clases desde un archivo. En este caso, 'matematicas.ts' exporta dos funciones: 'sumar' y 'restar'.",
	  level: "advanced",
	},
	{
	  title: "2. Importar un Módulo",
	  code: `
	  // archivo: app.ts
	  import { sumar, restar } from './matematicas';
  
	  console.log(sumar(5, 3));
	  console.log(restar(5, 3));
	  `,
	  explanation:
		"Para usar funciones o variables de un módulo en otro archivo, debes importarlas. En 'app.ts', se importan las funciones 'sumar' y 'restar' del módulo 'matematicas'.",
	  level: "advanced",
	},
	{
	  title: "3. Exportar e Importar un Módulo Completo",
	  code: `
	  // archivo: matematicas.ts
	  export default {
		sumar(a: number, b: number): number {
		  return a + b;
		},
		restar(a: number, b: number): number {
		  return a - b;
		}
	  };
  
	  // archivo: app.ts
	  import matematicas from './matematicas';
  
	  console.log(matematicas.sumar(5, 3));
	  console.log(matematicas.restar(5, 3));
	  `,
	  explanation:
		"También puedes exportar un objeto completo como módulo. En este caso, 'matematicas.ts' exporta un objeto con dos métodos. Luego, en 'app.ts', se importa el módulo completo usando `import matematicas from './matematicas'`.",
	  level: "advanced",
	},
	{
	  title: "4. Importar Todo el Módulo como un Alias",
	  code: `
	  // archivo: app.ts
	  import * as matematicas from './matematicas';
  
	  console.log(matematicas.sumar(5, 3));
	  console.log(matematicas.restar(5, 3));
	  `,
	  explanation:
		"Puedes importar todos los elementos de un módulo bajo un alias. En este caso, se usa 'import * as matematicas' para acceder a todas las exportaciones del módulo 'matematicas'.",
	  level: "advanced",
	},
	{
	  title: "5. Exportar Variables y Constantes",
	  code: `
	  // archivo: configuracion.ts
	  export const apiUrl = 'https://api.example.com';
	  export const timeout = 5000;
  
	  // archivo: app.ts
	  import { apiUrl, timeout } from './configuracion';
  
	  console.log(apiUrl);
	  console.log(timeout);
	  `,
	  explanation:
		"Puedes exportar variables y constantes desde un módulo. En 'configuracion.ts', se exportan 'apiUrl' y 'timeout'. En 'app.ts', estos valores se importan y se usan.",
	  level: "advanced",
	},
	{
	  title: "6. Exportar e Importar Clases",
	  code: `
	  // archivo: usuario.ts
	  export class Usuario {
		constructor(public nombre: string, public edad: number) {}
		
		saludo() {
		  return \`Hola, soy \${this.nombre} y tengo \${this.edad} años.\`;
		}
	  }
  
	  // archivo: app.ts
	  import { Usuario } from './usuario';
  
	  const usuario = new Usuario('Ana', 30);
	  console.log(usuario.saludo());
	  `,
	  explanation:
		"Las clases también pueden ser exportadas e importadas desde módulos. Aquí, 'usuario.ts' exporta una clase 'Usuario', que se importa en 'app.ts' para crear una instancia y usar sus métodos.",
	  level: "advanced",
	},
	{
	  title: "7. Exportación de Tipos y Interfaces",
	  code: `
	  // archivo: tipos.ts
	  export interface Persona {
		nombre: string;
		edad: number;
	  }
  
	  export type Saludo = (nombre: string) => string;
  
	  // archivo: app.ts
	  import { Persona, Saludo } from './tipos';
  
	  const persona: Persona = {
		nombre: 'Luis',
		edad: 25
	  };
  
	  const saludo: Saludo = (nombre) => \`Hola, \${nombre}!\`;
  
	  console.log(persona);
	  console.log(saludo('Ana'));
	  `,
	  explanation:
		"También puedes exportar tipos e interfaces desde un módulo. En 'tipos.ts', se exporta una interfaz 'Persona' y un tipo 'Saludo'. Estos se importan en 'app.ts' y se utilizan para definir variables y funciones.",
	  level: "advanced",
	},
	{
	  title: "8. Módulos con Exportación Interna",
	  code: `
	  // archivo: matematicas.ts
	  function sumar(a: number, b: number): number {
		return a + b;
	  }
  
	  function restar(a: number, b: number): number {
		return a - b;
	  }
  
	  export { sumar };
  
	  // archivo: app.ts
	  import { sumar } from './matematicas';
  
	  console.log(sumar(5, 3));
	  `,
	  explanation:
		"Puedes exportar solo ciertas partes de un módulo. En 'matematicas.ts', solo la función 'sumar' es exportada, mientras que 'restar' queda interna al módulo. En 'app.ts', solo 'sumar' se importa y usa.",
	  level: "advanced",
	},
	{
	  title: "9. Módulos con Importación de Módulos Externos",
	  code: `
	  // archivo: app.ts
	  import axios from 'axios';
  
	  axios.get('https://api.example.com/datos')
		.then(response => console.log(response.data))
		.catch(error => console.error('Error:', error));
	  `,
	  explanation:
		"Puedes importar módulos externos utilizando npm o yarn. En este caso, se importa el módulo 'axios' para realizar solicitudes HTTP en 'app.ts'.",
	  level: "advanced",
	},
	{
	  title: "10. Módulos con Carga Dinámica",
	  code: `
	  // archivo: app.ts
	  async function cargarModulo() {
		const modulo = await import('./matematicas');
		console.log(modulo.sumar(5, 3));
	  }
  
	  cargarModulo();
	  `,
	  explanation:
		"TypeScript permite la carga dinámica de módulos usando la función `import()`. Esto es útil para cargar módulos de manera asíncrona, como en el ejemplo de 'app.ts' donde se carga 'matematicas' en tiempo de ejecución.",
	  level: "advanced",
	}
  ];
  