import React from "react";
import Carrousel from "./Carrousel";

import Validaciones2 from "./Validaciones2";
import Direccion from "./Direccion";



export default function Main() {
  const slides = [
    "../images/salon-1.jpg",
    "../images/salon-2.jpg",
    "../images/salon-3.jpg",
    "../images/salon-4.jpg",
    "../images/salon-5.jpg",
    "../images/salon-6.jpg",
  ];

  const card = [
    {
      name: "Franco Mauricio Cuello",
      value:
        "Me atendio marcos, fue muy gentil con el trato y recibimiento de mi persona, desde el principio al final, son todos muy atentos",
    },
    {
      name: "erick bana",
      value:
        "fue un servicio muy eficiente, hasta me hicieron olvidar que me convertia en hulk",
    },
    { name: "wolverine", value: "quede muy satisfecho con el servicio, hasta las uñas me limaron" },
     {
      name: "Ana Martínez",
      value: "Me encantó la atención en la peluquería. El personal fue amable y profesional, y el resultado final superó mis expectativas.",
    },
    {
      name: "Pedro González",
      value: "Excelente atención en la peluquería. Los estilistas son muy talentosos y se preocuparon por entender lo que quería. Salí muy satisfecho con mi nuevo look.",
    },
    {
      name: "María Rodríguez",
      value: "Recomiendo esta peluquería a todos. Me sentí bienvenida desde el momento en que entré y el personal hizo un trabajo increíble en mi cabello. Definitivamente volveré.",
    },
    {
      name: "Luisa García",
      value: "La atención en esta peluquería es de primera. Los estilistas son creativos y me dieron consejos útiles para el cuidado de mi cabello. ¡Los resultados hablan por sí mismos!",
    },
    {
      name: "Carlos López",
      value: "La peluquería ofrece un servicio excepcional. Los estilistas son pacientes y escuchan tus necesidades. Me encantó mi corte de pelo y el ambiente acogedor.",
    },
    {
      name: "Laura Hernández",
      value: "La mejor experiencia en una peluquería. El personal es profesional y amigable, y el resultado fue exactamente lo que quería. Definitivamente regresaré para mis próximos cambios de imagen.",
    }
  ];

  return (
    <div>
      <div  id="service" className="bg-[#5D4037] flex flex-col sm:flex-row sm:items-center sm:justify-center   ">
        <div className="">
          <div className="flex justify-center w-full text-4xl p-10 text-[#FFFFFF] ">
            La mejor peluqueria de Santa Croce Camerina
          </div>
          <p className="text-white text-lg p-10">
            "¡Bienvenidos a HOW YOU WANT! Somos un equipo apasionado de
            estilistas y especialistas en cuidado capilar dedicados a realzar tu
            belleza y brindarte una experiencia única. Nuestro objetivo es no
            solo transformar tu apariencia, sino también elevar tu confianza y
            bienestar personal.
          </p>
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

      <div id="salon" className=" flex flex-col items-center">
        <div>
          <Carrousel autoslide={true}>
            {[...slides.map((s) => <img src={s} />), ""]}
          </Carrousel>
        </div>
      </div>
      
      <div>
        <Validaciones2 card={card} autoslide={true}/>
      </div>
      <div>
        <Direccion />
      </div>
      <div>

      
      </div>
    </div>
  );
}
