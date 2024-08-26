"use client";

import { Reveal } from "@/app/components/RevealScroll";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const Elegancia: React.FC = () => {
  const erros = [
    {
      
      titulo: "Conveniência Avançada",
      descricao:
        "Controle todas as cortinas da sua casa com um único dispositivo ou programe-as para abrir e fechar automaticamente. Ideal para simular presença durante viagens e aumentar a segurança.",
    },
    {
  
      titulo: "Estilo Sofisticado",
      descricao:
        "As cortinas motorizadas adicionam um toque de classe a qualquer ambiente, com opções de estilos, tecidos e designs que combinam com a estética do seu espaço.",
    },
    {
 
      titulo: "Preservação de Materiais",
      descricao:
        "juste a entrada de luz para proteger seus móveis e objetos de decoração, evitando o desgaste causado pela exposição solar excessiva.",
    },
    {
   
      titulo: "Eficiência Energética",
      descricao:
        "Programe as cortinas para se ajustarem conforme a luz solar, reduzindo o uso de ar condicionado ou aquecimento e economizando energia.",
    },
  ];

  return (
    <section className="py-24 bg-white">
 <Reveal>
 <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end gap-12">
        {/* Título */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold font-baijam text-black mb-8">
             <span className="text-[#F9BC0B]">Elegância</span> com Conveniência
        
          </h2>
          <p className="text-lg font-medium font-baijam text-black mb-16">Cortinas são sinônimo de elegância, adicionando um toque refinado ao ambiente. Além de controlar a luz, elas complementam a decoração, trazendo charme e sofisticação para qualquer espaço.</p>
          {/* Cards de Erros */}
          <div className="space-y-2 items-center justify-center">
            {erros.map((erro, index) => (
              <div key={index} className="flex items-start space-x-2 mb-4 mt-4 bg-transparent m
               rounded-md ">
           
                <div>
                  <h3 className="text-2xl font-bold font-baijam text-black mb-4">
                    {erro.titulo}
                  </h3>
                  <p className="text-md font-dmsans font-medium text-black mb-6">
                    {erro.descricao}
                  </p>
                  
                </div>
                
              </div>
            ))}
                <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xl font-normal bg-black py-3 px-6 rounded-md text-white font-dmsans transition-transform transform hover:scale-105">
                Abrir Cortinas {" "}
                <FaWhatsapp className="text-yellow-500 space-x-2" />
              </a>
            </Link>
          </div>
      
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 md:mt-12 md:ml-12 transition duration-300 hover:scale-105">
          <Image
            src="/legasse-home/cortina/assets/quarto.png"
            alt="Cinema"
            width={600}
            height={800}
            className="object-cover w-full max-w-xl"
          />
        </div>
      </div>
 </Reveal>
    </section>
  );
};

export default Elegancia;
