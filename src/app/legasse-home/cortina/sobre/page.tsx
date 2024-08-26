"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const SobreCortina: React.FC = () => {
  return (
    <>
      <section className="py-24 bg-white">
    <Reveal>
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center ">
          <div className="md:w-7/12">
            <h2 className="text-4xl md:text-5xl font-bold font-baijam text-black mb-6">
              Cortina Motorizada
            </h2>

        
              <p className="text-lg font-medium font-baijam text-black">
                Cortinas e persianas motorizadas, sem fio, podem ser controladas
                por controle remoto, aplicativo ou comandos de voz, ideais para
                janelas altas. Elas automatizam o equilíbrio entre luz natural e
                artificial e podem ser programadas para abrir e fechar conforme
                a sua rotina.
              </p>
              <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xl mt-4 font-normal bg-black py-3 px-6 rounded-md text-white font-dmsans transition-transform transform hover:scale-105">
                Mandar uma Mensagem{" "}
                <FaWhatsapp className="text-yellow-500 space-x-2" />
              </a>
            </Link>
          </div>

          {/* Imagem à Esquerda */}
          <div className="md:w-6/12 flex justify-center items-center transition duration-300 hover:scale-105">
            <Image
              src="/legasse-home/cortina/assets/sobre.png"
              alt="Sobre Cortina"
              width={600}
              height={400}
              className="object-cover w-full max-w-lg h-auto"
            />
          </div>
        </div>
    </Reveal>
      </section>
    </>
  );
};

export default SobreCortina;
