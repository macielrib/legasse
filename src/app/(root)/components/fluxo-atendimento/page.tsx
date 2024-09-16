"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const FluxoAtendimento: React.FC = () => {
  return (
    <section className="py-12 bg-[#f6f4ef] border border-t-neutral-200" id="nossos-servicos">
      <Reveal>
        <div className="container mx-auto text-left px-6">
          <div className="text-left mx-auto md:px-8 mb-12">
            <h2 className="text-4xl md:text-7xl font-baijam font-bold mb-4">
              Como funciona?
              <br />
              <span className="text-yellow-500">Fluxo de atendimento</span>
            </h2>
            <p className="text-md md:text-xl font-dmsans font-medium text-black max-w-2xl">
              Para garantir a máxima <strong>eficiência</strong> e satisfação do cliente.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-left md:items-center gap-2 px-2 md:px-10">
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
                    className="hidden md:block"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1 text-center md:text-left">
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
                    className="hidden md:block"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1 text-center md:text-left">
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
                    className="hidden md:block"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1 text-center md:text-left">
                  Desenvolvimento dos projetos de infraestrutura.
                </p>
              </div>

              <div className="flex flex-col items-start relative">
                <div className="flex items-center gap-5">
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl">
                    4.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow02.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                    className="hidden md:block"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1 text-center md:text-left">
                  Instalação dos dispositivos adquiridos.
                </p>
              </div>

              {/* Segunda Linha */}
              <div className="flex flex-col items-start relative mt-10">
                <div className="flex items-center gap-5">
                <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl sm:block md:hidden">
                    5.
                  </span>
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl sm:hidden md:block">
                    8.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                    className="hidden md:block"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1 text-center md:text-left">
                  Suporte ao cliente.
                </p>
              </div>

              <div className="flex flex-col items-start mt-10">
                <div className="flex items-center gap-5">
                <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl sm:block md:hidden">
                    6.
                  </span>
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl sm:hidden md:block">
                    7.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                    className="hidden md:block"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1 text-center md:text-left">
                  Entrega final do projeto.
                </p>
              </div>

              <div className="flex flex-col items-start mt-10">
                <div className="flex items-center gap-5">
                <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl sm:block md:hidden">
                    7.
                  </span>
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl sm:hidden md:block">
                    6.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                    className="hidden md:block"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1 text-center md:text-left">
                  Configuração e programação dos sistemas.
                </p>
              </div>

              <div className="flex flex-col items-start relative mt-10">
                <div className="flex items-center gap-5">
                <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl sm:block md:hidden">
                    8.
                  </span>
                  <span className="text-[#F9BC0B] font-baijam font-semibold text-2xl lg:text-3xl xl:text-4xl sm:hidden md:block">
                    5.
                  </span>
                  <Image
                    src={"/assets/fluxo/Arrow01.svg"}
                    width={180}
                    height={180}
                    alt="Arrow Icon"
                    className="hidden md:block"
                  />
                </div>
                <p className="text-black font-baijam font-semibold text-xl mt-6 md:px-1 text-center md:text-left">
                  Monitoramento da execução da obra.
                </p>
              </div>
            </div>

            <Image
              src={"/assets/fluxo/double-arrow.svg"}
              width={190}
              height={100}
              alt="Double Arrow"
              className="hidden xl:block lg:-mt-28 lg:ml-12 xl:mr-16"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default FluxoAtendimento;
