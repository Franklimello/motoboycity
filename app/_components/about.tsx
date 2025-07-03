import Image from "next/image";
import boy2 from '../../public/boy2.png'
import boy3 from '../../public/boy3.jpeg'
import ceo from "../../public/ceo.jpeg"
import { Check, MapPin } from "lucide-react";
import { MessageCircle } from 'lucide-react';

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={boy2}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={boy3}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold text-black">SOBRE</h2>

            <p className="text-lg text-gray-700">
              
                A Motoboy City surgiu em 2025 com um objetivo claro: resolver a falta de entregadores nos comércios de Lajinha e região.

                Percebendo a dificuldade que muitas lojas, farmácias e empresas enfrentavam para realizar entregas rápidas e confiáveis, criamos uma solução prática, ágil e com atendimento de qualidade. Nosso compromisso é garantir que cada entrega chegue no tempo certo e com toda a responsabilidade que seu negócio merece.

                Hoje, somos mais que um serviço de motoboy — somos parceiros do seu dia a dia. 🚀
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2025.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 motoboys experientes.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <div>
                <Image
                  src={ceo}
                  alt="Foto do CEO"
                  width={150}
                  height={50}
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg text-gray-500 font-semibold">Maicon Douglas</h3>
                <p className="text-gray-600">CEO e Fundador</p>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                target='_blank'
                href={`https://wa.me/553398680141?text=Ola vim pelo site Motoboy City`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

             <a
                href="https://maps.app.goo.gl/PFh7gYGWp8oAB65N9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>

          </div>

        </div>


      </div>
    </section>
  )
}