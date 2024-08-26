export const intersecciones = [
	{
	  title: "1. Intersección de Tipos Básicos",
	  code: `
	  type Persona = {
		nombre: string;
	  };
  
	  type Edad = {
		edad: number;
	  };
  
	  type PersonaConEdad = Persona & Edad;
  
	  const persona: PersonaConEdad = {
		nombre: "Ana",
		edad: 30
	  };
  
	  console.log(persona);
	  `,
	  explanation:
		"Los tipos de intersección permiten combinar varios tipos en uno solo. En este ejemplo, 'PersonaConEdad' combina los tipos 'Persona' y 'Edad', por lo que un objeto de tipo 'PersonaConEdad' debe tener las propiedades de ambos tipos.",
	  level: "advanced",
	},
	{
	  title: "2. Intersección con Tipos de Objetos Complejos",
	  code: `
	  interface Direccion {
		calle: string;
		ciudad: string;
	  }
  
	  interface Contacto {
		telefono: string;
		email: string;
	  }
  
	  type PersonaConContacto = Direccion & Contacto & { nombre: string };
  
	  const persona: PersonaConContacto = {
		nombre: "Luis",
		calle: "Avenida Siempre Viva",
		ciudad: "Springfield",
		telefono: "123-456-7890",
		email: "luis@example.com"
	  };
  
	  console.log(persona);
	  `,
	  explanation:
		"Puedes combinar múltiples interfaces y tipos con intersecciones para crear un tipo más complejo. En este caso, 'PersonaConContacto' combina 'Direccion', 'Contacto', y un campo adicional 'nombre'.",
	  level: "advanced",
	},
	{
	  title: "3. Intersección con Tipos de Función",
	  code: `
	  type FuncionesBase = {
		ejecutar: () => void;
	  };
  
	  type FuncionesExtra = {
		cancelar: () => void;
	  };
  
	  type FuncionesCompletas = FuncionesBase & FuncionesExtra;
  
	  const funciones: FuncionesCompletas = {
		ejecutar: () => console.log("Ejecutando"),
		cancelar: () => console.log("Cancelando")
	  };
  
	  funciones.ejecutar(); // Salida: Ejecutando
	  funciones.cancelar(); // Salida: Cancelando
	  `,
	  explanation:
		"Las intersecciones también se pueden usar para combinar tipos de función. Aquí, 'FuncionesCompletas' combina 'FuncionesBase' y 'FuncionesExtra', y el objeto resultante debe implementar ambos métodos.",
	  level: "advanced",
	},
	{
	  title: "4. Intersección en Tipos Genéricos",
	  code: `
	  type TieneNombre = {
		nombre: string;
	  };
  
	  type TieneEdad = {
		edad: number;
	  };
  
	  function crearPersona<T extends TieneNombre & TieneEdad>(persona: T): T {
		return persona;
	  }
  
	  const persona = crearPersona({ nombre: "Ana", edad: 30 });
  
	  console.log(persona);
	  `,
	  explanation:
		"Puedes usar intersecciones con tipos genéricos para combinar tipos de manera flexible. En este caso, 'T' debe extender tanto 'TieneNombre' como 'TieneEdad', permitiendo que 'crearPersona' acepte y devuelva objetos con ambos atributos.",
	  level: "advanced",
	},
	{
	  title: "5. Intersección en Tipos de Unión",
	  code: `
	  type Vehiculo = {
		tipo: "automóvil" | "bicicleta";
	  };
  
	  type PropiedadesAutomovil = {
		puertas: number;
	  };
  
	  type PropiedadesBicicleta = {
		ruedas: number;
	  };
  
	  type VehiculoCompleto = Vehiculo & (PropiedadesAutomovil | PropiedadesBicicleta);
  
	  const auto: VehiculoCompleto = {
		tipo: "automóvil",
		puertas: 4
	  };
  
	  const bici: VehiculoCompleto = {
		tipo: "bicicleta",
		ruedas: 2
	  };
  
	  console.log(auto);
	  console.log(bici);
	  `,
	  explanation:
		"Puedes combinar tipos de intersección con tipos de unión. En este ejemplo, 'VehiculoCompleto' incluye 'Vehiculo' y cualquiera de 'PropiedadesAutomovil' o 'PropiedadesBicicleta', lo que permite objetos con diferentes propiedades dependiendo del tipo de vehículo.",
	  level: "advanced",
	},
	{
	  title: "6. Intersección en Tipos de Clase",
	  code: `
	  class Persona {
		nombre: string;
  
		constructor(nombre: string) {
		  this.nombre = nombre;
		}
	  }
  
	  class Contacto {
		telefono: string;
  
		constructor(telefono: string) {
		  this.telefono = telefono;
		}
	  }
  
	  type PersonaConContacto = Persona & Contacto;
  
	  const persona: PersonaConContacto = Object.assign(new Persona("Ana"), new Contacto("123-456-7890"));
  
	  console.log(persona.nombre); // Salida: Ana
	  console.log(persona.telefono); // Salida: 123-456-7890
	  `,
	  explanation:
		"Puedes combinar clases usando intersección de tipos. Aquí, 'PersonaConContacto' combina las propiedades de las clases 'Persona' y 'Contacto'. Usamos `Object.assign` para crear un objeto que implemente ambos tipos.",
	  level: "advanced",
	},
	{
	  title: "7. Intersección con Tipos Opcionales",
	  code: `
	  type PersonalInfo = {
		nombre: string;
		edad?: number;
	  };
  
	  type ContactInfo = {
		telefono?: string;
		email: string;
	  };
  
	  type InformacionCompleta = PersonalInfo & ContactInfo;
  
	  const info: InformacionCompleta = {
		nombre: "Luis",
		email: "luis@example.com"
	  };
  
	  console.log(info);
	  `,
	  explanation:
		"Los tipos opcionales también se pueden combinar con intersección. En este ejemplo, 'InformacionCompleta' incluye campos opcionales de 'PersonalInfo' y 'ContactInfo', permitiendo que el objeto resultante tenga los campos combinados de ambos tipos.",
	  level: "advanced",
	},
	{
	  title: "8. Intersección con Tipos Literales",
	  code: `
	  type Animal = {
		especie: "perro" | "gato";
	  };
  
	  type Caracteristicas = {
		edad: number;
		nombre: string;
	  };
  
	  type AnimalConCaracteristicas = Animal & Caracteristicas;
  
	  const mascota: AnimalConCaracteristicas = {
		especie: "perro",
		edad: 5,
		nombre: "Rex"
	  };
  
	  console.log(mascota);
	  `,
	  explanation:
		"Los tipos literales también pueden combinarse con intersecciones. Aquí, 'AnimalConCaracteristicas' combina el tipo literal 'Animal' con el tipo 'Caracteristicas', creando un objeto que tiene tanto las características del animal como sus propiedades adicionales.",
	  level: "advanced",
	},
	{
	  title: "9. Intersección con Tipos de Tuplas",
	  code: `
	  type Nombre = [string];
	  type Edad = [number];
  
	  type PersonaTupla = Nombre & Edad;
  
	  const persona: PersonaTupla = ["Ana", 30];
  
	  console.log(persona);
	  `,
	  explanation:
		"Puedes usar tipos de intersección con tuplas para combinar diferentes tipos en una sola tupla. En este caso, 'PersonaTupla' combina una tupla con el nombre y otra con la edad en una sola tupla.",
	  level: "advanced",
	},
	{
	  title: "10. Intersección con Tipos de Función",
	  code: `
	  type Logger = {
		log: (mensaje: string) => void;
	  };
  
	  type Notificador = {
		notificar: (mensaje: string) => void;
	  };
  
	  type LoggerNotificador = Logger & Notificador;
  
	  const loggerNotificador: LoggerNotificador = {
		log: (mensaje: string) => console.log("Log:", mensaje),
		notificar: (mensaje: string) => console.log("Notificación:", mensaje)
	  };
  
	  loggerNotificador.log("Inicio del proceso"); // Salida: Log: Inicio del proceso
	  loggerNotificador.notificar("Proceso completado"); // Salida: Notificación: Proceso completado
	  `,
	  explanation:
		"Las intersecciones también se pueden utilizar para combinar tipos de función. En este ejemplo, 'LoggerNotificador' combina los métodos de 'Logger' y 'Notificador', creando un objeto que puede realizar ambas funciones.",
	  level: "advanced",
	}
  ];
  