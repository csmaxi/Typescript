"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { arrays } from "@/data/basico/arrays";
import { bucles } from "@/data/basico/bucles";
import { condicionales } from "@/data/basico/condicionales";
import { funciones } from "@/data/basico/funciones";
import { operadores } from "@/data/basico/operadores";
import { variables } from "@/data/basico/variables";
import { cadenas } from "@/data/basico/cadenas";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Card from "@/components/Card";
import BackToTop from "@/components/BackToTop";

function Basico() {
  // Array con todos los datos importados
  const datos = [
    { title: "Variables", content: variables },
    { title: "Cadenas", content: cadenas },
    { title: "Operadores", content: operadores },
    { title: "Arrays", content: arrays },
    { title: "Condicionales", content: condicionales },
    { title: "Bucles", content: bucles },
    { title: "Funciones", content: funciones },
  ];

  return (
    <>
        <Link href="/">
        <div className="container h-12 my-8">
          <Button>
            {/* SVG de flecha de retroceso */}
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver
          </Button>
        </div>
      </Link>
      <div className="max-w-5xl mx-auto p-6 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <span className="text-3xl">🎯</span>
          </div>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            ⭐ Nivel Principiante
          </div>
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            Nivel Básico
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Domina los fundamentos de TypeScript paso a paso
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {datos.map(({ title, content }, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-2 border-green-200 rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:border-green-300"
            >
              <AccordionTrigger className="flex items-center justify-between p-6 text-xl font-bold text-green-800 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-t-xl cursor-pointer transition-all duration-300 group">
                <div className="flex items-center">
                  <span className="mr-3 text-2xl">📚</span>
                  <span>{title}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full mr-3">
                    {content.length} ejercicios
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 border-t-2 border-green-100 bg-green-50/30">
                <Accordion type="single" collapsible className="space-y-4">
                  {content.map((item, subIndex) => (
                    <AccordionItem
                      key={subIndex}
                      value={`subitem-${subIndex + 1}`}
                      className="border border-green-200 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:border-green-300"
                    >
                      <AccordionTrigger className="flex items-center justify-between p-4 text-lg font-semibold text-green-700 bg-green-50 hover:bg-green-100 rounded-t-lg cursor-pointer transition-all duration-300">
                        <div className="flex items-center">
                          <span className="mr-2 text-green-600">▶</span>
                          <span>{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-0 bg-white rounded-b-lg">
                        <Card
                          title={item.title}
                          code={item.code}
                          explanation={item.explanation}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Botón para volver al inicio */}
        <BackToTop />
      </div>
    </>
  );
}

export default Basico;
