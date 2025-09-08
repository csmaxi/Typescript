"use client";

import React, { useState } from "react";
import Card from "./Card";
import InteractiveCodeEditor from "./InteractiveCodeEditor";

interface InteractiveCardProps {
  title: string | undefined;
  code: string;
  explanation: string;
  enableInteractive?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  code,
  explanation,
  enableInteractive = true
}) => {
  const [showInteractive, setShowInteractive] = useState(false);

  if (!enableInteractive) {
    return <Card title={title} code={code} explanation={explanation} />;
  }

  return (
    <div className="space-y-4">
      {/* Tarjeta original */}
      <Card title={title} code={code} explanation={explanation} />
      
      {/* Toggle para modo interactivo */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowInteractive(!showInteractive)}
          className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
        >
          <span className="mr-2">
            {showInteractive ? "📖" : "💻"}
          </span>
          {showInteractive ? "Ver Ejemplo" : "Probar Código"}
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
              showInteractive ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Editor interactivo */}
      {showInteractive && (
        <div className="animate-slide-up">
          <InteractiveCodeEditor
            initialCode={code}
            title={`Experimenta: ${title}`}
          />
        </div>
      )}
    </div>
  );
};

export default InteractiveCard;
