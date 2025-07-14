import { redirect } from 'next/navigation'

import Button from '@mui/material/Button'

import { getServerSession } from 'next-auth'

import type { ChildrenType } from '@core/types'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'
import HorizontalLayout from '@layouts/HorizontalLayout'

// Component Imports
import Providers from '@components/Providers'
import Navigation from '@components/layout/vertical/Navigation'

import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'

import ScrollToTop from '@core/components/scroll-to-top'



// Util Imports
import { getMode, getSystemMode } from '@core/utils/serverHelpers'

/* import { auth } from '@/auth.config' */

import { i18n } from '@/configs/i18n'
import type { Locale } from '@/configs/i18n'

import 'react-toastify/dist/ReactToastify.css'
import { authOptions } from '@/libs/authOptions'


const Layout = async ({ children, params }: ChildrenType & { params: Promise<{ lang: Locale }> }) => {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === 'true') {
    redirect('/maintenance')
  }
  
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    redirect('/') // o a tu login
  }
  
  const { lang } = await params;

  const direction = i18n.langDirection[lang]

  const mode = await getMode()
  const systemMode = await getSystemMode()

  return (
    <Providers direction={direction}>
      {/* <TrackUserExit session={session} /> */}
      <LayoutWrapper
         systemMode={systemMode}
        verticalLayout={
          <VerticalLayout
            navigation={
              <Navigation
              mode={mode}
              systemMode={systemMode}
              session={session}
              />
            }
            navbar={<Navbar />}
            footer={<VerticalFooter />}
          >
            
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout >
            {children}
          </HorizontalLayout>
        }
      />
      <ScrollToTop className='mui-fixed'>
        <Button variant='contained' className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'>
          <i className='tabler-arrow-up' />
        </Button>
      </ScrollToTop>
    </Providers>
  )
}

export default Layout
