import Link from 'next/link';
import Image from 'next/image';
import React from "react";

export default function Footer() {
  return (
    <div id="footer" className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/">
            <Image src="/logoletras.png" width={200} height={50} className="h-12" alt="Logo" />
          </Link>
          <div className="mt-6 lg:max-w-sm">
  <p className="text-sm text-white">
    Contáctenos en Bee Zafe para programar una instalación.
  </p>
  <p className="mt-4 text-sm text-white">
    Utilice la información del footer para ponerse en contacto con nosotros.
  </p>
</div>

        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">Contacto</p>
          <div className="flex">
            <p className="mr-1 text-white">Teléfono:</p>
            <Link href="tel:+52-614-599-07-97" aria-label="Our phone" title="Our phone">
              <div className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 cursor-pointer">+52-614-599-07-97</div>
            </Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <Link href="mailto:info@lorem.mail" aria-label="Our email" title="Our email">
              <div className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 cursor-pointer">zafebee@gmail.com</div>
            </Link>
          </div>

        </div>

      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © Copyright 2024 Bee Zafe Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
