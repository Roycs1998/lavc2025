'use client'
import * as React from 'react'

import { useState } from 'react'

import Link from 'next/link'

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Collapse
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import CloseIcon from '@mui/icons-material/Close'

import ExpandLess from '@mui/icons-material/ExpandLess'

import ExpandMore from '@mui/icons-material/ExpandMore'

// Extendemos la interfaz para admitir un tercer nivel
export interface MenuItem {
  text: string;
  href?: string;
  subMenu?: MenuItem[];
  link?: string;
  secondLevelText?: MenuItem[];
  image?: string;
}

interface MobileNavbarProps {
  menuItems: MenuItem[];
  logoSrc?: string;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ menuItems, logoSrc }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  
  // Gestionamos los estados de apertura de los submenús, utilizando claves únicas
  const [openSubmenu, setOpenSubmenu] = useState<{ [key: string]: boolean }>({})

  const handleToggleSubmenu = (key: string) => {
    setOpenSubmenu((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // Función recursiva para renderizar el menú, adaptando la indentación según la profundidad.
  // Si existe la propiedad "secondLevelText", se trata como submenú.
  const renderMenuItems = (items: MenuItem[], depth: number = 0, parentKey: string = ''): JSX.Element[] => {
    return items.map((item, index) => {
      // Generamos una clave única para cada ítem
      const key = parentKey ? `${parentKey}-${index}` : `${index}`
      
      // Combinamos subMenu o secondLevelText para admitir ambos casos
      const children: MenuItem[] | undefined = item.subMenu || item.secondLevelText
      const hasSubMenu = !!children && children.length > 0

      return (
        <React.Fragment key={key}>
          <ListItem
            button
            onClick={() => {
              if (hasSubMenu) {
                handleToggleSubmenu(key)
              } else {
                setOpenDrawer(false)
              }
            }}
            
            // Incrementamos el padding según la profundidad (multiplicador 3)
            sx={{ pl: depth * 3 }}
          >
            {item.href || item.link ? (
              <Link href={item.href || item.link || '#'} passHref legacyBehavior>
                <Box
                  component="a"
                  sx={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ style: { color: 'white' } }}
                  />
                </Box>
              </Link>
            ) : (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ style: { color: 'white' } }}
              />
            )}
            {hasSubMenu &&
              (openSubmenu[key] ? (
                <ExpandLess sx={{ color: 'white' }} />
              ) : (
                <ExpandMore sx={{ color: 'white' }} />
              ))}
          </ListItem>
          {hasSubMenu && (
            <Collapse in={openSubmenu[key]} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                
                // Ajustamos el fondo según el nivel (puedes modificar los colores según lo necesites)
                sx={{ backgroundColor: depth === 1 ? '#4a3c8a' : '#5a4d9a' }}
              >
                {renderMenuItems(children!, depth + 1, key)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      )
    })
  }

  return (
    <>
      {/* Botón hamburguesa sin fondo ni sombra */}
      <IconButton
        onClick={() => setOpenDrawer(true)}
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer con fondo azul y texto blanco */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: '#3a3480', color: 'white' }
        }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          {/* Botón para cerrar el Drawer */}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, pt:3, pb:3 }}>
            {logoSrc && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={logoSrc} alt="Logo" style={{ height: '40px', marginRight: '8px' }} />
            </Box>
            )}
            <IconButton onClick={() => setOpenDrawer(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
          <List>
            {renderMenuItems(menuItems, 1)}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default MobileNavbar
