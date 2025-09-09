"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SimpleCodeEditor from "@/components/SimpleCodeEditor";

const testExamples = [
  {
    title: "Test 1: Variables String",
    code: `let mensaje: string = "Hola, mundo!";
console.log(mensaje);`,
    expected: "Debería mostrar: > Hola, mundo!"
  },
  {
    title: "Test 2: Variables Number",
    code: `let numero: number = 42;
console.log(numero);`,
    expected: "Debería mostrar: > 42"
  },
  {
    title: "Test 3: Variables Boolean",
    code: `let esVerdadero: boolean = true;
console.log(esVerdadero);`,
    expected: "Debería mostrar: > true"
  },
  {
    title: "Test 4: String Literal",
    code: `console.log("¡Hola TypeScript!");`,
    expected: "Debería mostrar: > ¡Hola TypeScript!"
  },
  {
    title: "Test 5: Múltiples Variables",
    code: `let nombre: string = "Juan";
let edad: number = 25;
console.log(nombre);
console.log(edad);
console.log("Mi nombre es " + nombre);`,
    expected: "Debería mostrar: > Juan, > 25, > Mi nombre es Juan"
  },
  {
    title: "Test 6: Variables Inferidas",
    code: `let edad = 25; // Tipo inferido como number
let nombre = "Ana"; // Tipo inferido como string
console.log(edad, nombre);`,
    expected: "Debería mostrar: > 25 Ana"
  },
  {
    title: "Test 7: Tipos Inferidos Mixtos",
    code: `let activo = true;
let precio = 99.99;
let producto = "Laptop";
console.log("Activo:", activo);
console.log("Precio:", precio);
console.log("Producto:", producto);`,
    expected: "Debería mostrar: > Activo: true, > Precio: 99.99, > Producto: Laptop"
  }
];

export default function TestConsolePage() {
  const [selectedTest, setSelectedTest] = React.useState(testExamples[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-block mb-4">
            <Button variant="outline">← Volver al Curso</Button>
          </Link>
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            🧪 Test de Console.log
          </h1>
          <p className="text-xl text-center text-gray-600">
            Verificar que el simulador de console.log funciona correctamente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tests disponibles */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tests Disponibles</h2>
            {testExamples.map((test, index) => (
              <button
                key={index}
                onClick={() => setSelectedTest(test)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedTest.title === test.title
                    ? "border-green-300 bg-green-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-green-200 hover:bg-green-50"
                }`}
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {test.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {test.expected}
                </p>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs">
                  <pre>{test.code}</pre>
                </div>
              </button>
            ))}
          </div>

          {/* Editor de prueba */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedTest.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {selectedTest.expected}
            </p>
            
            <SimpleCodeEditor
              key={selectedTest.title}
              initialCode={selectedTest.code}
              title="Editor de Prueba"
            />

            {/* Instrucciones */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">📋 Instrucciones</h3>
              <ol className="text-sm text-blue-700 space-y-1">
                <li>1. El código ya está cargado en el editor</li>
                <li>2. Presiona &quot;Ejecutar&quot; para ver el resultado</li>
                <li>3. Verifica que la salida coincida con lo esperado</li>
                <li>4. Puedes modificar el código y probar variaciones</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Status del sistema */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 Estado del Simulador</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-green-800 mb-2">✅ Funcionalidades Implementadas</h4>
              <ul className="space-y-1 text-green-700">
                <li>• Detección de variables let/const</li>
                <li>• Evaluación de tipos (string, number, boolean)</li>
                <li>• Procesamiento de strings con comillas</li>
                <li>• Manejo de console.log()</li>
                <li>• Concatenación de strings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">🚀 Próximas Mejoras</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Operaciones matemáticas</li>
                <li>• Arrays y objetos</li>
                <li>• Funciones personalizadas</li>
                <li>• Bucles y condicionales</li>
                <li>• Monaco Editor real</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
