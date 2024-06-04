import Image from "next/image";


export default function Button({ children, onClick }) {
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-black">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block z-10"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" fill="#171717" />
          </svg>
          <div className="absolute inset-0 bg-black/40"></div>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/miel.jpg"
            width={500}
            height={300}
            alt="Miel"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-[100px] lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-bold tracking-wider text-amber-500 uppercase rounded-full bg-teal-accent-400">
    Bee Zafe
  </p>
  <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
    Poliniza el futuro
  </h2>
  <p className="pr-5 text-base text-white md:text-lg">
    Revolucionemos la apicultura con colmenas inteligentes equipadas con IoT. Monitoreo en tiempo real del bienestar de las abejas.
  </p>
          </div>
        </div>
      </div>
      <section className="md:p-8 dark:bg-black text-white">
        <div className="container mx-auto  text-center">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none mx-3">
            ¿Por qué una colmena inteligente?
          </h2>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Por todo esto.
          </h2>{" "}
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center py-2">
            <svg
              fill="#ffff"
              width="40px"
              height="40px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="st0"
                d="M455.998,0.004H56.002C25.063,0.011,0.008,25.067,0,56.006v399.989c0.008,30.938,25.063,55.994,56.002,56.002h399.997c30.938-0.008,55.994-25.063,56.002-56.002V56.006C511.993,25.067,486.937,0.011,455.998,0.004z M479.999,455.994
      c-0.007,6.68-2.664,12.579-7.032,16.969c-4.39,4.367-10.289,7.024-16.969,7.032H56.002c-6.68-0.008-12.579-2.664-16.969-7.032
      c-4.367-4.39-7.023-10.289-7.031-16.969V56.006c0.008-6.68,2.664-12.579,7.031-16.977c4.39-4.359,10.289-7.016,16.969-7.023
      h399.997c6.68,0.007,12.579,2.664,16.969,7.023c4.367,4.398,7.024,10.297,7.032,16.977V455.994z"
              />
              <path
                class="st0"
                d="M128.012,119.101l26.391,76.783H270.86l16.352-67.947l9.938,2.031l9.93,2.015l-10.696,63.9h61.212
      l26.392-76.783C346.612,96.577,302.83,83.6,256.008,83.6C209.178,83.6,165.388,96.577,128.012,119.101z"
              />
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Peso</h3>
            <div className="space-y-1 leading-tight text-justify">
              <p>Recibe información sobre</p>
              <p>la producción de miel</p>
              <p>que se ha generado.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1299 3V5M15.1299 5V9.98468M15.1299 5L14.1299 4M15.1299 5L16.1299 4M15.1299 9.98468V10.0153M15.1299 9.98468L13.5 9.04366M15.1299 9.98468L15.1564 10M15.1299 10.0153V15M15.1299 10.0153L15.1564 10M15.1299 10.0153L13.5 10.9562M15.1299 15V17M15.1299 15L14.1299 16M15.1299 15L16.1299 16M15.1564 10L19.3998 12.4499M15.1564 10L19.3997 7.55001M19.3998 12.4499L21.2186 13.5M19.3998 12.4499L19.9121 14.3624M19.3998 12.4499L21.3119 11.9376M21.2183 6.5L19.3997 7.55001M19.3997 7.55001L19.9121 5.63757M19.3997 7.55001L21.3123 8.06241M7 15.9998C6.44772 15.9998 6 16.4475 6 16.9998C6 17.5521 6.44772 17.9998 7 17.9998C7.55228 17.9998 8 17.5521 8 16.9998C8 16.4475 7.55228 15.9998 7 15.9998ZM7 15.9998L7.00707 14M7 16.9998L7.00707 17.0069M11 16.9998C11 19.209 9.20914 20.9998 7 20.9998C4.79086 20.9998 3 19.209 3 16.9998C3 15.9854 3.37764 15.0591 4 14.354L4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6V14.354C10.6224 15.0591 11 15.9854 11 16.9998Z"
                stroke="#ffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Temperatura</h3>
            <div className="space-y-1 leading-tight">
              <p>Ve el estado de la colmena</p>
              <p>mediante la temperatura</p>
              <p>y humedad.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 11V13M6 8V16M9 10V14M12 7V17M15 4V20M18 9V15M21 11V13"
                stroke="#ffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Sonido</h3>
            <div className="space-y-1 leading-tight mb-4">
              <p>Analiza el éstres de las</p>
              <p>abejas por medio de la</p>
              <p>del sonido.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

