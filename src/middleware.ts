import { NextResponse } from 'next/server'

export function middleware(req: any) {
  const url = req.nextUrl.clone()
  const pathSegments = url.pathname.split('/').filter(Boolean)

  const isApiRoute = url.pathname.startsWith('/api/')
  const isStaticResource = /\.(css|js|jpg|jpeg|png|gif|svg|ico|woff|woff2|json|map)$/.test(url.pathname)

  if (isApiRoute || isStaticResource) {
    return NextResponse.next()
  }

  const supportedLanguages = ['en', 'es', 'pt']

  const cookieLanguage = req.cookies.get('language') ? req.cookies.get('language').value : 'en'

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
