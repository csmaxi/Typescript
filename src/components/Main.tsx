import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Card from "@/components/Card";
// Función para agrupar por nivel y tema
const groupByLevelAndTopic = (data: any[]) => {
  const grouped: { [key: string]: { [key: string]: any[] } } = {
    basic: {},
    intermediate: {},
    advanced: {},
  };

  data.forEach((section) => {
    section.content.forEach((item: { level: string | number }) => {
      if (!grouped[item.level][section.title]) {
        grouped[item.level][section.title] = [];
      }
      grouped[item.level][section.title].push(item);
    });
  });

  return grouped;
};
import { variables } from "@/data/basico/variables";
import { tipos } from "@/data/basico/tipos";
import { operadores } from "@/data/basico/operadores";
import { condicionales } from "@/data/basico/condicionales";
import { bucles } from "@/data/basico/bucles";
import { funciones } from "@/data/basico/funciones";
import { arrays } from "@/data/basico/arrays";
import { objetos } from "@/data/intermedio/objetos";
import { interfaces } from "@/data/intermedio/interfaces";
import { clases } from "@/data/intermedio/clases";
import { enums } from "@/data/intermedio/enum";
import { tuplas } from "@/data/intermedio/tuplas";
import { genericos } from "@/data/intermedio/genericos";
import { union } from "@/data/avanzado/union";
import { intersecciones } from "@/data/avanzado/intersecciones";
import { aliasDeTipo } from "@/data/avanzado/aliasDeTipo";
import { modulos } from "@/data/avanzado/modulos";
import { asyncAwait } from "@/data/avanzado/asyncAwait";
import { manejoErrores } from "@/data/avanzado/manejoErrores";

// Agrupa los datos
const groupedData = groupByLevelAndTopic([
  { title: "Tipos", content: tipos },
  { title: "Variables", content: variables },
  { title: "Operadores", content: operadores },
  { title: "Arrays", content: arrays },
  { title: "Condicionales", content: condicionales },
  { title: "Bucles", content: bucles },
  { title: "Funciones", content: funciones },
  { title: "Tuplas", content: tuplas },
  { title: "Objetos", content: objetos },
  { title: "Interfaces", content: interfaces },
  { title: "Enum", content: enums },
  { title: "Clases", content: clases },
  { title: "Genericos", content: genericos },
  { title: "Union", content: union },
  { title: "Interseccion", content: intersecciones },
  { title: "Alias", content: aliasDeTipo },
  { title: "Módulos", content: modulos },
  { title: "Async/await", content: asyncAwait },
  { title: "Errores", content: manejoErrores },
]);

function Main() {
  return (
    <main className="flex-grow p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {["basic", "intermediate", "advanced"].map((level) => (
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
  );
}

export default Main;
