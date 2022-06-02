import { getAuth, signOut } from 'firebase/auth';
import React, { useContext } from 'react';
// components
import FormAddUsers from '../components/FormAddUsers';
import ListUsers from '../components/ListUsers';
// firebase
import AuthContext from '../context/authContext';
import appFirestore from '../credenciales';

const auth = getAuth(appFirestore);

const Home = ({ usuario }) => {

  const { correo } = usuario || '';

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
    setIsAuthenticated(false);
  }

  return (
    <div className="container">
      <h2 className='text-center mt-4' >
        Bienvenido 😃 <strong>{correo}</strong>
      </h2>

      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar Sesión
      </button>

      <hr />

      <div className="row">

        <FormAddUsers />

        <ListUsers />

      </div>
    </div>
  );
};

export default Home;
