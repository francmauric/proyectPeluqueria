export default function NavBar () {

    return(
        <>
            <div className="flex flex-wrapbg-gray-500 sm:hidden" >
                <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14">Home</h2>
                <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14" >Servicios</h2>
                <h2 className="p-3 cursor-pointer hover:bg-gray-500 rounded h-14">Nuestro Salon</h2>
                <p>dsaf</p>
                <button className="bg-indigo-500 h-16 ring-white-800 hover:ring-2 opacity-70 hover:opacity-100  p-3 cursor-pointer px-3 rounded "><h2 className="">Turnos Online</h2></button>
            </div>
        </>
    )
}