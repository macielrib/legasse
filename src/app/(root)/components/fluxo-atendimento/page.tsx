"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";

const FluxoAtendimento: React.FC = () => {
  return (
    <section className="py-12 bg-[#f6f4ef] border border-t-neutral-200" id="nossos-servicos">
      <Reveal>
     
        <div className="container mx-auto px-12">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-6xl font-baijam font-bold mb-4">
              Como funciona?
              <br />
              <span className="text-yellow-500">Fluxo de atendimento</span>
            </h2>
            <p className="text-lg font-dmsans font-medium text-black max-w-2xl">
              Para garantir a máxima <strong>eficiência</strong> e satisfação do
              cliente.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Primeira Linha */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    1.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow02.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1">
                  Reunião inicial com cliente e arquiteto.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    2.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow02.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1">
                  Apresentação da solução e proposta de orçamento.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    3.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow02.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1">
                  Desenvolvimento dos projetos de infraestrutura.
                </p>
              </div>

              <div className="flex flex-col items-start relative">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    4.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1">
                  Instalação dos dispositivos adquiridos.
                </p>
                {/* Espaço reservado para o SVG */}
              </div>

              {/* Segunda Linha */}
              <div className="flex flex-col items-start relative mt-10">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    8.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1">
                  {" "}
                  Monitoramento da execução da obra.
                </p>
              </div>

              <div className="flex flex-col items-start mt-10">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    7.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1">
                  Configuração e programação dos sistemas.
                </p>
              </div>

              <div className="flex flex-col items-start mt-10">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    6.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1">
                  Entrega final do projeto.
                </p>
              </div>

              <div className="flex flex-col items-start mt-10">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    5.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1">
                  Suporte ao cliente.
                </p>
              </div>
            </div>

            <Image
              src={"/assets/fluxo/double-arrow.svg"}
              width={190}
              height={100}
              alt="Double Arrow"
              className="lg:-mt-28 hidden xl:block lg:ml-12 xl:mr-16"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default FluxoAtendimento;
