"use client";

import React, { useState } from "react";

interface SimpleCodeEditorProps {
  initialCode?: string;
  title?: string;
}

const SimpleCodeEditor: React.FC<SimpleCodeEditorProps> = ({
  initialCode = "let mensaje: string = \"Hola, mundo!\";\nconsole.log(mensaje);",
  title = "Editor Simple"
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    // Simular ejecución con mejor manejo de tipos
    setTimeout(() => {
      try {
        const results: string[] = [];
        
        // Crear un contexto de ejecución
        const context: { [key: string]: any } = {};
        const functions: { [key: string]: Function } = {};
        
        // Implementar console.log personalizado
        const customConsole = {
          log: (...args: any[]) => {
            const output = args.map(arg => {
              if (typeof arg === 'string') {
                return arg;
              } else if (typeof arg === 'number' || typeof arg === 'boolean') {
                return String(arg);
              } else if (Array.isArray(arg)) {
                return `[${arg.join(', ')}]`;
              } else if (typeof arg === 'object' && arg !== null) {
                return JSON.stringify(arg, null, 0);
              }
              return String(arg);
            }).join(' ');
            results.push(`> ${output}`);
          }
        };

        // Crear una función segura para evaluar el código
        const safeEval = (codeToEval: string) => {
          // Reemplazar console.log con nuestro console personalizado
          let processedCode = codeToEval.replace(/console\.log/g, 'customConsole.log');
          
          try {
            // Crear función que ejecute el código en un contexto controlado
            const func = new Function(
              'customConsole', 
              'context', 
              'functions',
              `
              "use strict";
              ${processedCode}
              return context;
              `
            );
            
            return func(customConsole, context, functions);
          } catch (error) {
            // Si hay error en la creación de la función, lanzar para que se use el método básico
            throw error;
          }
        };

        // Procesar el código línea por línea para mejor control
        const lines = code.split('\n');
        let codeToExecute = '';
        
        for (const line of lines) {
          const trimmedLine = line.trim();
          // Filtrar comentarios y líneas vacías
          if (trimmedLine && !trimmedLine.startsWith('//') && !trimmedLine.startsWith('/*')) {
            // También remover comentarios inline
            const lineWithoutComments = line.replace(/\/\/.*$/, '').trim();
            if (lineWithoutComments) {
              codeToExecute += lineWithoutComments + '\n';
            }
          }
        }

        // Ejecutar el código procesado
        if (codeToExecute.trim()) {
          try {
            // Si el código contiene funciones, usar método básico directamente
            if (codeToExecute.includes('function ') || codeToExecute.includes('=>')) {
              throw new Error('Function detected, using basic method');
            }
            safeEval(codeToExecute);
          } catch (evalError) {
            // Si la evaluación falla, intentar un enfoque más básico
            const basicOutput = processCodeBasically(code);
            results.push(...basicOutput);
          }
        }

        setOutput(results.length > 0 ? results : ['// Código ejecutado exitosamente']);
      } catch (error) {
        setOutput([`Error: ${error instanceof Error ? error.message : 'Error desconocido'}`]);
      }
      
      setIsRunning(false);
    }, 500);
  };

  // Función de respaldo para procesar código de forma básica
  const processCodeBasically = (codeText: string): string[] => {
    const results: string[] = [];
    const lines = codeText.split('\n');
    const variables: { [key: string]: any } = {};
    const functions: { [key: string]: any } = {};
    
    // Filtrar comentarios primero
    const cleanLines = lines.map(line => {
      // Remover comentarios de línea completa y comentarios inline
      const cleaned = line.replace(/\/\/.*$/, '').trim();
      return cleaned;
    }).filter(line => line.length > 0 && !line.startsWith('/*'));

    // Primera pasada: procesar declaraciones de variables y funciones
    cleanLines.forEach(line => {
      const trimmedLine = line.trim();
      
      // Funciones - manejar declaración en múltiples formas
      const functionMatch = trimmedLine.match(/function\s+(\w+)\s*\(([^)]*)\)\s*:\s*(\w+)/);
      if (functionMatch) {
        const [, funcName, params, returnType] = functionMatch;
        functions[funcName] = { 
          params: params ? params.split(',').map(p => p.trim()) : [], 
          returnType 
        };
      }
      
      // Variables con tipos explícitos
      const typedVarMatch = trimmedLine.match(/(?:let|const)\s+(\w+)\s*:\s*(\w+(?:\[\])?)\s*=\s*(.+);?/);
      if (typedVarMatch) {
        const [, varName, varType, varValue] = typedVarMatch;
        let value = varValue.trim();
        
        try {
          if (varType === 'string') {
            value = value.replace(/^['"`]|['"`]$/g, '');
            variables[varName] = value;
          } else if (varType === 'number') {
            variables[varName] = parseFloat(value) || 0;
          } else if (varType === 'boolean') {
            variables[varName] = value === 'true';
          } else if (varType.includes('[]')) {
            // Arrays
            const arrayMatch = value.match(/\[(.*)\]/);
            if (arrayMatch) {
              const arrayContent = arrayMatch[1];
              if (varType === 'number[]') {
                variables[varName] = arrayContent ? 
                  arrayContent.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v)) : [];
              } else if (varType === 'string[]') {
                variables[varName] = arrayContent ? 
                  arrayContent.split(',').map(v => v.trim().replace(/^['"`]|['"`]$/g, '')) : [];
              }
            }
          }
        } catch (e) {
          // Ignorar errores de parsing individual
        }
      }
      
      // Variables sin tipos explícitos (inferencia)
      const inferredVarMatch = trimmedLine.match(/(?:let|const)\s+(\w+)\s*=\s*(.+);?/);
      if (inferredVarMatch && !typedVarMatch) {
        const [, varName, varValue] = inferredVarMatch;
        let value = varValue.trim();
        
        // Remover comentarios inline del valor si los hay
        value = value.replace(/\/\/.*$/, '').trim();
        
        try {
          if (value.startsWith('"') || value.startsWith("'") || value.startsWith('`')) {
            // String inferido
            variables[varName] = value.replace(/^['"`]|['"`]$/g, '');
          } else if (!isNaN(parseFloat(value)) && isFinite(parseFloat(value))) {
            // Number inferido (int o float)
            variables[varName] = parseFloat(value);
          } else if (value === 'true' || value === 'false') {
            // Boolean inferido
            variables[varName] = value === 'true';
          } else if (value.startsWith('{')) {
            // Objeto inferido
            try {
              const objStr = value.replace(/(\w+):/g, '"$1":').replace(/'/g, '"');
              variables[varName] = JSON.parse(objStr);
            } catch {
              variables[varName] = value;
            }
          } else if (value.startsWith('[')) {
            // Array inferido
            try {
              const arrayStr = value.replace(/'/g, '"');
              variables[varName] = JSON.parse(arrayStr);
            } catch {
              variables[varName] = value;
            }
          } else {
            // Si no se puede determinar el tipo, tratarlo como string
            variables[varName] = value.replace(/['"]/g, '');
          }
        } catch (e) {
          // En caso de error, tratarlo como string
          variables[varName] = value.replace(/['"]/g, '');
        }
      }
    });
    
    // Segunda pasada: procesar ejecución y métodos
    cleanLines.forEach(line => {
      const trimmedLine = line.trim();
      
      // Métodos de array como push
      const pushMatch = trimmedLine.match(/(\w+)\.push\((.+)\);?/);
      if (pushMatch) {
        const [, arrayName, value] = pushMatch;
        if (variables[arrayName] && Array.isArray(variables[arrayName])) {
          let pushValue: any = value.trim();
          if (pushValue.startsWith('"') || pushValue.startsWith("'")) {
            pushValue = pushValue.replace(/^['"`]|['"`]$/g, '');
          } else if (!isNaN(parseFloat(pushValue))) {
            pushValue = parseFloat(pushValue);
          }
          variables[arrayName].push(pushValue);
        }
      }
      
      // forEach - simular la ejecución
      const forEachMatch = trimmedLine.match(/(\w+)\.forEach\(/);
      if (forEachMatch) {
        const [, arrayName] = forEachMatch;
        if (variables[arrayName] && Array.isArray(variables[arrayName])) {
          // Buscar console.log dentro del forEach
          const forEachBlock = line.match(/forEach\([^{]*=>\s*{([^}]*)/);
          if (forEachBlock) {
            const blockContent = forEachBlock[1];
            if (blockContent.includes('console.log')) {
              variables[arrayName].forEach((item: any) => {
                const logMatch = blockContent.match(/console\.log\(([^)]+)\)/);
                if (logMatch) {
                  let param = logMatch[1].trim();
                  // Reemplazar parámetro de función (ej: 'fruta') con el valor actual
                  const paramMatch = line.match(/forEach\((\w+)\s*=>/);
                  if (paramMatch) {
                    const paramName = paramMatch[1];
                    param = param.replace(new RegExp(`\\b${paramName}\\b`, 'g'), `"${item}"`);
                  }
                  
                  if (param.startsWith('"') && param.endsWith('"')) {
                    results.push(`> ${param.slice(1, -1)}`);
                  } else {
                    results.push(`> ${param.replace(/['"]/g, '')}: ${item}`);
                  }
                }
              });
            }
          } else {
            // forEach simple en una línea o multilinea simple
            const simpleForEach = line.match(/forEach\((\w+)\s*=>\s*\{?\s*console\.log\(([^)]+)\)/);
            if (simpleForEach) {
              const [, paramName, logParam] = simpleForEach;
              variables[arrayName].forEach((item: any) => {
                let output = logParam.trim();
                // Si el parámetro es exactamente el nombre del iterador, mostrar el item
                if (output.replace(/['"]/g, '') === paramName) {
                  results.push(`> ${item}`);
                } else {
                  // Reemplazar el parámetro con el valor
                  output = output.replace(new RegExp(`\\b${paramName}\\b`, 'g'), String(item));
                  output = output.replace(/['"]/g, '');
                  
                  // Manejar formato "Texto:", variable
                  if (output.includes(':')) {
                    results.push(`> ${output.replace(String(item), '').trim()} ${item}`);
                  } else {
                    results.push(`> ${output}`);
                  }
                }
              });
            }
          }
        }
      }
      
      // Modificación de propiedades de objetos
      const objAssignMatch = trimmedLine.match(/(\w+)\.(\w+)\s*=\s*(.+);?/);
      if (objAssignMatch) {
        const [, objName, prop, value] = objAssignMatch;
        if (variables[objName] && typeof variables[objName] === 'object') {
          let newValue = value.trim();
          if (newValue.startsWith('"') || newValue.startsWith("'")) {
            newValue = newValue.replace(/^['"`]|['"`]$/g, '');
            variables[objName][prop] = newValue;
          } else if (!isNaN(parseFloat(newValue))) {
            variables[objName][prop] = parseFloat(newValue);
          } else if (newValue === 'true' || newValue === 'false') {
            variables[objName][prop] = newValue === 'true';
          }
        }
      }
      
      // Asignación de resultados de funciones
      const funcCallMatch = trimmedLine.match(/(?:let|const)\s+(\w+)\s*=\s*(\w+)\(([^)]*)\);?/);
      if (funcCallMatch) {
        const [, resultVar, funcName, params] = funcCallMatch;
        if (functions[funcName]) {
          // Simular función simple basada en el nombre
          const paramValues = params.split(',').map(p => p.trim());
          let result: any = '';
          
          if (funcName === 'saludar' && paramValues.length === 1) {
            const param = paramValues[0].replace(/['"]/g, '');
            result = `Hola ${param}!`;
          } else if (funcName === 'sumar' && paramValues.length === 2) {
            const a = parseFloat(paramValues[0]) || 0;
            const b = parseFloat(paramValues[1]) || 0;
            result = a + b;
          } else if (funcName === 'multiplicar' && paramValues.length === 2) {
            const a = parseFloat(paramValues[0]) || 0;
            const b = parseFloat(paramValues[1]) || 0;
            result = a * b;
          }
          
          variables[resultVar] = result;
        }
      }
      
      // Console.log
      if (line.includes('console.log')) {
        const logMatch = line.match(/console\.log\(([^)]+)\)/);
        if (logMatch) {
          // Mejorar el parsing de parámetros de console.log para manejar espacios y comas
          const params = [];
          let currentParam = '';
          let inQuotes = false;
          let quoteChar = '';
          
          for (let i = 0; i < logMatch[1].length; i++) {
            const char = logMatch[1][i];
            
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
              if (Array.isArray(value)) {
                return `[${value.join(', ')}]`;
              } else if (typeof value === 'object') {
                return JSON.stringify(value);
              }
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
            // Acceso a propiedades de objetos y arrays
            else if (param.includes('.')) {
              const [objName, prop] = param.split('.');
              if (variables[objName]) {
                // Propiedades especiales de arrays
                if (Array.isArray(variables[objName])) {
                  if (prop === 'length') {
                    return String(variables[objName].length);
                  }
                }
                // Propiedades de objetos
                else if (typeof variables[objName] === 'object') {
                  return String(variables[objName][prop] || 'undefined');
                }
              }
            }
            // Acceso a elementos de array
            else if (param.includes('[')) {
              const [arrName, indexPart] = param.split('[');
              let indexExpr = indexPart.replace(']', '');
              
              // Manejar expresiones como 'array.length - 1'
              if (indexExpr.includes('.length')) {
                const lengthMatch = indexExpr.match(/(\w+)\.length\s*-\s*(\d+)/);
                if (lengthMatch && variables[arrName] && Array.isArray(variables[arrName])) {
                  const [, arrayRef, offset] = lengthMatch;
                  if (arrayRef === arrName) {
                    const index = variables[arrName].length - parseInt(offset);
                    return String(variables[arrName][index] || 'undefined');
                  }
                }
              } else {
                const index = parseInt(indexExpr);
                if (variables[arrName] && Array.isArray(variables[arrName])) {
                  return String(variables[arrName][index] || 'undefined');
                }
              }
            }
            // Expresión compleja o concatenación
            else {
              // Intentar resolver expresiones simples
              let resolved = param;
              Object.keys(variables).forEach(varName => {
                const regex = new RegExp(`\\b${varName}\\b`, 'g');
                const value = variables[varName];
                if (typeof value === 'string') {
                  resolved = resolved.replace(regex, `"${value}"`);
                } else {
                  resolved = resolved.replace(regex, String(value));
                }
              });
              
              try {
                // Evaluar expresiones seguras
                if (/^[\d\s+\-*/().]+$/.test(resolved) || resolved.includes('+')) {
                  const result = Function(`"use strict"; return ${resolved}`)();
                  return String(result);
                }
              } catch (e) {
                // Si falla, devolver el parámetro original
              }
              
              return param.replace(/['"]/g, '');
            }
          }).join(' ');
          
          results.push(`> ${output}`);
        }
      }
    });
    
    return results;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="bg-white/20 hover:bg-white/30 disabled:opacity-50 px-4 py-2 rounded-lg transition-all duration-300"
          >
            {isRunning ? "Ejecutando..." : "▶ Ejecutar"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Editor */}
        <div className="p-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe tu código TypeScript aquí..."
          />
        </div>

        {/* Output */}
        <div className="p-4 border-l border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-3">Consola de Salida</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono min-h-64">
            {output.length > 0 ? (
              output.map((line, index) => (
                <div key={index}>{line}</div>
              ))
            ) : (
              <div className="text-gray-500">
                {isRunning ? "Ejecutando código..." : "Presiona 'Ejecutar' para ver la salida"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCodeEditor;
