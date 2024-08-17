export const enums = [
	{
		title: "1. Definición de un Enum Numérico",
		code: `
	  enum Direccion {
		Norte,
		Sur,
		Este,
		Oeste
	  }
	  
	  let miDireccion: Direccion = Direccion.Norte;
	  console.log(miDireccion); // 0
		`,
		explanation:
		  "El tipo más común de enum en TypeScript es el enum numérico. Cada valor en un enum numérico tiene un valor asociado que es un número. En este ejemplo, `Direccion` es un enum que define cuatro direcciones: Norte, Sur, Este, y Oeste. Por defecto, el valor de Norte es 0, Sur es 1, Este es 2, y Oeste es 3.",
		level: "intermediate",
	  },
	  {
		title: "2. Asignar Valores Numéricos Específicos",
		code: `
	  enum Direccion {
		Norte = 1,
		Sur,  // 2
		Este, // 3
		Oeste // 4
	  }
	  
	  console.log(Direccion.Sur); // 2
	  console.log(Direccion.Oeste); // 4
		`,
		explanation:
		  "Puedes asignar valores numéricos específicos a los miembros de un enum. Si no se asigna un valor, TypeScript asignará automáticamente el siguiente valor incremental. En este ejemplo, `Direccion.Sur` tiene el valor 2 y `Direccion.Oeste` tiene el valor 4.",
		level: "intermediate",
	  },
	  {
		title: "3. Enums de Cadenas (String Enums)",
		code: `
	  enum Color {
		Rojo = "ROJO",
		Verde = "VERDE",
		Azul = "AZUL"
	  }
	  
	  let miColorFavorito: Color = Color.Rojo;
	  console.log(miColorFavorito); // "ROJO"
		`,
		explanation:
		  "TypeScript también soporta enums de cadenas, donde cada miembro tiene un valor de cadena asociado. Este tipo de enum es útil cuando el significado de los valores es más claro con cadenas de texto. En este ejemplo, `Color.Rojo` tiene el valor `ROJO`.",
		level: "intermediate",
	  },
	  {
		title: "4. Acceder a los Valores del Enum",
		code: `
	  console.log(Direccion.Norte); // 0
	  
	  console.log(Direccion[0]); // "Norte"
		`,
		explanation:
		  "Puedes acceder a los valores de un enum de dos maneras: por el nombre del miembro o por su valor. Para enums numéricos, también puedes obtener el nombre del miembro usando su valor. Esto no funciona para enums de cadenas porque los valores no son únicos.",
		level: "intermediate",
	  },
	  {
		title: "5. Enum como Tipos",
		code: `
	  function mover(direccion: Direccion): void {
		console.log(\`Moviéndose hacia el \${direccion}\`);
	  }
	  
	  mover(Direccion.Norte); // Moviéndose hacia el 0
		`,
		explanation:
		  "Un enum también define un tipo, lo que significa que puedes usar un enum como tipo de una variable o parámetro de una función. En este ejemplo, `mover` acepta un parámetro del tipo `Direccion`.",
		level: "intermediate",
	  },
	  {
		title: "6. Const Enums",
		code: `
	  const enum Direccion {
		Norte,
		Sur,
		Este,
		Oeste
	  }
	  
	  let miDireccion: Direccion = Direccion.Norte;
	  console.log(miDireccion); // 0
		`,
		explanation:
		  "Los enums pueden ser declarados como `const` para que se compilen a valores constantes en lugar de objetos, lo que puede mejorar el rendimiento. En este caso, `Direccion.Norte` se reemplazará directamente por 0 en el código generado.",
		level: "intermediate",
	  },
	  {
		title: "7. Enums Computados y Constantes",
		code: `
	  enum Respuesta {
		No = 0,
		Si = "YES".length // Computado en tiempo de compilación
	  }
	  
	  console.log(Respuesta.Si); // 3
		`,
		explanation:
		  "Puedes mezclar miembros de enum con valores constantes y computados. En este ejemplo, `Respuesta.Si` se calcula en tiempo de compilación como la longitud de la cadena 'YES'.",
		level: "intermediate",
	  },
	  {
		title: "8. Combinación de Enums y Tipos",
		code: `
	  type EstadosDeTarea = "Pendiente" | "En Proceso" | "Completada";
	  
	  enum Estado {
		Pendiente,
		EnProceso,
		Completada
	  }
	  
	  function actualizarTarea(estado: Estado | EstadosDeTarea): void {
		console.log(\`La tarea está \${estado}\`);
	  }
	  
	  actualizarTarea(Estado.Pendiente); // La tarea está 0
	  actualizarTarea("Completada"); // La tarea está Completada
		`,
		explanation:
		  "A veces, es útil combinar enums con tipos de unión o intersección para crear estructuras más sofisticadas. En este ejemplo, `actualizarTarea` acepta tanto valores de `Estado` como cadenas de texto.",
		level: "intermediate",
	  },
	  {
		title: "9. Uso de Enum en Comparaciones",
		code: `
	  let estadoActual: Estado = Estado.EnProceso;
	  
	  switch (estadoActual) {
		case Estado.Pendiente:
		  console.log("Tarea pendiente");
		  break;
		case Estado.EnProceso:
		  console.log("Tarea en proceso");
		  break;
		case Estado.Completada:
		  console.log("Tarea completada");
		  break;
	  }
		`,
		explanation:
		  "Puedes usar enums en comparaciones y estructuras de control como `switch`. En este ejemplo, el `switch` evalúa el estado actual de una tarea y ejecuta el código correspondiente.",
		level: "intermediate",
	  },
	 
	  
];