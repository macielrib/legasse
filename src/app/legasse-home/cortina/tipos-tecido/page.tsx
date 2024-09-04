"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const TiposDeTecidoSection: React.FC = () => {
  const tecidos = [
    {
      imagem: "/legasse-home/cortina/assets/tela-solar.png",
      titulo: "Tela Solar",
      subtitulo: "",
    },
    {
      imagem: "/legasse-home/cortina/assets/blackout.png",
      titulo: "Blackout",
      subtitulo: "",
    },
    {
      imagem: "/legasse-home/cortina/assets/translucido.png",
      titulo: "Translúcido",
      subtitulo: "",
    },
    {
      imagem: "/legasse-home/cortina/assets/semi-blackout.png",
      titulo: "Double Vision",
      subtitulo: "Semi Blackout",
    },
  ];

  return (
    <section className="py-24 bg-white">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12">
        {/* Título e Descrição */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-7xl font-bold font-baijam text-black mb-4">
            Tipos de tecidos
          </h2>
          <p className="text-md font-dmsans text-black">
            Oferecemos tecidos leves que filtram a luz suavemente e opções mais
            pesadas que garantem total privacidade e bloqueio de luz.
          </p>
        </div>

        {/* Cards de Tecidos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tecidos.map((tecido, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="overflow-hidden rounded-lg shadow-lg w-full">
                <Image
                  src={tecido.imagem}
                  alt={tecido.titulo}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-black font-dmsans">
                  {tecido.titulo}
                </h3>
                {tecido.subtitulo && (
                  <p className="text-lg text-yellow-500 font-dmsans">
                    {tecido.subtitulo}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
    </section>
  );
};

export default TiposDeTecidoSection;
