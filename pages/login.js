export default function Login({ children, onClick }) {
	return (
	  <div className="h-screen flex flex-col md:flex-row">
		<div className="relative overflow-hidden md:flex md:w-1/2 bg-gradient-to-tr from-amber-500 to-amber-700 justify-around items-center hidden">
		  <div>
			<h1 className="text-white font-bold text-4xl font-sans">Bee Zafe</h1>
			<p className="text-white text-xl mt-1">Mejora tu apicultura con un panal inteligente</p>
		  </div>
		  <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		  <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		  <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		  <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		</div>
		<div className="flex md:w-1/2 justify-center py-10 items-center bg-white h-full">
		  <form className="bg-white w-full max-w-sm">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hola de nuevo!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Bienvenido</p>
  
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
			  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
			  </svg>
			  <input className="pl-2 outline-none border-none" type="text" placeholder="Correo electrónico" style={{ color: 'black' }} />
			</div>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
			  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
				<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
			  </svg>
			  <input className="pl-2 outline-none border-none" type="password" placeholder="Contraseña" style={{ color: 'black' }} />
			</div>
			<button type="submit" className="block w-full bg-amber-500 hover:bg-amber-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Iniciar Sesión</button>
			<span className="text-sm ml-2 text-black hover:text-amber-700 cursor-pointer">¿Olvidaste tu contraseña?</span>
			<br />
			<a className="text-sm ml-2 text-black hover:text-amber-700 cursor-pointer" href="/register">Aun no tengo cuenta</a>
		  </form>
		</div>
	  </div>
	);
  }
  