"use client";

import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import AboutSection from "./components/sobre-legasse/page";
import SolucoesHome from "./components/solucoes-home/page";
import SolucoesEnergia from "./components/solucoes-energia/page";
import FluxoAtendimento from "./components/fluxo-atendimento/page";
import InstagramSection from "./components/instagram-posts/page";
import ClientesSection from "./components/clientes/page";
import LocationSection from "./components/localizar/page";
import Navbar from "../components/Navbar";
import { Reveal } from "../components/RevealScroll";
import BlogSection from "./components/blog/page";
  

const Hero: React.FC = () => {
  return (
  <>

<Reveal>
<div className="relative bg-hero-bg bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center text-white border-b border-yellow-500">
      <div className="container mx-auto px-6 lg:px-12 lg:mt-36">
     
  
      <span className="font-baijam text-yellow-500 text-lg font-semibold">+2.127 Clientes Satisfeitos!</span>
   
        <h1 className="text-5xl md:text-8xl font-semibold font-baijam mb-4">
          Legasse
          <br />
          <span className="text-yellow-500">
           Home e Energia.
          </span>
        </h1>
        <p className="text-xl max-w-xl font-dmsans font-normal text-neutral-300 mb-14">
          Sua parceira em soluções inteligentes e integradas para casa
          e energia, unindo tecnologia e sustentabilidade.
        </p>
        <div className="flex flex-wrap gap-2 justify-start">
          <Link href="#sobre-legasse" legacyBehavior>
            <a
              href="#sobre-legasse"
          
              className="bg-yellow-500 text-lg font-semibold py-4 px-4  font-dmsans text-black rounded-lg items-center inline-flex group gap-1.5 transition duration-300 hover:-translate-y-1 hover:bg-yellow-400"
            >
              Conheça a Legasse{" "}
              <FaArrowRightLong className="group-hover:translate-x-1 transition duration-300 ml-1.5" />
            </a>
          </Link>
          <Link href="/contato" legacyBehavior>
            <a
                 href="https://api.whatsapp.com/send/?phone=5548999999999&text&type=phone_number&app_absent=0"
              target="_blank"
              className="bg-white text-lg font-dmsans font-semibold py-4 px-4 text-black rounded-lg items-center inline-flex group gap-1.5 transition duration-300 hover:-translate-y-1"
            >
              Entrar em Contato{" "}
              <FaHeadphonesAlt className="group-hover:translate-x-1 transition duration-300 ml-1.5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
</Reveal>
 
 <AboutSection/>
 <SolucoesHome/>
 <SolucoesEnergia/>
 <FluxoAtendimento/>
 <InstagramSection/>
 <ClientesSection/>
 <BlogSection/>
 <LocationSection/>
    </>
  );
};

export default Hero;
