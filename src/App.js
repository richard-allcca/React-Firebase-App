import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useContext, useState } from 'react';
import './App.css';
import AuthContext from './context/authContext';
import Home from './pages/Home';
import Login from './pages/Login';

const auth = getAuth();

function App() {

  const [usuario, setUsuario] = useState('')

  // const [isAuth, setAuth] = useState(false)
  const { isAuthenticated } = useContext(AuthContext)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
  })

  const content = isAuthenticated ? <Home usuario={usuario} /> : <Login />;

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;

