"use client"
import useEmblaCarousel from "embla-carousel-react" 
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel,MessageCircle, Clock,} from "lucide-react"

import { Store, UserPlus, Truck, Home } from 'lucide-react';

const services = [
  {
    title: "Cadastre sua empresa",
    description: "Seja parceiro da Motoboy City e resolva de vez o problema de entregas no seu comércio. Atendimento rápido, seguro e sob demanda para sua loja ou serviço.",
    duration: "Ativação rápida",
    price: "Planos personalizados",
    icon: <Store />,
    linkText: 'Olá, vi no site sobre parceria para cadastro de empresa e gostaria de mais informações.'
  },
  {
    title: "Motoboy, cadastre-se aqui",
    description: "Faça parte da nossa equipe de motoboys. Oferecemos oportunidades para entregadores que querem trabalhar com flexibilidade e segurança.",
    duration: "Cadastro rápido",
    price: "Sem taxa inicial",
    icon: <UserPlus />,
    linkText: 'Olá, vi no site sobre cadastro para motoboys e gostaria de mais informações.'
  },
  {
    title: "Serviço de Entrega Expressa",
    description: "Entregas rápidas e seguras para documentos, encomendas e muito mais, garantindo que seu pedido chegue no destino no menor tempo possível.",
    duration: "Disponível 24h",
    price: "Preço sob consulta",
    icon: <Truck />,
    linkText: 'Olá, vi no site sobre serviço de entrega expressa e gostaria de mais informações.'
  },
  {
    title: "Logística para Empresas",
    description: "Soluções completas de logística para sua empresa, desde entregas programadas até o gerenciamento de rotas eficientes.",
    duration: "Planos personalizados",
    price: "Sob orçamento",
    icon: <Home />,
    linkText: 'Olá, vi no site sobre soluções logísticas e gostaria de mais informações.'
  },
];


export function Services(){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': {
                slidesToScroll: 3,
            }
           
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return(
        <section className=" bg-white py-16">
            <div className="container mx-auto px-4">
                <div >
                    <h2 className="text-4xl text-black font-bold mb-12">
                        Serviços
                    </h2>
                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex ">
                                {services.map((item,index)=> (
                                    <div key={index} className="flex-[0_0_100%] min-w 0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className="bg-cyan-900 text-white rounded-2xl p-6 space-y-4
                                        h-full flex flex-col ">
                                            <div className="flex-1 flex items-start justify-between">
                                                <div className="flex gap-3">
                                                    <span className="text-3xl">{item.icon}</span>
                                                    <div>
                                                        <h3 className="font-bold text-xl my-1">
                                                            {item.title}
                                                        </h3>
                                                        <p className=" text-white text-sm select-none">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="border-t border-gray-600 pt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Clock className="w-4 h-4"/>
                                                    <span>{item.duration}</span>
                                                </div>
                                                <a target='_blank'
                href={`https://wa.me/553398680141?text=Ola vim pelo site motoboycity, gostaria de imformaçoes sobre ${item.title}`} className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300">

                                                    <MessageCircle className="w-5 h-5"/>
                                                    Entrar em contato
                                                </a>
                                            </div>

                                        </article>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <button>
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 duration-300"
                                onClick={scrollPrev}>
                                <ChevronLeft className="w-6 h-6 text-gray-600" />
                            </div>
                        </button>
                        <button>
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 duration-300"
                                onClick={scrollNext}>
                                <ChevronRight className="w-6 h-6 text-gray-600" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}