"use client";

import React, { useState } from "react";
import CodeHighlighter from "./CodeHighlighter";

interface CardProps {
  title: string | undefined;
  code: string;
  explanation: string;
}

const Card: React.FC<CardProps> = ({ title, code, explanation }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Oculta el mensaje después de 2 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el código: ", err);
      });
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
      <div className="p-8 relative">
        {/* Header con ícono */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
            <span className="text-white text-xl">💻</span>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{title}</h2>
        </div>
        
        {/* Código con syntax highlighting */}
        <div className="relative">
          <CodeHighlighter code={code} language="typescript" />
          
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-2.5 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-110 opacity-80 hover:opacity-100 z-20"
            title="Copiar al portapapeles"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
        
        {/* Mensaje de copiado mejorado */}
        {copied && (
          <div className="absolute top-16 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm py-2 px-4 rounded-lg shadow-lg opacity-100 transition-all duration-300 ease-in-out transform translate-y-0 z-30">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              ¡Código copiado!
            </div>
          </div>
        )}
        
        {/* Explicación con mejor formato */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span className="text-blue-600 text-sm">📋</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Explicación</h3>
              <p className="text-blue-700 leading-relaxed text-base">{explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
