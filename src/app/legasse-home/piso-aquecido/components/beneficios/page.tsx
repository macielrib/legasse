"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const Beneficios: React.FC = () => {
  const topicos1 = [
    {
      titulo: "Conforto Térmico",
      descricao:
        "Desfrute de um ambiente agradável e confortável durante todo o ano com a calefação, proporcionando conforto térmico excepcional para você e sua família.",
    },
    {
      titulo: "Saúde",
      descricao:
        "Proteja sua saúde e evite gripes e resfriados indesejados, mantendo o ambiente sempre quetne e saudável com a calefação.",
    },
    {
      titulo: "Reduz a Umidade",
      descricao:
        "Mantenha o ar fresco e seco em sua casa, eliminando a umidade excessiva que pode causar ácaros, mofo e bolor, graças a calefação.",
    },
  ];

  const topicos2 = [
    {
      titulo: "Combate o Mofo",
      descricao:
        "Pode ser instalado em paredes de closet e banheiros para reduzir a umidade local e evitar proliferação de mofo e bolor.",
    },
    {
      titulo: "Custo de Implantação",
      descricao:
        "Solução com baixo custo de implantação, sendo instalado logo abaixo do piso, sem a necessidade de acrescentar produtos no contrapiso.",
    },
    {
      titulo: "Segurança",
      descricao:
        "Os cabos possuem duplo aterramento e triplo isolamento IP67 (à prova dágua), são fabricados na Republica Tcheca pela maior fabricante em sistemas de aquecimento do mundo. Fenix Heating.",
    },
  ];

  return (
    <>
      {/* Seção Projetos Elétricos */}
      <section className="py-24 bg-black">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
          {/* Texto e Tópicos à Esquerda */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold font-baijam text-white mb-16">
              Quais os <span className="text-yellow-500">benefícios de ter</span> piso aquecido?
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
          <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
            <Image
              src="/legasse-home/piso-aquecido/pisoaquecido01.png"
              alt="Piso Aquecido 1"
              width={600}
              height={400}
              className="object-cover w-full h-auto rounded-xl"
            />
          </div>
        </div>
    </Reveal>
      </section>

      {/* Seção Telecomunicação e Automação */}
      <section className="py-24 bg-black">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-start gap-12">
          {/* Texto e Tópicos à Direita */}
          <div className="md:w-7/12">
     

            <ul className="space-y-6">
              {topicos2.map((topico, index) => (
                <li key={index}>
                  <h3 className="text-2xl font-bold font-baijam text-white mb-2">
                    {topico.titulo}
                  </h3>
                  <p className="text-lg font-medium font-dmsans text-neutral-400">
                    {topico.descricao}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagem à Esquerda */}
          <div className="md:w-1/2 flex justify-center items-center transition duration-300 hover:scale-105">
            <Image
       src="/legasse-home/piso-aquecido/pisoaquecido02.png"
              alt="Telecomunicação e Automação"
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

export default Beneficios;
