"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const LocationSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="contate-nos">
      <Reveal>
        <div className="container mx-auto text-center md:text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-baijam font-bold mb-4">
              <span className="text-yellow-500">Visite-nos</span> ou converse
              conosco!
            </h2>
            <p className="text-md font-dmsans font-medium text-black max-w-2xl mx-auto">
              Nosso fluxo de atendimento é projetado para garantir a
              <br /> máxima <b>eficiência</b> e satisfação do cliente.
            </p>
          </div>

          <div className="w-full mb-8">
            {/* Título e Avaliações acima do iFrame */}
            <div className="text-left mb-4">
              <h3 className="text-xl font-baijam font-bold text-black">
                Legasse Home - Automação Residencial
              </h3>
              <div className="flex items-center text-black font-dmsans font-medium text-md">
                <span>5.0</span>
                <FaStar className="text-yellow-500 ml-1 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <span>7 avaliações</span>
              </div>
            </div>

            {/* Google Maps iFrame */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.334970504622!2d-49.4876797!3d-28.936034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95218186a6d134db%3A0x526cf488e9d53a80!2sAv.%20Get%C3%BAlio%20Vargas%2C%201017%20-%20Urussanguinha%2C%20Ararangu%C3%A1%20-%20SC%2C%2088905-464%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1691496192576!5m2!1spt-BR!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 md:h-96"
            ></iframe>
          </div>

          <div className="text-center md:text-center mb-6">
            <p className="text-lg font-dmsans font-medim text-black">
              Atendemos de <span className="font-bold">Segunda a Sexta,</span>{" "}
              das <span className="font-bold">08:00</span>
              <br /> às <span className="font-bold">12:00</span> e{" "}
              <span className="font-bold">13:00</span> às{" "}
              <span className="font-bold">18:00</span>
            </p>
          </div>

          <div className="text-center">
            <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a className=" bg-black text-white font-dmsans font-medium py-3 px-6 rounded-md hover:bg-neutral-900 transition-colors duration-200 inline-flex items-center gap-2">
                Mandar Mensagem{" "}
                <MdOutlinePhoneInTalk className="text-yellow-500" />
              </a>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default LocationSection;
