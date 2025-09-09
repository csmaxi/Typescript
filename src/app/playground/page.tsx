"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SimpleCodeEditor from "@/components/SimpleCodeEditor";

const playgroundExamples = [
  {
    id: "variables",
    title: "Variables y Tipos",
    code: `// Tipos básicos en TypeScript
let mensaje: string = "¡Hola TypeScript!";
let numero: number = 42;
let decimal: number = 3.14;
let esVerdadero: boolean = true;
let esFalso: boolean = false;

// Imprimir todos los valores
console.log("Mensaje:", mensaje);
console.log("Número entero:", numero);
console.log("Número decimal:", decimal);
console.log("¿Es verdadero?", esVerdadero);
console.log("¿Es falso?", esFalso);

// Operaciones matemáticas
console.log("Suma:", numero + decimal);
console.log("Multiplicación:", numero * 2);`,
    description: "Experimenta con variables y tipos básicos"
  },
  {
    id: "functions",
    title: "Funciones",
    code: `// Funciones con tipos
function saludar(nombre: string): string {
    return "Hola " + nombre + "!";
}

function sumar(a: number, b: number): number {
    return a + b;
}

function multiplicar(x: number, y: number): number {
    return x * y;
}

// Usar las funciones
let saludo = saludar("TypeScript");
let suma = sumar(10, 20);
let producto = multiplicar(5, 8);

console.log(saludo);
console.log("10 + 20 =", suma);
console.log("5 * 8 =", producto);`,
    description: "Crea y usa funciones tipadas"
  },
  {
    id: "arrays",
    title: "Arrays",
    code: `// Arrays tipados
let numeros: number[] = [1, 2, 3, 4, 5];
let frutas: string[] = ["manzana", "banana", "naranja"];
let colores: string[] = ["rojo", "verde", "azul"];

// Métodos de arrays
numeros.push(6);
console.log("Números:", numeros);
console.log("Longitud del array:", numeros.length);

// Iteración con forEach
console.log("--- Lista de frutas ---");
frutas.forEach(fruta => {
    console.log("Fruta:", fruta);
});

// Acceso por índice
console.log("Primera fruta:", frutas[0]);
console.log("Último número:", numeros[numeros.length - 1]);
console.log("Segundo color:", colores[1]);`,
    description: "Trabaja con arrays y sus métodos"
  },
  {
    id: "objects",
    title: "Objetos",
    code: `// Objetos con tipos
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
    activo: true
};

let producto = {
    nombre: "Laptop",
    precio: 999.99,
    disponible: true
};

// Acceder a propiedades
console.log("--- Información de Persona ---");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
console.log("Activo:", persona.activo);

console.log("--- Información de Producto ---");
console.log("Producto:", producto.nombre);
console.log("Precio: $", producto.precio);
console.log("Disponible:", producto.disponible);

// Modificar propiedades
persona.edad = 26;
producto.precio = 899.99;
console.log("Nueva edad:", persona.edad);
console.log("Nuevo precio: $", producto.precio);`,
    description: "Define y manipula objetos"
  },
  {
    id: "types",
    title: "Tipos Avanzados",
    code: `// Diferentes tipos de datos
let texto: string = "TypeScript es genial";
let entero: number = 100;
let flotante: number = 99.99;
let verdadero: boolean = true;
let falso: boolean = false;

// Arrays de diferentes tipos
let nombres: string[] = ["Ana", "Carlos", "María"];
let edades: number[] = [25, 30, 28];
let estados: boolean[] = [true, false, true];

// Mostrar todos los valores
console.log("=== STRINGS ===");
console.log(texto);
nombres.forEach(nombre => {
    console.log("Nombre:", nombre);
});

console.log("=== NUMBERS ===");
console.log("Entero:", entero);
console.log("Flotante:", flotante);
edades.forEach(edad => {
    console.log("Edad:", edad);
});

console.log("=== BOOLEANS ===");
console.log("Verdadero:", verdadero);
console.log("Falso:", falso);
estados.forEach(estado => {
    console.log("Estado:", estado);
});`,
    description: "Explora diferentes tipos de datos"
  },
  {
    id: "inferred",
    title: "Tipos Inferidos",
    code: `// Variables con tipos inferidos (sin especificar tipo)
let edad = 25; // Tipo inferido como number
let nombre = "Ana"; // Tipo inferido como string
let activo = true; // Tipo inferido como boolean
let precio = 99.99; // Tipo inferido como number

// TypeScript infiere automáticamente el tipo
console.log("Edad:", edad);
console.log("Nombre:", nombre);
console.log("Activo:", activo);
console.log("Precio:", precio);

// También funciona en una sola línea
console.log(edad, nombre);`,
    description: "Experimenta con inferencia de tipos automática"
  },
  {
    id: "custom",
    title: "Código Libre",
    code: `// ¡Escribe tu propio código TypeScript aquí!
let miVariable = "Tu código aquí"; // Tipo inferido
let miNumero = 123; // Tipo inferido
let miArray = ["elemento1", "elemento2"]; // Tipo inferido

console.log(miVariable);
console.log("Número:", miNumero);
console.log("Array:", miArray);

// Prueba diferentes tipos de datos y operaciones`,
    description: "Experimenta con tu propio código"
  }
];

function PlaygroundPage() {
  const [selectedExample, setSelectedExample] = useState(playgroundExamples[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="inline-block mb-4">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Curso
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">TypeScript Playground</h1>
              <p className="text-xl text-indigo-100">
                Experimenta con código TypeScript en tiempo real
              </p>
            </div>
          </div>

          {/* Características */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
              <span>✅</span>
              <span>Detección de errores en vivo</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
              <span>🚀</span>
              <span>Ejecución instantánea</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
              <span>💡</span>
              <span>Sugerencias automáticas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar con ejemplos */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ejemplos</h2>
            <div className="space-y-3">
              {playgroundExamples.map((example) => (
                <button
                  key={example.id}
                  onClick={() => setSelectedExample(example)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedExample.id === example.id
                      ? "border-indigo-300 bg-indigo-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-indigo-200 hover:bg-indigo-50"
                  }`}
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {example.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Ayuda rápida */}
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                <span className="mr-2">💡</span>
                Consejos Rápidos
              </h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Usa <code className="bg-blue-100 px-1 rounded">console.log()</code> para ver resultados</li>
                <li>• Los errores aparecen automáticamente</li>
                <li>• Prueba diferentes tipos de datos</li>
                <li>• ¡Experimenta y diviértete!</li>
              </ul>
            </div>
          </div>

          {/* Editor principal */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedExample.title}
              </h2>
              <p className="text-gray-600">{selectedExample.description}</p>
            </div>

            <SimpleCodeEditor
              key={selectedExample.id} // Force re-render when example changes
              initialCode={selectedExample.code}
              title={selectedExample.title}
            />

            {/* Tutorial rápido */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                  <span className="mr-2">🎯</span>
                  Cómo usar el editor
                </h3>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>1. Modifica el código en el editor</li>
                  <li>2. Presiona &quot;Ejecutar&quot; para ver resultados</li>
                  <li>3. Los errores se muestran automáticamente</li>
                  <li>4. Experimenta con diferentes valores</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                  <span className="mr-2">🚀</span>
                  Próximas funciones
                </h3>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>• Editor Monaco (VS Code)</li>
                  <li>• Autocompletado inteligente</li>
                  <li>• Compartir código con enlaces</li>
                  <li>• Más ejemplos interactivos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaygroundPage;
