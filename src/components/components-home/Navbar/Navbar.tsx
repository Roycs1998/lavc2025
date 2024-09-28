'use client'
import * as React from 'react'
import { useEffect, useState } from 'react'

import Link from 'next/link'

import PersonIcon from '@mui/icons-material/Person'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import EventIcon from '@mui/icons-material/Event'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'

import { IoCartOutline } from 'react-icons/io5'

import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import styles from './Navbar.module.css'
import LanguageDropdown from './LanguageDropdown'
import type { getDictionary } from '@/utils/getDictionary'
import { NavbarTooltip } from './NavbarTooltip'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Navbar = ({ dictionary }: Props) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#3a3480', height: '100vh' }}>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        <Link href={'/'}>
          <img className={styles.mainLogoPhone} src='/images/logolavc/logo.ico' alt='logo' />
        </Link>
      </Typography>
      <Divider sx={{ bgcolor: '#272457' }} />
      <List sx={{ color: 'white' }}>
        <ListItem>
          <ListItemButton>
            <ListItemText
              className={styles.hoverColor}
              primaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: '550' } }}
              primary={dictionary?.nav_main?.contact_us || 'Contacto'}
            ></ListItemText>
            <NavigateNextIcon sx={{ fontSize: '2.2rem', mr: -2.5 }} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText
              className={styles.hoverColor}
              primaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: '550' } }}
              primary='LAVC 2025'
            ></ListItemText>
            <NavigateNextIcon sx={{ fontSize: '2.2rem', mr: -2.5 }} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText
              className={styles.hoverColor}
              primaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: '550' } }}
              primary='Preguntas Frecuentes'
            ></ListItemText>
            <NavigateNextIcon sx={{ fontSize: '2.2rem', mr: -2.5 }} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText
              className={styles.hoverColor}
              primaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: '550' } }}
              primary='Publicaciones'
            ></ListItemText>
            <NavigateNextIcon sx={{ fontSize: '2.2rem', mr: -2.5 }} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href='/login'>
            <ListItemText
              className={styles.hoverColor}
              primaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: '550' } }}
              primary={dictionary.nav_main.login}
            ></ListItemText>
            <NavigateNextIcon sx={{ fontSize: '2.2rem', mr: -2.5 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} sx={{ bgcolor: 'transparent' }}>
        <Toolbar sx={{ bgcolor: 'none' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href={'/'}>
              <img className={styles.mainLogo} src='/images/logolavc/logo.ico' alt='logo' />
            </Link>
          </Typography>
          <Typography className={styles.list} component='div'>
            <List className={styles.link} sx={{ display: 'flex', flexDirection: 'row', padding: 0, marginLeft: '15%' }}>
              <ListItem>
                <PersonSearchIcon className={styles.icons} />
                <NavbarTooltip
                  inicio='Nosotros'
                  links={[
                    { text: 'Acerca de LACV', link: 'https://example1.com' },
                    { text: 'Contacto', link: 'https://example2.com' }
                  ]}
                  image='https://tse2.mm.bing.net/th?id=OIP.33VqJRpi2PsJuc9mcRwcCQHaE9&pid=Api&P=0&h=180'
                ></NavbarTooltip>
              </ListItem>
              <ListItem className={styles.link}>
                <EventIcon className={styles.icons} />

                <NavbarTooltip
                  inicio='LAVC 2025'
                  links={[
                    { text: 'Evento y Talleres', link: 'https://example1.com' },
                    { text: 'Ponentes', link: 'https://example2.com' },
                    { text: 'Programa', link: 'https://example2.com' },
                    { text: '', link: 'https://example2.com' },
                    { text: 'Empresas', link: 'https://example2.com' },
                    { text: 'Contacto', link: 'https://example2.com' }
                  ]}
                  image='https://4.bp.blogspot.com/-atz5WgBqCys/VxasgrWNCEI/AAAAAAAB9Ao/ClzFWC9eEEcOWygTP4l3m0rEXVpRTX1ggCKgB/s1600/Perritos-cachorros-162.jpg'
                ></NavbarTooltip>
              </ListItem>
              <ListItem className={styles.link}>
                <HelpOutlineIcon className={styles.icons} />
                <ListItemText
                  className={styles.hoverColor}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      whiteSpace: 'nowrap'
                    }
                  }}
                  primary='Preguntas Frecuentes'
                />
              </ListItem>
              <ListItem className={styles.link}>
                <PublishedWithChangesIcon className={styles.icons} />
                <NavbarTooltip
                  inicio='Publicaciones'
                  links={[
                    { text: 'Noticias', link: 'https://example1.com' },
                    { text: 'Galeria', link: 'https://example2.com' },
                    { text: 'Libreria LAVC', link: 'https://example2.com' }
                  ]}
                  image='https://www.petlife.mx/u/fotografias/m/2023/10/19/f960x540-7724_81799_0.jpg'
                ></NavbarTooltip>
              </ListItem>
            </List>
          </Typography>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>

          <LanguageDropdown className='hidden md:flex' isScroled={scrolled} />

          <Link href={'/login'}>
            <Button className={`${styles.link} ${styles.hoverColor}`} color='inherit' sx={{ marginRight: '250px' }}>
              <PersonIcon className={styles.icons} />
              {dictionary.nav_main.login}
            </Button>
          </Link>
          <IconButton
            className={styles.dropdownMenu}
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ color: 'white', fontSize: '2.3rem' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 400 }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
