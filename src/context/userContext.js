import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialState = {
  nombre: '',
  edad: '',
  profesion: ''
}

/**
 * 
 * @returns states and functions of users to use in components
 */

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(initialState)

  const [userIdDb, setUserIdDb] = useState('')

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const data = {
    user,
    setUser,
    handleChange,
    userIdDb,
    setUserIdDb,
  }

  return (
    <UserContext.Provider value={data} >{children}</UserContext.Provider>
  )
}

export { UserProvider };

export default UserContext;