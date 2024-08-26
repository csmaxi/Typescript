export const operadores = [
  {
    title: "1. Operadores Aritméticos",
    code: `
    let a: number = 10;
    let b: number = 5;

    console.log(a + b); // Suma: 15
    console.log(a - b); // Resta: 5
    console.log(a * b); // Multiplicación: 50
    console.log(a / b); // División: 2
    console.log(a % b); // Módulo: 0
    `,
    explanation:
      "Los operadores aritméticos realizan cálculos matemáticos. En este ejemplo, se muestran operaciones básicas como suma, resta, multiplicación, división y módulo.",
    level: "basic",
  },
  {
    title: "2. Operadores de Comparación",
    code: `
    let x: number = 10;
    let y: number = 20;

    console.log(x == y); // Igualdad: false
    console.log(x != y); // Desigualdad: true
    console.log(x > y);  // Mayor que: false
    console.log(x < y);  // Menor que: true
    console.log(x >= y); // Mayor o igual que: false
    console.log(x <= y); // Menor o igual que: true
    `,
    explanation:
      "Los operadores de comparación se utilizan para comparar valores. Estos operadores devuelven un valor booleano que indica el resultado de la comparación.",
    level: "basic",
  },
  {
    title: "3. Operadores Lógicos",
    code: `
    let a: boolean = true;
    let b: boolean = false;

    console.log(a && b); // AND: false
    console.log(a || b); // OR: true
    console.log(!a);     // NOT: false
    `,
    explanation:
      "Los operadores lógicos se utilizan para combinar valores booleanos. '&&' (AND) devuelve true solo si ambos valores son true. '||' (OR) devuelve true si al menos uno de los valores es true. '!' (NOT) invierte el valor booleano.",
    level: "basic",
  },
  {
    title: "4. Operadores de Asignación",
    code: `
    let num: number = 10;

    num += 5; // Equivalente a num = num + 5;
    console.log(num); // 15

    num -= 3; // Equivalente a num = num - 3;
    console.log(num); // 12

    num *= 2; // Equivalente a num = num * 2;
    console.log(num); // 24

    num /= 4; // Equivalente a num = num / 4;
    console.log(num); // 6

    num %= 2; // Equivalente a num = num % 2;
    console.log(num); // 0
    `,
    explanation:
      "Los operadores de asignación combinan operaciones aritméticas con asignación. Permiten realizar operaciones y asignar el resultado a la misma variable en una sola línea.",
    level: "basic",
  },
  {
    title: "5. Operadores de Incremento y Decremento",
    code: `
    let count: number = 5;

    count++; // Incrementa en 1
    console.log(count); // 6

    count--; // Decrementa en 1
    console.log(count); // 5

    console.log(++count); // Incremento previo: 6
    console.log(count--); // Decremento posterior: 6
    console.log(count);   // 5
    `,
    explanation:
      "Los operadores de incremento (++) y decremento (--) aumentan o disminuyen el valor de una variable en 1. Los operadores también tienen versiones de pre-incremento y post-decremento que afectan el valor antes o después de su uso en una expresión.",
    level: "basic",
  },
  {
    title: "6. Operadores de Tipo",
    code: `
    let valor: any = "Hola";

    console.log(typeof valor); // Tipo: string
    valor = 123;
    console.log(typeof valor); // Tipo: number

    console.log(valor instanceof Number); // false
    console.log(123 instanceof Number); // true (solo en objetos Number)
    `,
    explanation:
      "Los operadores de tipo permiten determinar el tipo de una variable. 'typeof' devuelve una cadena que representa el tipo de la variable. 'instanceof' verifica si un objeto es una instancia de una clase o tipo específico.",
    level: "basic",
  },
  {
    title: "7. Operador de Coalescencia Nula",
    code: `
    let valor: string | null = null;
    let resultado: string = valor ?? "Valor por defecto";
    console.log(resultado); // Valor por defecto

    valor = "Texto";
    resultado = valor ?? "Valor por defecto";
    console.log(resultado); // Texto
    `,
    explanation:
      "El operador de coalescencia nula (??) permite proporcionar un valor por defecto cuando una variable es null o undefined. En el ejemplo, si 'valor' es null, se usa 'Valor por defecto'.",
    level: "basic",
  },
  {
    title: "8. Operador de Concatenación de Cadenas",
    code: `
    let nombre: string = "Juan";
    let apellido: string = "Pérez";
    
    let nombreCompleto: string = nombre + " " + apellido;
    console.log(nombreCompleto); // Juan Pérez
    
    let saludo: string = "Hola, " + nombre + "!";
    console.log(saludo); // Hola, Juan!
    `,
    explanation:
      "El operador de concatenación (+) se utiliza para unir dos o más cadenas de texto. En este ejemplo, se combinan los valores de 'nombre' y 'apellido' para formar una cadena completa y se utiliza para crear un mensaje de saludo.",
    level: "basic",
  }
,  
  {
    title: "9. Operador de Propagación de Objetos",
    code: `
      let persona = { nombre: "Luis", edad: 30 };
      let direccion = { ciudad: "Madrid", pais: "España" };
  
      let perfilCompleto = { ...persona, ...direccion };
      
      console.log(perfilCompleto);
      // { nombre: 'Luis', edad: 30, ciudad: 'Madrid', pais: 'España' }
      `,
    explanation:
      "El operador de propagación (spread operator) en objetos permite combinar propiedades de varios objetos en uno solo. En el ejemplo, se combinan las propiedades de los objetos 'persona' y 'direccion' en un nuevo objeto 'perfilCompleto'.",
    level: "basic",
  }
  ,
  {
    title: "10. Operador de Desestructuración",
    code: `
    let usuario = { nombre: "Ana", edad: 28 };

    let { nombre, edad }: { nombre: string; edad: number } = usuario;
    console.log(nombre, edad); // Ana 28
    `,
    explanation:
      "El operador de desestructuración permite extraer valores de objetos y arrays en variables individuales. En este ejemplo, 'nombre' y 'edad' se extraen del objeto 'usuario' directamente en variables.",
    level: "basic",
  }
];
