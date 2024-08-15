"use client";
import React, { useState } from "react";

interface CardProps {
  title: string;
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
        setTimeout(() => setCopied(false), 1000); // Oculta el mensaje después de 1 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el código: ", err);
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 border border-gray-200">
      <div className="p-6 relative">
        <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
        <div className="relative">
          <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
            <code className="font-mono text-sm">{code}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 bg-gray-500 text-gray-700 rounded-md p-1 hover:bg-gray-300"
            title="Copiar al portapapeles"
          >
            📋
          </button>
        </div>
        {copied && (
          <div className="absolute top-3 right-3 mt-8 bg-red-500 text-white text-sm py-1 px-3 rounded-md shadow-md">
            Código copiado!
          </div>
        )}
        <p className="mt-4 text-gray-700">{explanation}</p>
      </div>
    </div>
  );
};

export default Card;
