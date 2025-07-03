import novafarma from '../../public/novafarma.png'
import fruti from '../../public/fruti.jpeg'
import duchef from '../../public/duchef.jpeg'
import ideal from '../../public/ideal.jpeg'
import dinha from '../../public/dinha.jpeg'
import michelle from '../../public/michelle.jpeg'
import gigante from '../../public/gigante.jpeg'
import adaise from '../../public/adaise.jpeg'
import toque from '../../public/toque.jpeg'
import kacinho from '../../public/kacinho.jpeg'
import dina from '../../public/dina.jpeg'
import rango from '../../public/rango.jpeg'
import alvim from '../../public/alvim.jpeg'
import Image from 'next/image'


const brands = [
  { name: "Frutilleto", logo: fruti },
  { name: "Novafarma", logo: novafarma },
  { name: "DuChef", logo: duchef },
  { name: "Drogaria ideal", logo: ideal },
  { name: "Dinha", logo: dinha },
  { name: "Michelle", logo: michelle },
  { name: "Gigante", logo: gigante },
  { name: "Adaise", logo: adaise },
  { name: "Toque de mestre", logo: toque },
  { name: "Kacinho", logo: kacinho },
  { name: "Dina", logo: dina },
  { name: "Rango bom", logo: rango },
  { name: "Alvim", logo: alvim }
  
]

export function Footer() {
  return (
    <section className="bg-teal-800 pt-16 text-white">
      <div className='container mx-auto px-4'>

        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center' data-aos="fade-right">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Motoboy city</h3>
            <p className='mb-4'>Entregas rapidas e de qualidade.</p>
            <a
            target='_blank'
                href={`https://wa.me/553398680141?text=Ola vim pelo site Motoboy City`}
                className="bg-lime-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
                Contato via WhatsApp
            </a>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (33) 98680141</p>
            <p>Rua herculano ker, lajinha | MG</p>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a
                href="#"
                target='_blank'
              >
                <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
              </a>
              <a
                href="https://www.instagram.com/motoboy_city_?utm_source=ig_web_button_share_sheet&igsh=dW9mNXJtdzd0bGRl"
                target='_blank'
              >
                <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
              </a>
              <a
                href="#"
                target='_blank'
              >
                <Image src="/youtube.svg" alt="YouTube" width={32} height={32} />
              </a>
            </div>
          </div>

        </footer>

      </div>
       <footer className="bg-blue-900 text-white py-4 text-center ">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Desenvolvido por Franklim Joaquim de Melo Neto. Todos os direitos reservados.
      </p>
    </footer>
    </section>
  )
}