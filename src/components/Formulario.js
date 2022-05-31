import React from 'react';
import useForm from '../hooks/useForm';

const Formulario = ({ registro }) => {

  const { form, handleChange, handleSubmit } = useForm({ registro });


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