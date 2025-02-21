// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Poppins } from 'next/font/google'

// Type Imports
import type { ChildrenType } from '@core/types'
import 'bootstrap/dist/css/bootstrap.min.css'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

import SessionAuthProvider from '../../context/SessionAuthProvider'

import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'Latin American Veterinary Conference',
  description:
    'El mejor congreso de medicina veterinaria en Latinoamérica',
}

const poppins = Poppins({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin']
})

const RootLayout = async ({ children }: ChildrenType ) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' dir={direction}>
      <body className={`${poppins.className} flex is-full min-bs-full flex-auto flex-col `}>

        <SessionAuthProvider>
          {children}
        </SessionAuthProvider>

      </body>
    </html>
  )
}

export default RootLayout
