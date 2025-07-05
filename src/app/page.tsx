"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import FloatingWords from "./FloatingWords";
import Timeline from "./Timeline"; 
import CustomCursor from "./CustomCursor";
import Contato from "./Contato";

   

export default function Home() {
  return (
    <>
      <CustomCursor />
    
      
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <FloatingWords />
      {/* NAVBAR */}
      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Portfólio Heitor</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">Início</Link>
          <Link href="#contato" className="hover:text-blue-400 transition">Contato</Link>
        </div>
      </nav>

      {/* HERO */}
      <section
  className="relative h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden mb-20"
>
  
  <motion.h2
    className="text-4xl md:text-6xl font-bold mb-4 z-10"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <span className="text-blue-400">Olá, eu sou o </span> Heitor 👋
  </motion.h2>

  <motion.div
    className="text-lg text-gray-300 max-w-xl mx-auto h-12 z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    <Typewriter
      words={[
        "Desenvolvedor Web.",
        "Criador de Experiências Digitais.",
        "Apaixonado por Inovação."
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={60}
      deleteSpeed={40}
      delaySpeed={2000}
    />
  </motion.div>
</section>


      {/* PROJETOS */}
      <section id="projetos">
        <h3 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-2">Projeto {i}</h4>
              <p className="text-gray-400 text-sm">
                Descrição breve do projeto {i}. Clique para saber mais.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

{/* TECNOLOGIAS */}
<section className="my-24">
  <h3 className="text-3xl font-bold text-center mb-8">Tecnologias</h3>
<div className="flex justify-center flex-wrap gap-6 px-4 py-2">
    {[FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, SiTailwindcss, FaGithub].map((Icon, i) => (
      <div key={i} className="text-5xl text-blue-400 flex-shrink-0 hover:scale-110 transition">
        <Icon />
      </div>
    ))}
  </div>
</section>

 < Timeline />


{/* SOBRE MIM */ }
<section id="sobre" className="mt-24 max-w-4xl mx-auto text-center">
  <h3 className="text-3xl font-bold mb-8">Sobre Mim</h3>
  <motion.div
    className="flex flex-col md:flex-row items-center gap-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <img
      src="/perfil.jpg"
      alt="Foto de perfil"
      className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
    />
    <p className="text-gray-300 text-left">
      Sou um desenvolvedor apaixonado por tecnologia, com foco em criar
      interfaces interativas e responsivas. Gosto de resolver problemas e
      aprender coisas novas todos os dias. Estou sempre buscando melhorar e
      contribuir com projetos inovadores.
    </p>
  </motion.div>
</section>

{/* CONTATO */ }
<Contato />

<a
  href="https://wa.me/5547992094044"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
  title="Fale comigo no WhatsApp"
>
  <FaWhatsapp size={24} />
</a>

   </main>
   

   </>
  );
}