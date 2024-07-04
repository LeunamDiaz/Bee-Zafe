// lib/_middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token');
  const url = req.nextUrl.clone();

  if (!token && url.pathname !== '/register') {
    url.pathname = '/register';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected-path/:path*'], // Ajusta las rutas protegidas según sea necesario
};
