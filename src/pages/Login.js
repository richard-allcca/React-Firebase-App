import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Slider from '../components/Slider';
import AuthContext from '../context/authContext';

const auth = getAuth();

const initialState = {
  email: '',
  password: '',
}

const Login = () => {

  const [registro, setregistro] = useState(false);
  const [form, setForm] = useState(initialState)

  const { setIsAuthenticated } = useContext(AuthContext)


  const handleRegister = () => {
    setregistro(!registro);
  };

  // Control de Inputs login and register
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const correo = form.email;
    const password = form.password;

    if (registro) {
      await createUserWithEmailAndPassword(auth, correo, password);
      console.log('Usuario registrado');
    } else {
      await signInWithEmailAndPassword(auth, correo, password);
      setIsAuthenticated(true);
      console.log('Usuario logueado');
    }
  };

  return (
    <div className="login">

      <Slider />

      <div className="col-md-4 content-form">
        <div className="mt-5 ms-5 formulario">
          <h1 className="mb-4">{registro ? 'Registrate' : 'Inicia Sesión'}</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
                required
                id='email'
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
                required
                id='password'
              />
            </div>

            <button className="btn btn-primary" type="submit">
              {registro ? 'Crear Usuario' : 'Iniciar Sesión'}
            </button>
          </form>

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
