const { log } = console;
import nodemailer from "nodemailer";


export default async function Hello (req, res) {

if (req.method === "POST") {

    const data = req.body;
    
    log("req payload:", data)

    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        console.log(transporter.auth.user)

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: ["francocuello10@gmail.com"],
            subject: "Nuevo formulario enviado",
            text: JSON.stringify(data, null, 2),

        };

        await transporter.sendMail(mailOptions)

        res.status(200).json({ message: "Correo enviado con éxito"})
    }catch (error) {
        
        console.error("Error al enviar el correo: ", error);
        res.status(500).json({ error: "Ocurrio un error al enviar el correo"});
    }
}  else {
    res.status(500).json({ error: "Esta debe ser ua solicitud POST"})
} 



/*     res.json({data} );

return res.status(500).json({
    msg: "this needs to be a post request"
})

 */
}