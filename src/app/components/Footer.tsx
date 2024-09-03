"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Logo e Ícones de Redes Sociais */}
        <div className="flex flex-col items-start md:w-1/4">
          <div className="flex items-center gap-1.5 mb-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="ml-3 text-white text-3xl md:text-4xl font-baijam font-normal uppercase">
              LEGASSE
            </span>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a target="_blank" className="flex items-center gap-2 text-white">
                <div className="py-2 px-2 rounded-full bg-white">
                  <FaWhatsapp className="text-black" />
                </div>
                <span className="text-white text-lg font-dmsans">
                  Atendimento
                </span>
              </a>
            </Link>
            <Link
              href="https://www.instagram.com/legassehome"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                className="flex items-center gap-2  rounded-full"
              >
                <div className="py-2 px-2 rounded-full bg-white">
                  <FaInstagram className="text-black" />
                </div>
                <span className="text-white text-lg font-dmsans">
                  @legassehome
                </span>
              </a>
            </Link>
            <Link
              href="https://www.instagram.com/legasseenergia"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                className="flex items-center gap-2  rounded-full"
              >
                <div className="py-2 px-2 rounded-full bg-white">
                  <FaInstagram className="text-black" />
                </div>
                <span className="text-white text-lg font-dmsans">
                  @legasseenergia
                </span>
              </a>
            </Link>
          </div>
        </div>

        {/* Links de Navegação */}
        <div className="flex flex-col md:flex-row justify-between md:w-3/4 gap-8">
          {/* Primeira Coluna de Links */}
          <ul className="space-y-4">
            <li>
              <Link href="/" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Página Inicial
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#sobre-legasse" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  {" "}
                  Sobre a Legasse
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#solucoes-home" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Soluções Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#solucoes-energia" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Soluções Energia
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/legasse" target="_blank" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Instagram
                </a>
              </Link>
            </li>
          </ul>

          {/* Segunda Coluna de Links */}
          <ul className="space-y-4">
            <li>
              <Link href="/energia-solar" target="_blank" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Energia Solar
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-energia/#projetos-eletricos" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Projetos Elétricos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-energia#telecomunicacao" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Telecomunicação
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-energia#spda" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Projetos de SPDA
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-energia#laudos" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Laudos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-energia#modelagem-bim" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Modelagem BIM
                </a>
              </Link>
            </li>
          </ul>

          {/* Terceira Coluna de Links */}
          <ul className="space-y-4">
            <li>
              <Link href="/legasse-home/audio-video" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                 Áudio e Vídeo
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-home/piso-aquecido" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Piso Aquecido
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-home/aspiracao-central" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Aspiração Central
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-home/lareiras" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Lareiras
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-home/cortina" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Cortinas/Persianas
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legasse-home/automacao" passHref legacyBehavior>
                <a className="text-xl font-baijam font-medium hover:text-yellow-500 transition-colors">
                  Automação
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desenvolvido por Spacefy */}
      <div className="mt-12 text-center">
        <p className="text-md font-dmsans text-white">
          Site desenvolvido por{" "}
          <Link href="https://spacefy.com.br" target="_blank" passHref legacyBehavior>
            <a className="text-yellow-500 font-bold" target="_blank">
              Spacefy
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
