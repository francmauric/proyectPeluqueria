import React from "react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"


export default function Carrousel ({ children: slides, autoslide= false, autoslideInterval = 3000 }) {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoslide) return
        const slideInterval = setInterval(next, autoslideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    
    return(
        <div>
        <div className="overflow-hidden relative sm:hidden">
            <div className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)`}}
            >
                {slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40}/>
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight size={40} />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_,i) => (
                        <div 
                            className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`

                            }
                        >

                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex-wrap lg:justify-around bg-[#5D4037] hidden sm:flex lg:flex-row sm:flex-col sm:content-center">
            <div className="flex bg-[#5D4037] flex-col content-center sm:w-5/6 lg:w-3/6 text-[#FFFFFF]" >
                        <h1 className=" text-center text-3xl p-5">Nuestro Salon</h1>
                        <div className="lg:p-4 sm: ">
                            <p >"En How You Want, nos enorgullece
                             ofrecerte una experiencia de belleza excepcional
                              en nuestro moderno y acogedor salón. Nuestro 
                              objetivo es brindarte un servicio personalizado
                               y de alta calidad que resalte tu belleza única.</p>
                            <p> Sumérgete en nuestro elegante entorno mientras te deleitas con una taza de café recién hecho. Nuestro talentoso equipo de estilistas está aquí para escuchar tus necesidades y ayudarte a lograr el estilo de cabello perfecto que siempre has deseado. Con una combinación de habilidad artística y conocimientos actualizados sobre las últimas tendencias, te garantizamos resultados impresionantes.</p>

                            <p> En nuestra galería de imágenes, podrás apreciar la belleza y el ambiente relajado de nuestro salón. Te invitamos a explorar nuestras instalaciones modernas, donde cada detalle ha sido cuidadosamente diseñado para brindarte una experiencia única.</p>

                            <p> Nuestros servicios van más allá del corte y peinado. También ofrecemos una amplia gama de tratamientos capilares, desde coloraciones personalizadas y mechas de moda hasta alisados y estilizados profesionales. Además, contamos con servicios especializados para ocasiones especiales, como peinados y maquillajes para bodas o eventos importantes.</p>

                            <p> En How You Want, la satisfacción del cliente es nuestra prioridad número uno. Estamos comprometidos a superar tus expectativas y garantizar que te sientas increíblemente hermoso/a en cada visita.</p>

                            <p> Visítanos hoy mismo y déjanos consentirte con nuestros servicios excepcionales y nuestra atención dedicada. ¡Confía en nosotros para realzar tu belleza y elevar tu confianza!"</p>

                            <p> Recuerda adaptar el texto según las características específicas de tu peluquería y los servicios que ofrezcas. ¡Espero que este ejemplo sea útil para tu sección de imágenes y servicios! </p>
                        </div>        
            </div>
                
                <div className="overflow-hidden sm:h-full relative h-full  max-w-md rounded-tl-full shadow-[-30px_-40px_60px_-5px_rgba(0,0,0,0.3)]" 
                
                >
               <div className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)`}}
                  >
                {slides}</div>
               <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40}/>
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight size={40} />
                </button>
                </div>
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                    {slides.map((_,i) => (
                        <div 
                            className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`

                            }
                        >

                        </div>
                    ))}
                    </div>
                </div>
                </div>
        </div>
        </div>
    )
}