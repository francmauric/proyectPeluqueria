import Modal from "react-modal";
import React, {useState} from "react";

export default function NavBar () {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }


    return(
        <>
            <div className="  text-white text-2xl opacity-70 hover:bg-white hover:opacity-90 justify-around w-full h-20 bg-gray-500  hidden sm:flex" >
                <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14">Home</h2>
                <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14" >Servicios</h2>
                <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14">Nuestro Salon</h2>
                <button onClick={handleOpenModal} className="bg-indigo-500  h-16 ring-white-800 hover:ring-2 opacity-70 hover:opacity-100  p-3 cursor-pointer px-3 rounded ">
                    <h2 className="">Turnos Online</h2></button>
            </div>
            <div className="containerModal">
                
            <Modal className="modal" isOpen={isOpen} onRequestClose={handleCloseModal}>
            <div className="bg-orange-300 flex justify-center">
               <div >
                <img  src="./images/logo-HYW.png" alt="" />
               </div>
               <div className="bg-orange-400 ">
                <h2>Formulario de reserva</h2>
                <form action="" >
                    <input type="text" placeholder="nombre" />
                    <input type="text" placeholder="apellido" />
                    <select name="categoria" placeholder="selecciona categoria" id="">Categoria
                        <option value="">
                        <option value="">Hombres</option>Peinados</option>
                        <option value="">Hombres</option>
                    </select>
                </form>

                <button onClick={handleCloseModal} >Cerrar</button>
                </div>
            </div>  

            </Modal>
            </div>
        </>
    )
}