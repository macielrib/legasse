"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import WhatsappButton from "./components/WhatsappButton";

import { QueryClient, QueryClientProvider } from 'react-query'; // Importa QueryClient e QueryClientProvider
import { useState } from 'react'; // Importa useState para manter o estado do QueryClient

import "swiper/css";
import "swiper/css/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legasse - Home e Energia",
  description: "Legasse é sua parceira em soluções inteligentes e integradas para casa e energia, unindo tecnologia e sustentabilidade.",
  alternates: {
    canonical: 'https://legasse.com'
  },
  authors: [{ name: 'Spacefy Oficial', url: "https://spacefy.com.br" }],
  robots: {
    index: true,
    follow: true
  },
  keywords: [
    "legasse",
    "legasse home",
    "legasse energia",
    "legasse home e energia",
    "soluções inteligentes",
    "home e energia",
    "home",
    "energia",
    "casa e energia",
    "soluções de energia e tecnologia",
    "conforto inteligente",
    "soluções em energia",
  ],
  openGraph: {
    title: "Legasse - Home e Energia",
    description: "Legasse é sua parceira em soluções inteligentes e integradas para casa e energia, unindo tecnologia e sustentabilidade.",
    siteName: "Spacefy",
    url: "https://legasse.com",
    locale: "pt_BR",
  },
  twitter: {
    title: "Legasse - Home e Energia",
    description: "Legasse é sua parceira em soluções inteligentes e integradas para casa e energia, unindo tecnologia e sustentabilidade.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Cria o QueryClient uma vez ao inicializar o layout
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body className={inter.className}>
        {/* Envolvendo a aplicação com o QueryClientProvider */}
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <Footer />
          <WhatsappButton />
          <Script
            src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
            strategy="lazyOnload"
          />
        </QueryClientProvider>
      </body>
    </html>
  );
}
