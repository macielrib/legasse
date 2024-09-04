import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <div className="text-center">
        <h1 className="text-yellow-500 text-8xl font-baijam font-bold mb-6">Em breve...</h1>
        <p className="text-white font-baijam text-xl font-semibold mb-8">
          A página que você tentou acessar ainda está sendo construida...
        </p>
        <Link
          className="inline-block py-3 px-6 bg-black text-white rounded-lg font-dmsans font-medium text-lg transition-transform transform hover:scale-105"
          href="/"
        >
          Voltar Agora
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;