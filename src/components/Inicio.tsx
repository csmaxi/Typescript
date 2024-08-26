import Link from "next/link";
function Inicio() {
	return ( 
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/90">
        <div className="container px-4 md:px-6 text-center mx-auto text-primary-foreground">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Aprende TypeScript</h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              Domina el lenguaje de programación que está transformando el desarrollo web.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Comenzar ahora
              </Link>
              {/* <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Más información
              </Link> */}
            </div>
          </div>
        </div>
      </section>
	 );
}

export default Inicio;