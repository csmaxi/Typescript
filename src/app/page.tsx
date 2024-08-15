import type { NextPage } from "next";
import Card from "./components/Card";
import Image from "next/image";
import { exercises } from "@/data/exercises";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home: NextPage = () => {
  const basicExercises = exercises.filter(
    (exercise) => exercise.level === "basic"
  );
  const intermediateExercises = exercises.filter(
    (exercise) => exercise.level === "intermediate"
  );
  const advancedExercises = exercises.filter(
    (exercise) => exercise.level === "advanced"
  );

  return (
    <div className="bg-neutral min-h-screen flex flex-col">
      <header className="bg-primary text-white py-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Image
            src="/typescript.svg"
            alt="TypeScript Logo"
            width={100}
            height={100}
            className="mb-4 bg-white "
          />
          <h1 className="text-4xl font-bold">Curso de TypeScript</h1>
          <p className="text-lg mt-2">
            Aprende TypeScript con ejercicios prácticos.
          </p>
        </div>
      </header>
      <main className="flex-grow p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-3xl font-bold mb-6">Ejercicios Básicos</h2>
              </AccordionTrigger>
              <AccordionContent>
                {basicExercises.map((exercise, index) => (
                  <Card
                    key={index}
                    title={exercise.title}
                    code={exercise.code}
                    explanation={exercise.explanation}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-3xl font-bold mb-6">
                  Ejercicios Intermedios
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {intermediateExercises.map((exercise, index) => (
                  <Card
                    key={index}
                    title={exercise.title}
                    code={exercise.code}
                    explanation={exercise.explanation}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-3xl font-bold mb-6">
                  Ejercicios Avanzados
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {advancedExercises.map((exercise, index) => (
                  <Card
                    key={index}
                    title={exercise.title}
                    code={exercise.code}
                    explanation={exercise.explanation}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <footer className="bg-secondary text-white py-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Curso de TypeScript. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
