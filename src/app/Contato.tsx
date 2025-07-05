"use client";

import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const telefone = "5547992094044"; // Seu número completo (55 + DDD + número)
    const texto = `Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${texto}`;

    window.open(url, "_blank");
  }

  return (
    <section id="contato" className="mt-24 max-w-2xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-8">Entre em Contato</h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
          required
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
          required
        />
        <textarea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full px-4 py-2 h-32 rounded-lg bg-gray-800 text-white border border-gray-600 resize-none"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition w-full"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
