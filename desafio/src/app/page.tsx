'use client'
import React, { useEffect, useState } from 'react';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  const images = [
    '/icon1.jpg',
    '/icon2.jpg',
    '',
  ]
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Seção de texto */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 max-md:text-center sm: mt-10">
            Bem-vindo à Lacrei Saúde
          </h1>
          <p className="text-lg text-gray-600">
            Conectamos profissionais de saúde qualificados a pacientes que buscam atendimento humanizado e de qualidade.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              Nossa missão é democratizar o acesso à saúde, oferecendo uma plataforma segura e confiável para todos.
            </p>
            <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors sm: w-full">
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
      <section className='mt-20 mb-5 max-md:flex max-md:flex-col sm: flex flex-col items-center justify-center p-10'>
        <h2 className='text-center text-4xl md:text-5xl font-bold text-cyan-800  mb-10'>O que a Lacrei oferece?</h2>
        <div id='card' className='flex flex-col md:flex-row items-stretch justify-center gap-4 p-4 md:p-10'>
          <div className='card w-full md:w-1/3 bg-gray-100 p-4 md:p-10 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white'>
            <Image
              src="/professional.svg"
              alt="Profissional de saúde"
              width={80}
              height={80}
              className="mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h3 className='text-2xl font-bold text-teal-800 transition-colors duration-300 hover:text-cyan-600'>Acesso a profissionais qualificados</h3>
            <p className='text-gray-600'>
              Encontre profissionais de saúde especializados em diversas áreas, com avaliações de pacientes e feedbacks detalhados.
            </p>
          </div>
          <div className='card w-full md:w-1/3 bg-gray-100 p-6 md:p-10 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white'>
            <Image
              src="/inclusion.svg"
              alt="Inclusão e diversidade"
              width={80}
              height={80}
              className="mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h3 className='text-2xl font-bold text-teal-800 transition-colors duration-300 hover:text-cyan-600'>Inclusão e representatividade</h3>
            <p className='text-gray-600 mt-4'>
              Garantimos a inclusão e representatividade de todos, independente de origem, gênero, orientação sexual ou etnia.
            </p>
          </div>
          <div className='card w-full md:w-1/3 bg-gray-100 p-6 md:p-10 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white'>
            <Image
              src="/security.svg"
              alt="Segurança e privacidade"
              width={80}
              height={80}
              className="mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h3 className='text-2xl font-bold text-teal-800 transition-colors duration-300 hover:text-cyan-600'>Segurança e privacidade</h3>
            <p className='text-gray-600 mt-4'>
              Garantimos a segurança e a privacidade de suas informações, com um ambiente seguro e protegido.
            </p>
          </div>
        </div>
      </section>
      <section id='card2' className='flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-20'>
        <div className='flex-1 flex justify-center order-2 md:order-1'>
        <Carousel images={images} />
        </div>
        <div className='flex-1 order-1 md:order-2'>
          <h2 className='text-center text-5xl md:text-5xl font-bold text-cyan-800 mb-10'>Como funciona a Lacrei Saúde?</h2>
          <div className='flex flex-col md:flex-row items-stretch justify-center gap-4 p-4 md:p-10'>
            <div className='card w-full bg-gray-100 p-8 rounded-lg flex flex-col items-center text-center shadow-lg'>
              <p className='text-gray-600 text-lg leading-relaxed'>
                A Lacrei Saúde é mais que uma startup de Health Tech; é um movimento para transformar o acesso à saúde da comunidade LGBTQIAPN+. Nosso compromisso é oferecer um ambiente seguro e inclusivo, em digital para a saúde da nossa comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
