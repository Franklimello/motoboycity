import { MessageCircle } from 'lucide-react';
import boy1 from "../../public/boy1.png"
import playstore from "../../public/Google-Play-Logo-2016.jpg"
import aplle from "../../public/apple.png"
import { useEffect, useState } from 'react';
import Image from 'next/image'


export function Hero() {
  
  return (
    <section className="bg-zinc-800  text-white relative overflow-hidden">

      <div>
        <Image
          src={boy1}
          alt='Foto do cachorro'
          fill
          sizes='100vw'
          priority
          className='object-cover opacity-60 lg:hidden '
           />
        <div className='absolute inset-0 bg-black opacity-40 md:hidden' ></div>
      </div >

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down">
                <p>Motoboy</p>
                <p className='text-yellow-500'>City</p>
            </h1>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Seu pedido, no seu destino. Rápido e sem enrolação.
            </h2>
            <p className=" lg:text-lg" data-aos="fade-right">
              Atendemos toda a região de Lajinha com entregas expressas de qualidade. Conte com a gente para levar sua encomenda com rapidez, cuidado e aquele atendimento que só mineiro sabe oferecer.
            </p>


            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target='_blank'
              href={`https://wa.me/553398680141?text=Ola vim pelo site Motoboy city`}
              className="bg-yellow-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <MessageCircle className='w-5 h-5' />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4 font-bold ">
                 entrega super rápida
              </p>

             <div className="flex gap-4 ">
                <a
                        target='_blank'
                        href="https://motoboycity.app.br/entregador/cadastro"
                        className=" px-2 py-1 bg-green-600 font-bold  text-white rounded-md hover:bg-green-700 transition mt-8 align-center justify-center flex items-center"
                    >
                        Cadastro Motoboy
                    </a>
                    <a
                        target='_blank'
                        href="https://motoboycity.app.br/"
                        className="px-2 py-1 bg-blue-600 font-bold text-white rounded-md hover:bg-blue-700 transition mt-8 align-center justify-center flex items-center"
                    >
                        Cadastro Empresa
                </a>
                <a
                    href="https://play.google.com/store/apps/details?id=br.com.donodoapp.entregas&fbclid=PAZXh0bgNhZW0CMTEAAaeFBeXlQVY8GxtnNuz8OIdZN4AhLOJvFfXm7hx9mWnQC33HJctwIS953K79bQ_aem_8GFn70VnnSlMsFzQ-8nXGQ"
                    className="hover:opacity-80 transition-opacity"
                    target='_blank'>

                    <Image
                    src={playstore}
                    alt="Play Store"
                    width={50}
                    height={48}
                    className="object-contain rounded mt-8"
                    />
                </a>
                <a href="https://apps.apple.com/gb/app/entregas-expressas/id6478935926" className="hover:opacity-80 transition-opacity" target='_blank'>
                    <Image
                    src={aplle}
                    alt="Apple Store"
                    width={50}
                    height={50}
                    className="object-contain mt-8"
                    />
                    
                </a>
            </div>


              <div className='flex mt-4'>
                <div className='w-32 hidden lg:block'>
                  <Image
                    src={boy1}
                    alt="Foto do gato"
                    quality={100}
                    className='object-fill'
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={boy1}
              alt='Foto do dog'
              className='object-contain'
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>

        </article>

      </div>


    </section>
  )
}