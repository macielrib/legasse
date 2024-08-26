import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Solucoes from "./solucoes/page";
import Experiencia from "./experiencia/page";
import { Reveal } from "@/app/components/RevealScroll";

const AudioVideo = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 md:py-40"
        style={{
          backgroundImage: "url('/legasse-home/audio-video/assets/hero.png')",
        }}
      >
  <Reveal>
  <div className="container mx-auto px-6 md:px-12 text-center md:text-left mt-16">
          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-baijam font-bold text-white mb-4">
            Cinema em Casa: <span className="text-[#F9BC0B]">Imersão</span> e{" "}
            <br />
            <span className="text-[#F9BC0B]">Conforto</span> na Sua Casa.
          </h1>

          {/* Descrição */}
          <p className="text-md md:text-lg text-white font-dmsans font-normal max-w-2xl">
            Transforme sua sala em um cinema com sistemas avançados de áudio e
            vídeo, proporcionando uma experiência imersiva e confortável para
            toda a família.
          </p>

          {/* Botão de Contato */}
          <div className="mt-8">
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
      <Solucoes />
      <Experiencia />
    </>
  );
};

export default AudioVideo;
