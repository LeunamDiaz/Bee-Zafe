import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';


export default function Presentation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
<div className="w-full h-screen bg-center bg-cover h-[38rem]" style={{backgroundImage: "url('/lupa.jpeg')"}}>
    <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-[45px]"><span className="text-amber-500">Ve</span> más allá con Bee Zafe</h1>
            <Link href="/register">
            <button className="w-full px-5 py-2 mt-6 text-md font-medium text-white capitalize transition-colors duration-300 transform bg-amber-500 rounded-md lg:w-auto hover:bg-amber-600 focus:outline-none">Comenzar</button>
            </Link>
        </div>
    </div>
</div>
  );
}
