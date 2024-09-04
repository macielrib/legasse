// src/components/WhatsappButton.tsx

import React from "react";
import Image from "next/image";

const WhatsappButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5548999250301" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/icons/whatsapp.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        className="object-contain transition-transform transform hover:scale-110"
      />
    </a>
  );
};

export default WhatsappButton;
