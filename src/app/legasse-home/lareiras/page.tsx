import { RiTimerFlashLine } from "react-icons/ri";
import { HiHomeModern } from "react-icons/hi2";

import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import Produtos from "./produtos/page";
import { Reveal } from "@/app/components/RevealScroll";

const Lareiras = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 md:py-40"
        style={{
          backgroundImage: "url('/legasse-home/lareiras/assets/hero.png')",
        }}
      >
        <Reveal>
          <div className="container mx-auto px-6 md:px-12 text-center md:text-left mt-16">
            {/* Título */}
            <h1 className="text-4xl md:text-7xl font-baijam font-bold text-white mb-4">
              <span className="text-[#F9BC0B]">Modernas,</span> Sofisticadas e
              <br /> Exclusivas
            </h1>

            {/* Descrição */}
            <p className="text-md md:text-lg text-white font-dmsans font-normal max-w-2xl">
              Transforme seu espaço com nossas lareiras, adicionando aconchego e
              elegância ao ambiente. Ideal para criar uma atmosfera acolhedora e
              sofisticada.
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
        </Reveal>

        {/* Card com Estatísticas */}
        <Reveal>
          <div className="absolute inset-x-0 bottom-[-0rem] mx-auto max-w-2xl bg-black p-6 rounded-xl shadow-lg flex justify-between items-center space-x-6 transform translate-y-1/2 transition duration-300 hover:scale-105">
            <div className="flex items-center space-x-6">
              <RiTimerFlashLine className="text-white text-6xl" />
              <div>
                <p className="text-white text-3xl font-baijam font-semibold">
                  Programado
                </p>
                <p className="text-[#F9BC0B] text-lg font-baijam font-semibold">
                  Por Timer e Controle Remoto
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <HiHomeModern className="text-white text-6xl" />
              <div>
                <p className="text-white text-3xl font-baijam font-semibold">
                  Segurança
                </p>
                <p className="text-[#F9BC0B] text-lg font-baijam font-semibold">
                  Em todas as Lareiras
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <Produtos />
    </>
  );
};

export default Lareiras;
