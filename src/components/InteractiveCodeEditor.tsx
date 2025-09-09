"use client";

import React, { useState, useEffect, useRef } from "react";

interface InteractiveCodeEditorProps {
  initialCode?: string;
  title?: string;
  onCodeChange?: (code: string) => void;
}

const InteractiveCodeEditor: React.FC<InteractiveCodeEditorProps> = ({
  initialCode = "// Escribe tu código TypeScript aquí\nlet mensaje: string = \"Hola, mundo!\";\nconsole.log(mensaje);",
  title = "Editor Interactivo",
  onCodeChange
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Simulador de compilador TypeScript básico
  const checkTypeScriptErrors = (code: string): string[] => {
    const errors: string[] = [];
    
    // Limpiar código eliminando comentarios
    const lines = code.split('\n');
    const cleanLines: { content: string; originalIndex: number }[] = [];
    
    lines.forEach((line, index) => {
      // Remover comentarios inline y limpiar
      const cleaned = line.replace(/\/\/.*$/, '').trim();
      
      // Solo agregar líneas que tienen contenido y no son comentarios
      if (cleaned.length > 0 && 
          !line.trim().startsWith('//') && 
          !line.trim().startsWith('/*') &&
          !line.trim().startsWith('*/')) {
        cleanLines.push({ content: cleaned, originalIndex: index });
      }
    });
    
    // Verificar punto y coma faltante solo en líneas que realmente lo necesitan
    cleanLines.forEach(({ content, originalIndex }) => {
      const line = content;
      
      // Casos donde SÍ necesitamos punto y coma
      const needsSemicolon = (
        // Declaraciones de variables
        line.match(/^(let|const|var)\s+\w+.*=.*[^{};]$/) ||
        // Llamadas a console.log
        line.match(/console\.log\([^)]*\)[^;]*$/) ||
        // Asignaciones
        line.match(/^\w+\s*=\s*[^{};]+$/)
      );
      
      // Casos donde NO necesitamos punto y coma
      const doesntNeedSemicolon = (
        line.endsWith(';') ||
        line.endsWith('{') ||
        line.endsWith('}') ||
        line.endsWith(')') ||
        line.includes('function ') ||
        line.includes('=>') ||
        line.match(/^(if|for|while|switch|try|catch|finally)/) ||
        line.trim() === ''
      );
      
      if (needsSemicolon && !doesntNeedSemicolon) {
        errors.push(`Línea ${originalIndex + 1}: Posible punto y coma faltante`);
      }
    });

    // Verificar strings mal formados
    const codeWithoutComments = code.replace(/\/\/.*$/gm, '');
    const stringErrors = codeWithoutComments.match(/(?:let|const|var)\s+\w+\s*:\s*string\s*=\s*[^"'`;\s]+/g);
    if (stringErrors) {
      errors.push("Error: Los strings deben estar entre comillas");
    }

    return errors;
  };

  // Ejecutar código (simulado)
  const runCode = () => {
    setIsRunning(true);
    setOutput([]);
    setErrors([]);

    // Simular tiempo de compilación
    setTimeout(() => {
      try {
        // Verificar errores de TypeScript
        const tsErrors = checkTypeScriptErrors(code);
        if (tsErrors.length > 0) {
          setErrors(tsErrors);
          setIsRunning(false);
          return;
        }

        // Simular ejecución del código
        const lines = code.split('\n');
        const results: string[] = [];
        
        // Crear un contexto de variables
        const variables: { [key: string]: any } = {};
        
        // Filtrar comentarios primero
        const cleanLines = lines.map(line => {
          return line.replace(/\/\/.*$/, '').trim();
        }).filter(line => line.length > 0 && !line.startsWith('/*'));
        
        // Procesar declaraciones de variables (con y sin tipos explícitos)
        cleanLines.forEach(line => {
          const trimmedLine = line.trim();
          
          // Variables con tipos explícitos
          const typedVarMatch = trimmedLine.match(/(?:let|const)\s+(\w+)\s*:\s*(\w+)\s*=\s*(.+);?/);
          if (typedVarMatch) {
            const [, varName, varType, varValue] = typedVarMatch;
            let value: any = varValue.trim();
            
            // Procesar el valor según el tipo
            if (varType === 'string') {
              value = value.replace(/^['"]|['"]$/g, '').replace(/\\n/g, '\n').replace(/\\t/g, '\t');
            } else if (varType === 'number') {
              value = parseFloat(value as string) || 0;
            } else if (varType === 'boolean') {
              value = value === 'true';
            }
            
            variables[varName] = value;
          }
          
          // Variables con tipos inferidos
          const inferredVarMatch = trimmedLine.match(/(?:let|const)\s+(\w+)\s*=\s*(.+);?/);
          if (inferredVarMatch && !typedVarMatch) {
            const [, varName, varValue] = inferredVarMatch;
            let value = varValue.trim();
            
            try {
              if (value.startsWith('"') || value.startsWith("'") || value.startsWith('`')) {
                // String inferido
                variables[varName] = value.replace(/^['"`]|['"`]$/g, '');
              } else if (!isNaN(parseFloat(value)) && isFinite(parseFloat(value))) {
                // Number inferido
                variables[varName] = parseFloat(value);
              } else if (value === 'true' || value === 'false') {
                // Boolean inferido
                variables[varName] = value === 'true';
              } else {
                // Valor por defecto
                variables[varName] = value.replace(/['"]/g, '');
              }
            } catch (e) {
              variables[varName] = value.replace(/['"]/g, '');
            }
          }
        });
        
        // Procesar console.log con múltiples parámetros
        cleanLines.forEach(line => {
          if (line.includes('console.log')) {
            const match = line.match(/console\.log\(([^)]+)\)/);
            if (match) {
              // Parsear múltiples parámetros
              const params = [];
              let currentParam = '';
              let inQuotes = false;
              let quoteChar = '';
              
              for (let i = 0; i < match[1].length; i++) {
                const char = match[1][i];
                
                if ((char === '"' || char === "'" || char === '`') && !inQuotes) {
                  inQuotes = true;
                  quoteChar = char;
                  currentParam += char;
                } else if (char === quoteChar && inQuotes) {
                  inQuotes = false;
                  quoteChar = '';
                  currentParam += char;
                } else if (char === ',' && !inQuotes) {
                  params.push(currentParam.trim());
                  currentParam = '';
                } else {
                  currentParam += char;
                }
              }
              
              if (currentParam.trim()) {
                params.push(currentParam.trim());
              }

              const output = params.map(param => {
                // Variable
                if (variables.hasOwnProperty(param)) {
                  const value = variables[param];
                  return String(value);
                }
                // String literal
                else if (param.startsWith('"') || param.startsWith("'")) {
                  return param.replace(/^['"`]|['"`]$/g, '');
                }
                // Número
                else if (!isNaN(parseFloat(param))) {
                  return param;
                }
                // Valor por defecto
                else {
                  return param.replace(/['"]/g, '');
                }
              }).join(' ');
              
              results.push(`> ${output}`);
            }
          }
        });

        setOutput(results.length > 0 ? results : ['// Código ejecutado exitosamente']);
      } catch (error) {
        setErrors([`Error de ejecución: ${error instanceof Error ? error.message : 'Error desconocido'}`]);
      }
      
      setIsRunning(false);
    }, 800);
  };

  // Auto-resize del textarea
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
    
    // Auto-resize
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    // Initial resize
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-sm bg-white/20 px-2 py-1 rounded">TypeScript</span>
          </div>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="bg-white/20 hover:bg-white/30 disabled:opacity-50 px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            {isRunning ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Ejecutando...</span>
              </>
            ) : (
              <>
                <span>▶</span>
                <span>Ejecutar</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Editor */}
        <div className="flex-1 p-0">
          <div className="relative">
            {/* Números de línea */}
            <div className="absolute left-0 top-0 w-12 bg-gray-100 h-full border-r border-gray-200 z-10">
              {code.split('\n').map((_, index) => (
                <div
                  key={index}
                  className="h-6 text-xs text-gray-500 flex items-center justify-end pr-2"
                  style={{ lineHeight: '24px' }}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            
            {/* Textarea del código */}
            <textarea
              ref={textareaRef}
              value={code}
              onChange={handleTextareaChange}
              className="w-full pl-14 pr-4 py-3 font-mono text-sm leading-6 resize-none focus:outline-none bg-white border-none min-h-[200px]"
              style={{
                lineHeight: '24px',
                tabSize: 2,
              }}
              placeholder="Escribe tu código TypeScript aquí..."
              spellCheck={false}
            />
          </div>
        </div>

        {/* Panel de salida */}
        <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-200">
          {/* Errores */}
          {errors.length > 0 && (
            <div className="bg-red-50 border-b border-red-200 p-4">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                <span className="mr-2">❌</span>
                Errores de TypeScript
              </h4>
              <div className="space-y-1">
                {errors.map((error, index) => (
                  <div key={index} className="text-sm text-red-700 font-mono">
                    {error}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Salida */}
          <div className="p-4">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">📋</span>
              Consola de Salida
            </h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm min-h-[120px]">
              {output.length > 0 ? (
                output.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 italic">
                  {isRunning ? 'Ejecutando código...' : 'Presiona "Ejecutar" para ver la salida'}
                </div>
              )}
            </div>
          </div>

          {/* Ayudas y sugerencias */}
          <div className="p-4 bg-blue-50 border-t border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              Sugerencias
            </h4>
            <div className="text-sm text-blue-700 space-y-1">
              <div>• Usa <code className="bg-blue-100 px-1 rounded">let</code> o <code className="bg-blue-100 px-1 rounded">const</code> para declarar variables</div>
              <div>• Especifica tipos con <code className="bg-blue-100 px-1 rounded">: string</code>, <code className="bg-blue-100 px-1 rounded">: number</code>, etc.</div>
              <div>• No olvides el punto y coma <code className="bg-blue-100 px-1 rounded">;</code> al final</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCodeEditor;
