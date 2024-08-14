"use client"; // Indica que este es un Client Component

import React, { useState } from 'react';

interface CardProps {
  title: string;
  code: string;
  explanation: string;
}

const Card: React.FC<CardProps> = ({ title, code, explanation }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Oculta el mensaje después de 2 segundos
      })
      .catch(err => {
        console.error('Error al copiar el código: ', err);
      });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="p-6 relative">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="relative">
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="font-bold text-sm text-gray-600">{code}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2  bg-gray-200 text-gray-700 rounded-md  hover:bg-gray-300"
            title="Copiar al portapapeles"
          >
            📋
          </button>
        </div>
        {copied && (
          <div className="absolute top-2 right-2 mt-8 bg-gray-500 text-white text-sm py-1 px-3 rounded-md shadow-md">
            Código copiado!
          </div>
        )}
        <p className="mt-4 text-gray-700">{explanation}</p>
      </div>
    </div>
  );
};

export default Card;
