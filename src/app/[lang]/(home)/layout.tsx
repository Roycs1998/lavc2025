import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'



import { Navbar } from '@/components/components-home/Navbar'

import { getDictionary } from '@/utils/getDictionary'

import type { Locale } from '@/configs/i18n'

import BlankLayout from '@/@layouts/BlankLayout'

import Providers from '@components/Providers'

import { FooterTwo } from '@/components/components-home/FooterTwo/FooterTwo'
import SocialWidget from '@/components/social/SocialWidgetProps'

export default async function HomeLayout({ children, params }: Readonly<{ children: React.ReactNode , params: { lang: Locale } }>) {

  const dictionary = await getDictionary(params.lang)
  const direction = 'ltr'

  return (
  <Providers direction={direction}>
    <Navbar dictionary={dictionary} />
    <BlankLayout>
    <ToastContainer
          position='bottom-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          closeButton={false}
          toastStyle={{
            padding: '16px',
            color: 'var(--mui-palette-primary-main)',
            border: '1px solid var(--mui-palette-primary-main)',
            backgroundColor: 'var(--mui-palette-background-paper)'
          }}
          
        />
      {children}

    </BlankLayout>
    <SocialWidget phoneNumber="+51985174876" message="¡Hola! ¿En qué puedo ayudarte?" />
    <FooterTwo dictionary={dictionary} />
  </Providers>
)
}
