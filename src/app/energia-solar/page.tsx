import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import Beneficios from "./beneficios/page"
import OQueFazemos from "./fazemos/page"
import { Reveal } from "../components/RevealScroll"

const EnergiaSolar = () => {
  return (
    <>
          <section
        className="relative bg-cover bg-center py-20 md:py-40"
        style={{
          backgroundImage: "url('/energia-solar/assets/hero.png')",
        }}
      >
     <Reveal>
     <div className="container mx-auto px-6 md:px-12 text-center md:text-left mt-16">
          <h1 className="text-4xl md:text-7xl font-baijam font-bold text-white mb-4">
          Energia Solar não é mais<br/> do futuro, <span className="text-yellow-500">é de hoje!</span>
          </h1>

          <p className="text-md md:text-lg text-white font-dmsans font-normal max-w-2xl">
          Enquanto todos ficam sem eletricidade devido a falhas, você ou sua empresa continuarão <b>sem preocupações!</b>
          </p>

          <div className="mt-8">
            <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xl font-normal bg-yellow-500 py-3 px-6 rounded-md text-black font-dmsans transition-transform transform hover:scale-105">
                Mandar uma Mensagem{" "}
                <FaWhatsapp className="text-black space-x-2" />
              </a>
            </Link>
          </div>
        </div>
     </Reveal>

    
      </section>
      <Beneficios/>
      <OQueFazemos/>
    </>
  )
}

export default EnergiaSolar