import React from "react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Valoraciones({
  card,
  autoslide = false,
  autoslideInterval = 3000,
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
    <div>
      <div className="bg-green-600 flex justify-center w-full ">
        
        <div className="border-orange-600 flex flex-row border-2 overflow-hidden bg-gray-400 sm:h-full relative  h-full w-auto ">
        {card.map((card) => (
          
              <div
                className="border-2  flex flex-wrap flex-col border-yellow-400 w-56  transition-transform  ease-out   duration-500 "
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                <h1>{card.name}</h1> 
                <p>{card.value}</p>
                
              </div>

          
               ))}
          <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                <ChevronLeft size={10} />
              </button>
              <button
                onClick={next}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                <ChevronRight size={10} />
              </button>
          </div>
        </div>


      </div>
    </div>
  );
}
