"use client";

import { MdDesktopMac } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from "@/app/components/RevealScroll";

const SolucoesEnergia: React.FC = () => {
  const cards = [
    {
      nome: 'Energia Solar',
      imagem: '/assets/legasse-energia/energiasolar-thumb.png',
      descricao: 'Energia solar fotovoltaica para residências e indústrias.',
      link: '/energia-solar'
    },
    {
      nome: 'Projeto Elétrico',
      imagem: '/assets/legasse-energia/projetoeletrico-thumb.png',
      descricao: 'Planejamento e execução de projetos elétricos eficientes.',
      link: '/legasse-energia#projetos-eletricos'
    },
    {
      nome: 'Telecomunicação e Automação',
      imagem: '/assets/legasse-energia/teleautomacao-thumb.png',
      descricao: 'Soluções em telecomunicações e automação residencial.',
      link: '/legasse-energia#telecomunicacao'
    },
    {
      nome: 'Projetos de SPDA',
      imagem: '/assets/legasse-energia/spda-thumb.png',
      descricao: 'Proteção contra descargas atmosféricas com projetos SPDA.',
      link: '/legasse-energia#spda'
    },
    {
      nome: 'Laudos',
      imagem: '/assets/legasse-energia/laudos-thumb.png',
      descricao: 'Laudos técnicos e de conformidade para sistemas elétricos.',
      link: '/legasse-energia#laudos'
    },
    {
      nome: 'Modelagem BIM',
      imagem: '/assets/legasse-energia/bim-thumb.png',
      descricao: 'Projetos detalhados e integrados com modelagem BIM.',
      link: '/legasse-energia#modelagem-bim'
    },
  ];

  return (
    <section className="py-12 lg:px-8 bg-black">
      <Reveal>
        <div className="container mx-auto px-4 lg:mt-16">
          <div className="text-left md:text-left mb-8">
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-4 font-baijam">
              Soluções <span className="text-[#F9BC0B] inline-flex items-center gap-2">Energia</span>
            </h2>
            <p className="text-md font-dmsans font-medium text-[#ccc] mb-8">
              Energia solar fotovoltaica residencial, industrial, usinas de solo e usinas<br/> de investimento. Conte com a gente!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {cards.map((card, index) => (
              <Link key={index} href={card.link} passHref legacyBehavior>
                <a className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 group">
                  <Image
                    src={card.imagem}
                    alt={card.nome}
                    width={400}
                    height={300}
                    className="w-[28rem] h-96 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <h3 className="text-white text-lg md:text-xl font-medium font-dmsans">{card.nome}</h3>
                    <MdDesktopMac className="text-yellow-500 text-xl md:text-2xl" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center text-center p-4 transition-opacity duration-300">
                    <p className="text-sm">{card.descricao}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default SolucoesEnergia;
