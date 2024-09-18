"use client";

import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

import Script from 'next/script';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
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
  );
}
