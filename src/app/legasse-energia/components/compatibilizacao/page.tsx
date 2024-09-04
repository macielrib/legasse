"use client";

import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TbCheckbox } from "react-icons/tb";
import { Reveal } from "@/app/components/RevealScroll";

const Compatibilizacao: React.FC = () => {
  const itens = [
    "Compatibilização de Projetos",
    "Organização de Demandas de Correção e Ajustes",
    "Verificação de Inconsistências e Incompatibilidades",
    "Emissão de Relatório de Compatibilização dos Projetos",
  ];

  return (
    <section className="py-24 bg-white">
  <Reveal>
  <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        {/* Texto e Tópicos */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-7xl font-bold font-baijam text-black mb-6">
            <span className="text-yellow-500">Compatibilização</span> de projeto
          </h2>
          <p className="text-lg font-dmsans font-medium text-black mb-6">
            A compatibilização integra disciplinas no gerenciamento de projetos de construção, resolvendo conflitos e inconsistências em modelos BIM antes da execução. Isso reduz retrabalho, melhora a coordenação e garante uma construção mais eficiente e de alta qualidade.
          </p>

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
            <a className="inline-flex items-center gap-2 text-xl font-normal bg-black py-3 px-6 rounded-md text-white font-dmsans transition-transform transform hover:scale-105">
              Mandar uma Mensagem <FaWhatsapp className="text-yellow-500" />
            </a>
          </Link>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
          <Image
            src="/legasse-energia/assets/comp.png"
            alt="Compatibilização de Projetos"
            width={600}
            height={400}
            className="object-cover w-full max-w-4xl"
          />
        </div>
      </div>
  </Reveal>
    </section>
  );
};

export default Compatibilizacao;
