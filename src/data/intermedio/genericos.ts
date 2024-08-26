export const genericos = [
  {
    title: "1. Función Genérica Básica",
    code: `
    function identidad<T>(valor: T): T {
      return valor;
    }

    console.log(identidad(42)); // Salida: 42
    console.log(identidad("Hola")); // Salida: Hola
    `,
    explanation:
      "Las funciones genéricas permiten definir una función que puede trabajar con múltiples tipos sin perder la seguridad de tipos. En este caso, la función 'identidad' acepta un parámetro de cualquier tipo y devuelve el mismo tipo.",
    level: "intermediate",
  },
  {
    title: "2. Genéricos en Interfaces",
    code: `
    interface Respuesta<T> {
      datos: T;
      error?: string;
    }

    const respuestaNumero: Respuesta<number> = {
      datos: 123
    };

    const respuestaTexto: Respuesta<string> = {
      datos: "Todo bien"
    };

    console.log(respuestaNumero);
    console.log(respuestaTexto);
    `,
    explanation:
      "Las interfaces genéricas permiten definir estructuras de datos que son flexibles respecto al tipo de datos que manejan. En este caso, 'Respuesta' es una interfaz que puede contener datos de cualquier tipo y opcionalmente un mensaje de error.",
    level: "intermediate",
  },
  {
    title: "3. Genéricos en Clases",
    code: `
    class Almacen<T> {
      private items: T[] = [];

      agregar(item: T): void {
        this.items.push(item);
      }

      obtener(index: number): T | undefined {
        return this.items[index];
      }
    }

    const almacenNumero = new Almacen<number>();
    almacenNumero.agregar(1);
    almacenNumero.agregar(2);
    console.log(almacenNumero.obtener(0)); // Salida: 1

    const almacenTexto = new Almacen<string>();
    almacenTexto.agregar("Hola");
    almacenTexto.agregar("Mundo");
    console.log(almacenTexto.obtener(1)); // Salida: Mundo
    `,
    explanation:
      "Las clases genéricas permiten crear clases que trabajan con varios tipos. En este ejemplo, 'Almacen' es una clase genérica que puede almacenar elementos de cualquier tipo y proporciona métodos para agregar y obtener estos elementos.",
    level: "intermediate",
  },
  {
    title: "4. Genéricos con Restricciones",
    code: `
    function mezclar<T extends { nombre: string }>(obj1: T, obj2: T): T {
      return { ...obj1, ...obj2 };
    }

    const objeto1 = { nombre: "Objeto1", valor: 10 };
    const objeto2 = { nombre: "Objeto2", valor: 20 };

    const resultado = mezclar(objeto1, objeto2);
    console.log(resultado); // Salida: { nombre: 'Objeto2', valor: 20 }
    `,
    explanation:
      "Puedes restringir los tipos genéricos para que sólo se apliquen a tipos que cumplen con ciertas condiciones. En este caso, 'mezclar' acepta dos objetos que deben tener una propiedad 'nombre' de tipo string, y devuelve un nuevo objeto que combina las propiedades de ambos.",
    level: "intermediate",
  },
  {
    title: "5. Genéricos con Varios Parámetros de Tipo",
    code: `
    function combinar<T, U>(obj1: T, obj2: U): T & U {
      return { ...obj1, ...obj2 } as T & U;
    }

    const obj1 = { nombre: "Ana" };
    const obj2 = { edad: 25 };

    const combinado = combinar(obj1, obj2);
    console.log(combinado); // Salida: { nombre: 'Ana', edad: 25 }
    `,
    explanation:
      "Las funciones genéricas pueden aceptar múltiples parámetros de tipo. En este ejemplo, la función 'combinar' acepta dos objetos de tipos diferentes y devuelve un nuevo objeto que combina las propiedades de ambos tipos.",
    level: "intermediate",
  },
  {
    title: "6. Genéricos en Funciones de Orden Superior",
    code: `
    function aplicarTransformacion<T>(array: T[], transformacion: (item: T) => T): T[] {
      return array.map(transformacion);
    }

    const numeros = [1, 2, 3];
    const duplicar = (n: number): number => n * 2;

    console.log(aplicarTransformacion(numeros, duplicar)); // Salida: [2, 4, 6]
    `,
    explanation:
      "Los genéricos permiten que las funciones de orden superior, como las que aplican transformaciones a elementos, sean flexibles y trabajen con diferentes tipos de datos. En este caso, 'aplicarTransformacion' acepta un array y una función de transformación que opera sobre los elementos del array.",
    level: "intermediate",
  },
  {
    title: "7. Genéricos y Funciones Asíncronas",
    code: `
    async function obtenerDatos<T>(url: string): Promise<T> {
      const respuesta = await fetch(url);
      return respuesta.json();
    }

    obtenerDatos<number>("https://api.example.com/numeros")
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
    `,
    explanation:
      "Los genéricos pueden ser utilizados con funciones asíncronas para manejar datos de tipos variados. En este ejemplo, 'obtenerDatos' es una función asíncrona que devuelve datos del tipo especificado por el parámetro genérico.",
    level: "intermediate",
  },
  {
    title: "8. Genéricos en Alias de Tipo",
    code: `
    type Resultado<T> = {
      valor: T;
      exitoso: boolean;
    };

    const resultadoNumero: Resultado<number> = {
      valor: 42,
      exitoso: true
    };

    const resultadoTexto: Resultado<string> = {
      valor: "Éxito",
      exitoso: true
    };

    console.log(resultadoNumero);
    console.log(resultadoTexto);
    `,
    explanation:
      "Puedes usar genéricos en alias de tipo para definir estructuras de datos flexibles. En este caso, 'Resultado' es un alias de tipo que contiene un valor y un indicador de éxito, y puede ser utilizado con diferentes tipos para representar resultados variados.",
    level: "intermediate",
  },
  {
    title: "9. Genéricos con Clases y Métodos",
    code: `
    class Caja<T> {
      private contenido: T;

      constructor(contenido: T) {
        this.contenido = contenido;
      }

      obtenerContenido(): T {
        return this.contenido;
      }
    }

    const cajaNumero = new Caja<number>(123);
    console.log(cajaNumero.obtenerContenido()); // Salida: 123

    const cajaTexto = new Caja<string>("Mensaje");
    console.log(cajaTexto.obtenerContenido()); // Salida: Mensaje
    `,
    explanation:
      "Las clases también pueden ser genéricas, permitiendo que sus propiedades y métodos manejen varios tipos de datos. En este caso, 'Caja' es una clase que almacena un único valor de cualquier tipo y proporciona un método para obtenerlo.",
    level: "intermediate",
  },
  {
    title: "10. Genéricos y Condiciones",
    code: `
    function procesar<T>(valor: T, condicion: (valor: T) => boolean): T | undefined {
      if (condicion(valor)) {
        return valor;
      }
      return undefined;
    }

    const esNumeroPar = (num: number): boolean => num % 2 === 0;

    console.log(procesar(4, esNumeroPar)); // Salida: 4
    console.log(procesar(5, esNumeroPar)); // Salida: undefined
    `,
    explanation:
      "Los genéricos pueden ser utilizados en combinación con condiciones para procesar datos de manera flexible. En este ejemplo, la función 'procesar' acepta un valor y una función de condición para decidir si devolver el valor o no.",
    level: "intermediate",
  }
];
