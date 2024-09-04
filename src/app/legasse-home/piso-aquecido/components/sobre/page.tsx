"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const SobrePiso: React.FC = () => {
  return (
    <section className="py-24 bg-white">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        {/* Imagem à Esquerda */}
        <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
          <Image
            src="/legasse-home/piso-aquecido/piso.png"
            alt="Piso Aquecido"
            width={600}
            height={400}
            className="object-cover w-full max-w-lg"
          />
        </div>

        {/* Texto à Direita */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-7xl font-bold font-baijam text-black mb-6">
            Sobre o piso aquecido
          </h2>
          <p className="text-md font-dmsans font-medium text-black mb-8">
            O piso aquecido é instalado sob o revestimento escolhido,{" "}
            <b>eliminando a umidade</b> do piso e das paredes sem retirar a
            umidade do ar. O controle de temperatura é individualizado por
            ambiente e pode ser ajustado grau a grau.
            <br />
            <br />
            Utilizamos uma câmera térmica para localizar o cabeamento sob o
            revestimento facilitando furos ou cortes necessários.
          </p>

          {/* Botão de Orçamento */}
          <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 text-xl font-normal bg-black py-3 px-6 rounded-md text-white font-dmsans transition-transform transform hover:scale-105">
              Fazer um Orçamento
              <FaWhatsapp className="text-yellow-500 space-x-2" />
            </a>
          </Link>
        </div>
      </div>
    </Reveal>
    </section>
  );
};

export default SobrePiso;
