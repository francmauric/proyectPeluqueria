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
            <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
                <h2>Formulario de reserva</h2>
                <button onClick={handleCloseModal} >Cerrar</button>
            </Modal>
        </>
    )
}