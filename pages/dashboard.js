import { useState, useEffect } from "react"; // Importing useState and useEffect from react
import { useRouter } from "next/router"; // Importing useRouter from next/router
import Image from "next/image"; // Correcting the import statement for Image
import axios from "axios";

export default function Demo() {
  const [editMode, setEditMode] = useState(false);
  const [colmenasAEliminar, setColmenasAEliminar] = useState([]);
  const [userName, setUserName] = useState(""); // State for storing user name
  const router = useRouter();

  useEffect(() => {
    const verificarAutenticacion = async () => {
      try {
        const response = await axios.get("/api/auth/verify-token");
        if (response.data.authenticated) {
          setUserName(response.data.userName);
        } else {
          router.push("/login");
        }
      } catch (error) {
        router.push("/login");
      }
    };

    verificarAutenticacion(); // Call the authentication function inside useEffect
  }, []); // Empty dependency array ensures this effect runs only once

  const [colmenas, setColmenas] = useState([
    {
      id: 1,
      produccion: "10 Kg",
      temperatura: "23°",
      nivelCO2: "450 ppm",
      deteccionSonidos: "3",
    },
  ]);

  const añadirColmena = () => {
    const nuevaColmena = {
      id: colmenas.length + 1,
      produccion: "Nueva producción",
      temperatura: "Nueva temperatura",
      nivelCO2: "Nuevo nivel de CO2",
      deteccionSonidos: "Nueva detección de sonidos",
    };
    setColmenas([...colmenas, nuevaColmena]);
  };

  const activarEdicion = () => {
    setEditMode(true);
  };

  const guardarCambios = () => {
    setColmenas((prevColmenas) =>
      prevColmenas.filter((colmena) => !colmenasAEliminar.includes(colmena.id))
    );
    setColmenasAEliminar([]);
    setEditMode(false);
  };

  const borrarColmena = (id) => {
    if (colmenasAEliminar.includes(id)) {
      setColmenasAEliminar(colmenasAEliminar.filter((colmenaId) => colmenaId !== id));
    } else {
      setColmenasAEliminar([...colmenasAEliminar, id]);
    }
  };

  const cancelarEdicion = () => {
    setColmenasAEliminar([]);
    setEditMode(false);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <aside className="hidden sm:flex sm:flex-col"></aside>
      <div className="flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <span className="sr-only">Menu</span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-md sm:-ml-2"></div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <div className="inline-flex items-center p-2  focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">Daniel Medina</span>
                <span className="text-sm text-gray-600">Apicultor</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <Image
                  src="/apicultor.webp"
                  alt="user profile photo"
                  className="h-full w-full object-cover"
                  width="1024"
                  height="1024"
                />
              </span>
            </div>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Panel de control</h1>
              <h2 className="text-gray-600 ml-0.5 text-2xl">
                Administra tus colmenas
              </h2>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
              {!editMode && (
                <button
                  className="inline-flex px-5 py-3 text-amber-600 hover:text-amber-700 focus:text-amber-500 hover:bg-amber-100 focus:bg-amber-100 border border-amber-600 rounded-md mb-3"
                  onClick={activarEdicion}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Editar colmenas
                </button>
              )}
              {editMode && (
                <>
                  <button
                    className="inline-flex px-5 py-3 mr-6 text-blue-600 hover:text-blue-700 focus:text-blue-500 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3"
                    onClick={guardarCambios}
                  >
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    Guardar cambios
                  </button>
                  <button
                    className="inline-flex px-5 py-3 text-white bg-red-500 hover:bg-red-600 focus:bg-red-500 rounded-md ml-6 mb-3"
                    onClick={cancelarEdicion}
                  >
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Cancelar
                  </button>
                </>
              )}
              <button
                className="inline-flex px-5 py-3 text-white bg-amber-500 hover:bg-amber-600 focus:bg-amber-500 rounded-md ml-6 mb-3"
                onClick={añadirColmena}
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Añadir colmena
              </button>
            </div>
          </div>
          {colmenas.map((colmena) => (
            <div
              key={colmena.id}
              className={`relative p-5 ${
                colmenasAEliminar.includes(colmena.id) ? "bg-red-300" : "bg-white"
              } shadow rounded-lg mb-3`}
            >
              {editMode && (
                <div className="absolute top-3 right-3">
                  <button
                    className="text-white mt-3 font-bold rounded bg-red-500 hover:bg-red-600 hover:text-white shadow-md py-3 px-6 inline-flex items-center"
                    onClick={() => borrarColmena(colmena.id)}
                  >
                    <span className="mr-2">Borrar</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentcolor"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                      />
                    </svg>
                  </button>
                </div>
              )}
              <div className="text-center px-5 py-3 rounded-md mb-3">
                <h2 className="text-2xl font-bold text-black">
                  Colmena {colmena.id}
                </h2>
              </div>
              <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-amber-500 bg-amber-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-10 w-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.73,5.32V3.41A1.91,1.91,0,0,0,15.82,1.5H8.18A1.91,1.91,0,0,0,6.27,3.41V5.32h0A6.52,6.52,0,0,0,4.36,9.93V20.59A1.91,1.91,0,0,0,6.27,22.5H17.73a1.91,1.91,0,0,0,1.91-1.91V9.93a6.52,6.52,0,0,0-1.91-4.61Z"
                      />
                      <line className="cls-1" x1="6.27" y1="5.32" x2="17.73" y2="5.32" />
                      <polygon
                        className="cls-1"
                        points="12 16.72 12 14.92 10.09 13.54 8.18 14.92 8.18 16.72 10.09 18.1 12 16.72"
                      />
                      <polygon
                        className="cls-1"
                        points="15.82 16.72 15.82 14.92 13.91 13.54 12 14.92 12 16.72 13.91 18.1 15.82 16.72"
                      />
                      <polygon
                        className="cls-1"
                        points="13.91 13.54 13.91 11.74 12 10.37 10.09 11.74 10.09 13.54 12 14.92 13.91 13.54"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">
                      {colmena.produccion}
                    </span>
                    <span className="block text-gray-500">
                      Producción de miel
                    </span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-10 w-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 15.9998C7.44772 15.9998 7 16.4475 7 16.9998C7 17.5521 7.44772 17.9998 8 17.9998C8.55228 17.9998 9 17.5521 9 16.9998C9 16.4475 8.55228 15.9998 8 15.9998ZM8 15.9998L8.00707 12M8 16.9998L8.00707 17.0069M20 5C20 6.10457 19.1046 7 18 7C16.8954 7 16 6.10457 16 5C16 3.89543 16.8954 3 18 3C19.1046 3 20 3.89543 20 5ZM12 16.9998C12 19.209 10.2091 20.9998 8 20.9998C5.79086 20.9998 4 19.209 4 16.9998C4 15.9854 4.37764 15.0591 5 14.354L5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V14.354C11.6224 15.0591 12 15.9854 12 16.9998Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">
                      {colmena.temperatura}
                    </span>
                    <span className="block text-gray-500">Temperatura</span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-12 w-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9.5V12.5M12 15.5H12.01M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block text-2xl font-bold">
                      {colmena.nivelCO2}
                    </span>
                    <span className="block text-gray-500">Nivel de CO2</span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-10 w-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 11V13M6 8V16M9 10V14M12 7V17M15 4V20M18 9V15M21 11V13"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">
                      {colmena.deteccionSonidos}
                    </span>
                    <span className="block text-gray-500">
                      Detección de sonidos
                    </span>
                  </div>
                </div>
              </section>
              {editMode && (
                <div className="mt-6 text-center md:hidden">
                  <button
                    className="text-white font-bold rounded bg-red-500 hover:bg-red-600 hover:text-white shadow-md py-3 px-6 inline-flex items-center"
                    onClick={() => borrarColmena(colmena.id)}
                  >
                    <span className="mr-2">Borrar</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentcolor"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
9