import Modal from "react-modal";
import React, {useState} from "react";

export default function NavBar () {
    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState("")
    const [service, setService] = useState("")
    const [serviceOptions, setServiceOptions] = useState([])
    const [selectedDate, setSelectedDate] = useState("")


    const handleDateChange = (e) => {
        setSelectedDate(e.target.value)
        
    }
    console.log(selectedDate)
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory)
        
        if(selectedCategory === "hombres") {
            setServiceOptions(["cortes masculino","barba diseño","barba retoque", "color", "cejas"]);
        } else if (selectedCategory === "color") {
            setServiceOptions(["Color Experience Schwarzkopf", "Baño de Color Vibrance", "Decoloracion en raiz", "Color TBH"]);
        } else if(selectedCategory === "cortes") {
            setServiceOptions(["Cortes sin Peinar", "Cortes con peinados", "Cambio de look"])
        } else if(selectedCategory === "peinados") {
            setServiceOptions(["Peinado Cabello Corto", "Peinado Cabello Medio", "Peinado Cabello Largo"])
        } else if(selectedCategory === "mechas") {
            setServiceOptions(["Balayage", "Baby Lights", "Melting"])
        } else if(selectedCategory === "alisados") {
            setServiceOptions(["Tratamiento Keratina Onlys", "Alisado Organico"])
        } else if(selectedCategory === "tratamientos") {
            setServiceOptions(["Tratamiento de Brillo", "Stop Descamacion", "Tratamiento Anticaida"])
        } else {
            setServiceOptions([]);
        }
        
        setService("");
    }
        

    const handleServiceChange = (e) => {
        setService(e.target.value);
    }


    /* ventana emergente modal */
    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleNext = () => {
        
        if(selectedDate) {
            console.log("fecha seleccionada")
            handleCloseModal()
            openNextModal()
        } else {
            alert("por favor, selecciona una fecha")
        }
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
            <div className="bg-orange-300 flex justify-center w-[60%]">
               <div className="flex ">
                <img className="rounded-full p-4 flex self-center " src="./images/logo-HYW.png" alt="" />
               </div>
               <div className="bg-orange-400 h-80 w-[100%] ">
                <h2>Formulario de reserva</h2>
                <form action="" className="flex flex-col">
                    <input type="text" placeholder="nombre" />
                    <input type="text" placeholder="apellido" />
                    <label htmlFor="categoria" >Categoria</label>
                    <select name=""  id="categoria" value={category} onChange={handleCategoryChange} > 
                        <option value="" selected>Selecciona categoria</option>
                        <option value="mechas">Mechas</option>
                        <option value="hombres">Hombres</option>
                        <option value="color">Color</option>
                        <option value="cortes">Cortes</option>
                        <option value="peinados">Peinados</option>
                        <option value="alisados">Alisados</option>
                        <option value="tratamientos">Tratamientos</option>
                    </select>
                    <label htmlFor="">Servicios</label>
                    <select name="" id="service" value={service} onChange={handleServiceChange} disabled={!category}>
                        <option value="" selected>Seleccion Servicio</option>
                        {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="calendario">Fecha</label>
                    <input type="date" value={selectedDate} onChange={handleDateChange} />
                </form>
                
                <button onClick={handleNext} >Siguiente</button>            
                <button onClick={handleCloseModal}>Cerrar</button>
                </div>
            </div>  

            </Modal>
            </div>
        </>
    )
}