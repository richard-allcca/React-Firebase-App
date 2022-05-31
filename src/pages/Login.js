import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Slider from '../components/Slider';


const Login = () => {

  const [registro, setregistro] = useState(false);

  const handleRegister = () => {
    setregistro(!registro);
  };

  return (
    <div className="login">

      <Slider />

      <div className="col-md-4 content-form">
        <div className="mt-5 ms-5 formulario">
          <h1 className="mb-4">{registro ? 'Registrate' : 'Inicia Sesión'}</h1>

          <Formulario registro={registro} />

          <div className="form-group" onClick={handleRegister}>

            <button className="btn btn-secondary mt-4 form-control">
              {registro ? 'Tienes una cuenta? Inicia Sesión' : 'Registrate'}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
