import React from "react"
import { Disclosure } from "@headlessui/react"
import { GiHamburgerMenu } from "react-icons/gi"

export default function NavBar () {





    return(
        <>
         <Disclosure as='nav' className="z-60">
            <Disclosure.Button className="bg-gray-400 sm:hidden absolute top-4 right-4 flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group w-9 h-9">
            {/* <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"> */}
                <GiHamburgerMenu 
                    className="block  h-6 w-6 text-center"
                    aria-hidden="true"
                />
            </Disclosure.Button>
            <div className="p-6 w-1/2 h-screen bg-gradient-to-b from-orange-500 to-gray-400 z-100 bg-opacity-90 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 sm:hidden">
              <div className="flex flex-col rounded justify-start item-center ">
                <div className="flex rounded-b-3xl items-center justify-center bg-gray-500 bg-opacity-80 p-5 h-48 pb-10">
                    <img className="rounded-full h-32 w-32" src="images/hair-salon.jpg" alt="hair" />
                </div>
                 <div className="flex rounded-t-3xl flex-col bg-opacity-80 justify-items-center bg-gray-500 " >
                     <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center ">Home</h2>
                     <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center" >Servicios</h2>
                     <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center">Nuestro Salon</h2>
                     <button className="bg-indigo-500 h-16 ring-white-800 hover:ring-2 opacity-70 hover:opacity-100  p-3 cursor-pointer px-3 rounded text-center "><a href="#turnos" className="">Turnos Online</a></button>
                 </div>
                 <div className="flex py-8 flex-col items-center justify-center">
                    <h2>Horario</h2>
                    <p>Lunes a sabado</p>
                    <p>8:00 AM  -  20:00 PM</p>
                 </div>
              </div>
            </div>     
         </Disclosure>
        </>
    )
}