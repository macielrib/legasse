"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const Solucoes: React.FC = () => {
  const topicos1 = [
    {
      titulo: "Consultoria Especializada",
      descricao:
        "Avaliação das suas necessidades e preferências para criar um projeto personalizado.",
    },
    {
      titulo: "Equipamentos de Última Geração",
      descricao:
        "Realizamos o dimensionamento das cargas elétricas, calculando a capacidade dos circuitos e condutores conforme normas vigentes.",
    },
  ];

  const topicos2 = [
    {
      titulo: "Instalação Profissional",
      descricao:
        "Equipe técnica qualificada realiza a instalação com precisão e cuidado.",
    },
    {
      titulo: "Integração com Automação Residencial",
      descricao:
        "Controle fácil e eficiente dos sistemas de áudio e vídeo através da automação da sua casa.",
    },
  ];

  return (
    <>
      {/* Seção Projetos Elétricos */}
      <section className="py-24 bg-white">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end gap-12">
          {/* Texto e Tópicos à Esquerda */}
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold font-baijam text-black mb-4">
              Soluções de áudio e vídeo{" "}
              <span className="text-yellow-500">personalizadas.</span>
            </h2>
            <p className="text-md md:text-md text-black font-dmsans font-medium mb-12">
              A Legasse oferece soluções completas de áudio e vídeo para
              transformar qualquer ambiente da sua casa. Nossa equipe
              especializada garante a integração perfeita entre tecnologia e
              design, proporcionando uma experiência audiovisual de alta
              qualidade.
            </p>
            {/* Descrição */}
 
            <ul className="space-y-6">
              {topicos1.map((topico, index) => (
                <li key={index}>
                  <h3 className="text-2xl font-bold font-baijam text-black mb-2">
                    {topico.titulo}
                  </h3>
                  <p className="text-lg font-medium font-baijam text-black">
                    {topico.descricao}
                  </p>
                </li>
              ))}
            </ul>
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

      {/* Seção Telecomunicação e Automação */}
      <section className="py-24 bg-white">
     <Reveal>
     <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Texto e Tópicos à Direita */}
          <div className="md:w-7/12">
            <ul className="space-y-6">
              {topicos2.map((topico, index) => (
                <li key={index}>
                  <h3 className="text-2xl font-bold font-baijam text-black mb-2">
                    {topico.titulo}
                  </h3>
                  <p className="text-lg font-medium font-dmsans text-black">
                    {topico.descricao}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagem à Esquerda */}
          <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
            <Image
                src="/legasse-home/audio-video/assets/sala02.png"
              alt="Sala 2"
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

export default Solucoes;
