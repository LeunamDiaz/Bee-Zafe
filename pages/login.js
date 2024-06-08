import { useState } from 'react';
import { useRouter } from 'next/router';
import { db } from './firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const q = query(collection(db, "users"), where("email", "==", formData.email), where("password", "==", formData.password));

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        alert("Login exitoso!");
        router.push('/');
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error checking login: ", error);
    }
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
      <div className="flex flex lg:w-1/2 md:w-1/2 h-screen max-h-screen justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Iniciar Sesión</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Bienvenido de nuevo</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input className="pl-2 outline-none border-none" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" style={{ color: 'black' }} />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input className="pl-2 outline-none border-none" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" style={{ color: 'black' }} />
          </div>
          <button type="submit" className="block w-full bg-amber-500 hover:bg-amber-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Iniciar Sesión</button>
		  <a className="text-sm ml-2 text-black hover:text-amber-700 cursor-pointer" href="/register">No tengo cuenta</a>
        </form>
      </div>
    </div>
  );
}
