'use client'
import * as React from 'react'
import { useEffect, useState } from 'react'

import Link from 'next/link'

import PersonIcon from '@mui/icons-material/Person'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import EventIcon from '@mui/icons-material/Event'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'

import { List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material'

import styles from './Navbar.module.css'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} sx={{ bgcolor: 'transparent' }}>
        <Toolbar sx={{ bgcolor: 'none' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <img className={styles.mainLogo} src='/images/logolavc/logo.ico' alt='logo' />
          </Typography>
          <Typography className={styles.list} component='div'>
            <List className={styles.link} sx={{ display: 'flex', flexDirection: 'row', padding: 0, marginLeft: 10 }}>
              <ListItem>
                <PersonSearchIcon className={styles.icons} />
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      marginRight: 10,
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
                  primaryTypographyProps={{
                    sx: {
                      marginRight: 10,
                      fontWeight: 700,
                      fontSize: '1.1rem'
                    }
                  }}
                  primary='LAVC 2025'
                />
              </ListItem>
              <ListItem className={styles.link}>
                <HelpOutlineIcon className={styles.icons} />
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      marginRight: 10,
                      fontWeight: 700,
                      fontSize: '1.1rem'
                    }
                  }}
                  primary='Preguntas Frecuentes'
                />
              </ListItem>
              <ListItem className={styles.link}>
                <PublishedWithChangesIcon className={styles.icons} />
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      marginRight: 10,
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
            <Button className={styles.link} color='inherit'>
              <PersonIcon className={styles.icons} />
              Login
            </Button>
          </Link>
          <Box className={styles.dropdownMenu}>
            <Button id='basic-button' onClick={handleClick}>
              <MenuIcon sx={{ color: 'white', fontSize: '2.3rem' }} />
            </Button>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              slotProps={{
                paper: {
                  sx: {
                    backgroundColor: '#3a3480', // Cambia esto según sea necesario
                    color: 'white'
                  }
                }
              }}
            >
              <MenuItem sx={{ fontSize: '1.1rem', fontWeight: '550' }} onClick={handleClose}>
                <PersonSearchIcon className={styles.icons} />
                Nosotros
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.1rem', fontWeight: '550' }} onClick={handleClose}>
                <EventIcon className={styles.icons} />
                LAVC 2025
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.1rem', fontWeight: '550' }} onClick={handleClose}>
                <HelpOutlineIcon className={styles.icons} />
                Preguntas Frecuentes
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.1rem', fontWeight: '550' }} onClick={handleClose}>
                <PublishedWithChangesIcon className={styles.icons} />
                Publicaciones
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.1rem', fontWeight: '550' }} onClick={handleClose}>
                <Link href={'/login'}>
                  <PersonIcon className={styles.icons} />
                  Login
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
