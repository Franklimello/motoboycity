"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { MessageCircle } from 'lucide-react'
import fruti from '../../public/fruti.jpeg'
import duchef from '../../public/duchef.jpeg'
import novafarma from '../../public/novafarma.png'

import Image from 'next/image'

const testimonials = [
  {
    content:
      "Desde que começamos a usar a Motoboy City para nossas entregas, a agilidade e o cuidado no atendimento nos surpreenderam. Os pedidos chegam sempre no prazo e o suporte é excelente. Recomendo para qualquer comércio que precisa de confiança nas entregas!",
    author: "Frutilleto",
    role: "Sorveteria",
    image: fruti,
  },
  {
    content:
      "Quando precisei de entregas rápidas para minha padaria, a Motoboy City foi a solução perfeita. Profissionais responsáveis, comunicação transparente e serviço ágil fizeram toda a diferença para o meu negócio.",
    author: "Padaria do Chef",
    role: "Padaria",
    image: duchef,
  },
  {
    content:
      "Utilizar o serviço da Motoboy City trouxe muita tranquilidade para nossa farmácia. As entregas são feitas com cuidado e pontualidade, e sempre recebo atualizações. Excelente parceiro para quem busca qualidade e segurança.",
    author: "Novafarma",
    role: "Farmácia",
    image: novafarma,
  },
];


export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })


  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-indigo-900 py-16  ">
      
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12 text-white">Depoimentos dos nossos clientes</h2>

        <div className="relative max-w-4xl mx-auto">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </div>

                      <p className='text-gray-200'>{item.content}</p>

                      <div>
                        <p className='font-bold'>{item.author}</p>
                        <p className='text-sm text-gray-400'>{item.role}</p>
                      </div>

                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-gray-600' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-gray-600' />
          </button>

        </div>

      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="border-b-2 border-gray-400 w-[90%] mb-4" />
      </div>
    </section>
    
  )
}