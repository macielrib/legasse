"use client";

import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre a Legasse", path: "/#sobre-legasse" },
    {
      name: "Nossos Serviços",
      path: "/#solucoes-home",
      dropdown: [
        {
          title: "Soluções Home",
          items: [
            { name: "Áudio e Vídeo", path: "/legasse-home/audio-video" },
            { name: "Piso Aquecido", path: "/legasse-home/piso-aquecido" },
            {
              name: "Aspiração Central",
              path: "/legasse-home/aspiracao-central",
            },
            { name: "Lareiras", path: "/legasse-home/lareiras" },
            {
              name: "Cortinas e Persianas",
              path: "/legasse-home/cortina",
            },
            { name: "Automação", path: "/legasse-home/automacao" },
          ],
        },
        {
          title: "Soluções Energia",
          items: [
            { name: "Energia Solar", path: "/energia-solar" },
            {
              name: "Projeto Elétrico",
              path: "/legasse-energia/#projetos-eletrico",
            },
            {
              name: "Telecomunicação e Automação",
              path: "/legasse-energia#telecomunicacao",
            },
            {
              name: "Projetos de SPDA",
              path: "/legasse-energia/#spda",
            },
            { name: "Laudos", path: "/legasse-energia#laudos" },
            { name: "Modelagem BIM", path: "/legasse-energia#modelagem-bim" },
          ],
        },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Contate-nos", path: "/#contate-nos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav
      className={`fixed w-full py-1 px-2 z-50 transition-all duration-300 ${
        isScrolled || isBlogPage ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-2 flex flex-wrap justify-between gap-2 items-center">
        <div className="flex items-center gap-1.5 mb-2 md:mb-0 px-2 py-1">
          <Link href="/" className="inline-flex">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span
              className={`ml-3 text-3xl md:text-4xl font-baijam font-normal uppercase ${
                isScrolled || isBlogPage ? "text-white" : "text-white"
              }`}
            >
              LEGASSE
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item, index) => (
            <div key={index} className="relative flex items-center">
              <Link
                href={item.path}
                className={`text-md md:text-xl font-normal font-dmsans leading-relaxed transition duration-300 relative group ${
                  pathname === item.path
                    ? "text-yellow-500"
                    : isScrolled || isBlogPage
                    ? "text-white"
                    : "text-white"
                } hover:text-yellow-500 hover:scale-105`}
              >
                {item.name}
              </Link>

              {item.dropdown && (
                <button
                  onClick={toggleDropdown}
                  className="absolute inset-0 w-full h-full cursor-pointer"
                />
              )}

              {index < navItems.length - 1 && (
                <span className="mx-2 text-yellow-500">|</span>
              )}
              {item.dropdown && showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md p-6 flex space-x-12 mt-1.5 z-40"
                  style={{ minWidth: "300px" }}
                >
                  {item.dropdown.map((col, colIndex) => (
                    <div key={colIndex} className="w-64">
                      <h3 className="font-baijam font-semibold text-black text-lg mb-3">
                        {col.title}
                      </h3>
                      <ul className="space-y-2">
                        {col.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link href={subItem.path}>
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-4">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <div
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-2 text-lg transition-all duration-300 ease-in-out ${
                  pathname === item.path ? "text-yellow-500" : "text-white"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
