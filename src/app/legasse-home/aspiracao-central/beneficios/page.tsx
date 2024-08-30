"use client";

import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TbCheckbox } from "react-icons/tb";
import { Reveal } from "@/app/components/RevealScroll";

const Beneficios: React.FC = () => {
  const itens = [
    "Elimina ácaros e micro poeira sem recircular o ar",
    "Retém até 99% das partículas com sua dupla filtragem HEPA",
    "Garantia de 10 anos",
    "Melhora a qualidade do ar interno e reduz sintomas de rinite e alergia.",
  ];

  return (
    <section className="py-24 bg-white">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        {/* Texto e Tópicos */}
        <div className="md:w-7/12">
          <h2 className="text-4xl md:text-5xl font-bold font-baijam text-black mb-6">
           Benefícios da aspiração central
          </h2>
   

          {/* Itens com Checkmarks */}
          <ul className="space-y-4 mb-12">
            {itens.map((item, index) => (
              <li key={index} className="flex items-center text-xl font-semibold font-dmsans text-black">
                <TbCheckbox className="text-black mr-3" />
                {item}
              </li>
            ))}
          </ul>

          {/* Botão de Mensagem */}
          <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 text-xl font-medium bg-yellow-500 py-3 px-6 rounded-md text-black font-dmsans transition-transform transform hover:scale-105">
              Faça seu Orçamento <FaWhatsapp className="text-black" />
            </a>
          </Link>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
          <Image
            src="/legasse-home/aspiracao-central/assets/aspirando.png"
            alt="Aspiração Central"
            width={600}
            height={400}
            className="object-cover w-full max-w-xl"
          />
        </div>
      </div>
    </Reveal>
    </section>
  );
};

export default Beneficios;
