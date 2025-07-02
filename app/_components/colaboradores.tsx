import Image from 'next/image'
import franlim from "../../public/franklim.jpeg"
import fernandinho from "../../public/fernando.jpeg"

const colaboradores = [
    {nome:"Franklim", image:franlim},
    {nome:"Fernandinho", image:fernandinho},
    
]

export function Colaboradores() {
    return (
        <section className='py-8 text-white flex bg-indigo-900'>
            <div className='container mx-auto px-4 '>
                <div>
                    <h1 className='text-3xl font-semibold mb-8 text-center'>
                        Colaboradores</h1>
                </div>
            <div className='flex flex-wrap gap-8 justify-start items-center'>
                {colaboradores.map(colaborador => (
                    <div key={colaborador.nome}>
                        <h2>{colaborador.nome}</h2>
                        <Image 
                        src={colaborador.image} 
                        alt={colaborador.nome} 
                        width={50}
                        height={50}
                        quality={100}
                        style={{
                            width: "auto",
                            height: "auto",
                        }}
                        className="object-contain rounded-[100%]"/>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}