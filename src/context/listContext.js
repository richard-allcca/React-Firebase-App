import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { createContext, useState } from 'react';
// firestore
import credentials from '../credenciales';
const db = getFirestore(credentials);

const ListContext = createContext();

const ListProvider = ({ children }) => {

  const [list, setList] = useState([])

  const getList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'usuarios'));
      const docs = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });
      setList(docs);
    } catch (error) {
      console.log(error)
    }
  }


  const data = {
    list,
    setList,
    getList,
  }

  return (
    <ListContext.Provider value={data} >{children}</ListContext.Provider>
  )
}

export { ListProvider };

export default ListContext;