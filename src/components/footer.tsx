function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Información del curso */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📚</span>
              <h3 className="text-xl font-bold">TypeScript</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Aprende TypeScript desde lo básico hasta conceptos avanzados con ejemplos prácticos y ejercicios interactivos.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-1">⭐</span>
                <span>3 Niveles</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-1">📊</span>
                <span>20+ Ejercicios</span>
              </div>
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-200">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="/basico" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🎯</span>
                  Nivel Básico
                </a>
              </li>
              <li>
                <a href="/intermedio" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🔥</span>
                  Nivel Intermedio
                </a>
              </li>
              <li>
                <a href="/avanzado" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🚀</span>
                  Nivel Avanzado
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos adicionales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-200">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🌐</span>
                  Documentación oficial
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/playground" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🎮</span>
                  TypeScript Playground
                </a>
              </li>
              <li>
                <a href="https://github.com/microsoft/TypeScript" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">💻</span>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-200">Contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                ¿Tienes preguntas o sugerencias?
              </p>
              <div className="flex flex-col space-y-1">
                <a href="mailto:info@curso-typescript.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <span className="mr-2">📧</span>
                  info@curso-typescript.com
                </a>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-2">⏰</span>
                  <span>Actualizado 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Curso de TypeScript. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">🛠️</span>
                <span>Hecho con Next.js</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">💙</span>
                <span>Creado con pasión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
