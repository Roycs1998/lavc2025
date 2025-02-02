// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Layout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
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
          progressStyle={{ backgroundColor: 'var(--mui-palette-primary-main)' }}
        />
        {children}</BlankLayout>
    </Providers>
  )
}

export default Layout
