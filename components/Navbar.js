import Image from "next/image";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useAuth } from '../pages/_app';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useAuth();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      fetch('/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setUser(data.user);
        })
        .catch(error => {
          console.error('Error al obtener la información del usuario:', error);
        });
    }
  }, [setUser]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    const token = Cookies.get('token');
    if (token) {
      try {
        await fetch('/api/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error('Error al cerrar sesión en el servidor:', error);
      }
    }

    Cookies.remove('token');
    setUser(null);
    closeMenu();
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
        </ul>

        <div className="hidden lg:inline-block lg:ml-auto">
          {!user ? (
            <>
              <Link 
                href="/login"
                className="mr-3 py-2 px-6 hover:bg-white text-sm text-white hover:text-black font-bold rounded-md transition duration-200"
              >
                Acceder
              </Link>
              <Link
                href="/register"
                className="py-2 px-6 hover:bg-white text-sm text-white hover:text-black font-bold rounded-md transition duration-200"
              >
                Registrarse
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="py-2 px-6 hover:bg-white text-sm text-white hover:text-black font-bold rounded-md transition duration-200"
            >
              Salir
            </button>
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <div className="navbar-menu fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <nav className="bg-black bg-opacity-75 border-r border-gray-700 rounded-lg w-5/6 max-w-sm py-6 px-6 overflow-y-auto relative">
            <button className="absolute top-4 right-4 navbar-close" onClick={closeMenu}>
              <svg
                className="h-6 w-6 text-white cursor-pointer hover:text-gray-400"
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
            <div className="flex items-center mb-8">
              <Link href="#">
                <Image src="/logoletras.png" width={200} height={50} className="h-12" alt="Logo" />
              </Link>
            </div>
            <ul>
              <li className="mb-1">
                <Link href="/" legacyBehavior>
                  <div onClick={closeMenu} className="block p-4 text-sm font-semibold text-white hover:bg-gray-700 rounded">
                    Inicio
                  </div>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="#servicios" legacyBehavior>
                  <div onClick={closeMenu} className="block p-4 text-sm font-semibold text-white hover:bg-gray-700 rounded">
                    Servicios
                  </div>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/dashboard" legacyBehavior>
                  <div onClick={closeMenu} className="block p-4 text-sm font-semibold text-white hover:bg-gray-700 rounded">
                    Tablero
                  </div>
                </Link>
              </li>
            </ul>
            <div className="mt-auto">
              {!user ? (
                <div className="pt-6">
                  <Link href="/login" legacyBehavior>
                    <div onClick={closeMenu} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-amber-500 hover:bg-amber-600 rounded-xl">
                      Acceder
                    </div>
                  </Link>
                  <Link href="/register" legacyBehavior>
                    <div onClick={closeMenu} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-amber-500 hover:bg-amber-600 rounded-xl">
                      Registrarse
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="pt-6">
                  <button onClick={handleLogout} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-amber-500 hover:bg-amber-600 rounded-xl">
                    Salir
                  </button>
                </div>
              )}
              <p className="my-4 text-xs text-center text-white">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
