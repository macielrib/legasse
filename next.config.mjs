// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'scontent-gru1-1.cdninstagram.com',
      'scontent-gru1-2.cdninstagram.com',
      'scontent-gru2-1.cdninstagram.com',
      'scontent-gru2-2.cdninstagram.com', // Adicione o novo domínio aqui
    ],
  },
};

export default nextConfig;
