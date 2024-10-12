'use client'

import * as React from 'react'

import Link from 'next/link'

import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { useMediaQuery } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore' // Ícono que indica que el menú se puede expandir
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

interface SecondLevel {
  text: string
  link: string
}
interface LinkItem {
  secondLevelText?: SecondLevel[]
  text: string
  link?: string // Enlace correspondiente
}

interface TransitionsPopperProps {
  start: string // Texto que se muestra inicialmente
  links: LinkItem[] // Arreglo de objetos que contiene los textos y enlaces
  image: string // Propiedad opcional para la imagen
}

export const NavbarTooltip = ({ start, links, image }: TransitionsPopperProps) => {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [openSubMenu, setOpenSubMenu] = React.useState<number | null>(null)
  const [mouseLeaveTimeout, setMouseLeaveTimeout] = React.useState<NodeJS.Timeout | null>(null)

  const isSmallScreen = useMediaQuery('(max-width:1588px)')

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index)
  }

  // Definimos los offsets en función del tamaño de la pantalla
  const offsetValue = isSmallScreen ? [650, 68.5] : [780, 68.5]

  const handleMouseEnter = () => {
    if (mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout) // Si había un timeout para cerrar el Popper, lo cancela
    }

    setAnchorEl(document.getElementById('fixed-anchor'))
    setOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpen(false)
      setAnchorEl(null)
    }, 200) // Retraso antes de cerrar el Popper (200ms)

    setMouseLeaveTimeout(timeout)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <Box>
      <Box id='fixed-anchor' style={{ position: 'fixed', left: '100px' }}></Box>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          cursor: 'pointer',
          border: 'none',
          fontWeight: 700,
          fontSize: '1.1rem',
          whiteSpace: 'nowrap',
          ':hover': {
            color: 'var(--color-on-hover)'
          }
        }}
      >
        {start}
      </Box>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter} // Mantener el Popper abierto si el mouse está sobre él
        transition
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: offsetValue // [desplazamiento horizontal, desplazamiento vertical]
            }
          }
        ]}
        sx={{
          zIndex: 1300 // Controlar la superposición
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                border: 0,
                p: 2,
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: 800,
                height: 300,
                maxWidth: '100%',
                backgroundColor: 'var(--primary-color-purple)'
              }}
            >
              <Avatar
                src={image}
                sx={{
                  marginRight: 8,
                  width: 320,
                  height: 230,
                  borderRadius: 1,
                  marginLeft: 2
                }}
              />
              <Divider orientation='vertical' flexItem sx={{ marginRight: 8 }} />
              <Box>
                {links.map((linkItem, index) => (
                  <React.Fragment key={index}>
                    <Box>
                      <Link href={linkItem.link || ''}>
                        <Typography
                          variant='h6'
                          onClick={() => linkItem.secondLevelText && handleSubMenuToggle(index)} // Maneja el clic
                          sx={{
                            fontWeight: 500,
                            color: 'var(--letter-color)',
                            ':hover': {
                              color: 'var(--color-on-hover)',
                              cursor: 'pointer' // Cambia el cursor si hay subenlaces
                            }
                          }}
                        >
                          {linkItem.text}
                          {linkItem.secondLevelText && <ExpandMoreIcon />}
                        </Typography>
                      </Link>
                      {/* Verificamos si hay un submenú para este enlace */}
                      {linkItem.secondLevelText && openSubMenu === index && (
                        <Box sx={{ marginLeft: 4 }}>
                          {/* Indentación para subenlaces */}
                          {linkItem.secondLevelText.map((subLinkItem, subIndex) => (
                            <Link key={subIndex} href={subLinkItem.link}>
                              <Typography
                                variant='body2'
                                sx={{
                                  fontWeight: 500,
                                  color: 'var(--letter-color)',
                                  ':hover': {
                                    color: 'var(--color-on-hover)'
                                  }
                                }}
                              >
                                {subLinkItem.text}
                              </Typography>
                            </Link>
                          ))}
                        </Box>
                      )}
                    </Box>
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  )
}
