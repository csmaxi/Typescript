export const tipos = [
{
  title: "1. Tipos Básicos",
  code: `
  let nombre: string = "Ana";
  let edad: number = 30;
  let esActivo: boolean = true;
  console.log(nombre, edad, esActivo);
    `,
  explanation:
    "Los tipos básicos en TypeScript incluyen 'string' para cadenas de texto, 'number' para números, y 'boolean' para valores verdaderos o falsos. Aquí, 'nombre' es una cadena, 'edad' es un número y 'esActivo' es un booleano.",
  level: "basic",
},
{
  title: "2. Tipos de Arrays",
  code: `
  let numeros: number[] = [1, 2, 3, 4, 5];
  let nombres: Array<string> = ["Ana", "Luis", "Carlos"];
  console.log(numeros, nombres);
  `,
  explanation:
    "TypeScript permite especificar el tipo de los elementos en un array. En este ejemplo, 'numeros' es un array de números y 'nombres' es un array de cadenas de texto.",
  level: "basic",
},
{
  title: "3. Tipos de Objetos",
  code: `
  let persona: { nombre: string; edad: number } = {
    nombre: "Carlos",
    edad: 40
  };
  console.log(persona);
  `,
  explanation:
    "Puedes definir el tipo de un objeto especificando los tipos de sus propiedades. En este caso, 'persona' es un objeto con propiedades 'nombre' de tipo cadena y 'edad' de tipo número.",
  level: "basic",
},
{
  title: "4. Tipos de Unión",
  code: `
  let identificador: string | number = "ID123";
  identificador = 456;
  console.log(identificador);
  `,
  explanation:
    "Los tipos de unión permiten que una variable sea de varios tipos posibles. En este ejemplo, 'identificador' puede ser una cadena de texto o un número.",
  level: "basic",
},
{
  title: "5. Tipos Literales",
  code: `
  let estado: "activo" | "inactivo" = "activo";
  estado = "inactivo";
  console.log(estado);
  `,
  explanation:
    "Los tipos literales permiten especificar un conjunto de valores posibles para una variable. En este caso, 'estado' solo puede ser 'activo' o 'inactivo'.",
  level: "basic",
},
{
  title: "6. Tipos de Tupla",
  code: `
  let tupla: [string, number] = ["Ana", 30];
  console.log(tupla);
  `,
  explanation:
    "Las tuplas permiten definir arrays con un número fijo de elementos con tipos específicos. En este ejemplo, 'tupla' es un array con un string seguido de un número.",
  level: "basic",
},
{
  title: "7. Tipos Opcionales",
  code: `
  let persona: { nombre: string; edad?: number } = {
    nombre: "Luis"
  };
  persona = { nombre: "Luis", edad: 28 };
  console.log(persona);
  `,
  explanation:
    "Puedes definir propiedades opcionales en objetos usando el signo de interrogación (?). En este caso, 'edad' es opcional en el objeto 'persona'.",
  level: "basic",
},
{
  title: "8. Tipos de Funciones",
  code: `
  let suma: (a: number, b: number) => number = function(a, b) {
    return a + b;
  };
  console.log(suma(5, 3));
  `,
  explanation:
    "Puedes especificar el tipo de una función, incluyendo los tipos de sus parámetros y el tipo de su valor de retorno. En este caso, 'suma' es una función que toma dos números y devuelve un número.",
  level: "basic",
},
{
  title: "9. Tipos Genéricos",
  code: `
  function identidad<T>(valor: T): T {
    return valor;
  }
  console.log(identidad(42)); // Número
  console.log(identidad("Hola")); // Cadena
  `,
  explanation:
    "Los tipos genéricos permiten que las funciones o clases manejen diferentes tipos de datos mientras mantienen la seguridad de tipos. En este caso, la función 'identidad' puede manejar cualquier tipo de valor y devuelve el mismo tipo.",
  level: "basic",
},
{
  title: "10. Tipos de Intersección",
  code: `
  type Persona = { nombre: string; edad: number };
  type Empleado = { puesto: string };

  type EmpleadoPersona = Persona & Empleado;

  let empleado: EmpleadoPersona = {
    nombre: "Sara",
    edad: 29,
    puesto: "Desarrolladora"
  };
  console.log(empleado);
  `,
  explanation:
    "Los tipos de intersección permiten combinar múltiples tipos en uno solo. En este ejemplo, 'EmpleadoPersona' combina los tipos 'Persona' y 'Empleado', creando un tipo que incluye todas las propiedades de ambos.",
  level: "basic",
}
];
