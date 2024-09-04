"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const Processo: React.FC = () => {
  const topicos1 = [
    {
      titulo: "Análise",
      descricao:
        "A Legasse oferece uma equipe especializada para concretizar seu projeto de automação residencial, aplicando a melhor solução conforme suas necessidades e projetos luminotécnicos.",
    },
    {
      titulo: "Instalação",
      descricao:
        "Nossa equipe técnica realiza acompanhamento e instalação limpa dos produtos com o mais alto padrão de qualidade.",
    },
    {
      titulo: "Programação",
      descricao:
        "Mantenha o ar fresco e seco em sua casa, eliminando a umidade excessiva que pode causar ácaros, mofo e bolor, graças à calefação",
    },
  ];



  return (
    <>
      {/* Seção Projetos Elétricos */}
      <section className="py-24 bg-black">
     <Reveal>
     <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
          {/* Texto e Tópicos à Esquerda */}
          <div className="md:w-7/12">
            <h2 className="text-4xl md:text-7xl font-bold font-baijam text-white mb-16">
              Casa inteligente e totalmente <br/><span className="text-yellow-500">personalizada.</span>
            </h2>

            <ul className="space-y-6">
              {topicos1.map((topico, index) => (
                <li key={index}>
                  <h3 className="text-2xl font-bold font-baijam text-white mb-2">
                    {topico.titulo}
                  </h3>
                  <p className="text-lg font-medium font-baijam text-neutral-400">
                    {topico.descricao}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagem à Direita */}
          <div className="md:w-1/2  flex justify-center items-center transition duration-300 hover:scale-105">
            <Image
              src="/legasse-home/automacao/assets/processo.png"
              alt="Piso Aquecido 1"
              width={600}
              height={400}
              className="object-cover w-full max-w-xl  rounded-xl"
            />
          </div>
        </div>
     </Reveal>
      </section>


    </>
  );
};

export default Processo;
