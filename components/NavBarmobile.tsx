import React from "react"
import { Disclosure } from "@headlessui/react"
import { GiHamburgerMenu } from "react-icons/gi"

export default function NavBar () {

    return(
        <>
         <Disclosure as='nav'>
            <Disclosure.Button className="bg-gray-400 absolute top-4 right-4 flex items-center peer justify-center rounded-md ps-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group w-9 h-9">
            {/* <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"> */}
                <GiHamburgerMenu 
                    className="block sm:hidden h-6 w-6"
                    aria-hidden="true"
                />
            </Disclosure.Button>
            <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
              <div className="flex flex-col justify-start item-center">

                 <div className="flex flex-wrapbg-gray-500 hidden" >
                     <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14">Home</h2>
                     <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14" >Servicios</h2>
                     <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14">Nuestro Salon</h2>
                     <button className="bg-indigo-500 h-16 ring-white-800 hover:ring-2 opacity-70 hover:opacity-100  p-3 cursor-pointer px-3 rounded "><h2 className="">Turnos Online</h2></button>
                 </div>
              </div>
            </div>     
         </Disclosure>
        </>
    )
}