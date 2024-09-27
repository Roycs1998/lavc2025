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
import { Navbar } from '@/components/components-home/Navbar'
import { FooterTwo } from '@/components/components-home/FooterTwo'
import { getDictionary } from '@/utils/getDictionary'
import type { Locale } from '@/configs/i18n'

export const metadata = {
  title: 'Demo: Materio - NextJS Dashboard Free',
  description:
    'Develop next-level web apps with Materio Dashboard Free - NextJS. Now, updated with lightning-fast routing powered by MUI and App router.'
}

const poppins = Poppins({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin']
})

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

const RootLayout = async ({ children, params }: ChildrenType & { params: { lang: Locale } })  => {
  // Vars
  const direction = 'ltr'
  const dictionary = await getDictionary(params.lang)

  return (
    <html id='__next' dir={direction}>
      <body className={`${poppins.className} flex is-full min-bs-full flex-auto flex-col`}>
        <Navbar dictionary={dictionary}/>
        {children}
        <FooterTwo />
      </body>
    </html>
  )
}

export default RootLayout
