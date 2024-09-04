"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const Spda: React.FC = () => {
  const laudosTecnicos = [
    {
      numero: "1.",
      titulo: "Consultoria em SPDA",
      descricao:
        "Oferecemos consultoria técnica para adequação de sistemas existentes ou projetos em andamento. Nossa equipe está atualizada com as normas e regulamentações vigentes.",
    },
    {
      numero: "2.",
      titulo: "Laudos de SPDA",
      descricao:
        "Elaboramos laudos técnicos para avaliar e garantir a eficiência dos sistemas de SPDA, atendendo à NR10 e outras normas. Empresas com carga acima de 75kW devem manter o laudo atualizado.",
    },
    {
      numero: "3.",
      titulo: "Laudo de Aterramento",
      descricao:
        "Avaliamos a eficácia do sistema de aterramento elétrico. Garantimos que os componentes estejam em bom estado e capazes de escoar descargas para o solo.",
    },
  ];

  return (
    <>
      {/* Seção SPDA */}
      <section className="py-28 bg-white" id="spda">
        <Reveal>
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
            {/* Texto e Descrição à Esquerda */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold font-baijam text-black mb-10">
                Serviços de projeto de{" "}
                <span className="text-yellow-500">SPDA</span>
              </h2>
              <p className="text-md font-dmsans font-medium text-black mb-8">
                Realizamos projetos completos de SPDA, dimensionando o sistema
                conforme a ABNT NBR 5419-2015. Nossos engenheiros garantem
                proteção contra descargas atmosféricas, considerando a
                edificação, localização e características específicas.
              </p>
            </div>

            {/* Imagem à Direita */}
            <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
              <Image
                src="/legasse-energia/assets/spda.png"
                alt="Serviços de Projeto de SPDA"
                width={600}
                height={400}
                className="object-cover w-full max-w-xl"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Seção Laudos Técnicos */}
      <section className="bg-white pb-28" id="laudos">
        <Reveal>
       
          <div className="container mx-auto px-6 md:px-12">
            <h3 className="text-4xl md:text-6xl font-bold font-baijam text-black mb-12">
              Laudos técnicos
            </h3>

            <div className="flex flex-wrap gap-8">
              {laudosTecnicos.map((laudo, index) => (
                <div
                  key={index}
                  className="bg-black text-white p-6 rounded-lg flex-1 min-w-[300px] transition duration-300 hover:scale-105"
                >
                  <h4 className="text-2xl font-semibold font-baijam text-[#F9BC0B] mb-6">
                    {laudo.numero} {laudo.titulo}
                  </h4>
                  <p className="text-md font-dmsans font-normal text-neutral-400">
                    {laudo.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sub-Seção Laudo de Conformidade */}
      <section className="py-24 bg-white">
   <Reveal>
   <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-start gap-12">
          {/* Texto à Direita */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold font-baijam text-black mb-8">
              Laudo de conformidade
            </h2>
            <p className="text-md font-dmsans font-medium text-black mb-8">
              Verificamos se reformas ou novas construções seguem as normas do
              projeto original. Inclui análise de linhas de energia e tubulações
              metálicas.
            </p>
          </div>

          {/* Imagem à Esquerda */}
          <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
            <Image
              src="/legasse-energia/assets/laudo.png"
              alt="Laudo de Conformidade"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
   </Reveal>
      </section>
    </>
  );
};

export default Spda;
