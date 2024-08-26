"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLightbulb, FaTv, FaFan, FaRegWindowMaximize, FaBuilding } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const App = () => {
  const miniCards = [
    {
      nome: "TV e Sonorização",
      icone: <FaTv className="text-yellow-500" />,
      descricao: "Controle total da TV e sistema de sonorização, integrando todos os dispositivos em um único controle.",
    },
    {
      nome: "Iluminação",
      icone: <FaLightbulb className="text-yellow-500" />,
      descricao: "Interruptores inteligentes. Controle de luzes através do app e automatização de cenas. Também pode controlar a intensidade da luz.",
    },
    {
      nome: "Climatização",
      icone: <FaFan className="text-yellow-500" />,
      descricao: "Controle a temperatura de todos os ambientes da casa, incluindo ar-condicionado e aquecedores.",
    },
    {
      nome: "Cortinas",
      icone: <FaRegWindowMaximize className="text-yellow-500" />,
      descricao: "Automatize o movimento das cortinas, com opções de controle por voz, app, ou temporizador.",
    },
    {
      nome: "Corporativo",
      icone: <FaBuilding className="text-yellow-500" />,
      descricao: "Soluções para controle e automação de sistemas em ambientes corporativos, otimizando eficiência e conforto.",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(miniCards[1]); // Default: Iluminação

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Mockup do Telefone com Mini-Cards */}
          <div className="md:w-6/12 flex flex-col items-center justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm h-160 bg-transparent rounded-lg p-6">
              {/* SVG de Mockup do Telefone */}
              <svg
                viewBox="0 0 100 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="10" y="10" width="80" height="180" rx="15" ry="15" fill="white" stroke="black" strokeWidth="2" />
                {/* Mockup do Display */}
                <rect x="15" y="30" width="70" height="140" fill="#f5f5f5" />
              </svg>
              <div className="absolute inset-0 flex flex-col justify-evenly items-left p-16 space-y-4 lg:px-20">
                <h2 className="text-xl flex-wrap px-4 font-baijam font-bold">Controle <span className="text-yellow-500">Total</span> da Sua Casa</h2>
                {miniCards.map((card, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCard(card)}
                    className="flex items-center space-x-2 px-4 py-2 text-black bg-[#eceae5] rounded-lg transition-transform transform hover:scale-105"
                  >
                    {card.icone}
                    <span className="font-baijam font-bold text-lg">{card.nome}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Texto Dinâmico à Direita */}
          <div className="md:w-6/12 text-center md:text-left order-1 md:order-2">
            <h2 className="font-baijam font-bold text-3xl text-black mb-6 inline-flex items-center gap-1.5 justify-center md:justify-start">
              {selectedCard.icone} {selectedCard.nome}
            </h2>
            <p className="font-dmsans font-medium text-black text-md mb-6">
              {selectedCard.descricao}
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
                <a className="inline-flex items-center gap-2 text-md font-normal bg-black py-2 px-4 rounded-lg text-white font-dmsans transition-transform transform hover:scale-105">
                  Automatizar Casa{" "}
                  <FaWhatsapp className="text-yellow-500 space-x-2" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
