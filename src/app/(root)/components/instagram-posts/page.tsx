"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react"; // Adiciona o useState para o QueryClient

// Função para obter dados da API
const getGraphHome = async () => {
  const response = await axios.get('https://legasse-api.vercel.app/media/graph/home');
  return response.data["media"].slice(0, 6);
};

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

const InstagramSection: React.FC = () => {
  // Cria o QueryClient
  const [queryClient] = useState(() => new QueryClient());

  // Usa o React Query para buscar os posts do Instagram
  const graphHome = useQuery({
    queryKey: ["instagram-media-home"],
    queryFn: getGraphHome,
  });

  // Função para renderizar cada post
  const renderPost = (post: InstagramPost) => (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      key={post.id}
      className="relative block w-full h-0 pb-[100%] overflow-hidden"
    >
      {post.media_type === "VIDEO" ? (
        <video
          src={post.media_url}
          controls
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : (
        <Image
          src={post.media_url}
          alt="Instagram post"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      )}
    </a>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <section className="bg-white py-16 px-6 md:px-14">
        <div className="container mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-7xl font-baijam font-bold mb-4">
              Conecte-se conosco:
              <br />
              <span className="text-yellow-500">Siga-nos</span> no instagram!
            </h2>
            <p className="text-md md:text-xl font-dmsans font-medium text-black max-w-2xl">
              Confira as últimas novidades e acompanhe nossos projetos
              <br /> nas nossas <b>contas no Instagram.</b>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Legasse Energia */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className="py-2 p-2 rounded-md bg-neutral-900">
                  <Image
                    src={"/logo.png"}
                    width={18}
                    height={18}
                    alt="Logo Instagram"
                  />
                </span>
                <span className="text-black font-baijam text-2xl font-bold">
                  <a
                    href="https://instagram.com/legasseenergia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 hover:translate-x-1 hover:text-yellow-500"
                  >
                    @legasseenergia
                  </a>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {graphHome.data?.map(renderPost)}
              </div>
            </div>

            {/* Legasse Home */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <span className="py-2 p-2 rounded-md bg-black">
                  <Image
                    src={"/logo.png"}
                    width={18}
                    height={18}
                    alt="Logo Instagram"
                  />
                </span>
                <span className="text-black font-baijam text-2xl font-bold">
                  <a
                    href="https://instagram.com/legassehome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 hover:translate-x-1 hover:text-yellow-500"
                  >
                    @legassehome
                  </a>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {graphHome.data?.map(renderPost)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </QueryClientProvider>
  );
};

export default InstagramSection;
