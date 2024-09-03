"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Importação dos estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";

const BlogSection: React.FC = () => {
  const blogs = [
    {
      titulo: "Como a Energia Solar Está Sustentando Empresas em Locais Remotos?",
      imagem: "/blog/assets/news-thumb.png",
      link: "/blog/article",
      novo: true,
    },
    {
      titulo: "Automação Residencial: Tendências Futuras",
      imagem: "/blog/assets/article-thumb01.png",
      link: "/blog/article",
      novo: true,
    },
    {
      titulo: "Como Economizar com Energia Solar em Casa",
      imagem: "/blog/assets/article-thumb02.png",
      link: "/blog/article",
      novo: true,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-14">
        {/* Título e Descrição */}
        <div className="text-left md:text-left mb-8">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 font-baijam">
            <span className="text-black">Blog</span> e Artigos
          </h2>
          <p className="text-md md:text-xl font-dmsans font-medium text-black">
            Explore as últimas inovações e dicas sobre energia solar e automação para sua empresa e lar.
          </p>
        </div>

        {/* Swiper Slide */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20} // Reduz o espaçamento entre os slides no mobile
          slidesPerView={1.6} // Mostra apenas 1.2 slides no mobile
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 1500 }}
          breakpoints={{
            768: {
              slidesPerView: 1.6, // Mostra 1.8 slides em telas maiores
              spaceBetween: 40, // Maior espaçamento entre slides em telas maiores
            },
          }}
          className="relative w-full"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index} className="relative group">
              <Link href={blog.link} passHref legacyBehavior>
                <a className="flex w-full h-[360px] md:h-[460px] relative">
                  <Image
                    src={blog.imagem}
                    alt={blog.titulo}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  {blog.novo && (
                    <span className="absolute top-2 right-2 md:top-4 md:right-4 bg-yellow-500 text-black px-2 py-1 md:px-3 md:py-1 text-sm md:text-lg font-semibold font-baijam rounded-lg">
                      Novo!
                    </span>
                  )}
                  <h3 className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-white text-lg md:text-2xl font-bold font-baijam max-w-[90%] md:max-w-xl">
                    {blog.titulo}
                  </h3>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
