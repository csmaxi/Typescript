"use client";

import React from "react";

interface CodeHighlighterProps {
  code: string;
  language?: string;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ 
  code, 
  language = "typescript" 
}) => {
  // Función mejorada para highlighting de TypeScript
  const highlightTypeScript = (code: string) => {
    // Definir los tokens y sus estilos
    const tokenPatterns = [
      // Comentarios primero (tienen prioridad)
      { pattern: /\/\/.*$/gm, className: 'text-green-400 italic', type: 'comment' },
      { pattern: /\/\*[\s\S]*?\*\//g, className: 'text-green-400 italic', type: 'comment' },
      
      // Strings (tienen prioridad sobre palabras clave)
      { pattern: /"(?:[^"\\]|\\.)*"/g, className: 'text-emerald-300', type: 'string' },
      { pattern: /'(?:[^'\\]|\\.)*'/g, className: 'text-emerald-300', type: 'string' },
      { pattern: /`(?:[^`\\]|\\.)*`/g, className: 'text-emerald-300', type: 'string' },
      
      // Números
      { pattern: /\b\d+(?:\.\d+)?\b/g, className: 'text-orange-400', type: 'number' },
      
      // Métodos específicos
      { pattern: /\bconsole\.(log|error|warn|info)\b/g, className: 'text-yellow-400', type: 'method' },
      
      // Palabras clave de TypeScript
      { pattern: /\b(?:let|const|var|function|return|if|else|for|while|do|break|continue|switch|case|default|try|catch|finally|throw|new|this|super|class|extends|implements|interface|type|enum|namespace|module|import|export|from|as|public|private|protected|static|readonly|async|await|Promise|void|never|unknown|any)\b/g, className: 'text-purple-400 font-semibold', type: 'keyword' },
      
      // Tipos básicos
      { pattern: /\b(?:string|number|boolean|object|undefined|null|Array|Date|RegExp|Error|Map|Set|WeakMap|WeakSet)\b/g, className: 'text-blue-400 font-medium', type: 'type' },
      
      // Operadores
      { pattern: /[+\-*/%=<>!&|^~?:]/g, className: 'text-pink-400', type: 'operator' },
      
      // Paréntesis, corchetes y llaves
      { pattern: /[(){}\[\]]/g, className: 'text-gray-300', type: 'bracket' }
    ];

    // Crear una lista de todos los matches con su posición
    const matches: Array<{
      start: number;
      end: number;
      text: string;
      className: string;
      type: string;
    }> = [];

    tokenPatterns.forEach(({ pattern, className, type }) => {
      let match;
      const regex = new RegExp(pattern.source, pattern.flags);
      
      while ((match = regex.exec(code)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0],
          className,
          type
        });
      }
    });

    // Ordenar matches por posición de inicio
    matches.sort((a, b) => a.start - b.start);

    // Remover overlaps, dando prioridad a los primeros en el array (comentarios, strings, etc.)
    const filteredMatches: typeof matches = [];
    let lastEnd = 0;

    matches.forEach(match => {
      if (match.start >= lastEnd) {
        filteredMatches.push(match);
        lastEnd = match.end;
      }
    });

    // Construir el HTML final
    let result = '';
    let currentIndex = 0;

    filteredMatches.forEach(match => {
      // Agregar texto sin highlighting antes del match
      if (match.start > currentIndex) {
        result += code.slice(currentIndex, match.start);
      }
      
      // Agregar el match con highlighting
      result += `<span class="${match.className}">${match.text}</span>`;
      currentIndex = match.end;
    });

    // Agregar el resto del código
    if (currentIndex < code.length) {
      result += code.slice(currentIndex);
    }

    return result;
  };

  // Dividir el código en líneas y añadir números
  const lines = code.split('\n');
  const highlightedLines = lines.map((line, index) => {
    const highlightedLine = highlightTypeScript(line);
    return {
      number: index + 1,
      content: highlightedLine || ' ', // Evitar líneas completamente vacías
    };
  });

  return (
    <div className="relative group">
      {/* Header del código con decoración */}
      <div className="absolute top-3 left-4 flex items-center space-x-2 z-10">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm font-medium ml-2">
          {language === "typescript" ? "TypeScript" : language}
        </span>
      </div>

      {/* Contenedor del código */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-inner border border-gray-700">
        <div className="pt-12 pb-4">
          {highlightedLines.map((line, index) => (
            <div 
              key={index} 
              className="flex items-start hover:bg-gray-800/50 transition-colors duration-200"
            >
              {/* Números de línea */}
              <div className="flex-shrink-0 w-12 text-right pr-4 py-1 text-gray-500 text-sm font-mono select-none border-r border-gray-700">
                {line.number}
              </div>
              
              {/* Contenido del código */}
              <div 
                className="flex-1 px-4 py-1 text-sm font-mono leading-relaxed text-gray-100"
                dangerouslySetInnerHTML={{ __html: line.content }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de lenguaje en la esquina */}
      <div className="absolute bottom-3 right-3 bg-gray-800/80 backdrop-blur-sm text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-600">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          TS
        </span>
      </div>
    </div>
  );
};

export default CodeHighlighter;
