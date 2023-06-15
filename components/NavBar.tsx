export default function NavBar () {

    return(
        <>
            <div className="flex flex-wrap text-white text-2xl opacity-70 hover:opacity-100 justify-between w-full h-30 bg-gray-500" >
                <h2 className="p-3 cursor-pointer">Home</h2>
                <h2 className="p-3 cursor-pointer" >Servicios</h2>
                <h2 className="p-3 cursor-pointer">About</h2>
                <h2 className="p-3 cursor-pointer  hover:shadow-indigo-500">Turnos Online</h2>
            </div>
        </>
    )
}