"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";

const ClientesSection: React.FC = () => {
  return (

<section className="bg-[#f6f4ef] border border-t-neutral-200 py-16 px-6 md:px-12">
<Reveal>
      <div className="container mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-6xl font-baijam font-bold mb-4">
            Quem confia na Legasse?<br/><span className="text-yellow-500">Nossos clientes:</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/clientes/logo-biofitness.png"
              alt="BioFitness"
              width={260}
              height={150}
              className="w-96 h-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/clientes/logo-concretar.png"
              alt="Concretar"
              width={260}
              height={150}
              className="w-96 h-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/clientes/logo-hgbrasil.png"
              alt="HG Brasil"
              width={260}
              height={150}
              className="w-96 h-auto object-contain"
            />
          </div>
        </div>
      </div>
      </Reveal>
    </section>

  );
};

export default ClientesSection;
