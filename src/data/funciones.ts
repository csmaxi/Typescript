export const funciones = [
  {
    title: "1. Tipado de Parámetros y Retornos",
    code: `
  function sumar(a: number, b: number): number {
	return a + b;
}
	console.log(sumar(12,4))
	  `,
    explanation:
      "En TypeScript, puedes especificar los tipos de los parámetros y el tipo de retorno de una función, lo que ayuda a prevenir errores y asegura que los valores pasados y devueltos sean del tipo esperado.",
    level: "basic",
  },
  {
    title: "2. Parámetros Opcionales y Valores por Defecto",
    code: `
  function saludar(nombre: string, saludo?: string): string {
	return saludo ? \`\${saludo}, \${nombre}\` : \`Hola, \${nombre}\`;
  }
  
  function elevar(base: number, exponente: number = 2): number {
	return Math.pow(base, exponente);
  }
	console.log(saludar('TypeScript'))
    console.log(elevar(3,3))
	  `,
    explanation:
      "Puedes declarar parámetros opcionales utilizando `?` y establecer valores por defecto para los parámetros. Esto permite flexibilidad en cómo se llaman las funciones.",
    level: "basic",
  },
  {
    title: "3. Parámetros Rest",
    code: `
  function sumarTodos(...numeros: number[]): number {
	return numeros.reduce((total, num) => total + num, 8);
  }

  console.log(sumarTodos(12))
	  `,
    explanation:
      "El operador `...` permite a una función aceptar un número variable de argumentos como un array, proporcionando más flexibilidad al trabajar con múltiples parámetros.",
    level: "basic",
  },
  {
    title: "4. Sobrecarga de Funciones",
    code: `
  function combinar(a: string, b: string): string;
  function combinar(a: number, b: number): number;
  function combinar(a: any, b: any): any {
	return a + b;
  }
	combinar(12," TypeScript")
	  `,
    explanation:
      "TypeScript permite la sobrecarga de funciones, permitiendo que una función tenga múltiples firmas que acepten diferentes tipos o cantidades de parámetros, con un comportamiento específico para cada caso.",
    level: "basic",
  },
  {
    title: "5. Funciones Genéricas",
    code: `
  function invertir<T>(array: T[]): T[] {
	return array.reverse();
  }
  
  const numerosInvertidos = invertir([1, 2, 3]);
  const letrasInvertidas = invertir(["a", "b", "c"]);

console.log(numerosInvertidos)
console.log(letrasInvertidas)
	  `,
    explanation:
      "Las funciones genéricas permiten trabajar con cualquier tipo de datos, proporcionando flexibilidad y reutilización del código. Los tipos genéricos se especifican con `<T>`.",
    level: "basic",
  },
];
