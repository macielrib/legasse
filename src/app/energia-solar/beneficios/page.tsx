"use client";

import Image from "next/image";
import { TbCheckbox } from "react-icons/tb";
import { PiAtomFill } from "react-icons/pi";
import { Reveal } from "@/app/components/RevealScroll";

const Beneficios: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="sobre-legasse">
      <Reveal>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-baijam font-bold mb-12">
              Os{" "}
              <span className="text-yellow-500 inline-flex items-center gap-2">
                Benefícios
              </span>{" "}
              da Energia
              <br />
              Solar São Bem Conhecidos
            </h2>

            <ul className="space-y-4">
              <li className="flex items-center text-lg font-dmsans font-bold text-black">
                <TbCheckbox className="w-5 h-5 text-black mr-2" /> Redução na Conta de Energia
              </li>
              <li className="flex items-center text-lg font-dmsans font-bold text-black">
                <TbCheckbox className="w-5 h-5 text-black mr-2" /> Armazenamento de Energia para Apagões e Noite
              </li>
              <li className="flex items-center text-lg font-dmsans font-bold text-black">
                <TbCheckbox className="w-5 h-5 text-black mr-2" /> Valorização do Imóvel
              </li>
              <li className="flex items-center text-lg font-dmsans font-bold text-black">
                <TbCheckbox className="w-5 h-5 text-black mr-2" /> Geração de Energia em Locais Remotos
              </li>
              <li className="flex items-center text-lg font-dmsans font-bold text-black">
                <TbCheckbox className="w-5 h-5 text-black mr-2" /> Independência Energética
              </li>
              <li className="flex items-center text-lg font-dmsans font-bold text-black">
                <TbCheckbox className="w-5 h-5 text-black mr-2" /> Venda de Energia Excedente para a Companhia
              </li>
            </ul>
          </div>
          <div className="w-full md:w-3/5 flex justify-center md:justify-end">
            <Image
              src="/energia-solar/assets/vantagens.png"
              alt="Legasse Fachada"
              width={800}
              height={800}
              className="w-full h-auto max-w-xs md:max-w-full transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Beneficios;
