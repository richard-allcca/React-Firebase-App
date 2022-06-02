import { deleteDoc, doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { memo, useContext, useEffect, useState } from 'react';
import ListContext from '../context/listContext';
import UserContext from '../context/userContext';
import credentials from '../credenciales';

const db = getFirestore(credentials);


const ListUsers = () => {

  const [userIdDb, setUserIdDb] = useState('')

  // constexts
  const { list, getList } = useContext(ListContext)
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    if (userIdDb !== '') {
      console.log('boton de actualizar');
      getOneUser(userIdDb)
    }
  }, [userIdDb])


  const getOneUser = async (id) => {
    try {
      const docRef = doc(db, `usuarios`, id)
      const docSnap = await getDoc(docRef)
      console.log(docSnap.data())
      // ? pintar los datos en formuario para actualizar
      setUser(docSnap.data())

    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, `usuarios`, id))
    getList()
  }


  return (
    <div className="col-md-8">
      <h3 className="text-center mb-5">Lista de Usuarios</h3>

      <div className="container card">
        <div className="card-body">

          {list.map(item => {
            return (<div key={item.id} className='mb-2 bg-light shadow-sm text-center'>
              <h5>Nombre: {item.nombre}</h5>
              <p>Edad: {item.edad}</p>
              <p>Profesión: {item.profesion}</p>

              <button className='btn btn-danger' onClick={() => deleteUser(item.id)} >
                Eliminar
              </button>
              <button className='btn btn-info m-1' onClick={() => setUserIdDb(item.id)} >
                Actualizar
              </button>

            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(ListUsers)