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

import styles from './Navbar.module.css'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
      <AppBar className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} sx={{ bgcolor: 'none' }}>
        <Toolbar sx={{ bgcolor: 'none' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <img className={styles.mainLogo} src='/images/logolavc/logo.png' alt='logo' />
          </Typography>
          <Typography className={styles.list} component='div'>
            <a className={styles.link}>
              <span>
                <PersonSearchIcon className={styles.icons} />
                Nosotros
              </span>
            </a>
            <a className={styles.link}>
              <EventIcon className={styles.icons} />
              <span>LAVC 2025</span>
            </a>
            <a className={styles.link}>
              <HelpOutlineIcon className={styles.icons} />
              <span>Preguntas Frecuentes</span>
            </a>
            <a className={styles.link}>
              <PublishedWithChangesIcon className={styles.icons} />
              <span>Publicaciones</span>
            </a>
          </Typography>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
          <Link href={'/login'}>
            <Button className={styles.link} color='inherit'>
              <PersonIcon className={styles.icons} />
              Login
            </Button>
          </Link>
          <Button onClick={toggleMenu} color='inherit'>
            <MenuIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
