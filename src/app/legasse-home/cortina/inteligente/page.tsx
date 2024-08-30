"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const Inteligente: React.FC = () => {
  return (
    <>
      {/* Seção Projetos Elétricos */}
      <section className="py-24 bg-black">
      <Reveal>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Texto e Tópicos à Esquerda */}
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold font-baijam text-white mb-4">
              Sua casa <span className="text-yellow-500">inteligente!</span>
            </h2>
            <p className="text-md md:text-lg text-[#ccc] font-dmsans font-medium mb-12">
              Você no controle da sua casa, movimentando persianas e cortinas
              com um smartphone, tablet ou apenas com o som da sua voz.
              <br />
              <br />
              Prefere pegar o telefone para fechar as cortinas ou está ansioso
              para usar comandos de voz com o Amazon Alexa ou o Google
              Assistente?
            </p>
            {/* Descrição */}
          </div>

          {/* Imagem à Direita */}
          <div className="md:w-full max-w-xl flex justify-center items-center transition duration-300 hover:scale-105">
            <Image
              src="/legasse-home/audio-video/assets/sala.png"
              alt="Sala 1"
              width={600}
              height={400}
              className="object-cover w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </Reveal>
      </section>


    </>
  );
};

export default Inteligente;
