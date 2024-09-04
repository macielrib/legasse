"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const Fabricante: React.FC = () => {
  return (
    <section className="py-24 bg-white">
 <Reveal>
 <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        {/* Texto à Esquerda */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold font-baijam text-black mb-6">
            A <span className="text-yellow-500">maior</span> fabricante de sistemas de aquecimento <span className="text-yellow-500">do mundo.</span>
          </h2>
          <p className="text-md font-dmsans font-medium text-black">
            Realizamos projetos completos de SPDA, dimensionando o sistema
            conforme a ABNT NBR-5419-2015. Nossos engenheiros garantem proteção
            contra descargas atmosféricas, considerando a edificação,
            localização e características específicas.
          </p>
        </div>

        {/* Imagem à Direita */}
        <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
          <Image
            src="/legasse-home/piso-aquecido/fabricante.png"
            alt="A maior fabricante de sistemas de aquecimento do mundo"
            width={600}
            height={400}
            className="object-cover w-full max-w-lg"
          />
        </div>
      </div>
 </Reveal>
    </section>
  );
};

export default Fabricante;
