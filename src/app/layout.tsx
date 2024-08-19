import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "csmaxi-TypeScript",
  description: "Aprende typescript con ejercicios prácticos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        {children}
        <footer className="bg-secondary text-white py-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Curso de TypeScript. Todos los derechos reservados.</p>
        </div>
      </footer>
      </body>
    </html>
  );
}
