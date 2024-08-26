"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const Produtos: React.FC = () => {
  const lareiras = [
    {
      imagem: "/legasse-home/cortina/assets/rolo.png",
      titulo: "Rolô",
    },
    {
      imagem: "/legasse-home/cortina/assets/painel.png",
      titulo: "Painel",
    },
    {
      imagem: "/legasse-home/cortina/assets/double-vision.png",
      titulo: "Double Vision",
    },
    {
      imagem: "/legasse-home/cortina/assets/romana.png",
      titulo: "Romana",
    },
    {
      imagem: "/legasse-home/cortina/assets/persiana-vertical.png",
      titulo: "Persiana Vertical",
    },
    {
      imagem: "/legasse-home/cortina/assets/persiana-horizontal.png",
      titulo: "Persiana Horizontal",
    },
  ];

  return (
    <section className="py-24 bg-white">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12">
        {/* Título e Descrição */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-baijam text-black mb-4">
            Nossas curtinas para <span className="text-yellow-500">mudar</span> o seu <span className="text-yellow-500">ambiente.</span>
          </h2>
          <p className="text-md font-dmsans text-black">
          Nossas cortinas para mudar o seu ambiente com estilo e funcionalidade.
          </p>
        </div>

        {/* Cards de Lareiras */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
          {lareiras.map((lareira, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition duration-300 hover:scale-105"
            >
              <Image
                src={lareira.imagem}
                alt={lareira.titulo}
                width={600}
                height={400}
                className="object-cover w-full h-full max-h-[30rem]"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-medium text-white font-dmsans ">
                  {lareira.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para Enviar Mensagem */}
        <div className="flex justify-center mt-12">
        <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xl font-normal bg-black py-3 px-6 rounded-md text-white font-dmsans transition-transform transform hover:scale-105">
                Mandar uma Mensagem{" "}
                <FaWhatsapp className="text-yellow-500 space-x-2" />
              </a>
            </Link>
        </div>
      </div>
    </Reveal>
    </section>
  );
};

export default Produtos;
