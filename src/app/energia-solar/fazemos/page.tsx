"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";
import Link from "next/link";

const OQueFazemos: React.FC = () => {
  const topicos1 = [
    {
      titulo: "Consultoria em Energia Solar",
      descricao:
        "Orientação especializada sobre soluções solares adequadas, viabilidade do projeto e otimização de desempenho.",
    },
    {
      titulo: "Planejamento de Projetos Solares",
      descricao:
        "Elaboração de planos detalhados para instalação de sistemas solares, considerando a estrutura e necessidades específicas do cliente.",
    },
    {
      titulo: "Instalação de Sistemas Solares",
      descricao:
        "Implementação completa de painéis solares, incluindo montagem, configuração e integração com a rede elétrica.",
    },
  ];

  const topicos2 = [
    {
      titulo: "Monitoramento de Desempenho",
      descricao:
        "Acompanhamento contínuo da performance do sistema para identificar e resolver rapidamente quaisquer problemas.",
    },
    {
      titulo: "Manutenção de Sistemas Solares",
      descricao:
        "Serviços regulares e corretivos para garantir o desempenho ideal dos sistemas solares.",
    },
    {
      titulo: "Análise de Economia e Financiamento",
      descricao:
        "Avaliação de economia potencial e opções de financiamento para tornar a energia solar mais acessível.",
    },
    {
      titulo: "Certificação e Conformidade",
      descricao:
        "Garantia de que todos os sistemas atendem às normas e regulamentações locais.",
    },
  ];

  return (
    <>
      {/* Seção O que fazemos? */}
      <section className="py-24 bg-white">
        <Reveal>
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
            {/* Texto e Tópicos à Esquerda */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-7xl font-bold font-baijam text-black mb-16">
                O que <span className="text-yellow-500">fazemos?</span>
              </h2>

              <ul className="space-y-6">
                {topicos1.map((topico, index) => (
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

            {/* Imagem à Direita */}
            <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
              <Image
                src="/energia-solar/assets/primeira.jpg"
                alt="Energia Solar 2"
                width={600}
                height={400}
                className="object-cover w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Seção Monitoramento e Outros */}
      <section className="py-24 bg-white">
        <Reveal>
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-start gap-12">
            {/* Texto e Tópicos à Direita */}
            <div className="md:w-1/2">
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
                src="/energia-solar/assets/segunda.jpg"
                alt="Monitoramento e Manutenção"
                width={600}
                height={400}
                className="object-cover w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </Reveal>
        <div className="flex justify-center py-12">
          <Link href="/planejar-energia-solar" passHref legacyBehavior>
            <a className="inline-block py-3 px-6 bg-black text-white text-lg font-dmsans font-medium rounded-md transition-transform transform hover:scale-105">
              Planejar sua{" "}
              <span className="text-yellow-500">Energia Solar</span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default OQueFazemos;
