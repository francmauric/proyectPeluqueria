import React from "react"

export default function Valoraciones ( {card}) {
   /*  const card = [
        {name: "Franco Mauricio Cuello", value: "Me atendio marcos, fue muy gentil con el trato y recibimiento de mi persona, desde el principio al final, son todos muy atentos"}
      ] */

    return(
        <div>
            <h1>Hola esto es valoraciones</h1>
            <div>
            {card.map((card) => (
                        <div>
                           <h1>{card.name}</h1>
                            <p>{card.value}</p>
                        </div>
                        
                        
                    ))}
            </div>
        </div>
    )
}