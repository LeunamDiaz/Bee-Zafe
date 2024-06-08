import Image from "next/image";
import Link from 'next/link';
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="absolute inset-x-0 top-0 z-40 px-4 py-4 flex justify-between items-center bg-transparent" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Link href="/">
          <Image src="/logoletras.png" width={200} height={50} className="h-12" alt="Logo" />
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="navbar-burger flex items-center text-white p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link href="/" legacyBehavior>
              <div className="text-sm text-white font-bold">Inicio</div>
            </Link>
          </li>
          <li className="text-gray-300"></li>
          <li>
            <Link href="#servicios" legacyBehavior>
              <div className="hidden lg:inline-block lg:ml-auto py-2 px-6 hover:bg-white text-sm text-white hover:bg-white/5 backdrop-blur-sm transition duration-200">Servicios</div>
            </Link>
          </li>
          <li className="text-gray-300"></li>
          <li>
            <Link href="/dashboard" legacyBehavior>
              <div className="hidden lg:inline-block lg:ml-auto py-2 px-6 hover:bg-white text-sm text-white hover:bg-white/5 backdrop-blur-sm transition duration-200">Tablero</div>
            </Link>
          </li>
          <li className="text-gray-300"></li>
{/*           <li>
            <Link href="#contacto" legacyBehavior>
              <div className="hidden lg:inline-block lg:ml-auto py-2 px-6 hover:bg-white text-sm text-white hover:bg-white/5 backdrop-blur-sm transition duration-200">Contacto</div>
            </Link>
          </li> */}
        </ul>

        <Link 
          href="/login"
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 hover:bg-white text-sm text-white hover:text-black font-bold rounded-md transition duration-200"
        >
          Acceder
        </Link>
        <Link
          href="/register"
          className="hidden lg:inline-block py-2 px-6 hover:bg-white text-sm text-white hover:text-black font-bold rounded-md transition duration-200"
        >
          Registrarse
        </Link>
      </nav>
      {isMenuOpen && (
        <div className="navbar-menu fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <nav className="bg-white border-r w-5/6 max-w-sm py-6 px-6 overflow-y-auto">
            <div className="flex items-center mb-8">
              <Link href="#">
                <Image src="/logoletras.png" width={200} height={50} className="h-12" alt="Logo" />
              </Link>
              <button className="navbar-close" onClick={closeMenu}>
                <svg
                  className="h-6 w-6 text-black cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul>
              <li className="mb-1">
                <Link href="/" legacyBehavior>
                  <div onClick={closeMenu} className="block p-4 text-sm font-semibold text-black hover:bg-gray-200 rounded">
                    Inicio
                  </div>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="#servicios" legacyBehavior>
                  <div onClick={closeMenu} className="block p-4 text-sm font-semibold text-black hover:bg-gray-200 rounded">
                    Servicios
                  </div>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/dashboard" legacyBehavior>
                  <div onClick={closeMenu} className="block p-4 text-sm font-semibold text-black hover:bg-gray-200 rounded">
                    Tablero
                  </div>
                </Link>
              </li>

            </ul>
            <div className="mt-auto">
              <div className="pt-6">
                <Link href="/login" legacyBehavior>
                  <div onClick={closeMenu} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl">
                    Acceder
                  </div>
                </Link>
                <Link href="/register" legacyBehavior>
                  <div onClick={closeMenu} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl">
                    Registrarse
                  </div>
                </Link>
              </div>
              <p className="my-4 text-xs text-center text-black">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
