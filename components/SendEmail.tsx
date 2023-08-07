/* const nodemailer = require("nodemailer"); */

/* import React from "react";

export default function SendEmail () {



    return(
        <div>
            <h1>sendemail</h1>
        </div>
    )
} */


/* import React from 'react';
const nodemailer = require("nodemailer");

interface SendEmailProps {
  nombre: string;
  apellido: string;
  categoria: string;
  servicio: string;
  fecha: string;
  horario: string;
  telefono: string;
  email: string;
  nota: string;
}

const SendEmail: React.FC<SendEmailProps> = (props) => {
  // Aquí puedes implementar la lógica para enviar el correo electrónico con la información del formulario.
  // Puedes acceder a los datos del formulario utilizando las propiedades pasadas desde el componente NavBar.
  // Por ejemplo: props.nombre, props.apellido, props.categoria, etc.

  return (
    <div>
      
      <p>¡El formulario ha sido enviado con éxito!</p>
    </div>
  );
};

export default SendEmail;
 */

import React from "react";

interface SendEmailProps {
  formData: {
    nombre: string;
    apellido: string;
    categoria: string;
    servicio: string;
    fecha: string;
    horario: string;
    telefono: string;
    email: string;
    nota: string;
  };
}

const SendEmail: React.FC<SendEmailProps> = ({ formData }) => {
  // Aquí puedes utilizar los datos de formData para implementar la lógica de envío de correos electrónicos u otras acciones relacionadas con los datos del formulario.
  // Por ejemplo:
  /* console.log(formData); */

  // Lógica para enviar el correo electrónico
  // ...

  return (
    <div>
      <h1>Enviar correo electrónico o implementar la lógica relacionada con formData aquí</h1>
    </div>
  );
};

export default SendEmail;
