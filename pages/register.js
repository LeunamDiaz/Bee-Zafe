import { useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    // Expresión regular para validar formato de correo electrónico
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    // Verificar que el correo electrónico tenga un formato válido
    if (!validateEmail(formData.email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    // Verificar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Verificar que la contraseña tenga al menos 6 caracteres
    if (formData.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: formData.name,
        email: formData.email
      });

      alert("Registro exitoso!");
      router.push('/login');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error en el registro: " + error.message);
    }

    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-amber-500 to-amber-700 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Bee Zafe</h1>
          <p className="text-white text-xl mt-1">Mejora tu apicultura con un panal inteligente</p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex lg:w-1/2 md:w-1/2 h-screen max-h-screen justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Únete a Bee Zafe</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Bienvenido</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input className="pl-2 outline-none border-none" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Usuario" style={{ color: 'black' }} />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input className="pl-2 outline-none border-none" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" style={{ color: 'black' }} />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input className="pl-2 outline-none border-none" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" style={{ color: 'black' }} />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input className="pl-2 outline-none border-none" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirmar contraseña" style={{ color: 'black' }} />
          </div>
          <button type="submit" className="block w-full bg-amber-500 hover:bg-amber-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Registrarse</button>
          <span className="text-sm ml-2 hover:text-amber-500 cursor-pointer text-black"><Link href="/login">¿Ya tienes una cuenta?</Link></span>
        </form>
      </div>
    </div>
  );
}
