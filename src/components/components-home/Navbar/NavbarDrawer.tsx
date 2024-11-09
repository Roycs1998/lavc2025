'use client'
import React from 'react'

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { DrawerInformation } from './DrawerInformation'

import type { getDictionary } from '@/utils/getDictionary'
import styles from './Navbar.module.css'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const NavbarDrawer = ({ dictionary }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  return (
    <Box>
      <IconButton
        className={styles.dropdownMenu}
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
      >
        <MenuIcon sx={{ color: 'white', fontSize: '2.3rem' }} />
      </IconButton>
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
        <Box sx={{ textAlign: 'center', bgcolor: 'var(--primary-color-purple)', height: '100vh' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, marginTop: 1, marginBottom: 1 }}>
            <Link href={'/'}>
              <img className={styles.mainLogoPhone} src='/images/logolavc/logo.ico' alt='logo' />
            </Link>
          </Typography>
          <Divider sx={{ bgcolor: '#272457' }} />
          <List sx={{ color: 'var(--letter-color)', marginTop: 3 }}>
            <ListItem sx={{ paddingY: 0, marginY: 0 }}>
              <ListItemButton>
                <ListItemText>
                  <DrawerInformation
                    start={dictionary?.nav_main?.navbar?.contact_us}
                    links={[
                      { text: dictionary?.nav_main?.navbar.about_LAVC, link: '/nosotros' },
                      { text: dictionary?.nav_main?.navbar.contact, link: '/soporte' }
                    ]}
                  />
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ paddingY: 0, marginY: 0 }}>
              <ListItemButton>
                <ListItemText>
                  <DrawerInformation
                    start={dictionary?.nav_main?.navbar.lacv_2025}
                    links={[
                      { text: dictionary?.nav_main?.navbar.event_and_workshops, link: '/eventos-talleres' },
                      { text: dictionary?.nav_main?.navbar.speakers, link: '/ponentes' },
                      { text: dictionary?.nav_main?.navbar.program, link: '/programa' },
                      { text: dictionary?.nav_main?.navbar.stand_out, link: '/diferenciate' },
                      {
                        text: dictionary?.nav_main?.navbar.companies,
                        secondLevelText: [
                          { text: dictionary?.nav_main?.navbar.sponsors, link: '/patrocinadores' },
                          { text: dictionary?.nav_main?.navbar.official_sponsors, link: '/patrocinadoresoficiales' },
                          { text: dictionary?.nav_main?.navbar.official_supplier, link: '/proveedor-oficial' }
                        ]
                      },
                      { text: dictionary?.nav_main?.navbar.contact, link: '/soporte' }
                    ]}
                  />
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ paddingY: 0, marginY: 0 }}>
              <ListItemButton>
                <ListItemText
                  className={styles.hoverColor}
                  primaryTypographyProps={{ sx: { fontSize: '1rem', fontWeight: '550' } }}
                  primary={dictionary?.nav_main?.navbar.frequently_asked_questions}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ paddingY: 0, marginY: 0 }}>
              <ListItemButton>
                <ListItemText>
                  <DrawerInformation
                    start={dictionary?.nav_main?.navbar.publications}
                    links={[
                      { text: dictionary?.nav_main?.navbar.news, link: 'https://example1.com' },
                      { text: dictionary?.nav_main?.navbar.gallery, link: 'https://example2.com' },
                      { text: dictionary?.nav_main?.navbar.library_lavc, link: 'https://example2.com' }
                    ]}
                  />
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ paddingY: 0, marginY: 0 }}>
              <ListItemButton component={Link} href='/login'>
                <ListItemText
                  className={styles.hoverColor}
                  primaryTypographyProps={{ sx: { fontSize: '1rem', fontWeight: '550' } }}
                  primary={dictionary.nav_main.navbar.login}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
