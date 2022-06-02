import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import useForm from '../hooks/useForm';

const auth = getAuth();

const Formulario = ({ registro, setLogin }) => {

  const { form, handleChange } = useForm({ registro });



  const handleSubmit = async (e) => {
    e.preventDefault();
    const correo = form.email;
    const password = form.password;

    if (registro) {
      await createUserWithEmailAndPassword(auth, correo, password);
      console.log('Usuario registrado');
    } else {
      await signInWithEmailAndPassword(auth, correo, password);
      setLogin(true);
      console.log('Usuario logueado');
    }
  };


  return (
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
  )
}

export default Formulario