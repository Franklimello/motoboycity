import Image from 'next/image'
import franlim from "../../public/franklim.jpeg"
import fernandinho from "../../public/fernando.jpeg"
import edimar from "../../public/edimar.jpeg"
import Rosemar from "../../public/rosemar.jpeg"
import maicon from "../../public/maicon.jpeg"

const colaboradores = [
    {nome:"Franklim", image:franlim},
    {nome:"Fernandinho", image:fernandinho},
    {nome:"Edimar", image:edimar},
    {nome:"Rosemar", image:Rosemar},
    {nome:"Maicon", image:maicon},

]

export function Colaboradores() {
    return (
        <section className='py-8  font-bold flex bg-[#FDF6ec] ' >
            <div className='container mx-auto px-4 ' >
                <div>
                    <h1 className='text-3xl font-semibold mb-8 text-center text-black' >
                        Colaboradores</h1>
                </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 md:grid-cols-4 md:gap-2 lg:grid-cols-6 2xl:grid-cols-8 lg:gap-2 xl:gap-2 	2xl:gap-2' > 
                {colaboradores.map(colaborador => (
                    <div key={colaborador.nome} className='bg-blue-900 py-4 px-4 rounded-lg flex flex-col items-center justify-center text-center 
                        w-full sm:w-11/12 md:w-4/5  lg:w-11/12  xl:w-5/6  mx-auto 'data-aos="fade-down" >
                        <h2>{colaborador.nome}</h2>
                        <Image 
                        src={colaborador.image} 
                        alt={colaborador.nome} 
                        width={80}
                        height={80}
                        quality={100}
                        
                        className="object-contain rounded-lg" />
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}