import React from "react"


export default function Main () {
    return(
      <div>
        <div className="bg-[#5D4037] flex items-center justify-center  ">
            <div className="">
                <div className="flex justify-center w-full text-4xl p-10 text-[#FFFFFF] ">La mejor peluqueria de Santa Croce Camerina</div>
                <p className="text-white text-lg p-10">"¡Bienvenidos a HOW YOU WANT! Somos un equipo apasionado de estilistas y 
                    especialistas en cuidado capilar dedicados a realzar tu belleza y brindarte una experiencia única. Nuestro objetivo es no solo transformar tu apariencia, sino también elevar tu confianza y bienestar personal.</p>
            </div>
            {/* <div className="max-w-screen-md px-full py-4 mx-auto">
               <div className="bg-gray-400 flex justify-center mb-12  w-2/5 m-black">
                <figure className="relative isolate flex flex-1 h-96 bg-black   overflow-hidden transition duration-500 hover:flex-5  opacity-75 hover:opacity-100">
                <img className="w-full h-full absolute top-0 right-0 -z-1 object-cover " src="images/rulos.jpg" alt="rulos" />
                </figure>
                <figure className="relative isolate flex flex-1 h-96 bg-black p-6  overflow-hidden transition duration-500 hover:flex-5 opacity-75 hover:opacity-100">
                <img className="w-60 h-96 absolute top-0 right-0 -z-1 object-cover " src="images/lazio.jpg" alt="lazio" />
                </figure>
                <figure className="relative isolate flex flex-1 h-96 bg-black p-6  overflow-hidden transition duration-500 hover:flex-5 opacity-75 hover:opacity-100">
                <img className="w-60 h-96 absolute top-0 right-0 -z-1 object-cover " src="images/rubia.jpg" alt="rubio" />
                </figure>
               </div>
            </div> */}    
            <div className="container">
                <div className="gallery-wrapper">
                    <figure className="gallery-item">
                        <img className="item-image" src="/images/rulos.jpg" alt="rulos" />
                        <figcaption className="item-description">
                            <h2 className="name">Tus mejores Rulos</h2>
                        </figcaption>
                    </figure>
                    <figure className="gallery-item">
                        <img className="item-image" src="/images/rubia.jpg" alt="rubia" />
                        <figcaption className="item-description">
                            <h2 className="name">Tu mejor brillo</h2>
                        </figcaption>
                    </figure>
                    <figure className="gallery-item">
                        <img className="item-image" src="/images/lazio.jpg" alt="lazio" />
                        <figcaption className="item-description">
                            <h2 className="name">TU cabello Lazio</h2>
                        </figcaption>
                    </figure>
                </div>
            </div>    
        </div>
        
        <div className=" flex flex-col items-center">
            <h2 className="bg-[#5D4037] text-3xl h-96 w-full text-[#FFFFFF] text-center">Nuestros Servicios</h2>
            <div className="bg-gray-400 h-96 w-80">
                Nuestros clientes nos escogen desde hace mucho tiempo y nos valoran como una de las peluquerías referentes de Barcelona. Profesionalismo, formación, compromiso y pasión por nuestro trabajo es lo que nos define. ¡Dinos lo que deseas y te será concedido!
            </div>
        </div>
        
      </div>
    )
}