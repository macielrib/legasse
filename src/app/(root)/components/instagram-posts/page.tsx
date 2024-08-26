"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramSection: React.FC = () => {
  return (

<section className="bg-white py-16 px-6 md:px-12">
<Reveal>
      <div className="container mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-6xl font-baijam font-bold mb-4">
            Conecte-se Conosco:<br/><span className="text-yellow-500">Siga-nos</span> no Instagram!
          </h2>
          <p className="text-lg font-dmsans font-medium text-black max-w-2xl">
            Confira as últimas novidades e acompanhe nossos projetos<br/> nas nossas <b>contas no Instagram.</b>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Legasse Energia */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
            <span className="py-2 p-2 rounded-md bg-neutral-900"><Image src={'/logo.png'} width={18} height={18} alt="Logo Instagram"/></span>
            <span className="text-black font-baijam text-2xl font-bold"><a href="https://instagram.com/legasseenergia" target="_blank" className="transition duration-300 hover:translate-x-1 hover:text-yellow-500">@legasseenergia</a></span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* 6 Imagens - todas usando a mesma imagem */}
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 1"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 2"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 3"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 4"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 5"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 6"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
            </div>
          </div>

          {/* Legasse Home */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <span className="py-2 p-2 rounded-md bg-black"><Image src={'/logo.png'} width={18} height={18} alt="Logo Instagram"/></span>
              <span className="text-black font-baijam text-2xl font-bold"><a href="https://instagram.com/legassehome" target="_blank" className="transition duration-300 hover:translate-x-1 hover:text-yellow-500">@legassehome</a></span>
              </div>
            <div className="grid grid-cols-2 gap-4">
              {/* 6 Imagens - todas usando a mesma imagem */}
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 1"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 2"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 3"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 4"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 5"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
              <Image
                src="/assets/home/legasse-fachada.png"
                alt="Post 6"
                width={300}
                height={300}
                className="w-full h-auto object-cover transition duration-300 hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </section>

  );
};

export default InstagramSection;
