"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArticle } from "react-icons/md";

const ArticlesBlog = () => {
  const allBlogs = [
    {
      titulo: "Como a Energia Solar Está Sustentando Empresas em Locais Remotos?",
      imagem: "/blog/assets/article-thumb03.png",
      link: "/blog/article",
      categoria: "Energia",
      data: "12 Ago, 2024",
    },
    {
      titulo: "Automação Residencial: Tendências Futuras",
      imagem: "/blog/assets/article-thumb01.png",
      link: "/blog/article",
      categoria: "Home",
      data: "10 Ago, 2024",
    },
    {
      titulo: "Como Economizar com Energia Solar em Casa",
      imagem: "/blog/assets/article-thumb02.png",
      link: "/blog/article",
      categoria: "Energia",
      data: "8 Ago, 2024",
    },
    {
      titulo: "Os Benefícios da Automação Comercial",
      imagem: "/blog/assets/article-thumb01.png",
      link: "/blog/article",
      categoria: "Home",
      data: "5 Ago, 2024",
    },
    {
      titulo: "Tendências de Tecnologia em 2024",
      imagem: "/blog/assets/article-thumb02.png",
      link: "/blog/article",
      categoria: "Energia",
      data: "1 Ago, 2024",
    },
    {
      titulo: "Guia Completo de Instalação de Sistemas Solares",
      imagem: "/blog/assets/article-thumb03.png",
      link: "/blog/article",
      categoria: "Energia",
      data: "20 Jul, 2024",
    },
  ];

  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "Todos") {
      setFilteredBlogs(allBlogs);
    } else {
      setFilteredBlogs(allBlogs.filter((blog) => blog.categoria === category));
    }
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          {/* Seletor de Categorias */}
          <div className="flex space-x-4 mb-8 justify-left">
            {["Todos", "Home", "Energia"].map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`text-lg font-dmsans font-medium px-4 py-2 rounded-md ${
                  activeCategory === category
                    ? "bg-yellow-500 text-black"
                    : "bg-black text-white"
                } transition-transform transform hover:scale-105`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de Artigos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <Link key={index} href={blog.link} passHref legacyBehavior>
                <a className="relative group bg-white rounded-lg transition duration-300 hover:scale-105 hover:cursor-pointer">
                  <Image
                    src={blog.imagem}
                    alt={blog.titulo}
                    width={400}
                    height={250}
                    className="w-full max-w-xl object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-semibold bg-black text-white px-2 py-1 rounded">
                        {blog.categoria}
                      </span>
                      <span className="text-sm text-neutral-500">
                        {blog.data}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-baijam text-black mb-2">
                      {blog.titulo}
                    </h3>
                    <p className="text-md font-dmsans text-neutral-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {/* Botão Ver Todos os Artigos */}
          <div className="flex justify-center mt-12">
            <Link href="/blog" passHref legacyBehavior>
              <a className="bg-black text-white inline-flex items-center gap-2 font-dmsans font-medium py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                Ver Todos os Artigos <MdArticle />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesBlog;
