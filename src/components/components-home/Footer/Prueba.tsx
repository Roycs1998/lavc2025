'use client'

import * as React from 'react'

import Link from 'next/link'

import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'

interface LinkItem {
  text: string // Texto del enlace
  link: string // Enlace correspondiente
}

interface TransitionsPopperProps {
  inicio: string // Texto que se muestra inicialmente
  links: LinkItem[] // Arreglo de objetos que contiene los textos y enlaces
  image: string // Propiedad opcional para la imagen
}

export const NavbarTooltip: React.FC<TransitionsPopperProps> = ({ inicio, links, image }) => {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    setOpen(false)
    setAnchorEl(null)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <Box>
      <Box
        onMouseEnter={handleMouseEnter}
        style={{ display: 'inline-block', cursor: 'pointer', border: 'none', fontWeight: 700, fontSize: '1.1rem' }}
      >
        {inicio}
      </Box>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        onMouseLeave={handleMouseLeave}
        transition
        placement='bottom' // Cambiar la posición a la parte inferior
        sx={{
          margin: 'auto', // Centrar horizontalmente
          top: '0', // Ajustar según sea necesario
          left: '0',
          right: '0',
          width: '650px' // Ancho fijo para el Popper
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                border: 1,
                p: 2, // Aumentar el padding para hacer el popper más grande
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                boxShadow: 3 // Añadir sombra para darle más profundidad
              }}
            >
              <Avatar
                alt={''}
                src={image}
                sx={{
                  marginRight: 2, // Espacio entre el Avatar y el Divider
                  width: 250, // Aumentar el ancho del Avatar
                  height: 200 // Aumentar la altura del Avatar
                }}
              />
              <Divider orientation='vertical' flexItem sx={{ marginRight: 2 }} /> {/* Separador vertical */}
              <Box>
                {links.map((linkItem, index) => (
                  <Link key={index} href={linkItem.link} target='_blank' rel='noopener noreferrer'>
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                      {linkItem.text}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  )
}
