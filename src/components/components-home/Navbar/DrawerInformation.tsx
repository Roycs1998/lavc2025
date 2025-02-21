'use client'
import React from 'react'

import Link from 'next/link'

import { Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore' // Ícono que indica que el menú se puede expandir
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

interface SecondLevel {
  text: string
  link: string
}

interface LinkItem {
  secondLevelText?: SecondLevel[] // Opcional para subniveles
  text: string
  link?: string // Enlace correspondiente
}

interface Information {
  start: string // Texto que se muestra inicialmente
  links?: LinkItem[] // Arreglo de objetos que contiene los textos y enlaces
}

export const DrawerInformation = ({ start, links }: Information) => {
  // Estado para controlar si los enlaces están abiertos o cerrados
  const [open, setOpen] = React.useState(false)
  const [openSubMenuIndex, setOpenSubMenuIndex] = React.useState<number | null>(null) // Controla el submenú expandido

  // Manejador de clics para alternar el estado principal
  const handleToggle = () => {
    setOpen(prev => !prev)
  }

  // Manejador de clics para alternar subniveles
  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenuIndex(prevIndex => (prevIndex === index ? null : index)) // Alterna entre abrir y cerrar submenú
  }

  return (
    <Box>
      <Box
        onClick={handleToggle} // Maneja el clic en el texto principal para abrir/cerrar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: '550'
        }}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: '550', color: 'white !important' }}>{start}</Typography>
        {open ? <ExpandLessIcon sx={{ fontSize: 34 }} /> : <ExpandMoreIcon sx={{ fontSize: 34 }} />}
      </Box>

      {open && (
        <Box sx={{ mt: 1 }}>
          {links?.map((linkItem, index) => (
            <Box key={index}>
              {/* Verifica si el enlace tiene subniveles */}
              {linkItem.secondLevelText ? (
                <React.Fragment key={index}>
                  {/* Clic para mostrar/ocultar el submenú */}
                  <Box
                    onClick={() => handleSubMenuToggle(index)}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontWeight: '550',
                      cursor: 'pointer',
                      paddingBottom: 1
                    }}
                  >
                    <Typography sx={{ fontSize: '1rem', color: 'white !important'}}>{linkItem.text}</Typography>
                    {openSubMenuIndex === index ? (
                      <ExpandLessIcon sx={{ fontSize: 34 }} />
                    ) : (
                      <ExpandMoreIcon sx={{ fontSize: 34 }} />
                    )}
                  </Box>

                  {/* Muestra los subniveles si está abierto */}
                  {openSubMenuIndex === index && (
                    <Box sx={{ pl: 2, marginBottom: 2 }}>
                      {linkItem.secondLevelText.map((subLink, subIndex) => (
                        <Link key={subIndex} href={subLink.link}>
                        <Typography sx={{ fontSize: '1rem', paddingY: '4px', color: 'white', ':hover': { color: 'var(--color-on-hover)' } }}>{subLink.text}</Typography>
                        </Link>
                      ))}
                    </Box>
                  )}
                </React.Fragment>
              ) : (
                <Link href={linkItem.link || ''}>
                <Typography sx={{ fontSize: '1rem', paddingBottom: 1, color: 'white', ':hover': { color: 'var(--color-on-hover)' } }}>{linkItem.text}</Typography>
                </Link>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
