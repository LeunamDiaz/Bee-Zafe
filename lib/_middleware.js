import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(request) {
  const token = request.cookies.get('token');
  if (!token) {
    return NextResponse.redirect('/login');
  }

  // Validar el token en el servidor
  // Aquí puedes añadir lógica para validar el token en el servidor si es necesario

  return NextResponse.next();
}
