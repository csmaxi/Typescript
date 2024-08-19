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
		"Un enum numérico en TypeScript define un conjunto de constantes numéricas. Por defecto, el primer miembro tiene el valor 0, y cada miembro subsiguiente incrementa el valor en 1. En este ejemplo, `Direccion` tiene valores numéricos automáticamente asignados.",
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
		"Puedes asignar valores numéricos específicos a los miembros de un enum. Los miembros que no tienen un valor explícito usan el siguiente valor entero disponible. En este ejemplo, `Direccion.Sur` es 2 y `Direccion.Oeste` es 4.",
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
		"Los enums de cadenas permiten asignar valores de tipo string a los miembros del enum. Esto es útil cuando los valores deben ser fácilmente legibles y significativos. En este caso, `Color.Rojo` tiene el valor ROJO.",
	  level: "intermediate",
	},
	{
	  title: "4. Acceder a los Valores del Enum",
	  code: `
    enum Direccion {
	Norte,
	Sur,  
	Este, 
	Oeste
  }
  
  console.log(Direccion.Norte); // 0
  console.log(Direccion[0]); // "Norte"
	  `,
	  explanation:
		"Puedes acceder a los valores de un enum usando el nombre del miembro o su valor. Para enums numéricos, puedes obtener el nombre del miembro a partir de su valor. Esto no es aplicable a enums de cadenas, donde los valores no son únicos.",
	  level: "intermediate",
	},
	{
	  title: "5. Enum como Tipos",
	  code: `
   enum Direccion {
	Norte,
	Sur,  
	Este, 
	Oeste
  }

  function mover(direccion: Direccion): void {
	console.log(\`Moviéndose hacia el \${direccion}\`);
  }
  
  mover(Direccion.Norte); // Moviéndose hacia el 0
	  `,
	  explanation:
		"Un enum también puede ser utilizado como un tipo para variables o parámetros de función. Esto permite que las variables o argumentos sean restringidos a un conjunto específico de valores definidos en el enum.",
	  level: "intermediate",
	},
  ];
  