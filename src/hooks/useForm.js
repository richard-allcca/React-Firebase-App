// context
import { useState } from 'react';


const initialState = {
  email: '',
  password: '',
}

const useForm = ({ registro }) => {

  const [form, setForm] = useState(initialState);//TODO: cambiar nombre a formLogin


  // Control de Inputs login and register
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return {
    form,
    handleChange,
  }
}

export default useForm