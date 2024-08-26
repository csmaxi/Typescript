export const funciones = [
  {
    title: "1. Función Básica",
    code: `
    function saludar(): void {
      console.log("Hola, mundo!");
    }

    saludar();
    `,
    explanation:
      "En TypeScript, puedes declarar una función de manera similar a JavaScript, pero con la posibilidad de añadir tipos. Esta función llamada 'saludar' no recibe parámetros y no devuelve ningún valor, como se indica con ': void'. La función simplemente imprime 'Hola, mundo!' en la consola.",
    level: "basic",
  },
  {
    title: "2. Función con Parámetros Tipados",
    code: `
    function saludarConNombre(nombre: string): void {
      console.log(\`Hola, \${nombre}!\`);
    }

    saludarConNombre("Ana");
    `,
    explanation:
      "Aquí se especifica que el parámetro 'nombre' debe ser una cadena de texto (string). Esto mejora la seguridad del código, asegurando que la función reciba el tipo de dato esperado. La función imprime un saludo personalizado en la consola.",
    level: "basic",
  },
  {
    title: "3. Función con Tipo de Retorno",
    code: `
    function obtenerEdadEnDias(edad: number): number {
      return edad * 365;
    }

    console.log(obtenerEdadEnDias(25));
    `,
    explanation:
      "En este ejemplo, se define el tipo de dato que la función devuelve, en este caso un número (number). Esto garantiza que la función siempre retornará un valor del tipo especificado. La función calcula la edad en días multiplicando la edad en años por 365.",
    level: "basic",
  },
  {
    title: "4. Parámetros Opcionales",
    code: `

    function saludarOpcional(nombre: string, titulo?: string): string {
      if (titulo) {
        return \`Hola, \${titulo} \${nombre}!\`;
      } else {
        return \`Hola, \${nombre}!\`;
      }
    }

    console.log(saludarOpcional("Ana"));
    console.log(saludarOpcional("Ana", "Dr."));
    `,
    explanation:
      "Este ejemplo muestra cómo hacer que un parámetro sea opcional usando el signo de interrogación (?). La función puede ser llamada con o sin el parámetro opcional 'titulo'. Si 'titulo' se proporciona, se incluye en el saludo; si no, la función sigue funcionando sin él.",
    level: "basic",
  },
  {
    title: "5. Valores Predeterminados en Parámetros",
    code: `

    function calcularPrecioConDescuento(precio: number, descuento: number = 10): number {
      return precio - (precio * descuento) / 100;
    }

    console.log(calcularPrecioConDescuento(100));
    console.log(calcularPrecioConDescuento(100, 20));
    `,
    explanation:
      "En este ejemplo, el parámetro 'descuento' tiene un valor predeterminado de 10. Si no se proporciona un valor para 'descuento' al llamar a la función, se utilizará 10 por defecto. Esto permite que la función sea más flexible y evita errores cuando faltan parámetros.",
    level: "basic",
  },
  {
    title: "6. Funciones Flecha",
    code: `
    const multiplicar = (a: number, b: number): number => a * b;

    console.log(multiplicar(5, 4));
    `,
    explanation:
      "Las funciones flecha proporcionan una sintaxis más compacta para escribir funciones. En este ejemplo, la función 'multiplicar' toma dos números como parámetros y devuelve su producto. La sintaxis '=> a * b' es una forma simplificada de escribir la función.",
    level: "basic",
  },
  {
    title: "7. Funciones que Devuelven Otras Funciones",
    code: `
    
    function crearMultiplicador(factor: number): (numero: number) => number {
      return function(numero: number): number {
        return numero * factor;
      };
    }

    const multiplicarPor10 = crearMultiplicador(10);
    console.log(multiplicarPor10(5));
    `,
    explanation:
      "Este ejemplo muestra cómo TypeScript permite que una función devuelva otra función. La función 'crearMultiplicador' devuelve una nueva función que multiplica un número por el factor dado. Esto es útil para crear funciones personalizadas de manera flexible.",
    level: "basic",
  },
  {
    title: "8. Sobrecarga de Funciones",
    code: `
    function sumar(a: number, b: number): number;
    function sumar(a: string, b: string): string;
    function sumar(a: any, b: any): any {
      return a + b;
    }

    console.log(sumar(1, 2));
    console.log(sumar("Hola, ", "mundo!"));
    `,
    explanation:
      "La sobrecarga de funciones en TypeScript permite definir múltiples variantes de una función con diferentes tipos o números de parámetros. En este ejemplo, la función 'sumar' puede manejar tanto números como cadenas, combinándolos según el tipo de dato proporcionado.",
    level: "basic",
  },
  {
    title: "9. Funciones Genéricas",
    code: `
    function identidad<T>(valor: T): T {
      return valor;
    }

    console.log(identidad(42)); // Retorna 42, un número
    console.log(identidad("Hola")); // Retorna "Hola", una cadena
    `,
    explanation:
      "Las funciones genéricas te permiten escribir funciones que funcionan con varios tipos sin perder la seguridad de tipos. La función 'identidad' devuelve el mismo tipo de dato que recibe, lo que permite usarla con diferentes tipos de datos de manera flexible.",
    level: "basic",
  },
  {
    title: "10. Funciones Asíncronas y Promesas",
    code: `
    async function obtenerDatos(url: string): Promise<string> {
      const respuesta = await fetch(url);
      const datos = await respuesta.text();
      return datos;
    }

    obtenerDatos("https://ejemplo.com/api/datos")
      .then(datos => console.log(datos))
      .catch(error => console.error("Error:", error));
    `,
    explanation:
      "TypeScript permite trabajar con funciones asíncronas utilizando 'async' y 'await'. En este ejemplo, la función 'obtenerDatos' realiza una llamada a una API y devuelve una promesa que se resuelve en una cadena de texto. El uso de 'await' simplifica el manejo de operaciones asíncronas.",
    level: "basic",
  }
];
