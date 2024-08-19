export const decoradores = [
	{
	  title: "1. Introducción a los Decoradores",
	  code: `
	  function logClass(target: Function) {
		console.log(\`Clase creada: \${target.name}\`);
	  }
  
	  @logClass
	  class MiClase {}
  
	  // Salida: Clase creada: MiClase
	  `,
	  explanation:
		"Los decoradores son funciones que se utilizan para modificar o anotar clases, métodos, propiedades o parámetros. En este ejemplo, `@logClass` es un decorador de clase que simplemente imprime el nombre de la clase cuando se crea.",
	  level: "advanced",
	},
	{
	  title: "2. Decoradores de Métodos",
	  code: `
	  function logMethod(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;
  
		descriptor.value = function(...args: any[]) {
		  console.log(\`Método \${String(propertyKey)} llamado con argumentos: \${args}\`);
		  return originalMethod.apply(this, args);
		};
	  }
  
	  class MiClase {
		@logMethod
		miMetodo(a: number, b: number) {
		  return a + b;
		}
	  }
  
	  const instancia = new MiClase();
	  instancia.miMetodo(1, 2); // Método miMetodo llamado con argumentos: 1,2
	  `,
	  explanation:
		"Los decoradores de métodos permiten modificar el comportamiento de los métodos. En el ejemplo, `@logMethod` envuelve el método `miMetodo` para registrar los argumentos con los que se llama y luego ejecuta el método original.",
	  level: "advanced",
	},
	{
	  title: "3. Decoradores de Propiedades",
	  code: `
	  function logProperty(target: any, propertyKey: string | symbol) {
		let value = target[propertyKey];
  
		const getter = () => {
		  console.log(\`Propiedad \${String(propertyKey)} obtenida: \${value}\`);
		  return value;
		};
  
		const setter = (newValue: any) => {
		  console.log(\`Propiedad \${String(propertyKey)} establecida: \${newValue}\`);
		  value = newValue;
		};
  
		Object.defineProperty(target, propertyKey, {
		  get: getter,
		  set: setter,
		  enumerable: true,
		  configurable: true
		});
	  }
  
	  class MiClase {
		@logProperty
		miPropiedad: number = 42;
	  }
  
	  const instancia = new MiClase();
	  instancia.miPropiedad = 100; // Propiedad miPropiedad establecida: 100
	  console.log(instancia.miPropiedad); // Propiedad miPropiedad obtenida: 100
	  `,
	  explanation:
		"Los decoradores de propiedades permiten modificar el acceso a las propiedades de una clase. En el ejemplo, `@logProperty` intercepta los accesos y cambios en `miPropiedad`, registrando cada operación.",
	  level: "advanced",
	},
	{
	  title: "4. Decoradores de Parámetros",
	  code: `
	  function logParameter(target: any, propertyKey: string | symbol, parameterIndex: number) {
		console.log(\`Parámetro en método \${String(propertyKey)} en posición \${parameterIndex}\`);
	  }
  
	  class MiClase {
		miMetodo(@logParameter a: number, @logParameter b: number) {
		  return a + b;
		}
	  }
  
	  const instancia = new MiClase();
	  instancia.miMetodo(1, 2); // Parámetro en método miMetodo en posición 0
							   // Parámetro en método miMetodo en posición 1
	  `,
	  explanation:
		"Los decoradores de parámetros permiten añadir metadatos o modificar el comportamiento de los parámetros de un método. En este ejemplo, `@logParameter` imprime la posición del parámetro en el método.",
	  level: "advanced",
	},
	{
	  title: "5. Uso de Decoradores con Métodos Estáticos y de Acceso",
	  code: `
	  function enumerable(value: boolean) {
		return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
		  descriptor.enumerable = value;
		};
	  }
  
	  class MiClase {
		@enumerable(false)
		miMetodo() {
		  return "Método no enumerable";
		}
	  }
  
	  const instancia = new MiClase();
	  console.log(Object.keys(instancia)); // []
	  `,
	  explanation:
		"Los decoradores también pueden aplicarse a métodos estáticos y de acceso para modificar su visibilidad u otras características. En este ejemplo, `@enumerable(false)` hace que `miMetodo` no aparezca en las propiedades enumerables del objeto.",
	  level: "advanced",
	},
  ];
  