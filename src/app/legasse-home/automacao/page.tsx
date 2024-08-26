import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Conforto from "./conforto/page";
import Processo from "./processo/page";
import App from "./appl/page";
import { Reveal } from "@/app/components/RevealScroll";

const Automacao = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 md:py-40"
        style={{
          backgroundImage:
            "url('/legasse-home/automacao/assets/hero.png')",
        }}
      >
 <Reveal>
 <div className="container mx-auto px-6 md:px-12 text-center md:text-left mt-16">
          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-baijam font-bold text-white mb-4">
            <span className="text-[#F9BC0B]">Alexa,</span> vamos assistir um
            filme?
            <br />
            <span className="text-[#F9BC0B]">Ok Google,</span> Modo Relax.
          </h1>

          {/* Descrição */}
          <p className="text-md md:text-lg text-white font-dmsans font-normal max-w-2xl">
          O sistema de aspiração central proporciona limpeza eficiente e silenciosa, mantendo sua casa saudável e livre de poeira.
          </p>

          {/* Botão de Contato */}
          <div className="mt-8">
            <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xl font-normal bg-black py-3 px-6 rounded-md text-white font-dmsans transition-transform transform hover:scale-105">
                Automatizar Casa{" "}
                <FaWhatsapp className="text-yellow-500 space-x-2" />
              </a>
            </Link>
          </div>
        </div>
 </Reveal>
      </section>
      <Conforto/>
      <Processo/>
      <App/>
    </>
  );
};

export default Automacao;
