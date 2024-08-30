"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import ArticlesBlog from "./components/articles/page";

// Importação dos estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";

const BlogPage: React.FC = () => {
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

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <section className="py-24 lg:px-8 bg-white">
        <div className="container mx-auto px-4 lg:mt-16">
          {/* Título do Blog */}
          <div className="text-left md:text-left mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-baijam">
              <span className="text-yellow-500">Inove</span> sua empresa e seu lar <br /> com energia solar e automação.
            </h2>
          </div>

          {/* Swiper Slide */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={40} // Aumente o espaço entre os slides para garantir que as fendas sejam visíveis
            slidesPerView={1.8} // Ajuste para garantir que ambos os lados sejam visíveis
         
            autoplay={{ delay: 1500 }}
            loop={true} // Permite o loop infinito
            className="relative w-full "
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index} className="relative group ">
                <Link href={blog.link} passHref legacyBehavior>
                  <a className="flex w-full h-[460px] relative">
                    <Image
                      src={blog.imagem}
                      alt={blog.titulo}
                      fill
                      className="object-cover  "
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    {blog.novo && (
                      <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 text-lg font-semibold font-baijam rounded-lg">
                        Novo!
                      </span>
                    )}
                    <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold font-baijam max-w-xl">
                      {blog.titulo}
                    </h3>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <ArticlesBlog />
    </>
  );
};

export default BlogPage;
