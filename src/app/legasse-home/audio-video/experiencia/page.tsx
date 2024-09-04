"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const Experiencia: React.FC = () => {
  const erros = [
    {
      numero: "1.",
      titulo: "Som Ambiente",
      descricao:
        "Sistemas de som distribuído que permitem ouvir música em diferentes cômodos, com controle individual de volume e fonte para criar a atmosfera ideal em qualquer ambiente.",
    },
    {
      numero: "2. ",
      titulo: "Home Theater",
      descricao:
        "Salas de cinema em casa com tecnologia avançada, incluindo projetores de alta definição e som surround, proporcionando uma experiência cinematográfica de alta qualidade no conforto da sua casa.",
    },
    {
      numero: "3.",
      titulo: "Sistemas de Entretenimento",
      descricao:
        "Integração de televisores, projetores e sistemas de som em um único sistema, garantindo a melhor qualidade de imagem e áudio para todos os seus momentos de lazer.",
    },
    {
      numero: "4.",
      titulo: "Controle Inteligente",
      descricao:
        "Soluções de controle intuitivas para gerenciar todos os dispositivos de áudio e vídeo com facilidade, usando controle remoto ou aplicativos móveis, oferecendo conveniência e simplicidade.",
    },
  ];

  return (
    <section className="py-24 bg-white">
 <Reveal>
 <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        {/* Título */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-7xl font-bold font-baijam text-black mb-8">
            Experiência audiovisual <span className="text-[#F9BC0B]">imersiva.</span> 
        
          </h2>

          {/* Cards de Erros */}
          <div className="space-y-6 items-center justify-center">
            {erros.map((erro, index) => (
              <div key={index} className="flex items-start space-x-4 bg-transparent p-4 rounded-md transition duration-300 hover:scale-105">
                <div className="text-yellow-500 text-2xl font-semibold font-baijam">
                  {erro.numero}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-baijam text-black mb-2">
                    {erro.titulo}
                  </h3>
                  <p className="text-md font-dmsans font-medium text-black">
                    {erro.descricao}
                  </p>
                  
                </div>
                
              </div>
            ))}
                <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a className="lg:ml-12 inline-flex items-center gap-2 text-xl font-normal bg-black py-3 px-6 rounded-md text-white font-dmsans transition-transform transform hover:scale-105">
                Assistir um Filme{" "}
                <FaWhatsapp className="text-yellow-500 space-x-2" />
              </a>
            </Link>
          </div>
      
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 md:mt-12 md:ml-12 transition duration-300 hover:scale-105">
          <Image
            src="/legasse-home/audio-video/assets/cinema.png"
            alt="Cinema"
            width={600}
            height={800}
            className="object-cover w-full max-w-xl"
          />
        </div>
      </div>
 </Reveal>
    </section>
  );
};

export default Experiencia;
