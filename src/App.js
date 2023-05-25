import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useState } from "react";

import AuthContext from "./context/authContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

import "./App.css";

const auth = getAuth();

const App = () => {
	const [usuario, setUsuario] = useState("");

	// const [isAuth, setAuth] = useState(false)
	const { isAuthenticated } = useContext(AuthContext);

	onAuthStateChanged(auth, (usuarioFirebase) => {
		if (usuarioFirebase) {
			setUsuario(usuarioFirebase);
			// console.log(usuarioFirebase);
		}
	});

	const content = isAuthenticated ? <Home usuario={usuario} /> : <Login />;

	return <div className="App">{content}</div>;
};

export default App;
