'use client'
import * as React from 'react'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import Image from 'next/image'

import { IoMdMenu } from 'react-icons/io'

import PersonIcon from '@mui/icons-material/Person'

import Box from '@mui/material/Box'

import Button from '@mui/material/Button'

import { List, ListItem } from '@mui/material'

import { useSession } from 'next-auth/react'

import styles from './Navbar.module.css'

import LanguageDropdown from './LanguageDropdown'

import type { getDictionary } from '@/utils/getDictionary'

import { NavbarTooltip } from './NavbarTooltip'

import UserDropdown from '@/components/layout/shared/UserDropdown'

import Sidebar from '@/components/side-bar/SideBar'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

type MenuItem = {
  text: any
  link?: any
  image?: any
  subMenu?: any[]
}

export const Navbar = ({ dictionary }: Props) => {
  const [scrolled, setScrolled] = useState(false)
  const { data: session, status } = useSession()
  const [openSideBar, setOpenSideBar] = useState(false)

  const getMenuItems = (dictionary: any): MenuItem[]  => [
    {
      text: dictionary?.nav_main?.navbar.contact_us,
      subMenu: [
        { text: dictionary?.nav_main?.navbar.about_LAVC, link: '/nosotros' },
        { text: dictionary?.nav_main?.navbar.contact, link: '/soporte' }
      ],
      image: 'https://tse2.mm.bing.net/th?id=OIP.33VqJRpi2PsJuc9mcRwcCQHaE9&pid=Api&P=0&h=180'
    },
    {
      text: dictionary?.nav_main?.navbar.lavc_2026,
      subMenu: [
        { text: dictionary?.nav_main?.navbar.event_and_workshops, link: '/eventos-talleres' },
        { text: dictionary?.nav_main?.navbar.speakers, link: '/ponentes' },
        { text: dictionary?.nav_main?.navbar.program, link: '/programa' },
        {
          text: dictionary?.nav_main?.navbar.stand_out,
          subMenu: [
            { text: dictionary?.nav_main?.navbar.ambassador, link: '/embajador' },
            { text: dictionary?.nav_main?.navbar.scholarship, link: '/brippie' }
          ]
        },
      ],
      image: 'https://4.bp.blogspot.com/-atz5WgBqCys/VxasgrWNCEI/AAAAAAAB9Ao/ClzFWC9eEEcOWygTP4l3m0rEXVpRTX1ggCKgB/s1600/Perritos-cachorros-162.jpg'
    },
    {
      text: dictionary?.nav_main?.navbar.lavc_gallery,
      subMenu: [
        { text: dictionary?.nav_main?.navbar.historic_photos, link: '/gallery' },
        { text: dictionary?.nav_main?.navbar.educational_material, link: '/libreria' },
      ],
      image: 'https://4.bp.blogspot.com/-atz5WgBqCys/VxasgrWNCEI/AAAAAAAB9Ao/ClzFWC9eEEcOWygTP4l3m0rEXVpRTX1ggCKgB/s1600/Perritos-cachorros-162.jpg'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (status === 'loading') {
      console.log('Cargando sesión...')
    } else if (status === 'authenticated') {
      console.log('Sesión autenticada:', session)
    } else if (status === 'unauthenticated') {
      console.log('No hay sesión activa')
    }
  }, [session, status])

  // Obtén el array de menú utilizando el dictionary
  const menuItems = getMenuItems(dictionary)

  return (
    <>
      <nav
        className={` ${styles.navbar} ${scrolled ? styles.scrolled : ''} top-0 w-full z-50 transition-colors duration-300 ease-in-out h-auto min-h-[70px] py-3`}
        style={{
          backgroundColor:'#ffffff',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className={`max-w-7xl w-full mx-auto px-6 flex justify-between items-center z-50`}>
          <div className='flex gap-1'>
            <Link href='/'>
              <Image src='/images/logolavc/logo.png' width={120} height={43} alt='LAVC Logo' />
            </Link>
          </div>


          <div className='hidden md:flex gap-1'>
            <List
              className={styles.link}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: 0,
                marginLeft: '15%',
                color: 'white'
              }}
            >
              {menuItems.map((item, index) => (
                <ListItem key={index} className={styles.link}>
                  {item.subMenu ? (
                    <NavbarTooltip
                      start={item.text}
                      links={item.subMenu}
                      image={item.image}
                    />
                  ) : (
                    <Link
                      href={item.link ? item.link : '#'}
                      className="
                          whitespace-nowrap 
                          overflow-hidden 
                          text-ellipsis 
                          inline-block 
                          text-inherit 
                          no-underline 
                          cursor-pointer
                          "
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#f1c82e' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '' }}
                    >
                      {item.text}
                    </Link>
                  )}
                </ListItem>
              ))}
            </List>
          </div>
          <div className='flex gap-2 items-center z-50 text-white'>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <LanguageDropdown />
              {status === 'authenticated' ? (
                <UserDropdown session={session} />
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      className="bg-[#3a3480] hover:bg-[#3a3480]/80 text-[#ffffff] font-semibold rounded-l-md sm:rounded-l-md sm:rounded-r-none rounded-md"
                      startIcon={<PersonIcon className='hidden sm:block' />}
                    >
                      {dictionary.nav_main.navbar.login}
                    </Button>
                  </Link>

                  <Link href="/register">
                    <Button
                      className="hidden sm:block backdrop-blur-sm bg-[#3a3480]/20 hover:bg-[#f1c82e]/40 text-[#3a3480] font-semibold rounded-r-md sm:rounded-r-md sm:rounded-l-none"
                    >
                      {dictionary.nav_main.navbar.register}
                    </Button>
                  </Link>
                </>
              )}

              {/* Menu móvil con fondo sólido */}
              <Button
                onClick={() => setOpenSideBar(true)}
                className="block md:hidden ml-1 bg-[#f1c82e] hover:bg-[#dcbf2c] text-white rounded-md"
              >
                <IoMdMenu className="text-xl" />                
              </Button>
            </Box>
          </div>


        </div>
      </nav>
      <Sidebar
        isSideMenuOpen={openSideBar}
        setIsSideMenuOpen={setOpenSideBar}
        menuItems={getMenuItems(dictionary)}
      />
    </>
  )
}
