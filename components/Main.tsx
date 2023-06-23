import React from "react"

export default function Main () {
    return(
      <div>
        <div className="bg-gray-200 flex items-center justify-center flex-col ">
            <h1 className="flex justify-center h-96 w-full">La mejor peluqueria de Santa Croce Camerina</h1>
            <div className="bg-gray-400 flex justify-center mb-12 flex-col items-center w-4/5 m-black">
                <figure className="relative isolate flex flex-1 h-96 bg-black p-6 opacity-100 overflow-hidden transition-flex duration-500 hover:opacity-100 hover:flex-5">
                <img className="w-60 h-96 " src="images/rulos.jpg" alt="rulos" />
                </figure>
            </div>
        </div>
        <div className=" flex flex-col items-center">
            <h2 className="bg-yellow-400 h-96 w-full">Ekares Estilistes nació con el objetivo de darte la oportunidad de lucir la mejor versión de tu melena. Somos una marca de peluquería en pleno centro de Barcelona que busca revolucionar tu pelo, lograr ese cabello de ensueño que tanto deseas y verte sonreír cuando sales por la puerta. ¡Tenemos la magia que tu melena necesita!</h2>
            <div className="bg-gray-400 h-96 w-80">
                Nuestros clientes nos escogen desde hace mucho tiempo y nos valoran como una de las peluquerías referentes de Barcelona. Profesionalismo, formación, compromiso y pasión por nuestro trabajo es lo que nos define. ¡Dinos lo que deseas y te será concedido!
            </div>
        </div>
      </div>
    )
}