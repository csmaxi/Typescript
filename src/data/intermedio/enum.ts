export const enums = [
  {
    title: "1. Definir un Enum Básico",
    code: `
	  enum Color {
		Rojo,
		Verde,
		Azul
	  }
  
	  const colorFavorito: Color = Color.Verde;
	  console.log(colorFavorito); // Salida: 1
	  `,
    explanation:
      "Un enum en TypeScript es una forma de definir un conjunto de constantes con nombres legibles. En este ejemplo, 'Color' es un enum con tres valores: Rojo, Verde y Azul. Por defecto, los valores son números incrementales a partir de 0.",
    level: "intermediate",
  },
  {
    title: "2. Enum con Valores Específicos",
    code: `
	  enum Estado {
		Pendiente = 1,
		EnProgreso = 2,
		Completado = 4
	  }
  
	  const estadoActual: Estado = Estado.EnProgreso;
	  console.log(estadoActual); // Salida: 2
	  `,
    explanation:
      "Puedes asignar valores específicos a los miembros de un enum. En este ejemplo, 'Estado' tiene valores numéricos específicos para cada miembro, permitiendo un control más preciso sobre los valores de los enums.",
    level: "intermediate",
  },
  {
    title: "3. Enum con Valores de Cadena",
    code: `
	  enum Direccion {
		Arriba = "ARRIBA",
		Abajo = "ABAJO",
		Izquierda = "IZQUIERDA",
		Derecha = "DERECHA"
	  }
  
	  const direccionMoviemiento: Direccion = Direccion.Izquierda;
	  console.log(direccionMoviemiento); // Salida: IZQUIERDA
	  `,
    explanation:
      "Los enums también pueden tener valores de cadena en lugar de números. En este caso, 'Direccion' usa valores de cadena, lo que puede ser útil para representar opciones que no se mapean fácilmente a números.",
    level: "intermediate",
  },
  {
    title: "4. Enum con Valores Calculados",
    code: `
	  enum Tiempo {
		Segundo = 1,
		Minuto = Tiempo.Segundo * 60,
		Hora = Tiempo.Minuto * 60
	  }
  
	  console.log(Tiempo.Minuto); // Salida: 60
	  console.log(Tiempo.Hora);   // Salida: 3600
	  `,
    explanation:
      "Puedes usar otros miembros del enum para calcular valores de otros miembros. En este ejemplo, 'Minuto' y 'Hora' se calculan en función del valor de 'Segundo'.",
    level: "intermediate",
  },
  {
    title: "5. Acceder a los Nombres y Valores de un Enum",
    code: `
	  enum Estado {
		Activo = 1,
		Inactivo,
		Suspendido
	  }
  
	  console.log(Estado.Activo); // Salida: 1
	  console.log(Estado[1]);     // Salida: Activo
	  `,
    explanation:
      "Puedes acceder tanto a los valores numéricos de un enum como a los nombres de los miembros. En este ejemplo, se accede al nombre 'Activo' usando el valor 1, y al valor 1 usando el nombre 'Activo'.",
    level: "intermediate",
  },
  {
    title: "6. Enum con Valores Mixtos",
    code: `
	  enum Resultado {
		Exito = "ÉXITO",
		Fallo = 0,
		Error = "ERROR"
	  }
  
	  console.log(Resultado.Exito); // Salida: ÉXITO
	  console.log(Resultado.Fallo);  // Salida: 0
	  `,
    explanation:
      "Un enum puede combinar valores de cadena y numéricos, aunque esto puede llevar a confusión. En este ejemplo, 'Resultado' tiene tanto valores de cadena como valores numéricos.",
    level: "intermediate",
  },
  {
    title: "7. Enum como Tipo",
    code: `
enum Color {
	Rojo,
	Verde,
	Azul,
}
function esColor(val: Color): boolean {
  return Object.values(Color).includes(val);
}

console.log(esColor(Color.Rojo)); // Salida: true
console.log(esColor(10)); // Salida: false

	  `,
    explanation:
      "Los enums pueden ser utilizados como tipos para asegurarse de que los valores utilizados están dentro del conjunto definido por el enum. En esta función, se verifica si un valor es uno de los valores válidos del enum 'Color'.",
    level: "intermediate",
  },
  {
    title: "8. Enum y Objetos",
    code: `
	  enum Categoria {
		Electronica,
		Ropa,
		Alimentos
	  }
  
	  interface Producto {
		nombre: string;
		categoria: Categoria;
	  }
  
	  const producto: Producto = {
		nombre: "Smartphone",
		categoria: Categoria.Electronica
	  };
  
	  console.log(producto);
	  `,
    explanation:
      "Los enums pueden ser utilizados en interfaces para definir propiedades con valores limitados a los miembros del enum. En este caso, la categoría del producto está restringida a los valores definidos en el enum 'Categoria'.",
    level: "intermediate",
  },
  {
    title: "9. Enums en Clases",
    code: `
	  class Orden {
		static Estado = {
		  Pendiente: 0,
		  EnProceso: 1,
		  Finalizada: 2
		};
  
		estado: number;
  
		constructor(estado: number) {
		  this.estado = estado;
		}
  
		mostrarEstado(): void {
		  console.log(this.estado);
		}
	  }
  
	  const orden = new Orden(Orden.Estado.EnProceso);
	  orden.mostrarEstado(); // Salida: 1
	  `,
    explanation:
      "Puedes usar enums dentro de clases para representar estados u opciones. En este ejemplo, 'Orden' tiene un enum estático 'Estado' que define diferentes estados posibles para una orden.",
    level: "intermediate",
  },
  {
    title: "10. Enum y Operaciones Bitwise",
    code: `
	  enum Permiso {
		Leer = 1 << 0,   // 1
		Escribir = 1 << 1, // 2
		Ejecutar = 1 << 2  // 4
	  }
  
	  function tienePermiso(permisos: number, permiso: Permiso): boolean {
		return (permisos & permiso) === permiso;
	  }
  
	  const misPermisos = Permiso.Leer | Permiso.Escribir;
	  console.log(tienePermiso(misPermisos, Permiso.Leer));   // Salida: true
	  console.log(tienePermiso(misPermisos, Permiso.Ejecutar)); // Salida: false
	  `,
    explanation:
      "Los enums pueden ser utilizados para definir banderas bitwise, permitiendo combinar múltiples valores. En este ejemplo, se usan desplazamientos de bits para definir permisos y verificar si un conjunto de permisos incluye un permiso específico.",
    level: "intermediate",
  },
];
