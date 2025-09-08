import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 text-center mx-auto text-white relative z-10">
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <svg className="w-16 h-16 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 19.125V6.375ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm-10.5-9.75A.375.375 0 0 0 10.125 6h-6.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h6.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-6.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h6.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-6.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h6.5a.375.375 0 0 0 .375-.375v-1.5Z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Aprende TypeScript
            </h1>
            <p className="max-w-[700px] mx-auto text-xl md:text-2xl text-blue-100 leading-relaxed">
              Domina el lenguaje de programación que está transformando el
              desarrollo web con un curso estructurado y práctico.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                href="#comenzar"
                className="group inline-flex h-12 items-center justify-center rounded-lg bg-white text-blue-600 px-8 text-lg font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                prefetch={false}
              >
                <span className="mr-2">🚀</span>
                Comenzar ahora
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/playground"
                className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                prefetch={false}
              >
                <span className="mr-2">🎮</span>
                Playground
              </Link>
              <Link
                href="#informacion"
                className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                prefetch={false}
              >
                <span className="mr-2">📚</span>
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="comenzar">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Elige tu Nivel de Aprendizaje
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra el nivel perfecto para tu experiencia y comienza a dominar TypeScript paso a paso
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Nivel Básico */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  ⭐ Principiante
                </span>
              </div>
              <div className="mb-6">
                <div className="bg-green-100 rounded-xl flex items-center justify-center w-16 h-16 mb-4">
                  <BookIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Nivel Básico</h3>
                <p className="text-green-700 leading-relaxed">
                  Aprende los conceptos fundamentales de TypeScript, incluyendo
                  variables, tipos básicos, funciones y control de flujo.
                </p>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="mr-2">📊</span>
                  <span>8 Temas</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <span className="mr-2">⏱️</span>
                  <span>2-3 horas</span>
                </div>
              </div>
              <Link
                href="/basico"
                className="group/btn w-full inline-flex h-12 items-center justify-center rounded-xl bg-green-600 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                prefetch={false}
              >
                <span className="mr-2">🎯</span>
                Comenzar Básico
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Nivel Intermedio */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  ⭐⭐ Intermedio
                </span>
              </div>
              <div className="mb-6">
                <div className="bg-blue-100 rounded-xl flex items-center justify-center w-16 h-16 mb-4">
                  <LayersIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Nivel Intermedio</h3>
                <p className="text-blue-700 leading-relaxed">
                  Profundiza en el uso de TypeScript con interfaces, genéricos,
                  clases y conceptos de programación orientada a objetos.
                </p>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-blue-600">
                  <span className="mr-2">📊</span>
                  <span>6 Temas</span>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="mr-2">⏱️</span>
                  <span>3-4 horas</span>
                </div>
              </div>
              <Link
                href="/intermedio"
                className="group/btn w-full inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                prefetch={false}
              >
                <span className="mr-2">🔥</span>
                Acceder Intermedio
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Nivel Avanzado */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  ⭐⭐⭐ Avanzado
                </span>
              </div>
              <div className="mb-6">
                <div className="bg-purple-100 rounded-xl flex items-center justify-center w-16 h-16 mb-4">
                  <RocketIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Nivel Avanzado</h3>
                <p className="text-purple-700 leading-relaxed">
                  Domina técnicas avanzadas como intersecciones, tipos unión,
                  módulos, async/await y manejo avanzado de errores.
                </p>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-purple-600">
                  <span className="mr-2">📊</span>
                  <span>6 Temas</span>
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="mr-2">⏱️</span>
                  <span>4-5 horas</span>
                </div>
              </div>
              <Link
                href="/avanzado"
                className="group/btn w-full inline-flex h-12 items-center justify-center rounded-xl bg-purple-600 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                prefetch={false}
              >
                <span className="mr-2">🚀</span>
                Dominar Avanzado
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        id="informacion"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-4">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                <ZapIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Mejora tu productividad</h3>
              <p className="text-muted-foreground">
                TypeScript te ayuda a escribir código más seguro y mantenible,
                lo que te permite ser más productivo.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                <CodeIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Escribe código más robusto</h3>
              <p className="text-muted-foreground">
                El sistema de tipos de TypeScript te ayuda a detectar errores en
                tiempo de compilación, lo que te permite escribir código más
                confiable.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                <CompassIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Mejora tu carrera</h3>
              <p className="text-muted-foreground">
                Aprender TypeScript te dará una ventaja competitiva en el
                mercado laboral, ya que es cada vez más demandado por las
                empresas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CompassIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function LayersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ZapIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
