import { createContext, useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [usuario, setUsuario] = useState(null)


  const data = {
    isAuthenticated,
    setIsAuthenticated,
    usuario,
    setUsuario,
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider };

export default AuthContext