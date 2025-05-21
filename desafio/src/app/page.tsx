import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Seção de texto */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-800">
            Bem-vindo à Lacrei Saúde
          </h1>
          <p className="text-lg text-gray-600">
            Conectamos profissionais de saúde qualificados a pacientes que buscam atendimento humanizado e de qualidade.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              Nossa missão é democratizar o acesso à saúde, oferecendo uma plataforma segura e confiável para todos.
            </p>
            <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Conheça nossos profissionais
            </button>
          </div>
        </div>


        <div className="flex-1 flex justify-center">
          <Image
            src="/Image-Pessoa.svg"
            alt="Pessoas conectadas"
            width={600}
            height={400}
            className="w-full max-w-lg h-auto drop-shadow-lg"
            priority
          />
        </div>
      </main>
      <section className='mt-20 mb-20'>
        <h2 className='text-center text-4xl md:text-5xl font-bold text-cyan-800  mb-10'>O que a Lacrei oferece?</h2>
        <div id='card' className='flex items-stretch'>
          <div className='card w-1/3 bg-gray-100 p-10 rounded-lg py-4 mt-10 mr-10 flex flex-col items-center text-center'>
            <Image
              src="/professional.svg"
              alt="Profissional de saúde"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className='text-2xl font-bold text-teal-800'>Acesso a profissionais qualificados</h3>
            <p className='text-gray-600 mt-4'>
              Encontre profissionais de saúde especializados em diversas áreas, com avaliações de pacientes e feedbacks detalhados.
            </p>
          </div>
          <div className='card w-1/3 bg-gray-100 p-10 rounded-lg py-4 mt-10 mr-10 flex flex-col items-center text-center'>
            <Image
              src="/inclusion.svg"
              alt="Inclusão e diversidade"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className='text-2xl font-bold text-teal-800'>Inclusão e representatividade</h3>
            <p className='text-gray-600 mt-4'>
              Garantimos a inclusão e representatividade de todos, independente de origem, gênero, orientação sexual ou etnia.
            </p>
          </div>
          <div className='card w-1/3 bg-gray-100 p-10 rounded-lg py-4 mt-10 flex flex-col items-center text-center'>
            <Image
              src="/security.svg"
              alt="Segurança e privacidade"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className='text-2xl font-bold text-teal-800'>Segurança e privacidade</h3>
            <p className='text-gray-600 mt-4'>
              Garantimos a segurança e a privacidade de suas informações, com um ambiente seguro e protegido.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
