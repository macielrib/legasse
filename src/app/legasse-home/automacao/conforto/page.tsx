"use client";

import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TbCheckbox } from "react-icons/tb";
import { Reveal } from "@/app/components/RevealScroll";

const Conforto: React.FC = () => {
  const itens = [
    "Economia na conta de energia",
    "Praticidade em tarefas diárias",
    "Sem cabeamento",
    "Conforto de ligar, desligar apenas falando",
  ];

  return (
    <section className="py-24 bg-black">
   <Reveal>
   <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        {/* Texto e Tópicos */}
        <div className="md:w-7/12">
          <h2 className="text-4xl md:text-6xl font-bold font-baijam text-white mb-6">
           Conforto, <span className="text-yellow-500">economia</span> e controle total.
          </h2>
          <p className="text-md md:text-lg text-[#ccc] font-dmsans font-normal max-w-2xl mb-12">A automação residencial transforma sua casa em um ambiente inteligente, integrando tecnologia para um estilo de vida mais conveniente e eficiente.</p>
   

          {/* Itens com Checkmarks */}
          <ul className="space-y-4 mb-12">
            {itens.map((item, index) => (
              <li key={index} className="flex items-center text-xl font-medium font-dmsans text-white">
                <TbCheckbox className="text-white mr-3" />
                {item}
              </li>
            ))}
          </ul>

       
        
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
          <Image
            src="/legasse-home/automacao/assets/beneficios.png"
            alt="Benefícios Automação"
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

export default Conforto;
