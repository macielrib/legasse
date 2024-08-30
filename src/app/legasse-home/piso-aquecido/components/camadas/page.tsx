"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const Camadas: React.FC = () => {
  const camadas = [
    "Primeira Camada: Isolamento térmico para garantir a eficiência do sistema.",
    "Segunda Camada: Cabos de aquecimento distribuídos uniformemente.",
    "Terceira Camada: Revestimento de proteção e aderência para o piso.",
    "Quarta Camada: Acabamento final com o piso escolhido pelo cliente.",
  ];

  return (
    <section className="py-24 bg-white">
   <Reveal>
   <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start">
        {/* Imagem à Esquerda */}
        <div className="md:w-6/12 lg:w-2/12 flex justify-center items-center transition duration-300 hover:scale-105">
          <Image
            src="/legasse-home/piso-aquecido/camadas.png"
            alt="Camadas do Piso Aquecido"
            width={600}
            height={400}
            className="object-cover w-full max-w-48"
          />
        </div>

        {/* Tópicos à Direita */}
        <div className="md:w-6/12">
          <h2 className="text-4xl md:text-5xl font-bold font-baijam text-black mb-6">
            Camadas do piso aquecido
          </h2>

          <ul className="space-y-6">
            {camadas.map((camada, index) => (
              <li key={index} className="flex items-center">
                <span className="text-yellow-500 text-3xl font-bold font-baijam mr-4">
                  {index + 1}.
                </span>
                <p className="text-lg font-dmsans font-semibold text-black">{camada}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
   </Reveal>
    </section>
  );
};

export default Camadas;
