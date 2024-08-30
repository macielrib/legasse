"use client";

import Image from "next/image";
import { TbCheckbox } from "react-icons/tb";
import { PiAtomFill } from "react-icons/pi";
import { Reveal } from "@/app/components/RevealScroll";

const AboutSection: React.FC = () => {
  return (

     <section className="bg-white py-16 px-6 md:px-12" id="sobre-legasse">
       <Reveal>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        <div className="w-full flex flex-col items-start">
          <span className="text-black font-dmsans font-bold text-lg ">
           Excelência em <span className="text-yellow-700 font-black inline-flex items-center gap-1">cada conexão <PiAtomFill/></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-baijam font-bold mb-4">
            Inovação em soluções de<br/> energia{" "}
            <span className="text-yellow-500 inline-flex items-center gap-2">
              &
            </span>{" "}
            tecnologia.
          </h2>
          <p className="text-lg max-w-2xl font-dmsans font-medium mb-10 text-left">
            Garantimos qualidade e profissionalismo em cada projeto, superando
            expectativas. A experiência Legasse conta com:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-lg font-dmsans font-bold text-black">
              <TbCheckbox className="w-5 h-5 text-black mr-2" /> Utilização de
              Tecnologias Avançadas
            </li>
            <li className="flex items-center text-lg font-dmsans font-bold text-black">
              <TbCheckbox className="w-5 h-5 text-black mr-2" /> Atendimento
              Personalizado e Exclusivo
            </li>
            <li className="flex items-center text-lg font-dmsans font-bold text-black">
              <TbCheckbox className="w-5 h-5 text-black mr-2" /> Equipe de
              Profissionais Qualificados e Experientes
            </li>
            <li className="flex items-center text-lg font-dmsans font-bold text-black">
              <TbCheckbox className="w-5 h-5 text-black mr-2" /> Garantia e
              Suporte Técnico de Excelência
            </li>
            <li className="flex items-center text-lg font-dmsans font-bold text-black">
              <TbCheckbox className="w-5 h-5 text-black mr-2" /> Rapidez e
              Eficiência na Execução dos Projetos
            </li>
          </ul>
        </div>
        <div className="w-full md:w-3/5 flex justify-center md:justify-end">
          <Image
            src="/assets/home/legasse-fachada.png"
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

export default AboutSection;
