"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogArticlePage: React.FC = () => {
  const recommendedArticles = [
    {
      titulo: "Como a Energia Solar Está Sustentando Empresas em Locais Remotos?",
      imagem: "/blog/assets/article-thumb03.png",
      link: "/blog/inovacoes-energia-solar-2024",
      categoria: "Energia",
      data: "12 Ago, 2024",
    },
    {
      titulo: "Automação Residencial: Tendências Futuras",
      imagem: "/blog/assets/article-thumb01.png",
      link: "/blog/automacao-residencial-tendencias",
      categoria: "Home",
      data: "10 Ago, 2024",
    },
    {
      titulo: "Como Economizar com Energia Solar em Casa",
      imagem: "/blog/assets/article-thumb02.png",
      link: "/blog/economia-energia-solar",
      categoria: "Energia",
      data: "8 Ago, 2024",
    },
    {
      titulo: "Os Benefícios da Automação Comercial",
      imagem: "/blog/assets/article-thumb01.png",
      link: "/blog/beneficios-automacao-comercial",
      categoria: "Home",
      data: "5 Ago, 2024",
    },
    {
      titulo: "Tendências de Tecnologia em 2024",
      imagem: "/blog/assets/article-thumb02.png",
      link: "/blog/tendencias-tecnologia-2024",
      categoria: "Energia",
      data: "1 Ago, 2024",
    },
    {
      titulo: "Guia Completo de Instalação de Sistemas Solares",
      imagem: "/blog/assets/article-thumb03.png",
      link: "/blog/guia-instalacao-sistemas-solares",
      categoria: "Energia",
      data: "20 Jul, 2024",
    },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,  // Ativa o autoplay
    autoplaySpeed: 1500,  // Define o tempo entre os slides (3 segundos)
    arrows: true, // Mantém as setas visíveis
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Imagem Principal */}
        <div className="w-full mx-auto mb-12">
          <Image
            src="/blog/assets/news-thumb.png"
            alt="Título do Blog"
            width={1200}
            height={600}
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>

        {/* Categoria e Data */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-semibold bg-black text-white px-3 py-1 rounded">
            Energia
          </span>
          <span className="text-sm text-neutral-500">12 Ago, 2024</span>
        </div>

        {/* Título do Blog */}
        <h1 className="text-3xl md:text-4xl font-bold font-baijam text-black mb-8 max-w-3xl mx-auto text-center">
          Como a Energia Solar Está Sustentando Empresas em Locais Remotos?
        </h1>

        {/* Descrição 1 */}
        <p className="text-lg font-dmsans font-medium text-neutral-600 mb-12 max-w-3xl mx-auto">
          A energia solar tem se mostrado uma solução eficaz para empresas em locais remotos, onde o acesso à energia elétrica convencional é limitado. Com a instalação de painéis solares, essas empresas podem garantir o funcionamento contínuo de suas operações, reduzindo custos e impactos ambientais.
        </p>

        {/* Imagem Centralizada */}
        <div className="w-full mx-auto mb-12">
          <Image
            src="/blog/assets/article-thumb01.png"
            alt="Energia Solar"
            width={800}
            height={400}
            className="object-cover w-full h-auto rounded-lg mx-auto"
          />
        </div>

        {/* Descrição 2 */}
        <p className="text-lg font-dmsans font-medium text-neutral-600 mb-16 max-w-3xl mx-auto">
          Além disso, a energia solar contribui para a sustentabilidade dessas empresas, permitindo que utilizem uma fonte de energia renovável e reduzindo a dependência de combustíveis fósseis. Isso também ajuda a melhorar a imagem das empresas, que são vistas como ecologicamente responsáveis.
        </p>

        {/* Botão de Mensagem */}
        <div className="flex justify-center mb-16">
          <Link href="https://wa.me/5548999999999" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 text-lg font-medium bg-black py-3 px-6 rounded-lg text-white font-dmsans transition-transform transform hover:scale-105">
              Enviar uma Mensagem
              <FaWhatsapp className="text-yellow-500" />
            </a>
          </Link>
        </div>

        {/* Artigos Recomendados */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-baijam text-black mb-6">
            Artigos Recomendados
          </h2>
        </div>

        {/* Slider de Artigos Recomendados */}
        <Slider {...sliderSettings} className="relative">
          {recommendedArticles.map((article, index) => (
            <div key={index} className="px-2">
              <Link href={article.link} passHref legacyBehavior>
                <a className="block w-full h-[350px] relative rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                  <Image
                    src={article.imagem}
                    alt={article.titulo}
                    width={400}
                    height={200}
                    className="object-cover w-full h-auto rounded-lg"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1 rounded">
                        {article.categoria}
                      </span>
                      <span className="text-sm text-neutral-500">{article.data}</span>
                    </div>
                    <h3 className="text-lg font-bold font-baijam text-black mb-4">
                      {article.titulo}
                    </h3>
                    <p className="text-md font-dmsans text-neutral-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </Slider>

    
      
      </div>
    </section>
  );
};

// Custom Arrows for Slick
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black cursor-pointer`}
      style={{ ...style, display: "block", right: "-10px", top: "50%" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black cursor-pointer`}
      style={{ ...style, display: "block", left: "-10px", top: "50%" }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

export default BlogArticlePage;
