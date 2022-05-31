import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/authContext';
import { default as app, default as appFirestore } from '../credenciales';
import useForm from '../hooks/useForm';

const auth = getAuth(appFirestore);
const db = getFirestore(app)

const Home = ({ correoUsuario }) => {

  const { email } = correoUsuario || '';//fixme

  const { logout } = useContext(AuthContext)

  const { form, saveUser, handleChange } = useForm(false)
  const { nombre, edad, profesion } = form;

  useEffect(() => {

    if (!email) logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);


  return (
    <div className="container">
      <h2>
        Bienvenido <strong>{email}</strong>
      </h2>

      <button className="btn btn-danger" onClick={() => signOut(auth)}>
        Cerrar Sesión
      </button>

      <hr />

      <div className="row">
        <div className="col-md-4">
          <h3>Ingresar Usuarios</h3>
          <form onSubmit={saveUser} >
            <div className="card card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre de Usuario"
                  value={nombre}
                  onChange={handleChange}
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  name="edad"
                  placeholder="edad de Usuario"
                  value={edad}
                  onChange={handleChange}
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  name="profesion"
                  placeholder="Profesión de Usuario"
                  value={profesion}
                  onChange={handleChange}
                  className="form-control mb-3"
                />
              </div>
              <button className="btn btn-primary">Agregar</button>
            </div>
          </form>
        </div>

        <div className="col-md-8">
          <h3 className="text-center mb-5">Lista de Usuarios</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
