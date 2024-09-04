"use client";

import { MdDesktopMac } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from "@/app/components/RevealScroll";

const SolucoesHome: React.FC = () => {
  const cards = [
    {
      nome: 'Áudio e Vídeo',
      imagem: '/assets/legasse-home/audiovideo-thumb.png',
      descricao: 'Integração de sistemas de áudio e vídeo para sua casa.',
      link: '/legasse-home/audio-video'
    },
    {
      nome: 'Piso Aquecido',
      imagem: '/assets/legasse-home/pisoaquecido-thumb.png',
      descricao: 'Conforto térmico com nossos sistemas de piso aquecido.',
      link: '/legasse-home/piso-aquecido'
    },
    {
      nome: 'Aspiração Central',
      imagem: '/assets/legasse-home/aspiracao-thumb.png',
      descricao: 'Aspiração central para uma limpeza eficiente e silenciosa.',
      link: '/legasse-home/aspiracao-central'
    },
    {
      nome: 'Lareiras',
      imagem: '/assets/legasse-home/lareiras-thumb.png',
      descricao: 'Lareiras modernas para aquecer e decorar seu lar.',
      link: '/legasse-home/lareiras'
    },
    {
      nome: 'Cortinas e Persianas',
      imagem: '/assets/legasse-home/cortinaspersianas-thumb.png',
      descricao: 'Automação de cortinas e persianas para controle de luz e privacidade.',
      link: '/legasse-home/cortina'
    },
    {
      nome: 'Automação',
      imagem: '/assets/legasse-home/automacao-thumb.png',
      descricao: 'Automação completa para uma casa inteligente e segura.',
      link: '/legasse-home/automacao'
    },
  ];

  return (
    <section className="py-12 lg:px-8 bg-[#f6f4ef] border-b-2 border border-b-yellow-500 border-t-neutral-200" id="solucoes-home">
      <Reveal>
        <div className="container mx-auto px-6 lg:mt-16">
          <div className="text-left md:text-left mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-baijam">
              Soluções <span className="text-[#F9BC0B] inline-flex items-center gap-2">Home</span>
            </h2>
            <p className="text-md md:text-xl font-dmsans font-medium text-black mb-8">
              Transforme sua casa em um <strong>ambiente confortável</strong>, seguro e <br/>tecnologicamente avançado com a Legasse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Link key={index} href={card.link} passHref legacyBehavior>
                <a className="relative overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 group">
                  <Image
                    src={card.imagem}
                    alt={card.nome}
                    width={600}
                    height={300}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <h3 className="text-white text-xl font-medium font-dmsans">{card.nome}</h3>
                    <MdDesktopMac className="text-yellow-500 text-2xl" />
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

export default SolucoesHome;
