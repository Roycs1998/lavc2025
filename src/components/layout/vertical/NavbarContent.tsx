'use client'

import Link from 'next/link'

import classnames from 'classnames'

// Component Imports
import { useSession } from 'next-auth/react'

import { Icon } from '@iconify/react/dist/iconify.js'

import NavToggle from './NavToggle'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

import CustomButton from '@/components/ui/CustomButton'

const NavbarContent = () => {
  const { data: session, status } = useSession()

  return (
    <div
      className={classnames(
        verticalLayoutClasses.navbarContent,
        'flex items-center justify-between flex-wrap gap-4 is-full px-4 sm:px-6 py-3 bg-white dark:bg-[#0f172a] shadow-[0_4px_10px_rgba(0,0,0,0.1)] sticky top-0 z-50'
      )}
    >
      {/* Left side (toggle and logo) */}
      <div className="flex items-center gap-2 sm:gap-4">
        <NavToggle />
        {/* Puedes agregar un logo aquí si quieres */}
        <Link href='/'>
              <CustomButton
          
              >
                <Icon icon='streamline:return-2-solid' className='mr-2' />
                Regresar al inicio
              </CustomButton>
            </Link>
      </div>

      {/* Right side (mode + user menu) */}
      <div className="flex items-center gap-3 sm:gap-4">
        <ModeDropdown />
        {status === 'authenticated' && <UserDropdown session={session} />}
      </div>
    </div>
  )
}

export default NavbarContent
