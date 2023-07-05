import React from "react"
import { useEffect, useState } from "react";

export default function Valoraciones ( {card}) {
    const [curr, setCurr] = useState(0);

    return(
        <div>
            <h1>Hola esto es valoraciones</h1>
            <div>
            {card.map((card) => (
                        <div>
                            <div className="flex-wrap lg:justify-around bg-[#5D4037] hidden sm:flex lg:flex-row sm:flex-col sm:content-center">
                              <div className="overflow-hidden sm:h-full relative h-full  max-w-md ">  
                                <div className="flex flex-wrap transition-transform ease-out duration-500"
                                       style={{ transform: `translateX(-${curr * 100}%)` }}
                                          >
                                        <p>{card.value}</p>    
                                        <h1>{card.name}</h1>
                                </div>
                              </div>  
                            </div>
                            <p>{card.value}</p>
                           <h1>{card.name}</h1>
                        </div>
                        
                        
                    ))}
            </div>
        </div>
    )
}