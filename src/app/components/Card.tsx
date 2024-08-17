"use client";

import React, { useState } from "react";

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
    <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-6 border border-gray-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="p-6 relative">
        <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
        <div className="relative">
          <pre className="bg-gray-900 text-gray-200 p-4 rounded-md overflow-x-auto font-source-code">
            <code className="text-sm">{code}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-blue-600 text-white rounded-md p-2 hover:bg-blue-500 transition-colors duration-300 ease-in-out"
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
              <path d="M16 5H4v14h12V8l4-4v16h-2V5z"></path>
            </svg>
          </button>
        </div>
        {copied && (
          <div className="absolute top-4 right-4 mt-10 bg-blue-500 text-white text-sm py-1 px-3 rounded-md shadow-md opacity-100 transition-opacity duration-300 ease-in-out">
            Código copiado!
          </div>
        )}
        <p className="mt-4 text-gray-700">{explanation}</p>
      </div>
    </div>
  );
};

export default Card;
