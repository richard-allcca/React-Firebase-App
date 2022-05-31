import { createContext, useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [usuario, setUsuario] = useState(null)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  const data = {
    isAuthenticated,
    usuario,
    setUsuario,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider };

export default AuthContext