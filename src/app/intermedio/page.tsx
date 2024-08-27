'use client'

import { clases } from "@/data/intermedio/clases";
import { enums } from "@/data/intermedio/enum";
import { genericos } from "@/data/intermedio/genericos";
import { interfaces } from "@/data/intermedio/interfaces";
import { objetos } from "@/data/intermedio/objetos";
import { tuplas } from "@/data/intermedio/tuplas";


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
    { title: "Objetos", content: objetos },
    { title: "Tuplas", content: tuplas },
    { title: "Interfaces", content: interfaces },
    { title: "Enums", content: enums },
    { title: "Clases", content: clases },
    { title: "Genericos", content: genericos },
    
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
      Nivel Intermedio
    </h1>

    <Accordion type="single" collapsible>
      {datos.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="mb-5 border border-gray-200 rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <AccordionTrigger className="flex items-center justify-between p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t-lg cursor-pointer transition-colors duration-300">
            <span>{title}</span>
          </AccordionTrigger>
          <AccordionContent className="p-4 border-t border-gray-200 bg-gray-50">
            <Accordion type="single" collapsible>
              {content.map((item, subIndex) => (
                <AccordionItem
                  key={subIndex}
                  value={`subitem-${subIndex + 1}`}
                  className="mb-3 border border-gray-200 rounded-lg bg-white shadow transition-shadow duration-300 hover:shadow-md"
                >
                  <AccordionTrigger className="flex items-center justify-between p-3 text-md font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-t-lg cursor-pointer transition-colors duration-300">
                    <span>{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white">
                    {/* Usar el componente Card para mostrar el contenido */}
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
  );
}

export default Basico;
