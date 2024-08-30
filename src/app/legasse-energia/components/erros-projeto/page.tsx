"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const ErrosDoProjeto: React.FC = () => {
  const erros = [
    {
      numero: "1.",
      titulo: "Atrasos na obra",
      descricao:
        "Além de prejudicar a imagem da empresa, os atrasos podem aumentar significativamente os custos dos itens mais caros da sua curva ABC, como mão de obra e aluguel de equipamentos.",
    },
    {
      numero: "2.",
      titulo: "Incompatibilidade na execução",
      descricao:
        "Problemas de incompatibilidade de projetos geralmente surgem na fase de execução da obra. As interferências complexas podem paralisar a obra até serem resolvidas, enquanto as mais simples demandam tempo, criatividade e custos adicionais para a realização do As-built.",
    },
    {
      numero: "3.",
      titulo: "Patologias e pós-obra",
      descricao:
        "Soluções improvisadas adotadas pela equipe de obras para resolver problemas de projeto podem se transformar em patologias, resultando em chamados de pós-obra pelos futuros moradores.",
    },
    {
      numero: "4.",
      titulo: "Falta ou excedente de materiais",
      descricao:
        "A falta de precisão nos quantitativos de materiais não apenas impacta a compra dos insumos e o orçamento previsto, mas também influencia os valores orçados com empreiteiros de mão de obra.",
    },
  ];

  return (
    <section className="py-24 bg-black">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        {/* Título */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold font-baijam text-white mb-8">
            <span className="text-[#F9BC0B]">Erros</span> de projetos{" "}
            <span className="text-[#F9BC0B]">custam mais</span> do que você imagina
          </h2>

          {/* Cards de Erros */}
          <div className="space-y-6 ">
            {erros.map((erro, index) => (
              <div key={index} className="flex items-start space-x-4 bg-[#101010] p-4 rounded-md transition duration-300 hover:scale-105">
                <div className="text-yellow-500 text-2xl font-semibold font-baijam">
                  {erro.numero}
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-baijam text-yellow-500">
                    {erro.titulo}
                  </h3>
                  <p className="text-md font-dmsans text-white">
                    {erro.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 md:mt-12 md:ml-12 transition duration-300 hover:scale-105">
          <Image
            src="/legasse-energia/assets/bim.png"
            alt="Erros de Projetos"
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

export default ErrosDoProjeto;
