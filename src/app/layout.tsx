import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    // images: ["https://i.imgur.com/AFFPb4v.png"]
  },
  twitter: {
    title: "Legasse - Home e Energia",
    description: "Legasse é sua parceira em soluções inteligentes e integradas para casa e energia, unindo tecnologia e sustentabilidade.",
    card: "summary_large_image",
    // images: ["https://i.imgur.com/AFFPb4v.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br">
      
      <body className={inter.className}>
      <Navbar/>
        {children}
        
        <Footer/>
        </body>
    </html>
  );
}
