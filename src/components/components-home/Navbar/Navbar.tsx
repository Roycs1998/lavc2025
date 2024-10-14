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

import { List, ListItem, ListItemText } from '@mui/material'

import { NavbarDrawer } from './NavbarDrawer'

import styles from './Navbar.module.css'
import LanguageDropdown from './LanguageDropdown'
import type { getDictionary } from '@/utils/getDictionary'
import { NavbarTooltip } from './NavbarTooltip'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Navbar = ({ dictionary }: Props) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} global-padding`}
        sx={{ bgcolor: 'transparent' }}
      >
        <Toolbar sx={{ bgcolor: 'none' }}>
          <Typography variant='h6' component='div' sx={{ marginRight: '5%' }}>
            <Link href={'/'}>
              <img className={styles.mainLogo} src='/images/logolavc/logo.ico' alt='logo' />
            </Link>
          </Typography>
          <Typography className={styles.list} component='div'>
            <List className={styles.link} sx={{ display: 'flex', flexDirection: 'row', padding: 0, marginLeft: '15%' }}>
              <ListItem>
                <PersonSearchIcon className={styles.icons} />
                <NavbarTooltip
                  start={dictionary?.nav_main?.navbar.contact_us}
                  links={[
                    { text: dictionary?.nav_main?.navbar.about_LAVC, link: 'https://example1.com' },
                    { text: dictionary?.nav_main?.navbar.contact, link: 'https://example2.com' }
                  ]}
                  image='https://tse2.mm.bing.net/th?id=OIP.33VqJRpi2PsJuc9mcRwcCQHaE9&pid=Api&P=0&h=180'
                ></NavbarTooltip>
              </ListItem>
              <ListItem className={styles.link}>
                <EventIcon className={styles.icons} />

                <NavbarTooltip
                  start={dictionary?.nav_main?.navbar.lacv_2025}
                  links={[
                    { text: dictionary?.nav_main?.navbar.event_and_workshops, link: 'https://example1.com' },
                    { text: dictionary?.nav_main?.navbar.speakers, link: '/ponentes' },
                    { text: dictionary?.nav_main?.navbar.program, link: 'https://example2.com' },
                    { text: dictionary?.nav_main?.navbar.stand_out, link: 'https://example2.com' },
                    {
                      text: dictionary?.nav_main?.navbar.companies,
                      secondLevelText: [
                        { text: dictionary?.nav_main?.navbar.sponsors, link: '/patrocinadores' },
                        { text: dictionary?.nav_main?.navbar.official_sponsors, link: 'https://example2.com' }
                      ]
                    },
                    { text: dictionary?.nav_main?.navbar.contact, link: 'https://example2.com' }
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
                  primary={dictionary?.nav_main?.navbar.frequently_asked_questions}
                />
              </ListItem>
              <ListItem className={styles.link}>
                <PublishedWithChangesIcon className={styles.icons} />
                <NavbarTooltip
                  start={dictionary?.nav_main?.navbar.publications}
                  links={[
                    { text: dictionary?.nav_main?.navbar.news, link: 'https://example1.com' },
                    { text: dictionary?.nav_main?.navbar.gallery, link: 'https://example2.com' },
                    { text: dictionary?.nav_main?.navbar.library_lavc, link: 'https://example2.com' }
                  ]}
                  image='https://www.petlife.mx/u/fotografias/m/2023/10/19/f960x540-7724_81799_0.jpg'
                ></NavbarTooltip>
              </ListItem>
            </List>
          </Typography>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
          <LanguageDropdown />
          <Link href={'/login'}>
            <Button className={`${styles.link} ${styles.hoverColor}`} color='inherit' sx={{}}>
              <PersonIcon className={styles.icons} />
              {dictionary.nav_main.navbar.login}
            </Button>
          </Link>
          <NavbarDrawer dictionary={dictionary} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
