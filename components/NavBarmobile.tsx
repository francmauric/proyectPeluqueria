import React, {useState} from "react";
import { Disclosure } from "@headlessui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import Modal from "react-modal";

import axios from 'axios';

export default function NavBar () {

    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState<string>("")
    const [service, setService] = useState<string>("")
    const [serviceOptions, setServiceOptions] = useState<string[]>([])
    const [selectedDate, setSelectedDate] = useState("")
    /* segunda ventana */
    const [isNextModalOpen, setIsNextModalOpen] = useState(false)
    const [selectedTime,setSelectedTime] = useState("")
    /* tercera ventana */
    const [isNextModalOpen3, setIsNextModalOpen3] = useState(false)

        /* form */
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [numberPhone, setNumberPhone] = useState("")
    const [email, setEmail] = useState("")
    const [note, setNote] = useState("")

    

    const [formData, setFormData] = useState({
        nombre: "",
        apellido:"",
        categoria: "",
        servicio: "",
        fecha: "",
        horario: "",
        telefono: "",
        email: "",
        nota: "",
    })


    const handleDateChange = (e:any) => {
        setSelectedDate(e.target.value)
        
    }
    console.log(selectedDate)
    const handleCategoryChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory: string = e.target.value;
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
        

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        setService(e.target.value);
    }


    /* ventana emergente modal 1 */
    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    /* ventana emergente modal 2 */

    const handleNext = () => {
        
        if(selectedDate) {
            console.log("fecha seleccionada")
            handleCloseModal()
            openNextModal()
        } else {
            alert("por favor, selecciona una fecha")
        }
    }

 
    const openNextModal = () => {
        setIsNextModalOpen(true);
    };
    const closeNextModal= () => {
        setIsNextModalOpen(false)
    }

    /* ventana emergente modal 3 */
    const handleNext3 = () => {
        if(selectedTime) {
            console.log("horario seleccionado")
            closeNextModal()
            openNextModal3()
        }else{
            alert("por favor, selecciona un horario")
        }

    }
    const openNextModal3 = () =>{
        setIsNextModalOpen3(true);
    }
    const closeNextModal3 = () =>{
        setIsNextModalOpen3(false)
    }
    /* const handlePrevius = () =>{
        setIsNe
    } */

    /* horario */
    const horario = ["09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45","17:00","17:15","17:30","17:45"]

    const handleSelectTime = (time: React.SetStateAction<string>) => {
        setSelectedTime(time)
    }
    /* confirmar */
    /* const handleConfirm = () => {
        is (selectedTime) {
            console.log("horario seleccionado: ${selectedTime}")

            closeNextModal();
        }else {
            alert("por favor, selecciona un horario")
        }
    } */

    const handleSubmitForm = async () => {
        
        // Aquí puedes implementar la lógica para enviar el formulario
        // Puedes usar la información guardada en los estados del componente
        // para enviarla a través de las props a SendEmail
        // Por ejemplo:
    
        const data1 = {
          nombre: nombre,
          apellido: apellido,
          categoria: category,
          servicio: service,
          fecha: selectedDate,
          horario: selectedTime,
          telefono: numberPhone,
          email: email,
          nota: note,
        };

        try {
            const { data } = await axios({
                url: "/api/hello",
                method: "POST",
                data: data1
            }); 
            console.log("response back:", data)
        } catch (error) {
            console.log("error:", error)
        }
        
        

        setFormData(data1)
        // Llamar a tu función o servicio de envío de correo pasando formData como parámetro.
        // Aquí puedes usar una API, una función de servidor o cualquier otro método para enviar el correo.
      };





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
                    <img className="rounded-full h-28 w-28" src="images/logo-HYW.png" alt="hair" />
                </div>
                 <div className="flex rounded-t-3xl flex-col bg-opacity-80 justify-items-center bg-gray-500 " >
                     <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center ">Home</h2>
                     <a href="#service" className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center" >Servicios</a>
                     <a href="#salon" className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14 text-center">Nuestro Salon</a>
                     <button className="bg-indigo-500 h-16 ring-white-800 hover:ring-2 opacity-70 hover:opacity-100  p-3 cursor-pointer px-3 rounded text-center "><h2 onClick={handleOpenModal} className="">Turnos Online</h2></button>
                 </div>

                

                 <div className="flex py-8 pt-16 text-white flex-col items-center justify-center">
                    <h2>Horario</h2>
                    <p>Lunes a sabado</p>
                    <p>8:00 AM  -  20:00 PM</p>
                 </div>
              </div>
            </div>     
         </Disclosure>
         <Modal className="modal" isOpen={isOpen} onRequestClose={handleCloseModal}>
            <div className="bg-gradient-to-b from-orange-500 to-gray-400 flex justify-center flex-col">
               <div className="flex justify-center">
                <img className="rounded-full p-4 flex self-center w-[50%]" src="./images/logo-HYW.png" alt="hair" />
               </div>
               <div className="bg-gradient-to-b from-orange-500 to-gray-400 ">
                <h2 className="text-2xl">Formulario de reserva</h2>
                <form action="" className="flex flex-col">
                    <input type="text" placeholder="nombre" value={nombre} onChange={({ target }) => setNombre(target?.value)} className="rounded-lg py-1 m-2 "/>
                    <input type="text" placeholder="apellido" value={apellido} onChange={({ target }) => setApellido(target?.value)} className="rounded-lg py-1 m-2 "/>
                    <label htmlFor="categoria" >Categoria</label>
                    <select name="" className="rounded-lg py-1 m-2 " id="categoria" value={category} onChange={handleCategoryChange} > 
                        <option value="" >Selecciona categoria</option>
                        <option value="mechas">Mechas</option>
                        <option value="hombres">Hombres</option>
                        <option value="color">Color</option>
                        <option value="cortes">Cortes</option>
                        <option value="peinados">Peinados</option>
                        <option value="alisados">Alisados</option>
                        <option value="tratamientos">Tratamientos</option>
                    </select>
                    <label htmlFor="">Servicios</label>
                    <select name="" id="service" className="rounded-lg py-1 m-2 w-80" defaultValue={service} onChange={handleServiceChange} disabled={!category}>
                        <option value="" >Seleccion Servicio</option>
                        {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="calendario" >Fecha</label>
                    <input min={24} type="date" className="rounded-lg py-1 m-2 w-36" value={selectedDate} onChange={handleDateChange} />
                </form>
                
                <button onClick={handleNext} className="relative inline-block rounded overflow-hidden transition p-2 text-xl hover:text-orange-700 font-semibold" >
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all"></span>
                    Siguiente</button>            
                <button className="relative inline-block rounded overflow-hidden transition p-2 text-xl hover:text-orange-700 font-semibold" onClick={handleCloseModal}>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all"></span>
                    Cerrar</button>
                </div>
            </div>  

            </Modal>
            <Modal className="modal" isOpen={isNextModalOpen} onRequestClose={closeNextModal} >
            <div className=" bg-gradient-to-b from-orange-500 to-gray-400 flex justify-center flex-col">
               <div className="flex justify-center">
                <img className="rounded-full p-4 flex self-center w-[30%]" src="./images/logo-HYW.png" alt="hair" />
               </div>
               <div className=" bg-gradient-to-b from-orange-500 to-gray-400 w-[100%] ">
                            <h2 className="text-2xl text-center">Seleccionar Horario</h2>
                            <div className="flex flex-wrap justify-center">
                            {horario.map((time) => (
                                <label key={time} className="inline-flex items-center space-x-2 bg-gray-500 hover:bg-gray-800 text-white m-2 font-bold py-1 px-2 rounded">
                                <input type="checkbox" 
                                    value={time}
                                    onChange={() => handleSelectTime(time)}
                                    onClick={handleNext3}
                                    className="form-checkbox hidden h-5 w-5 text-blue-600"
                                />
                                {time}
                                </label>
                            ))}
                            </div>
                            <button onClick={closeNextModal} className="relative inline-block rounded overflow-hidden transition p-2 text-xl hover:text-orange-700 font-semibold">Cerrar</button>
                </div>
            </div> 
            </Modal>
            <Modal className="modal" isOpen={isNextModalOpen3} onRequestClose={closeNextModal3}>
            <div className="bg-gradient-to-b from-orange-500 to-gray-400 flex justify-center flex-col">
               <div className="flex justify-center">
                <img className="rounded-full p-4 flex self-center w-[50%]" src="./images/logo-HYW.png" alt="hair" />
               </div>
               <div className="bg-gradient-to-b from-orange-500 to-gray-400 h-80  ">
                <form action="" className="flex flex-col">
                    <label htmlFor="" className="text-lg">Numero de telefono</label>
                    <input type="number" value={numberPhone} onChange={({ target }) => setNumberPhone(target?.value)} className="rounded-lg py-1 m-2 w-80"/>
                    <label htmlFor="" className="text-lg">Email</label>
                    <input type="email" value={email} onChange={({ target }) => setEmail(target?.value)} className="rounded-lg py-1 m-2 w-80"/>
                    <label htmlFor="" className="text-lg">Nota</label>
                    <input type="text" value={note} onChange={({ target }) => setNote(target?.value)} className="rounded-lg py-1 m-2 w-80" />
                    <input  onClick={handleSubmitForm}  type="submit" className="relative inline-block rounded overflow-hidden transition p-2 text-xl hover:text-orange-700 font-semibold"/>
                </form>
                         
               <button onClick={handleNext} className="relative inline-block rounded overflow-hidden transition p-2 text-xl hover:text-orange-700 font-semibold" >Siguiente</button>            
                <button onClick={closeNextModal3} className="relative inline-block rounded overflow-hidden transition p-2 text-xl hover:text-orange-700 font-semibold">Cerrar</button>
                </div>
            </div>

            </Modal>
            
        </>
    )
}