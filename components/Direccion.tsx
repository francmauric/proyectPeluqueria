export default function Direccion () {

    return (
        <div className="bg-[#5D4037]  flex flex-col justify-center content-center">
            <h1 className="flex text-4xl p-10 text-[#FFFFFF] justify-center">Direccion para poder llegar a nuestra sucursal</h1>
            <div className=" h-72 flex justify-center ">
                
                    <iframe className="flex self-center h-60 max-w-screen-lg rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93111.86614239341!2d10.60947345!3d43.1728594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d6029ab40e0a6f%3A0x4082c90e3e59f30!2s57022%20Castagneto%20Carducci%2C%20Livorno!5e0!3m2!1ses-419!2sit!4v1690444323027!5m2!1ses-419!2sit" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     
            </div>

        </div>
    )
}