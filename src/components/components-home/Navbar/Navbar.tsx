'use client'
import * as React from 'react'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import PersonIcon from '@mui/icons-material/Person'

import AppBar from '@mui/material/AppBar'

import Box from '@mui/material/Box'

import Toolbar from '@mui/material/Toolbar'

import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'

import { List, ListItem } from '@mui/material'

import { useSession } from 'next-auth/react'

import styles from './Navbar.module.css'

import LanguageDropdown from './LanguageDropdown'

import type { getDictionary } from '@/utils/getDictionary'

import { NavbarTooltip } from './NavbarTooltip'

import UserDropdown from '@/components/layout/shared/UserDropdown'

import MobileNavbar from './MobileNavbar'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Navbar = ({ dictionary }: Props) => {
  const [scrolled, setScrolled] = useState(false)
  const { data: session, status } = useSession()

  const getMenuItems = (dictionary: any) => [
  {
    text: dictionary?.nav_main?.navbar.contact_us,
    subMenu: [
      { text: dictionary?.nav_main?.navbar.about_LAVC, link: '/nosotros' },
      { text: dictionary?.nav_main?.navbar.contact, link: '/soporte' }
    ],
    image: 'https://tse2.mm.bing.net/th?id=OIP.33VqJRpi2PsJuc9mcRwcCQHaE9&pid=Api&P=0&h=180'
  },
  {
    text: dictionary?.nav_main?.navbar.lacv_2025,
    subMenu: [
      { text: dictionary?.nav_main?.navbar.event_and_workshops, link: '/eventos-talleres' },
      { text: dictionary?.nav_main?.navbar.speakers, link: '/ponentes' },
      { text: dictionary?.nav_main?.navbar.program, link: '/programa' },
      {
        text: dictionary?.nav_main?.navbar.stand_out,
        secondLevelText: [
          { text: 'Embajador', link: '/embajador' },
          { text: 'Becario Rippie', link: '/brippie' }
        ]
      },
      {
        text: dictionary?.nav_main?.navbar.companies,
        secondLevelText: [
          { text: dictionary?.nav_main?.navbar.sponsors, link: '/patrocinadores' },
          { text: dictionary?.nav_main?.navbar.official_sponsors, link: '/patrocinadoresoficiales' },
          { text: dictionary?.nav_main?.navbar.official_supplier, link: '/proveedor-oficial' }
        ]
      },
      { text: dictionary?.nav_main?.navbar.contact, link: '/soporte' }
    ],
    image: 'https://4.bp.blogspot.com/-atz5WgBqCys/VxasgrWNCEI/AAAAAAAB9Ao/ClzFWC9eEEcOWygTP4l3m0rEXVpRTX1ggCKgB/s1600/Perritos-cachorros-162.jpg'
  },
  {
    text: 'Libreria LAVC',
    href: '/libreria'
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        sx={{
          bgcolor: scrolled ? '#3a3480' : 'rgba(58, 52, 128, 0.447)',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Toolbar
          sx={{
            bgcolor: 'none',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between'
            }}
          >
            <Box className={`${styles.displayMobile}`} sx={{ flexGrow: 1 }}>
              <MobileNavbar menuItems={menuItems} logoSrc='http://localhost:3000/images/logolavc/logo.png'/>
            </Box>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Link href={'/'}>
                <img
                  className={`${styles.mainLogo} ${styles.mainLogoPhone}`}
                  src='/images/logolavc/logo.png'
                  alt='logo'
                />
              </Link>
            </Box>

            <Typography className={styles.list} component='div'>
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
                        href={item.href ? item.href : '#'}
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: 'inline-block',
                          color: 'inherit',
                          textDecoration: 'none'
                        }}
                      >
                        {item.text}
                      </Link>
                    )}
                  </ListItem>
                ))}
              </List>
            </Typography>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <LanguageDropdown />
              {status === 'authenticated' ? (
                <UserDropdown session={session} />
              ) : (
                <Link href={'/login'}>
                  <Button
                    className={`${styles.link} ${styles.hoverColor}`}
                    color='inherit'
                    sx={{}}
                  >
                    <PersonIcon className={styles.icons} />
                    {dictionary.nav_main.navbar.login}
                  </Button>
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
