"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const ProjetosEletricos: React.FC = () => {
  const topicosEletricos = [
    {
      titulo: "Consultoria em Projetos Elétricos",
      descricao:
        "Nossa equipe oferece consultoria personalizada para projetos elétricos, incluindo análise de requisitos, estudo de viabilidade e recomendações técnicas.",
    },
    {
      titulo: "Dimensionamento e Cálculo de Cargas",
      descricao:
        "Realizamos o dimensionamento das cargas elétricas, calculando a capacidade dos circuitos e condutores conforme normas vigentes.",
    },
    {
      titulo: "Diagramas e Esquemas Elétricos",
      descricao:
        "Criamos diagramas unifilares e esquemas elétricos detalhados, incluindo quadros de distribuição, pontos de luz e tomadas, para facilitar a compreensão do projeto.",
    },
  ];

  const topicosTeleautomacao = [
    {
      titulo: "Soluções em Telecomunicações",
      descricao:
        "Projetamos sistemas de telefonia, redes de dados e Wi-Fi para residências e indústrias, abrangendo levantamento de necessidades, planejamento e implementação de soluções eficientes.",
    },
    {
      titulo: "Automação Residencial",
      descricao:
        "Na automação residencial, oferecemos soluções para iluminação inteligente, segurança e conforto.",
    },
    {
      titulo: "Segurança e Monitoramento",
      descricao:
        "Instalamos sistemas de CFTV (câmeras de segurança), controle de acesso e alarmes.",
    },
  ];

  return (
    <>
      {/* Seção Projetos Elétricos */}
      <section className="py-28 bg-white" id="projetos-eletrico">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
          {/* Texto e Tópicos à Esquerda */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-7xl font-bold font-baijam text-black mb-16">
              Projetos elétricos
            </h2>

            <ul className="space-y-6">
              {topicosEletricos.map((topico, index) => (
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
          <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
            <Image
              src="/legasse-energia/assets/projetos-eletricos.png"
              alt="Projetos Elétricos"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
    </Reveal>
      </section>

      {/* Seção Telecomunicação e Automação */}
      <section className="py-28 bg-white" id="telecomunicacao">
     <Reveal>
     <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-start gap-12">
          {/* Texto e Tópicos à Direita */}
          <div className="md:w-7/12">
            <h2 className="text-4xl md:text-7xl font-bold font-baijam text-black mb-6">
              Telecomunicação e <span className="text-[#F9BC0B]">automação</span>
            </h2>

            <ul className="space-y-6">
              {topicosTeleautomacao.map((topico, index) => (
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
              src="/legasse-energia/assets/tele-automacao.png"
              alt="Telecomunicação e Automação"
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

export default ProjetosEletricos;
