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

export const metadata = {
  title: 'Demo: Materio - NextJS Dashboard Free',
  description:
    'Develop next-level web apps with Materio Dashboard Free - NextJS. Now, updated with lightning-fast routing powered by MUI and App router.'
}

const poppins = Poppins({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin']
})

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' dir={direction}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

export default RootLayout
