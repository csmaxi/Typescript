"use client";

import React from "react";

export default function TestPlayground() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Test Playground</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">¿Funciona el playground?</h2>
          <p className="text-gray-600 mb-4">
            Si puedes ver esta página, el routing de Next.js funciona correctamente.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono">
            <div>✅ Next.js funcionando</div>
            <div>✅ Routing funcionando</div>
            <div>✅ Componentes cargando</div>
          </div>
        </div>
      </div>
    </div>
  );
}
