const EnvInfo = () => {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
   
    return (
      <div>
        <h1>Información de Variables de Entorno</h1>
        <p>EMAIL_USER: {emailUser}</p>
        <p>EMAIL_PASS: {emailPass}</p>
      </div>
    );
  };
  
  export default EnvInfo;
  