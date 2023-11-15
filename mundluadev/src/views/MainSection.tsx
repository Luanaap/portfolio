import SocialMedia from "./SocialMedia";

const MainSection = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="sticky top-0 z-10">
         <div className="flex" style={{ height: '80vh', maxHeight: '900px' }}>
         <div className="flex flex-col w-1/2 bg-dark-purple text-white p-8">
            <SocialMedia />
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4">Desenvolvedora front-end .</h3>
              <p>Gosto de criar produtos front-end sólidos e escaláveis com ótimas experiências de usuário.</p>
              <p>Altamente qualificado em aprimoramento progressivo, sistemas de design e engenharia de UI.</p>
              <p>Experiência comprovada na construção de produtos de sucesso para clientes.</p>
            </div>
          </div>
          <div className="w-1/2 bg-light-green flex justify-end items-center p-8">
          </div>
        </div>
         </div>
      </div>

   
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[calc(50vh-4rem)] w-48 h-48 bg-white border border-gray-300 z-20">
      </div>

     
      <div className="bg-white pt-[calc(100vh-4rem)]">
        <section className="h-auto">
          <h2 className="text-4xl font-bold mb-4 p-8">Projeto</h2>
          <p className="p-8">Descrição do projeto...</p>
        </section>
      </div>
    </>
  );
}

export default MainSection;
