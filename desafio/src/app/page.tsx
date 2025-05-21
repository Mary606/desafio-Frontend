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
    </div>
  );
}
