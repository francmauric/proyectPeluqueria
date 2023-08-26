const { log } = console;
import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";


export default async function Hello (req: NextApiRequest, res: NextApiResponse) {
    console.log("EMAIL_USER-hello:", process.env.NEXT_PUBLIC_URL_CLIENT);

if (req.method === "POST") {

    const data = req.body;
    
    log("req payload:", data)

    try{
        console.log("try")
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Nuevo formulario enviado",
            text: JSON.stringify(data, null, 2),

        };

        const clientMailOptions = {
            from: process.env.EMAIL_USER,
            to: data.email,
            subject: "Nuevo formulario enviado",
            text: "Gracias por contactarnos. para poder confirmar su turno y evitar el spam necesitamos que por favor mande un mensaje de confirmacion a este numero: 546323255, Muchas gracias. Atte. How 'U want",

        };

        await transporter.sendMail(clientMailOptions)
        await transporter.sendMail(ownerMailOptions)

        res.status(200).json({ message: "Correo enviado con éxito"})
    }catch (error) {
        
        console.error("Error al enviar el correo: ", error);
        res.status(500).json({ error: "Ocurrio un error al enviar el correo"});
    }
}  else {
    res.status(500).json({ error: "Esta debe ser ua solicitud POST"})
} 


}