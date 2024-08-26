"use client";

import { MdLocationOn, MdHome } from "react-icons/md";
import Link from "next/link";
import ComoBimAjuda from "./components/como-bim-ajuda/page";
import { FaWhatsapp } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import { RiDoorOpenLine } from "react-icons/ri";
import ErrosDoProjeto from "./components/erros-projeto/page";
import ProjetosEletricos from "./components/projetos-eletricos/page";
import Spda from "./components/spda/page";
import Compatibilizacao from "./components/compatibilizacao/page";

const LegasseEnergia: React.FC = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 md:py-40"
        style={{
          backgroundImage: "url('/legasse-energia/assets/hero-bg.png')",
        }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center md:text-left mt-16">
          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-baijam font-bold text-white mb-4">
            Modelagem <span className="text-[#F9BC0B]">BIM</span>
          </h1>

          {/* Descrição */}
          <p className="text-md md:text-lg text-white font-dmsans font-normal max-w-2xl">
            Utilizamos a Modelagem da Informação da Construção (BIM) para criar
            projetos integrados e detalhados, otimizando processos de construção
            e reduzindo custos.
          </p>

          {/* Botão de Contato */}
          <div className="mt-8">
            <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xl font-normal bg-black py-3 px-6 rounded-md text-white font-dmsans transition-transform transform hover:scale-105">
                Mandar uma Mensagem{" "}
                <FaWhatsapp className="text-yellow-500 space-x-2" />
              </a>
            </Link>
          </div>
        </div>

        {/* Card com Estatísticas */}
        <div className="absolute inset-x-0 bottom-[-0rem] mx-auto max-w-xl bg-[#101010] p-6 rounded-xl shadow-lg flex justify-between items-center space-x-6 transform translate-y-1/2 transition duration-300 hover:scale-105">
          <div className="flex items-center space-x-6">
            <GrMap className="text-white text-6xl" />
            <div>
              <p className="text-white text-3xl font-baijam font-semibold">
                +55.000m²
              </p>
              <p className="text-[#F9BC0B] text-lg font-baijam font-semibold">
                projetados em BIM
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <RiDoorOpenLine className="text-white text-6xl" />
            <div>
              <p className="text-white text-3xl font-baijam font-semibold">
                +10
              </p>
              <p className="text-[#F9BC0B] text-lg font-baijam font-semibold">
                Empreendimentos
              </p>
            </div>
          </div>
        </div>
      </section>
      <ErrosDoProjeto />
      <ComoBimAjuda />
      <Compatibilizacao />
      <ProjetosEletricos />
      <Spda />
    </>
  );
};

export default LegasseEnergia;
