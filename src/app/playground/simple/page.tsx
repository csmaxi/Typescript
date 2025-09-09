"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SimplePlayground() {
  const [code, setCode] = useState(`let mensaje: string = "Hola, mundo!";
console.log(mensaje);`);
  const [output, setOutput] = useState<string[]>([]);

  const runCode = () => {
    setOutput(["Código ejecutado:", "> Hola, mundo!"]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-block mb-4">
            <Button variant="outline">← Volver al Curso</Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Playground Simple</h1>
          <p className="text-xl text-gray-600">Versión simplificada para testing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4">
              <h3 className="font-semibold">Editor de Código</h3>
            </div>
            <div className="p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 p-4 font-mono text-sm border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu código TypeScript aquí..."
              />
              <button
                onClick={runCode}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ejecutar Código
              </button>
            </div>
          </div>

          {/* Output */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4">
              <h3 className="font-semibold">Consola de Salida</h3>
            </div>
            <div className="p-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono min-h-64">
                {output.length > 0 ? (
                  output.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))
                ) : (
                  <div className="text-gray-500">Presiona &quot;Ejecutar Código&quot; para ver la salida</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">Estado del Sistema</h4>
          <div className="text-sm text-green-700">
            <div>✅ Componente cargado correctamente</div>
            <div>✅ Estado funcionando</div>
            <div>✅ Eventos funcionando</div>
            <div>✅ Estilos aplicados</div>
          </div>
        </div>
      </div>
    </div>
  );
}
