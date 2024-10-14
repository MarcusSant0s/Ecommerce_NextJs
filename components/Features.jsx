import React from 'react'
 
const Features = () => {


 
// "Receba um atendimento dedicado e personalizado. Estamos aqui para ajudar a encontrar a peça perfeita e garantir uma experiência de compra excepcional, do início ao fim."

    return (
        <section className='max-sm:pt-14'><div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"> {/* Title */} <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold md:text-5xl underline decoration-slate-400/50 decoration-2"> Compre e experiêncie </h2>
            <p className="mb-8 mt-4 max-w-lg text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16"> Luxo, conforto e diversidade</p>
        </div> {/* Content */} <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6 "> {/* Item */} <div className="grid gap-6 rounded-lg border border-solid border-gray-300 p-8 md:p-10   shadow-md shadow-pink-300  hover:shadow-xl hover:shadow-pink-400">
           
            <h3 className="text-xl font-semibold">Qualidade Premium</h3>
            <p className="text-sm text-gray-500">Peças cuidadosamente elaboradas para garantir durabilidade e brilho excepcionais.</p>
        </div> {/* Item */} <div className="grid gap-6 rounded-lg border border-solid border-gray-300 p-8 md:p-10 shadow-md shadow-pink-300  hover:shadow-xl hover:shadow-pink-400">
                   
                    <h3 className="text-xl font-semibold">Exclusividade e Estilo</h3>
                    <p className="text-sm text-gray-500"> Realce seu estilo com nossos designs inovadores, em qualquer ocasião, ofereça elegância e personalidade. </p>
                </div> {/* Features Item */} <div className="grid gap-6 rounded-lg border border-solid border-gray-300 p-8 md:p-10 shadow-md shadow-pink-300  hover:shadow-xl hover:shadow-pink-400">
                    
                    <h3 className="text-xl font-semibold">Atendimento Personalizado</h3>
                    <p className="text-sm text-gray-500"> Estamos aqui para ajudar a encontrar a peça perfeita e garantir uma experiência de compra excepcional, do início ao fim. </p>
                </div>
            </div>
        </div>
        </section>

    )
}


export default Features
