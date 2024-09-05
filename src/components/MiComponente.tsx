import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/90">
        <div className="container px-4 md:px-6 text-center mx-auto text-primary-foreground">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Aprende TypeScript
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              Domina el lenguaje de programación que está transformando el
              desarrollo web.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#comenzar"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 scroll-smooth"
                prefetch={false}
              >
                Comenzar ahora
              </Link>
              <Link
                href="#informacion"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 " id="comenzar">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-4 rounded-lg border p-6 bg-background">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                <BookIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Nivel Básico</h3>
              <p className="text-muted-foreground">
                Aprende los conceptos fundamentales de TypeScript, incluyendo
                variables, cadenas y operadores.
              </p>
              <Link
                href="/basico"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Acceder
              </Link>
            </div>
            <div className="grid gap-4 rounded-lg border p-6 bg-background">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                <LayersIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Nivel Intermedio</h3>
              <p className="text-muted-foreground">
                Profundiza en el uso de TypeScript en proyectos más complejos,
                incluyendo interfaces y genéricos.
              </p>
              <Link
                href="/intermedio"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Acceder
              </Link>
            </div>
            <div className="grid gap-4 rounded-lg border p-6 bg-background">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                <RocketIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Nivel Avanzado</h3>
              <p className="text-muted-foreground">
                Aprende técnicas avanzadas de TypeScript, como intersecciones,
                alias y unión.
              </p>
              <Link
                href="/avanzado"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Acceder
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
