"use client";

import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");

  const navItems = [
    { name: "Sobre a Legasse", path: "#sobre-legasse" },
    {
      name: "Nossos Serviços",
      path: "#nossos-servicos",
      dropdown: [
        {
          title: "Soluções Home",
          items: [
            "Áudio e Vídeo",
            "Piso Aquecido",
            "Aspiração Central",
            "Lareiras",
            "Cortinas e Persianas",
            "Automação",
          ],
        },
        {
          title: "Soluções Energia",
          items: [
            "Energia Solar",
            "Projeto Elétrico",
            "Telecomunicação / Automação",
            "Projetos de SPDA",
            "Laudos",
            "Modelagem BIM",
          ],
        },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Contate-nos", path: "#contate-nos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full py-1 px-2 z-50 transition-all duration-300 ${
        isScrolled || isBlogPage ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-2 flex flex-wrap justify-between gap-2 items-center">
        <div className="flex items-center gap-1.5 mb-2 md:mb-0 px-2 py-1">
          <Link href={"/"} className="inline-flex">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span
              className={`ml-3 text-3xl md:text-4xl font-baijam font-normal uppercase ${
                isBlogPage ? "text-black" : "text-white"
              }`}
            >
              LEGASSE
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setShowDropdown(item.dropdown ? true : false)}
              onMouseLeave={() => setShowDropdown(false)}
              className="relative"
            >
              <Link href={item.path} legacyBehavior>
                <a
                  className={`text-md md:text-2xl font-medium font-dmsans leading-relaxed transition duration-300 ${
                    pathname === item.path
                      ? "text-yellow-500"
                      : isBlogPage
                      ? "text-black"
                      : "text-white"
                  } hover:text-yellow-500 hover:scale-105`}
                >
                  {item.name}
                </a>
              </Link>
              {item.dropdown && showDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md p-6 flex space-x-12">
                  {item.dropdown.map((col, colIndex) => (
                    <div key={colIndex} className="w-64">
                      <h3 className="font-baijam font-semibold text-black text-lg mb-3">
                        {col.title}
                      </h3>
                      <ul className="space-y-2">
                        {col.items.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-black font-dmsans font-medium hover:text-yellow-500 cursor-pointer transition"
                          >
                            {subItem}
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
            <Link key={index} href={item.path} legacyBehavior>
              <a
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-2 text-lg transition-all duration-300 ease-in-out ${
                  pathname === item.path ? "text-yellow-500" : "text-white"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
