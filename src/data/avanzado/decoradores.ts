export const decoradores = [
	{
	  title: "1. Decorador de Clase Básico",
	  code: `
	  // archivo: decorador-clase.ts
	  function logClass(target: Function) {
		console.log(\`Clase creada: \${target.name}\`);
	  }
  
	  @logClass
	  class Persona {
		constructor(public nombre: string) {}
	  }
  
	  const persona = new Persona('Ana');
	  `,
	  explanation:
		"Un decorador de clase se aplica a la clase y puede modificar o registrar información sobre la misma. En este caso, el decorador 'logClass' imprime el nombre de la clase cuando se crea una instancia.",
	  level: "basic",
	},
	{
	  title: "2. Decorador de Propiedad",
	  code: `
	  // archivo: decorador-propiedad.ts
	  function logProperty(target: any, propertyKey: string) {
		let value = target[propertyKey];
		const getter = () => value;
		const setter = (newValue) => {
		  console.log(\`Se ha cambiado \${propertyKey} a \${newValue}\`);
		  value = newValue;
		};
  
		Object.defineProperty(target, propertyKey, {
		  get: getter,
		  set: setter,
		  enumerable: true,
		  configurable: true,
		});
	  }
  
	  class Persona {
		@logProperty
		nombre: string;
  
		constructor(nombre: string) {
		  this.nombre = nombre;
		}
	  }
  
	  const persona = new Persona('Ana');
	  persona.nombre = 'Luis'; // Imprime el cambio en la consola
	  `,
	  explanation:
		"Un decorador de propiedad permite interceptar el acceso a propiedades de una clase. En este caso, 'logProperty' se utiliza para registrar en la consola cada vez que se modifica el valor de la propiedad 'nombre'.",
	  level: "basic",
	},
	{
	  title: "3. Decorador de Método",
	  code: `
	  // archivo: decorador-metodo.ts
	  function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;
		descriptor.value = function(...args: any[]) {
		  console.log(\`Método \${propertyKey} llamado con argumentos: \${args.join(', ')}\`);
		  return originalMethod.apply(this, args);
		};
	  }
  
	  class Persona {
		@logMethod
		saludo(mensaje: string) {
		  console.log(mensaje);
		}
	  }
  
	  const persona = new Persona();
	  persona.saludo('Hola'); // Imprime el mensaje y los argumentos en la consola
	  `,
	  explanation:
		"Un decorador de método permite interceptar y modificar el comportamiento de un método. En este ejemplo, 'logMethod' registra en la consola los argumentos con los que se llama al método 'saludo'.",
	  level: "basic",
	},
	{
	  title: "4. Decorador de Parámetro",
	  code: `
	  // archivo: decorador-parametro.ts
	  function logParameter(target: any, propertyKey: string, parameterIndex: number) {
		const existingParameters = Reflect.getOwnMetadata('log_parameters', target, propertyKey) || [];
		existingParameters.push(parameterIndex);
		Reflect.defineMetadata('log_parameters', existingParameters, target, propertyKey);
	  }
  
	  function logMethodParameters(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;
		descriptor.value = function(...args: any[]) {
		  const parameters = Reflect.getOwnMetadata('log_parameters', target, propertyKey);
		  parameters.forEach(index => {
			console.log(\`Parametro en el índice \${index}: \${args[index]}\`);
		  });
		  return originalMethod.apply(this, args);
		};
	  }
  
	  class Persona {
		@logMethodParameters
		saludo(@logParameter mensaje: string) {
		  console.log(mensaje);
		}
	  }
  
	  const persona = new Persona();
	  persona.saludo('Hola'); // Imprime el parámetro en la consola
	  `,
	  explanation:
		"Un decorador de parámetro permite registrar información sobre los parámetros de un método. En el ejemplo, 'logParameter' almacena el índice del parámetro y 'logMethodParameters' imprime el valor del parámetro en la consola.",
	  level: "intermediate",
	},
	{
	  title: "5. Decorador de Clase con Argumentos",
	  code: `
	  // archivo: decorador-clase-argumentos.ts
	  function logClass(message: string) {
		return function(target: Function) {
		  console.log(\`Clase creada con mensaje: \${message}\`);
		};
	  }
  
	  @logClass('Clase Persona')
	  class Persona {
		constructor(public nombre: string) {}
	  }
  
	  const persona = new Persona('Ana');
	  `,
	  explanation:
		"Los decoradores también pueden aceptar argumentos. En 'logClass', el decorador recibe un mensaje que se muestra cuando se crea una instancia de la clase. Esto permite personalizar el comportamiento del decorador.",
	  level: "intermediate",
	},
	{
	  title: "6. Decorador de Propiedad con Valor Inicial",
	  code: `
	  // archivo: decorador-propiedad-inicial.ts
	  function defaultValue(defaultValue: any) {
		return function(target: any, propertyKey: string) {
		  let value = defaultValue;
		  const getter = () => value;
		  const setter = (newValue) => {
			value = newValue;
		  };
  
		  Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
			enumerable: true,
			configurable: true,
		  });
		};
	  }
  
	  class Persona {
		@defaultValue('Desconocido')
		nombre: string;
  
		constructor(nombre?: string) {
		  if (nombre) {
			this.nombre = nombre;
		  }
		}
	  }
  
	  const persona = new Persona();
	  console.log(persona.nombre); // Imprime 'Desconocido'
	  `,
	  explanation:
		"Un decorador de propiedad puede establecer un valor inicial por defecto. En este caso, el decorador 'defaultValue' asigna un valor inicial a la propiedad 'nombre' si no se proporciona otro valor.",
	  level: "intermediate",
	},
	{
	  title: "7. Decorador de Método para Medir Tiempo de Ejecución",
	  code: `
	  // archivo: decorador-tiempos.ts
	  function measureTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;
		descriptor.value = function(...args: any[]) {
		  const start = performance.now();
		  const result = originalMethod.apply(this, args);
		  const end = performance.now();
		  console.log(\`Tiempo de ejecución de \${propertyKey}: \${end - start} ms\`);
		  return result;
		};
	  }
  
	  class Persona {
		@measureTime
		hacerTrabajo() {
		  for (let i = 0; i < 1e6; i++) {} // Simula una tarea larga
		}
	  }
  
	  const persona = new Persona();
	  persona.hacerTrabajo(); // Imprime el tiempo de ejecución en la consola
	  `,
	  explanation:
		"Un decorador de método puede ser usado para medir el tiempo de ejecución de una función. 'measureTime' calcula el tiempo que tarda en ejecutarse el método y lo imprime en la consola.",
	  level: "intermediate",
	},
	{
	  title: "8. Decorador de Método para Cacheo",
	  code: `
	  // archivo: decorador-cache.ts
	  function cache(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;
		const cache = new Map();
		descriptor.value = function(...args: any[]) {
		  const key = JSON.stringify(args);
		  if (cache.has(key)) {
			return cache.get(key);
		  }
		  const result = originalMethod.apply(this, args);
		  cache.set(key, result);
		  return result;
		};
	  }
  
	  class Calculadora {
		@cache
		fibonacci(n: number): number {
		  if (n <= 1) return n;
		  return this.fibonacci(n - 1) + this.fibonacci(n - 2);
		}
	  }
  
	  const calculadora = new Calculadora();
	  console.log(calculadora.fibonacci(10)); // Usa cache para mejorar rendimiento
	  `,
	  explanation:
		"Un decorador de método puede ser utilizado para implementar un sistema de caché. 'cache' almacena los resultados de las llamadas a métodos para evitar cálculos repetidos y mejorar el rendimiento.",
	  level: "advanced",
	},
	{
	  title: "9. Decorador de Clase para Implementar Singleton",
	  code: `
	  // archivo: singleton.ts
	  function singleton(target: any) {
		const instanceKey = Symbol();
		const originalConstructor = target;
  
		function newConstructor(...args: any[]) {
		  if (!this[instanceKey]) {
			this[instanceKey] = new originalConstructor(...args);
		  }
		  return this[instanceKey];
		}
  
		newConstructor.prototype = originalConstructor.prototype;
		return newConstructor;
	  }
  
	  @singleton
	  class Configuracion {
		private constructor(public setting: string) {}
	  }
  
	  const config1 = new Configuracion('config1');
	  const config2 = new Configuracion('config2');
  
	  console.log(config1 === config2); // true, ambas instancias son la misma
	  `,
	  explanation:
		"Un decorador de clase puede ser utilizado para implementar el patrón Singleton. 'singleton' asegura que solo se cree una única instancia de la clase.",
	  level: "advanced",
	},
	{
	  title: "10. Decorador de Método para Control de Acceso",
	  code: `
	  // archivo: decorador-acceso.ts
	  function requierePermiso(permiso: string) {
		return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		  const originalMethod = descriptor.value;
		  descriptor.value = function(...args: any[]) {
			if (!this.permisos.includes(permiso)) {
			  throw new Error('Acceso denegado');
			}
			return originalMethod.apply(this, args);
		  };
		};
	  }
  
	  class Usuario {
		permisos: string[] = ['admin'];
  
		@requierePermiso('admin')
		accederRecurso() {
		  console.log('Acceso concedido al recurso');
		}
	  }
  
	  const usuario = new Usuario();
	  usuario.accederRecurso(); // Acceso concedido
	  `,
	  explanation:
		"Los decoradores de método también se pueden usar para controlar el acceso a funciones basadas en permisos. 'requierePermiso' verifica si el usuario tiene el permiso necesario antes de ejecutar el método.",
	  level: "advanced",
	}
  ];
  