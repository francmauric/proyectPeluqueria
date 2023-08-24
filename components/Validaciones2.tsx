import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type Card = {
  name: string;
  value: string;
};

export default function Validaciones2({
  card,
  autoslide = false,
  autoslideInterval = 3000,
}: {
  card: Card[]; // Aquí especificamos el tipo del array card
  autoslide?: boolean;
  autoslideInterval?: number;
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? card.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === card.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoslideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div id="validaciones" className="bg-[#5D4037] flex flex-col ">
      <h1 className="text-center text-white text-3xl p-5">
        Reseñas de nuestros clientes
      </h1>

      <div className="flex justify-center items-center">
        <div className="relative w-96 h-72">
          {card.map((auto: Card, index: number) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === curr ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">{auto.name}</h2>
                <p>{auto.value}</p>
              </div>
            </div>
          ))}
          <div className="absolute inset-y-1/2 left-0 flex items-center">
            <button
              onClick={prev}
              className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronLeft size={16}  />
            </button>
            
          </div>
          <div className="absolute inset-y-1/2 right-0 flex items-center">
            <button
              onClick={next}
              className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
