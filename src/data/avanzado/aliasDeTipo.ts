export const aliasDeTipo = [
	{
	  title: "1. Alias para Tipos Básicos",
	  code: `
	  type Nombre = string;
	  type Edad = number;
  
	  const nombre: Nombre = "Ana";
	  const edad: Edad = 30;
  
	  console.log(nombre, edad);
	  `,
	  explanation:
		"Puedes crear alias para tipos básicos para darles nombres más significativos. En este ejemplo, 'Nombre' es un alias para el tipo 'string' y 'Edad' para el tipo 'number'.",
	  level: "advanced",
	},
	{
	  title: "2. Alias para Tipos de Objetos",
	  code: `
	  type Persona = {
		nombre: string;
		edad: number;
	  };
  
	  const persona: Persona = {
		nombre: "Luis",
		edad: 25
	  };
  
	  console.log(persona);
	  `,
	  explanation:
		"Puedes usar alias para definir tipos de objetos. Aquí, 'Persona' es un alias para un tipo de objeto con propiedades 'nombre' y 'edad'.",
	  level: "advanced",
	},
	{
	  title: "3. Alias para Tipos de Uniones",
	  code: `
	  type Estado = "cargando" | "exitoso" | "error";
  
	  function manejarEstado(estado: Estado) {
		if (estado === "cargando") {
		  console.log("Cargando...");
		} else if (estado === "exitoso") {
		  console.log("Operación exitosa!");
		} else {
		  console.log("Error ocurrido.");
		}
	  }
  
	  manejarEstado("cargando");
	  manejarEstado("exitoso");
	  `,
	  explanation:
		"Los alias también pueden ser usados para tipos de unión. En este caso, 'Estado' es un alias para un tipo de unión que puede ser uno de varios valores literales.",
	  level: "advanced",
	},
	{
	  title: "4. Alias para Tipos de Función",
	  code: `
	  type Saludo = (nombre: string) => string;
  
	  const saludar: Saludo = (nombre) => \`Hola, \${nombre}!\`;
  
	  console.log(saludar("Ana"));
	  `,
	  explanation:
		"Puedes crear alias para tipos de funciones para simplificar la firma de la función. En este caso, 'Saludo' es un alias para una función que toma un nombre y devuelve un saludo.",
	  level: "advanced",
	},
	{
	  title: "5. Alias para Tipos de Tuplas",
	  code: `
	  type Coordenadas = [number, number];
  
	  const punto: Coordenadas = [10, 20];
  
	  console.log(punto);
	  `,
	  explanation:
		"Los alias también se pueden utilizar para tuplas. Aquí, 'Coordenadas' es un alias para una tupla que representa un par de números, como coordenadas en un plano.",
	  level: "advanced",
	},
	{
	  title: "6. Alias para Tipos de Intersección",
	  code: `
	  type Nombre = { nombre: string };
	  type Edad = { edad: number };
  
	  type Persona = Nombre & Edad;
  
	  const persona: Persona = {
		nombre: "Luis",
		edad: 30
	  };
  
	  console.log(persona);
	  `,
	  explanation:
		"Puedes usar alias para definir tipos de intersección, combinando varios tipos en uno solo. En este caso, 'Persona' combina 'Nombre' y 'Edad'.",
	  level: "advanced",
	},
	{
	  title: "7. Alias para Tipos de Parámetros Opcionales",
	  code: `
	  type Opcional = {
		nombre: string;
		edad?: number;
	  };
  
	  const persona: Opcional = {
		nombre: "Ana"
	  };
  
	  console.log(persona);
	  `,
	  explanation:
		"Los alias también pueden incluir parámetros opcionales. En este caso, 'Opcional' define un tipo donde 'edad' es opcional.",
	  level: "advanced",
	},
	{
	  title: "8. Alias para Tipos Genéricos",
	  code: `
	  type Respuesta<T> = {
		exito: boolean;
		datos: T;
	  };
  
	  const respuesta: Respuesta<string> = {
		exito: true,
		datos: "Operación exitosa"
	  };
  
	  console.log(respuesta);
	  `,
	  explanation:
		"Puedes crear alias para tipos genéricos que funcionan con varios tipos de datos. En este ejemplo, 'Respuesta<T>' es un alias para un tipo que incluye un campo de éxito y un campo de datos de tipo genérico.",
	  level: "advanced",
	},
	{
	  title: "9. Alias para Tipos de Condicionales",
	  code: `
	  type EsMayorDeEdad<T> = T extends { edad: number } ? boolean : never;
  
	  type Resultado = EsMayorDeEdad<{ edad: 20 }>;
  
	  const esMayor: Resultado = true;
  
	  console.log(esMayor);
	  `,
	  explanation:
		"Los alias también se pueden usar con tipos condicionales. 'EsMayorDeEdad<T>' es un alias para un tipo que evalúa si un tipo dado tiene una propiedad 'edad', retornando un booleano si la tiene.",
	  level: "advanced",
	},
	{
	  title: "10. Alias para Tipos de Mapa",
	  code: `
	  type Mapa<K extends string | number, V> = {
		[clave in K]: V;
	  };
  
	  const mapa: Mapa<string, number> = {
		clave1: 100,
		clave2: 200
	  };
  
	  console.log(mapa);
	  `,
	  explanation:
		"Los alias también pueden usarse para tipos de mapa. 'Mapa<K, V>' define un tipo de objeto donde las claves son del tipo 'K' y los valores son del tipo 'V'. En este ejemplo, el mapa usa claves de tipo 'string' y valores de tipo 'number'.",
	  level: "advanced",
	}
  ];
  