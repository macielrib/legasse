import { Reveal } from "@/app/components/RevealScroll"

const ComoBimAjuda = () => {
  return (
    <>
     <section className="bg-black py-12" id="modelagem-bim">
<Reveal>
<div className="container mx-auto px-6 text-left">
          <h2 className="text-4xl md:text-7xl font-baijam font-bold text-white mb-20 md:px-12">
            E como o <span className="text-[#F9BC0B]">BIM</span> pode ajudar?
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-[#121212] p-6 rounded-lg shadow-lg flex-1 max-w-md transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold font-baijam text-[#F9BC0B] mb-4">
                Compatibilização
              </h3>
              <p className="text-lg font-dmsans text-[#ccc]">
                O BIM permite <b>detectar</b> e visualizar <b>conflitos</b> entre instalações, estrutura, e arquitetura em softwares como Revit, Navisworks e Solibri, facilitando a análise e resolução de problemas.
              </p>
            </div>

            <div className="bg-[#121212] p-6 rounded-lg shadow-lg flex-1 max-w-md transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold font-baijam text-[#F9BC0B] mb-4">
                Precisão nos Quantitativos
              </h3>
              <p className="text-lg font-dmsans text-[#ccc]">
                É possível extrair de <b>forma rápida</b> a quantidade de materiais que serão utilizadas na obra, direto do modelo. Com isso a geração de listas de materiais para orçamento de serviços e de compras por etapa da obra ganham muita agilidade e <b>assertividade.</b>
              </p>
            </div>

            <div className="bg-[#121212] p-6 rounded-lg shadow-lg flex-1 max-w-md transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold font-baijam text-[#F9BC0B] mb-4">
                Visualização
              </h3>
              <p className="text-lg font-dmsans text-[#ccc]">
                Ferramentas como Dalux permitem a rápida visualização dos sistemas, <b>esclarecendo dúvidas</b> e gerando detalhes 3D diretamente do modelo para facilitar a compreensão das instalações.
              </p>
            </div>
          </div>
        </div>
</Reveal>
      </section>
    </>
  )
}

export default ComoBimAjuda