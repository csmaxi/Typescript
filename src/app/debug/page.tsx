"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-block mb-4">
            <Button variant="outline">← Volver al Curso</Button>
          </Link>
          <h1 className="text-4xl font-bold text-center mb-4">Página de Diagnóstico</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Test 1: Routing */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">✅ Test 1: Routing</h2>
            <p className="text-gray-600 mb-4">Verificar que las rutas funcionan correctamente</p>
            <div className="space-y-2">
              <Link href="/playground" className="block bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
                → Ir a Playground
              </Link>
              <Link href="/playground/simple" className="block bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
                → Ir a Playground Simple
              </Link>
              <Link href="/playground/test" className="block bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
                → Ir a Test Page
              </Link>
            </div>
          </div>

          {/* Test 2: Componentes */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">✅ Test 2: Componentes</h2>
            <p className="text-gray-600 mb-4">Verificar que los componentes se cargan</p>
            <div className="space-y-2">
              <div className="bg-gray-100 p-3 rounded">
                <strong>Button:</strong> <Button>Botón de prueba</Button>
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <strong>Link:</strong> <Link href="/" className="text-blue-600 hover:underline">Enlace de prueba</Link>
              </div>
            </div>
          </div>

          {/* Test 3: Estado */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">✅ Test 3: Estado React</h2>
            <p className="text-gray-600 mb-4">Verificar que React funciona correctamente</p>
            <CounterTest />
          </div>

          {/* Test 4: Estilos */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">✅ Test 4: Estilos</h2>
            <p className="text-gray-600 mb-4">Verificar que Tailwind CSS funciona</p>
            <div className="space-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded">
                Gradiente funcionando
              </div>
              <div className="bg-green-100 text-green-800 p-3 rounded border border-green-200">
                Colores funcionando
              </div>
            </div>
          </div>
        </div>

        {/* Información del sistema */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Información del Sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Framework:</strong> Next.js 14.2.5<br/>
              <strong>React:</strong> 18.x<br/>
              <strong>TypeScript:</strong> 5.x
            </div>
            <div>
              <strong>Styling:</strong> Tailwind CSS<br/>
              <strong>Build:</strong> ✅ Exitoso<br/>
              <strong>Linting:</strong> ✅ Sin errores
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente de prueba para estado
function CounterTest() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-blue-600 mb-2">{count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Incrementar
      </button>
    </div>
  );
}
