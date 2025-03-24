
import { NextResponse } from 'next/server'

export {default} from "next-auth/middleware"

export function middleware(req: any) {
  const url = req.nextUrl.clone()
  const pathSegments = url.pathname.split('/').filter(Boolean)

  const isApiRoute = url.pathname.startsWith('/api/')
  const isStaticResource = /\.(css|js|jpg|jpeg|png|gif|svg|ico|woff|woff2|json|map)$/.test(url.pathname)

  if (isApiRoute || isStaticResource) {
    return NextResponse.next()
  }

  // Obtener el idioma desde la cookie, o usar "en" por defecto
  const cookieLanguage = req.cookies.get('language') ? req.cookies.get('language').value : 'en'

  // Modo mantenimiento: si la variable está activa y la URL no contiene ya "under-maintenance"
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
  
  if (maintenanceMode && !url.pathname.includes('/under-maintenance')) {
    // Se reescribe la URL conservando el prefijo del idioma
    url.pathname = `/${cookieLanguage}/under-maintenance`
    
    return NextResponse.rewrite(url)
  }

  // Gestión de idiomas

  const supportedLanguages = ['en', 'es', 'pt']

  if (pathSegments[0] !== cookieLanguage) {
    if (supportedLanguages.includes(pathSegments[0])) {
      pathSegments[0] = cookieLanguage
    } else {
      pathSegments.unshift(cookieLanguage)
    }

    url.pathname = '/' + pathSegments.join('/')

    const response = NextResponse.redirect(url)

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*'
}
