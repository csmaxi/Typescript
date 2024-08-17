import type { NextPage } from "next";
import Card from "./components/Card";
import Image from "next/image";
import { variables } from "@/data/variables";
import { tipos } from "@/data/tipos";
import { operadores } from "@/data/operadores";
import { condicionales } from "@/data/condicionales";
import { bucles } from "@/data/bucles";
import { funciones } from "@/data/funciones";
import { arrays } from "@/data/arrays";
import { objetos } from "@/data/objetos";
import { interfaces } from "@/data/interfaces";
import { clases } from "@/data/clases";
import { enums } from "@/data/enum";
import { tuplas } from "@/data/tuplas";
import { genericos } from "@/data/genericos";
import { union } from "@/data/union";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Función para agrupar por nivel y tema
const groupByLevelAndTopic = (data: any[]) => {
  const grouped: { [key: string]: { [key: string]: any[] } } = {
    basic: {},
    intermediate: {},
    advanced: {},
  };

  data.forEach(section => {
    section.content.forEach((item: { level: string | number; }) => {
      if (!grouped[item.level][section.title]) {
        grouped[item.level][section.title] = [];
      }
      grouped[item.level][section.title].push(item);
    });
  });

  return grouped;
};

// Agrupa los datos
const groupedData = groupByLevelAndTopic([
  { title: "Variables", content: variables },
  { title: "Tipos", content: tipos },
  { title: "Operadores", content: operadores },
  { title: "Condicionales", content: condicionales },
  { title: "Bucles", content: bucles },
  { title: "Funciones", content: funciones },
  { title: "Arrays", content: arrays },
  { title: "Objetos", content: objetos },
  { title: "Interfaces", content: interfaces },
  { title: "Clases", content: clases },
  { title: "Enum", content: enums },
  { title: "Genericos", content: genericos },
  { title: "Tuplas", content: tuplas },
  { title: "Union", content: union },
]);

const Home: NextPage = () => {
  return (
    <div className="bg-neutral min-h-screen flex flex-col">
      <header className="bg-primary text-white py-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Image
            src="/typescript.svg"
            alt="TypeScript Logo"
            width={100}
            height={100}
            className="mb-4 bg-white"
          />
          <h1 className="text-4xl font-bold">Curso de TypeScript</h1>
        </div>
      </header>
      <main className="flex-grow p-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {["basic", "intermediate", "advanced"].map(level => (
              <AccordionItem
                key={level}
                value={`item-${level}`}
                className="mb-4 rounded-lg border border-gray-200 shadow-md bg-white"
              >
                <AccordionTrigger className="flex items-center justify-between p-4 text-lg font-semibold text-gray-700 bg-blue-200 hover:bg-blue-100 transition-colors duration-300 rounded-t-lg cursor-pointer">
                  <h2>{level.charAt(0).toUpperCase() + level.slice(1)}</h2>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  <Accordion type="single" collapsible>
                    {Object.entries(groupedData[level]).map(([topic, items]) => (
                      <AccordionItem
                        key={topic}
                        value={`item-${level}-${topic}`}
                        className="mb-4 rounded-lg border border-gray-200 shadow-md bg-white"
                      >
                        <AccordionTrigger className="flex items-center justify-between p-4 text-lg font-semibold text-gray-700 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-t-lg cursor-pointer">
                          <h3>{topic}</h3>
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                          {items.map((item, idx) => (
                            <Card
                              key={idx}
                              title={item.title}
                              code={item.code}
                              explanation={item.explanation}
                            />
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
};

export default Home;
