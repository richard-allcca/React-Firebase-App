import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// context
import { useContext, useState } from 'react';
import AuthContext from '../context/authContext';
// credenciales
import firebaseApp from '../credenciales';

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)

const initialState = {
  nombre: '',
  edad: '',
  profesion: '',
  email: '',
  password: '',
}

const useForm = ({ registro }) => {

  const [form, setForm] = useState(initialState);

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const correo = form.email;
    const password = form.password;

    if (registro) {
      await createUserWithEmailAndPassword(auth, correo, password);
      console.log('Usuario registrado');
    } else {
      await signInWithEmailAndPassword(auth, correo, password);
      login();
      console.log('Usuario logueado');
    }
  };

  const saveUser = async (e) => {
    e.preventDefault()

    const { nombre, edad, profesion } = form;

    try {
      await addDoc(collection(db, 'usuarios'), { nombre, edad, profesion });
    } catch (error) {
      console.log(error)
    }


    setForm(initialState);
  }


  return {
    form,
    handleChange,
    handleSubmit,
    saveUser,
  }
}

export default useForm