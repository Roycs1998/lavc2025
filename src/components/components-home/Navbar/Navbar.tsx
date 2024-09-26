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

import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import styles from './Navbar.module.css'

export const Navbar = () => {
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
              primary='Nosotros'
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
              primary='Login'
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
                <ListItemText
                  className={styles.hoverColor}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: '1.1rem'
                    }
                  }}
                  primary='Nosotros'
                />
              </ListItem>
              <ListItem className={styles.link}>
                <EventIcon className={styles.icons} />
                <ListItemText
                  className={styles.hoverColor}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      whiteSpace: 'nowrap'
                    }
                  }}
                  primary='LAVC 2025'
                />
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
                <ListItemText
                  className={styles.hoverColor}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 700,
                      fontSize: '1.1rem'
                    }
                  }}
                  primary='Publicaciones'
                />
              </ListItem>
            </List>
          </Typography>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
          <Link href={'/login'}>
            <Button className={`${styles.link} ${styles.hoverColor}`} color='inherit' sx={{ marginRight: '250px' }}>
              <PersonIcon className={styles.icons} />
              Login
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
