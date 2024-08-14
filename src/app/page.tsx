import type { NextPage } from 'next';
import Card from './components/Card';
import Image from 'next/image';


const exercises = [
  {
    title: "1. Imprimir un mensaje en la consola",
    code: `console.log("Hola, TypeScript!");`,
    explanation:
      "Este es el primer paso básico: mostrar un mensaje en la consola. Este método es fundamental para la depuración y para verificar que tu entorno de desarrollo está funcionando correctamente.",
  },
  {
    title: "2. Declarar una variable de tipo string",
    code: `let mensaje: string = "Hola, mundo";
console.log(mensaje);`,
    explanation:
      "Declara una variable mensaje de tipo string y muestra su valor. Las variables de tipo string se utilizan para almacenar y manipular texto en tu aplicación.",
  },
  {
    title: "3. Declarar una variable de tipo number",
    code: `let numero: number = 42;
console.log(numero);`,
    explanation:
      "Declara una variable numero de tipo number y muestra su valor. Las variables de tipo number se usan para almacenar valores numéricos que pueden ser utilizados en cálculos y operaciones matemáticas.",
  },
  {
    title: "4. Declarar una variable de tipo boolean",
    code: `let esVerdadero: boolean = true;
console.log(esVerdadero);`,
    explanation:
      "Declara una variable esVerdadero de tipo boolean y muestra su valor. Las variables de tipo boolean representan valores de verdad, como verdadero o falso, y son útiles en la lógica de control de flujo en la programación.",
  },
  {
    title: "5. Concatenar cadenas de texto",
    code: `let nombre: string = "Juan";
let saludo: string = "Hola, " + nombre + "!";
console.log(saludo);`,
    explanation:
      "Concatenar cadenas de texto usando el operador +. La concatenación de cadenas es útil para construir mensajes y crear dinámicamente contenido en tus aplicaciones.",
  },
  {
    title: "6. Uso de plantillas de cadenas (template strings)",
    code: `let edad: number = 25;
let mensajeEdad: string = \`Tienes \${edad} años.\`;
console.log(mensajeEdad);`,
    explanation:
      "Usa plantillas de cadenas para insertar variables dentro de una cadena de texto. Las plantillas de cadenas permiten una interpolación más flexible y legible en comparación con la concatenación tradicional.",
  },
  {
    title: "7. Declarar un arreglo de números",
    code: `let numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros);`,
    explanation:
      "Declara un arreglo que contiene números. Los arreglos se utilizan para almacenar colecciones de datos, facilitando el manejo y la manipulación de listas de elementos similares.",
  },
  {
    title: "8. Acceder a un elemento de un arreglo",
    code: `console.log(numeros[2]);`,
    explanation:
      "Accede a un elemento específico de un arreglo usando su índice. Los índices comienzan en 0, por lo que el índice 2 se refiere al tercer elemento del arreglo.",
  },
  {
    title: "9. Agregar un elemento a un arreglo",
    code: `numeros.push(6);
console.log(numeros);`,
    explanation:
      "Usa el método push para agregar un nuevo elemento al final del arreglo. Este método es útil para modificar el contenido de los arreglos dinámicamente durante la ejecución de tu programa.",
  },
  {
    title: "10. Declarar una función simple",
    code: `function saludar(): void {
    console.log("¡Hola!");
}
saludar();`,
    explanation:
      "Declara una función simple que no devuelve ningún valor (void). Las funciones son bloques de código reutilizables que realizan tareas específicas, facilitando la modularidad y la mantenibilidad del código.",
  },
  {
    title: "11. Función con parámetros",
    code: `function saludarPersona(nombre: string): void {
    console.log(\`¡Hola, \${nombre}!\`);
}
saludarPersona("Ana");`,
    explanation:
      "Declara una función que acepta un parámetro y lo utiliza en su cuerpo. Los parámetros permiten que las funciones sean más flexibles y reutilizables. Esto te permite crear funciones que pueden realizar la misma operación en diferentes datos.",
  },
  {
    title: "12. Función que devuelve un valor",
    code: `function sumar(a: number, b: number): number {
    return a + b;
}
console.log(sumar(2, 3));`,
    explanation:
      "Declara una función que recibe dos parámetros y devuelve la suma de ellos. Las funciones que devuelven valores permiten capturar y utilizar el resultado de una operación en otro contexto. Este patrón es esencial para construir operaciones complejas de forma modular.",
  },
  {
    title: "13. Condicional simple (if statement)",
    code: `let esMayorDeEdad: boolean = true;
if (esMayorDeEdad) {
    console.log("Eres mayor de edad.");
} else {
    console.log("No eres mayor de edad.");
}`,
    explanation:
      "Usa una declaración if para ejecutar código condicionalmente. Las declaraciones condicionales son fundamentales para tomar decisiones en tu código en función de diferentes condiciones. Controlar el flujo de tu aplicación en base a condiciones es clave para cualquier lógica.",
  },
  {
    title: "14. Condicional con varias condiciones (else if)",
    code: `let edadPersona: number = 18;
if (edadPersona < 18) {
    console.log("Eres menor de edad.");
} else if (edadPersona === 18) {
    console.log("Tienes 18 años.");
} else {
    console.log("Eres mayor de edad.");
}`,
    explanation:
      "Usa else if para agregar condiciones adicionales. Esto te permite manejar múltiples escenarios en tu código, haciendo que las decisiones sean más precisas. Las declaraciones else if amplían la flexibilidad de tus condiciones, cubriendo casos adicionales.",
  },
  {
    title: "15. Uso de for para iterar un arreglo",

    code: `const numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}`,
    explanation:
      "Itera sobre un arreglo utilizando un bucle for. Este es un enfoque tradicional y flexible para recorrer cada elemento de un arreglo. Los bucles for son esenciales para realizar operaciones repetitivas en colecciones de datos.",
  },
  {
    title: "16. Uso de for...of para iterar un arreglo",
    code: `const numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(numero);
}`,
    explanation:
      "Itera sobre un arreglo usando for...of, que es más limpio que un for estándar. Este método proporciona una forma más legible y concisa de recorrer los elementos de un arreglo. for...of es preferido cuando no necesitas el índice del elemento actual.",
  },
  {
    title: "17. Declarar una variable de tipo any",
    code: `let cualquierCosa: any = "Hola";
cualquierCosa = 42;
console.log(cualquierCosa);`,
    explanation:
      "Usa any cuando no sabes de antemano qué tipo de valor tendrá una variable. Esto proporciona flexibilidad, pero también puede reducir la seguridad del tipo en tu código. El uso de any debe ser limitado, ya que puede conducir a errores difíciles de detectar.",
  },
  {
    title: "18. Definir un objeto simple",
    code: `let persona: { nombre: string; edad: number } = {
    nombre: "Carlos",
    edad: 30
};
console.log(persona);`,
    explanation:
      "Declara un objeto con propiedades de diferentes tipos. Los objetos te permiten agrupar datos relacionados en una sola estructura. Definir objetos es esencial para representar entidades complejas en tu aplicación.",
  },
  {
    title: "19. Acceder a propiedades de un objeto",
    code: `console.log(persona.nombre);
console.log(persona.edad);`,
    explanation:
      "Accede a las propiedades de un objeto usando el operador punto. Esto es crucial para interactuar con los valores almacenados en un objeto. Acceder a las propiedades de un objeto permite extraer y utilizar su información en tu código.",
  },
  {
    title: "20. Modificar propiedades de un objeto",
    code: `persona.edad = 31;
console.log(persona.edad);`,
    explanation:
      "Modifica el valor de una propiedad de un objeto. Esto te permite actualizar el estado del objeto en respuesta a diferentes eventos o condiciones. Modificar propiedades de un objeto es una operación común en la gestión de datos dinámicos.",
  },
  // Nivel Intermedio (Ejercicios 21-40)
  {
    title: "21. Crear una interfaz básica",
    code: `interface Usuario {
    nombre: string;
    edad: number;
}

let usuario: Usuario = {
    nombre: "María",
    edad: 22
};

console.log(usuario);`,
    explanation:
      "Define una interfaz para especificar la estructura de un objeto. Las interfaces permiten garantizar que un objeto siga una estructura específica, con propiedades y tipos determinados. Utilizar interfaces mejora la claridad del código y ayuda a prevenir errores, asegurando que todos los objetos que implementan la interfaz cumplen con los requisitos establecidos.",
  },
  {
    title: "22. Función que devuelve un objeto",
    code: `interface Usuario {
    nombre: string;
    edad: number;
}
function crearUsuario(nombre: string, edad: number): Usuario {
    return { nombre, edad };
}

let usuario2 = crearUsuario("Pedro", 25);
console.log(usuario2);`,
    explanation:
      "Crea una función que retorna un objeto siguiendo una interfaz. Esto permite construir objetos de manera dinámica mientras se asegura que cumplen con la estructura requerida por la interfaz. Definir funciones para retornar objetos es útil para generar datos con una forma consistente y para organizar la creación de instancias de objetos.",
  },
  {
    title: "23. Uso de una función anónima",
    code: `let multiplicar = function(a: number, b: number): number {
    return a * b;
};

console.log(multiplicar(4, 5));`,
    explanation:
      "Utiliza una función anónima, es decir, una función sin nombre, asignada a una variable. Las funciones anónimas son útiles para definir funciones que solo se usan en un contexto específico o cuando no es necesario reutilizarlas. Esta técnica facilita la definición rápida de comportamientos y el paso de funciones como argumentos.",
  },
  {
    title: "24. Uso de una función flecha",
    code: `let dividir = (a: number, b: number): number => a / b;
console.log(dividir(10, 2));`,
    explanation:
      "Emplea una función flecha, una sintaxis compacta para funciones en TypeScript. Las funciones flecha proporcionan una manera más concisa de definir funciones y resuelven problemas con el contexto de `this`. Son ideales para funciones pequeñas y para mantener el código limpio y legible.",
  },
  {
    title: "25. Destructuración de objetos",
    code: `
let usuario = {
  nombre: "Juan",
  edad: 30,
};

let { nombre, edad } = usuario;
console.log(nombre, edad);
`,
    explanation:
      "Extrae valores de un objeto en variables individuales usando destructuración. Esto simplifica el acceso a propiedades específicas de un objeto y mejora la legibilidad del código al evitar el uso repetido de la notación de puntos. La destructuración es una herramienta útil para trabajar con objetos en una forma más organizada y directa.",
  },
  {
    title: "26. Destructuración de arreglos",
    code: `let numeros = [10, 20, 30, 40];

let [primero, segundo] = numeros;
console.log(primero, segundo);`,
    explanation:
      "Extrae elementos individuales de un arreglo en variables separadas utilizando destructuración. Esta técnica permite acceder fácilmente a valores específicos dentro de un arreglo y mejora la claridad del código al manejar elementos de manera más explícita y ordenada.",
  },
  {
    title: "27. Parámetros opcionales en funciones",
    code: `function saludarOpcional(nombre?: string): void {
    if (nombre) {
        console.log(\`Hola, \${nombre}!\`);
    } else {
        console.log("Hola!");
    }
}

saludarOpcional();
saludarOpcional("Carlos");`,
    explanation:
      "Define parámetros opcionales en una función usando el signo `?`. Esto permite que una función pueda ser llamada con menos argumentos de los que se especifican. Los parámetros opcionales proporcionan flexibilidad al permitir que algunos argumentos sean omitidos en la llamada a la función, facilitando su uso en diferentes contextos.",
  },
  {
    title: "28. Usar readonly en una interfaz",
    code: `interface Vehiculo {
    readonly marca: string;
    modelo: string;
}

let auto: Vehiculo = { marca: "Toyota", modelo: "Corolla" };
console.log(auto);`,
    explanation:
      "Marca las propiedades de una interfaz como `readonly` para hacerlas inmutables. Esto significa que una vez que un valor es asignado a una propiedad `readonly`, no puede ser modificado. Usar `readonly` ayuda a proteger datos importantes y a asegurar que ciertos valores permanezcan constantes a lo largo de la vida del objeto.",
  },
  {
    title: "29. Creación de una clase básica",
    code: `class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log(\`\${this.nombre} hace un sonido.\`);
    }
}

let perro = new Animal("Perro");
perro.hacerSonido();`,
    explanation:
      "Define una clase con un constructor y un método para encapsular datos y comportamientos. Las clases en TypeScript proporcionan una estructura para crear objetos que tienen propiedades y métodos, permitiendo organizar y reutilizar el código de manera más efectiva en la programación orientada a objetos.",
  },
  {
    title: "30. Clases con herencia",
    code: `class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log("El animal hace un sonido.");
    }
}
    class Gato extends Animal {
    hacerSonido(): void {
        console.log(\`\${this.nombre} maúlla.\`);
    }
}

let gato = new Gato("Gato");
gato.hacerSonido();`,
    explanation:
      "Extiende una clase base para crear una subclase que hereda sus propiedades y métodos. La herencia permite que una clase nueva reutilice y extienda la funcionalidad de una clase existente, promoviendo la reutilización del código y facilitando la creación de estructuras jerárquicas de clases.",
  },
  {
    title: "31. Manejo de async y await",
    code: `async function obtenerDatos() {
    let datos = await promesa;
    console.log(datos);
}

obtenerDatos();`,
    explanation:
      "`async` y `await` simplifican el manejo de promesas, permitiendo escribir código asincrónico que se parece al código sincrónico. En este ejemplo, `await` se utiliza para esperar a que la promesa se resuelva antes de continuar con la ejecución de la función.",
  },
  {
    title: "32. Manejo de errores con try...catch",
    code: `async function obtenerDatosSeguro() {
    try {
        let datos = await promesa;
        console.log(datos);
    } catch (error) {
        console.log("Error: " + error);
    }
}

obtenerDatosSeguro();`,
    explanation:
      "El bloque `try...catch` permite manejar errores en operaciones asincrónicas que pueden fallar. Si la promesa rechaza, el flujo de ejecución pasa automáticamente al bloque `catch`, donde puedes manejar el error.",
  },
  {
    title: "33. Uso de un alias de tipo (Type Alias)",
    code: `type Punto = {
    x: number;
    y: number;
};

let punto1: Punto = { x: 10, y: 20 };
console.log(punto1);`,
    explanation:
      "Los alias de tipo permiten crear nombres personalizados para tipos complejos. En este ejemplo, `Punto` es un alias para un objeto con propiedades `x` e `y`.",
  },
  {
    title: "34. Uso de tipos de unión (Union Types)",
    code: `function imprimirId(id: number | string) {
    console.log("El ID es: " + id);
}

imprimirId(123);
imprimirId("ABC123");`,
    explanation:
      "Los tipos de unión permiten que una variable acepte múltiples tipos. Aquí, la función `imprimirId` acepta un número o una cadena, mostrando flexibilidad en el manejo de diferentes tipos de datos.",
  },
  {
    title: "35. Uso de la palabra clave never",
    code: `function generarError(mensaje: string): never {
    throw new Error(mensaje);
}

try {
    generarError("Algo salió mal");
} catch (error) {
    console.log(error.message);
}`,
    explanation:
      "`never` indica que una función no puede finalizar correctamente (por ejemplo, lanza un error). En este caso, `generarError` lanza una excepción que es capturada en un bloque `try...catch`.",
  },
  {
    title: "36. Uso de readonly para propiedades inmutables",
    code: `class Libro {
    readonly titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }
}

let libro1 = new Libro("TypeScript Básico");
// libro1.titulo = "Otro título"; // Error: no se puede asignar a 'titulo' porque es una propiedad de solo lectura.
console.log(libro1.titulo);`,
    explanation:
      "`readonly` hace que una propiedad de una clase sea inmutable después de su inicialización. Aquí, `titulo` solo puede ser establecido en el constructor y no se puede cambiar posteriormente.",
  },
  {
    title: "37. Definir tipos con type e interface",
    code: `type Coordenada = {
    latitud: number;
    longitud: number;
};

interface Direccion {
    calle: string;
    ciudad: string;
}

let ubicacion: Coordenada & Direccion = {
    latitud: 40.7128,
    longitud: -74.0060,
    calle: "Wall Street",
    ciudad: "New York"
};

console.log(ubicacion);`,
    explanation:
      "Este ejemplo combina un `type` (`Coordenada`) y una `interface` (`Direccion`) usando el operador `&` para crear un objeto `ubicacion` que tiene propiedades de ambos.",
  },
  {
    title: "38. Uso de optional chaining",
    code: `let usuario3: { nombre?: string } = {};
console.log(usuario3?.nombre?.toUpperCase());`,
    explanation:
      "El optional chaining (`?.`) permite acceder a propiedades de un objeto de forma segura, evitando errores si la propiedad o el objeto no existen.",
  },
  {
    title: "39. Uso de nullish coalescing",
    code: `let entrada = undefined;
let valorPredeterminado = "Valor por defecto";
let valorFinal = entrada ?? valorPredeterminado;
console.log(valorFinal);`,
    explanation:
      "El operador `??` devuelve el operando derecho si el izquierdo es `null` o `undefined`. Aquí, `valorFinal` toma `valorPredeterminado` porque `entrada` es `undefined`.",
  },
  {
    title: "40. Usa parámetros por defecto en funciones",
    code: `function multiplicar(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiplicar(5));  // 5 * 2 = 10
console.log(multiplicar(5, 3));  // 5 * 3 = 15`,
    explanation:
      "Los parámetros por defecto permiten que una función use un valor predeterminado si no se proporciona un argumento. En este caso, `b` tiene un valor por defecto de 2, por lo que si solo se pasa un argumento, `b` se inicializa a 2.",
  },
  // Nivel Avanzado (Ejercicios 41-60)
  {
    title: "41. Uso de spread operator en objetos",
    code: `let direccion = { ciudad: "Lima", pais: "Perú" };
let nuevaDireccion = { ...direccion, codigoPostal: "15001" };
console.log(nuevaDireccion);`,
    explanation:
      "Utiliza el spread operator (`...`) para copiar y combinar las propiedades de un objeto en uno nuevo. Esto simplifica la creación de nuevos objetos a partir de objetos existentes sin modificar los originales. El spread operator es útil para combinar datos de manera eficiente y mantener la inmutabilidad de los objetos.",
  },
  {
    title: "42. Uso de rest operator en funciones",
    code: `function sumarTodo(...numeros: number[]): number {
    return numeros.reduce((a, b) => a + b, 0);
}

console.log(sumarTodo(1, 2, 3, 4, 5));`,
    explanation:
      "Agrupa múltiples argumentos en un solo parámetro de tipo arreglo usando el rest operator (`...`). Esto permite que una función acepte un número variable de argumentos y simplifica la definición de funciones que necesitan manejar entradas variadas, facilitando su flexibilidad y reutilización.",
  },
  {
    title: "43. Uso de genéricos en funciones",
    code: `function identidad<T>(valor: T): T {
    return valor;
}

console.log(identidad<string>("Hola"));
console.log(identidad<number>(123));`,
    explanation:
      "Define funciones que trabajan con diferentes tipos de datos utilizando genéricos. Los genéricos permiten que las funciones acepten y devuelvan valores de diversos tipos mientras mantienen la seguridad de tipos. Esto facilita la creación de funciones flexibles y reutilizables que se adaptan a diferentes tipos de datos.",
  },
  {
    title: "44. Uso de Promise",
    code: `function esperar(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

esperar(2000).then(() => console.log("Han pasado 2 segundos"));`,
    explanation:
      "Maneja operaciones asincrónicas utilizando promesas (`Promise`). Las promesas permiten representar valores que estarán disponibles en el futuro, facilitando la gestión de operaciones que se completan de manera asincrónica. Esto ayuda a manejar el flujo de código asíncrono de manera estructurada y evita el uso excesivo de callbacks anidados.",
  },
  {
    title: "45. Uso de async/await",
    code: `async function procesar(): Promise<void> {
    console.log("Procesando...");
    await esperar(3000);
    console.log("Terminado");
}

procesar();`,
    explanation:
      "Simplifica el manejo de promesas utilizando la sintaxis `async/await`. Al marcar una función como `async` y usar `await` para esperar la resolución de promesas, puedes escribir código asíncrono que se comporta de manera más similar al código sincrónico, mejorando la legibilidad y el manejo de errores en operaciones asíncronas.",
  },
  {
    title: "46. Definir un enum",
    code: `enum Color {
    Rojo,
    Verde,
    Azul
}

let colorFavorito: Color = Color.Verde;
console.log(colorFavorito);`,
    explanation:
      "Crea un conjunto de constantes con nombres significativos usando un `enum`. Los enumerados proporcionan una forma estructurada de representar un conjunto de valores relacionados, mejorando la legibilidad del código y facilitando la gestión de opciones predefinidas en lugar de usar valores literales.",
  },
  {
    title: "47. Uso de interface con readonly y propiedades opcionales",
    code: `interface Punto3D {
    readonly x: number;
    y: number;
    z?: number;
}

let punto3D: Punto3D = { x: 10, y: 20 };
console.log(punto3D);`,
    explanation:
      "Combina `readonly` y propiedades opcionales en una interfaz para definir estructuras de datos más flexibles y seguras. El modificador `readonly` asegura que ciertas propiedades no puedan cambiar después de su inicialización, mientras que las propiedades opcionales (`?`) permiten que algunos valores sean omitidos en la definición del objeto.",
  },
  {
    title: "48. Crear un tipo de unión complejo",
    code: `type Estado = "activo" | "inactivo" | "pendiente";

let estadoUsuario: Estado = "activo";
console.log(estadoUsuario);`,
    explanation:
      "Define un tipo de unión que permite que una variable tenga uno de varios tipos específicos. Los tipos de unión son útiles para manejar variables que pueden tener diferentes formas o valores, proporcionando un control más preciso sobre los posibles valores y mejorando la validación de tipos en el código.",
  },
  {
    title: "49. Uso avanzado de type",
    code: `type VehiculoBase = { ruedas: number };
type Coche = VehiculoBase & { puertas: number };
type Moto = VehiculoBase & { tieneManillar: boolean };

let miCoche: Coche = { ruedas: 4, puertas: 4 };
let miMoto: Moto = { ruedas: 2, tieneManillar: true };
console.log(miCoche, miMoto);`,
    explanation:
      "Combina varios tipos usando `type` para crear tipos compuestos más complejos. El uso de `type` permite definir tipos que combinan propiedades de múltiples interfaces o tipos, facilitando la creación de estructuras de datos ricas y reutilizables en tu aplicación.",
  },
  {
    title: "50. Uso de interface con extends",
    code: `interface Animal {
    nombre: string;
}

interface Perro extends Animal {
    raza: string;
}

let miPerro: Perro = { nombre: "Max", raza: "Labrador" };
console.log(miPerro);`,
    explanation:
      "Extiende una interfaz para heredar propiedades de otra interfaz. Esto permite construir nuevas interfaces basadas en interfaces existentes, agregando o modificando propiedades según sea necesario. La herencia de interfaces fomenta la reutilización y la extensión de definiciones de tipos en un sistema de tipos más robusto.",
  },
  {
    title: "51. Crear una clase abstracta",
    code: `abstract class Forma {
    abstract area(): number;
}

class Cuadrado extends Forma {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    area(): number {
        return this.lado * this.lado;
    }
}

let cuadrado = new Cuadrado(4);
console.log(cuadrado.area());`,
    explanation:
      "Define una clase abstracta que sirve como base para otras clases y no puede ser instanciada directamente. Las clases abstractas pueden contener métodos abstractos que deben ser implementados por las subclases. Esto proporciona una estructura para clases derivadas y asegura que ciertos métodos sean definidos en las implementaciones concretas.",
  },
  {
    title: "52. Implementar interfaces en una clase",
    code: `interface Dibujo {
    dibujar(): void;
}

class Circulo implements Dibujo {
    radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    dibujar(): void {
        console.log("Dibujando un círculo");
    }
}

let miCirculo = new Circulo(5);
miCirculo.dibujar();`,
    explanation:
      "Implementa una interfaz en una clase para obligar a la clase a definir ciertos métodos. Al implementar una interfaz, una clase se compromete a proporcionar las implementaciones específicas de los métodos y propiedades definidos en la interfaz, asegurando que la clase cumpla con un contrato de comportamiento establecido.",
  },
  {
    title: "53. Uso de typeof en tipos",
    code: `let nombre = "Juan";
type NombreTipo = typeof nombre;

let otroNombre: NombreTipo = "Ana";
console.log(otroNombre);`,
    explanation:
      "Utiliza `typeof` para obtener el tipo de una variable y definir un nuevo tipo basado en ella. Esto permite crear tipos que reflejan el tipo de una variable existente, facilitando la creación de tipos que se alinean con las definiciones actuales del código y asegurando consistencia en el uso de tipos.",
  },
  {
    title: "54. Uso de keyof en tipos",
    code: `interface Usuario {
    id: number;
    nombre: string;
}

type ClaveUsuario = keyof Usuario;

let clave: ClaveUsuario = "nombre";
console.log(clave);`,
    explanation:
      "Utiliza `keyof` para obtener las claves de un tipo como un tipo de unión de cadenas. Esto permite crear tipos que se basan en las propiedades de otros tipos, proporcionando una manera de referirse a las claves de un tipo específico y facilitando la creación de tipos más dinámicos y flexibles.",
  },
  {
    title: "55. Uso de mapped types",
    code: `type Usuario = {
    nombre: string;
    edad: number;
}

type UsuarioReadonly = {
    readonly [K in keyof Usuario]: Usuario[K];
}

let usuario: UsuarioReadonly = { nombre: "Ana", edad: 30 };
// usuario.nombre = "Maria"; // Error: 'nombre' es de solo lectura
console.log(usuario);`,
    explanation:
      "Utiliza mapped types para crear nuevos tipos basados en un tipo existente. Los mapped types permiten transformar las propiedades de un tipo original, como hacerlas `readonly`, `optional`, o cambiar sus tipos. Esto proporciona una forma poderosa de derivar nuevos tipos a partir de tipos existentes con modificaciones específicas.",
  },
  {
    title: "56. Uso de conditional types",
    code: `type EsNumero<T> = T extends number ? "Es número" : "No es número";

type Prueba1 = EsNumero<5>;   // "Es número"
type Prueba2 = EsNumero<string>; // "No es número"`,
    explanation:
      "Define tipos condicionales que evalúan un tipo en función de una condición. Los conditional types permiten crear tipos que varían según las características de otros tipos, proporcionando flexibilidad para definir comportamientos o propiedades condicionales en función de los tipos que se están trabajando.",
  },
  {
    title: "57. Crear un tipo con tipos genericos",
    code: `type Envuelto<T> = { valor: T };

let envueltoNumero: Envuelto<number> = { valor: 42 };
let envueltoTexto: Envuelto<string> = { valor: "Hola" };
console.log(envueltoNumero, envueltoTexto);`,
    explanation:
      "Define un tipo genérico que puede trabajar con diferentes tipos de datos. Los tipos genéricos permiten crear tipos reutilizables que se adaptan a diversos tipos de datos, proporcionando una mayor flexibilidad y seguridad de tipos en la programación y facilitando la reutilización de tipos en diferentes contextos.",
  },
  {
    title: "58. Uso de decorators",
    code: `function logClass(target: Function) {
    console.log(\`Clase\${target.name} fue creada\`);
}

@logClass
class Persona {
    constructor(public nombre: string) {}
}

let persona = new Persona("Luis");`,
    explanation:
      "Aplica un decorador a una clase para modificar su comportamiento o agregar funcionalidades adicionales. Los decoradores permiten realizar metaprogramación en TypeScript, lo que facilita la adición de lógica y características a las clases sin modificar su implementación directa.",
  },
  {
    title: "59. Uso de namespaces",
    code: `namespace Matemáticas {
    export function sumar(a: number, b: number): number {
        return a + b;
    }
}

console.log(Matemáticas.sumar(3, 4));`,
    explanation:
      "Organiza y encapsula el código en espacios de nombres (`namespace`) para evitar conflictos de nombres y mejorar la organización del código. Los namespaces permiten agrupar funciones, interfaces y clases relacionadas, facilitando la gestión del código en proyectos grandes y promoviendo la modularidad.",
  },
  {
    title: "60. Uso de tipos literales",
    code: `type DiaDeLaSemana = "lunes" | "martes" | "miércoles" | "jueves" | "viernes" | "sábado" | "domingo";

let diaHoy: DiaDeLaSemana = "viernes";
console.log(diaHoy);`,
    explanation:
      "Define tipos literales que permiten que una variable tenga uno de un conjunto específico de valores. Los tipos literales son útiles para restringir las posibles opciones de una variable a un conjunto predefinido de valores, mejorando la precisión y la claridad del código.",
  },
];

const Home: NextPage = () => {
  return (
    <div className="bg-neutral min-h-screen flex flex-col">
      <header className="bg-primary text-white py-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Image
            src="/typescript.svg"
            alt="TypeScript Logo"
            width={100}
            height={100}
            className="mb-4 bg-white "
          />
          <h1 className="text-4xl font-bold">Curso de TypeScript</h1>
          <p className="text-lg mt-2">Aprende TypeScript con ejercicios prácticos.</p>
        </div>
      </header>
      <main className="flex-grow p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {exercises.map((exercise, index) => (
            <Card
              key={index}
              title={exercise.title}
              code={exercise.code}
              explanation={exercise.explanation}
            />
          ))}
        </div>
      </main>
      <footer className="bg-secondary text-white py-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Curso de TypeScript. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
