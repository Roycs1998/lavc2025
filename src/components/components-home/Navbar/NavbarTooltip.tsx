'use client'

import * as React from 'react'

import Link from 'next/link'

import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'

import { Icon } from '@iconify/react'

interface SecondLevel {
  text: string
  link: string
}
interface LinkItem {
  subMenu?: SecondLevel[]
  text: string
  link?: string 
}

interface TransitionsPopperProps {
  start: string // Texto que se muestra inicialmente
  links: LinkItem[] // Arreglo de objetos que contiene los textos y enlaces
  image: string // Propiedad opcional para la imagen
}

export const NavbarTooltip = ({ start, links, image }: TransitionsPopperProps) => {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [hoveredLink, setHoveredLink] = React.useState<SecondLevel[] | null>(null) // Guardar subniveles al hacer hover
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  const [mouseLeaveTimeout, setMouseLeaveTimeout] = React.useState<NodeJS.Timeout | null>(null)

  const handleHoverLink = (secondLevelText: SecondLevel[] | undefined, index: number) => {
    setHoveredLink(secondLevelText || null)
    setHoveredIndex(index)
  }

  const handleMouseEnter = () => {
    if (mouseLeaveTimeout) clearTimeout(mouseLeaveTimeout)

    setOpen(true)
  }

  const handleMouseLeaveAll = () => {
    const timeout = setTimeout(() => {
      setOpen(false)
      setAnchorEl(null)
      setHoveredIndex(null)
      setHoveredLink(null)
    }, 200)
    
    setMouseLeaveTimeout(timeout)
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

      <Box
        onMouseEnter={(e) => {
          if (mouseLeaveTimeout) clearTimeout(mouseLeaveTimeout)
          setAnchorEl(e.currentTarget)
          setOpen(true)
        }}
        onMouseLeave={handleMouseLeaveAll}
        sx={{
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          color: open ? '#f1c82e' : '#3a3480',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          transition: 'color 0.3s ease',
          py: 1, // padding vertical
          fontSize: '1.15rem',
          ':hover': {
            color: '#f1c82e'
          }
        }}
      >
        {start}
        <Icon
          icon={open ? 'mdi:chevron-up' : 'mdi:chevron-down'}
          style={{
            fontSize: 25,
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            strokeWidth: 1.5,
            stroke: open ? '#f1c82e' : '#3a3480',
          }}
        />
      </Box>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        transition
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 15], // separación desde arriba
            },
          },
          {
            name: 'preventOverflow',
            options: {
              altAxis: false,
            },
          },
          {
            name: 'computeStyles',
            options: {
              gpuAcceleration: false, // evita movimientos raros con zoom
            },
          },
          {
            name: 'customCenter',
            enabled: true,
            phase: 'beforeWrite',
            requires: ['computeStyles'],
            fn({ state }) {
              state.styles.popper.left = `calc(50vw - ${830 / 2}px)`; // suponiendo 830px de ancho
            },
          },
        ]}
        sx={{zIndex: 13}}
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
                width: 830,
                height: 300,
                maxWidth: '100%',
                backgroundColor: 'var(--primary-color-purple)'
              }}
            >
              <Avatar
                src={image}
                sx={{
                  marginRight: 4,
                  width: 320,
                  height: 230,
                  borderRadius: 1,
                  marginLeft: 2
                }}
              />

              <Box>
                {links.map((linkItem, index) => (
                  <React.Fragment key={index}>
                    <Box
                      onMouseEnter={() => handleHoverLink(linkItem.subMenu, index)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        py: 1.5,
                        px: 1,
                        borderLeft: hoveredIndex === index ? '4px solid #f1c82e' : '4px solid transparent',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Link href={linkItem.link || ''}>
                        <Typography
                          variant='h5'
                          sx={{
                            color: hoveredIndex === index ? '#f1c82e' : 'var(--letter-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            ':hover': {
                              color: '#f1c82e'
                            }
                          }}
                        >
                          {linkItem.text}
                          {linkItem.subMenu && (
                            <Icon
                              icon={hoveredIndex === index ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                              style={{
                                fontSize: 25,
                                transition: 'transform 0.3s ease',
                                transform: hoveredIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                strokeWidth: 1.5,
                                stroke: hoveredIndex === index ? '#f1c82e' : '3a3480'
                              }}
                            />
                          )}
                        </Typography>
                      </Link>
                      {/* Verificamos si hay un submenú para este enlace */}
                    </Box>
                  </React.Fragment>
                ))}
              </Box>
              <Divider orientation='vertical' flexItem sx={{ marginLeft: 2, marginRight: 3 }} />
              <Box>
                {hoveredLink ? (
                  hoveredLink.map((subLink, subIndex) => (
                    <Link key={subIndex} href={subLink.link}>
                      <Typography
                        variant='h5'
                        sx={{

                          padding: 1,
                          color: 'var(--letter-color)',
                          ':hover': {
                            color: '#f1c82e',
                            cursor: 'pointer'
                          }
                        }}
                      >
                        {subLink.text}
                      </Typography>
                    </Link>
                  ))
                ) : (
                  <Typography variant='h5' sx={{ color: 'var(--letter-color)' }}></Typography>
                )}
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  )
}
