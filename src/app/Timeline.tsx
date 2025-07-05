"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const timeline = [
  {
    ano: "2022",
    titulo: "Comecei a estudar programação",
    descricao: "Primeiros passos com HTML, CSS e lógica de programação.",
  },
  {
    ano: "2023",
    titulo: "Avancei com JavaScript e React",
    descricao: "Criei meus primeiros projetos reais, usei Tailwind, APIs e Firebase.",
  },
  {
    ano: "2024",
    titulo: "Aprofundei no Next.js e comecei a freelar",
    descricao: "Fiz landing pages, portfólios e sistemas para clientes.",
  },
  {
    ano: "2025",
    titulo: "Projetos profissionais e formação técnica",
    descricao: "Participei de projetos em equipe e estou buscando oportunidades maiores.",
  },
];

export default function Timeline() {
  const directions = useMemo(
    () => timeline.map((_, index) => (index % 2 === 0 ? -50 : 50)),
    []
  );

  return (
    <section className="py-16 relative max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Minha Jornada</h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500 -translate-x-1/2"></div>

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: directions[index] }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`mb-12 flex flex-col items-${isLeft ? "end" : "start"} relative`}
            >
              <div
                className={`w-full md:w-1/2 p-6 bg-gray-950 rounded-xl shadow-md border border-gray-800 transform transition duration-300 scale-90 hover:scale-95 hover:border-blue-500 hover:shadow-blue-500/20 relative z-10 ${isLeft ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"
                  }`}
              >
                <span className="block text-sm text-blue-400 font-medium mb-1">
                  {item.ano}
                </span>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {item.titulo}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  {item.descricao}
                </p>
              </div>


            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
