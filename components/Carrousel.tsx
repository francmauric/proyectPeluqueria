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
        <div className="flex-wrap justify-around bg-gray-400 hidden sm:flex">
            <div className="flex bg-gray-800">
                        <h1>Nuestro Salon</h1>
                        <p>Podras visualizar todos nuestros servicios </p>
            </div>
            <div className="overflow-hidden relative h-full max-w-md ">
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