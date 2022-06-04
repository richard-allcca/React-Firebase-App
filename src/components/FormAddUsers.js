import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import React, { useContext } from 'react';
import ListContext from '../context/listContext';
import UserContext from '../context/userContext';
// firestore
import appFirestore from '../credenciales';

const db = getFirestore(appFirestore)

const initialState = {
  nombre: '',
  edad: '',
  profesion: '',
}

const FormAddUsers = () => {

  // context
  const { getList } = useContext(ListContext)
  const { user, setUser, userIdDb, setUserIdDb, handleChange } = useContext(UserContext)

  const { nombre, edad, profesion } = user;

  const saveUser = async (e) => {
    e.preventDefault()

    if (userIdDb === '') {

      try {
        await addDoc(collection(db, 'usuarios'), { ...user });

      } catch (error) {
        console.log(error)
      }

    } else {

      try {
        await setDoc(doc(db, 'usuarios', userIdDb), { ...user });
        setUserIdDb('')

      } catch (error) {
        console.log(error)
      }
    }

    setUser(initialState);
    getList()
  }


  return (
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

          <button className="btn btn-primary">
            {userIdDb ? 'Actualizar' : 'Agregar'}
          </button>
        </div>
      </form>

    </div>
  )
}

export default FormAddUsers