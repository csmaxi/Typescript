export const exercises = [
  {
    title: "1. Imprimir un mensaje en la consola",
    code: `console.log("Hola, TypeScript!");`,
    explanation:
      "Este es el primer paso básico: mostrar un mensaje en la consola. Este método es fundamental para la depuración y para verificar que tu entorno de desarrollo está funcionando correctamente.",
    level: "basic",
  },

  {
    title: "10. Variables en TypeScript",
    code: `
  let numero: number = 5;
  const saludo: string = 'Hola';
  
  let edad: number = 30;
  let nombre: string = 'Juan';
  let esActivo: boolean = true;
  `,
    explanation: 
      "Las variables en TypeScript se utilizan para almacenar datos. Puedes declarar variables con tipos específicos para asegurar que contengan valores del tipo esperado.",
    level: "basic",
  },
  
  {
    title: "5. Condicionales en TypeScript",
    code: `
  let edad = 18;
  if (edad >= 18) {
    console.log('Adulto');
  } else {
    console.log('Menor de edad');
  }
  
  let mensaje = (edad >= 18) ? 'Adulto' : 'Menor de edad';
  console.log(mensaje);
  `,
    explanation: 
      "Los condicionales permiten ejecutar bloques de código basados en ciertas condiciones. TypeScript soporta el uso de `if`, `else`, y el operador ternario para tomar decisiones en tu código.",
    level: "basic",
  },
  {
    title: "9. Bucles en TypeScript",
    code: `
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  
  let numeros = [1, 2, 3, 4, 5];
  for (let numero of numeros) {
    console.log(numero);
  }
  
  let persona = { nombre: 'Juan', edad: 30 };
  for (let clave in persona) {
    console.log(clave, persona[clave]);
  }
  `,
    explanation: 
      "Los bucles permiten ejecutar un bloque de código repetidamente. TypeScript soporta varios tipos de bucles como `for`, `while`, y `for...of` o `for...in` para iterar sobre arrays y objetos.",
    level: "basic",
  },
  
  {
    title: "3. Funciones en TypeScript",
    code: `
  function suma(a: number, b: number): number {
    return a + b;
  }
  
  const saludar = (nombre: string): string => {
    return \`Hola, \${nombre}\`;
  };
  
  function concatena(a: string, b: string = 'mundo'): string {
    return a + ' ' + b;
  }
  `,
    explanation: 
      "Las funciones en TypeScript permiten definir tipos para los parámetros y el valor de retorno. También puedes usar parámetros opcionales y por defecto para mayor flexibilidad.",
    level: "basic",
  },
  
  
  
  
  {
    title: "2. Objetos en TypeScript",
    code: `
  let persona: { nombre: string, edad: number } = { nombre: 'Juan', edad: 30 };
  
  console.log(persona.nombre); // Juan
  persona.edad = 31;
  console.log(persona.edad); // 31
  `,
    explanation: 
      "Los objetos en TypeScript se utilizan para almacenar datos en pares clave-valor. Puedes definir tipos específicos para las propiedades del objeto y acceder a ellas de manera segura.",
    level: "basic",
  },
  
  {
    title: "12. Tuplas en TypeScript",
    code: `
  let miTupla: [string, number] = ['Hola', 42];
  
  console.log(miTupla[0]); // "Hola"
  miTupla[1] = 100;
  
  let tuplaOpcional: [string, number?] = ['Texto'];
  let tuplaConRest: [number, ...string[]] = [1, 'a', 'b', 'c'];
  `,
    explanation: 
      "Las tuplas en TypeScript permiten definir un conjunto de elementos con tipos y longitud fija. Son útiles para almacenar datos heterogéneos y trabajar con colecciones de longitud conocida.",
    level: "intermediate",
  },
  
  {
    title: "7. Enum en TypeScript",
    code: `
  enum Direccion {
    Norte,
    Sur,
    Este,
    Oeste
  }
  
  let direccion: Direccion = Direccion.Norte;
  console.log(direccion); // 0
  
  enum Direccion {
    Norte = 'Norte',
    Sur = 'Sur',
    Este = 'Este',
    Oeste = 'Oeste'
  }
  
  let direccion: Direccion = Direccion.Sur;
  console.log(direccion); // 'Sur'
  `,
    explanation: 
      "Los enums en TypeScript permiten definir un conjunto de valores nombrados. Puedes usar enums para representar un conjunto fijo de constantes, mejorando la legibilidad y seguridad del código.",
    level: "intermediate",
  },
  
  {
    title: "8. Union Types en TypeScript",
    code: `
  let id: number | string;
  id = 123;
  id = "ABC";
  
  function mostrarId(id: number | string): void {
    console.log(id);
  }
  
  mostrarId(123);
  mostrarId('ABC');
  `,
    explanation: 
      "Los tipos de unión permiten que una variable tenga más de un tipo. Esto es útil cuando una variable puede ser uno de varios tipos distintos.",
    level: "intermediate",
  },
  
  {
    title: "4. Interfaces en TypeScript",
    code: `
  interface Persona {
    nombre: string;
    edad: number;
  }
  
  const juan: Persona = { nombre: 'Juan', edad: 30 };
  
  interface Estudiante extends Persona {
    curso: string;
  }
  
  const maria: Estudiante = { nombre: 'María', edad: 22, curso: 'Matemáticas' };
  `,
    explanation: 
      "Las interfaces en TypeScript definen la forma de un objeto, especificando qué propiedades y métodos debe tener. Puedes extender interfaces para crear tipos más específicos.",
    level: "intermediate",
  },
  
  {
    title: "6. Genéricos en TypeScript",
    code: `
  function identidad<T>(valor: T): T {
    return valor;
  }
  
  let resultado = identidad<number>(5);
  let texto = identidad<string>('Hola');
  
  class Caja<T> {
    private contenido: T;
    constructor(contenido: T) {
      this.contenido = contenido;
    }
    getContenido(): T {
      return this.contenido;
    }
  }
  `,
    explanation: 
      "Los genéricos en TypeScript permiten definir funciones, clases y interfaces que trabajan con tipos de datos variables. Esto proporciona mayor flexibilidad y reutilización del código.",
    level: "intermediate",
  },
  
  
];
