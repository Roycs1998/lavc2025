'use client'

import { useEffect, useState } from 'react'

import { Box, Button, Grid, Link, Typography, useMediaQuery } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { PurchaseEventLetter } from '@/components/components-home/components-buys/PurchaseEventLetter'
import { SubtitleTag } from '@/components/components-home/components-reusable/SubtitleTag'

import { CostTable } from '@/components/components-home/components-buys/CostTable'
import { AcceptanceCriteria } from '@/components/components-home/components-buys/components-confirm/AcceptanceCriteria'

export const Confirm = () => {
  const isSmallScreen = useMediaQuery('(max-width:1275px)')
  const [offsetY, setOffsetY] = useState(0)
  const maxOffsetY = 300

  const [allSelected, setAllSelected] = useState(false)

  const handleScroll = () => {
    const newOffsetY = window.scrollY * 0.5 // Ajusta el multiplicador para un efecto más o menos fuerte

    setOffsetY(newOffsetY > maxOffsetY ? maxOffsetY : newOffsetY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleRadioChange = (isSelected: boolean) => {
    setAllSelected(isSelected) // Actualiza el estado según el valor que pase el componente de los radios
  }

  return (
    <Box>
      <Box>
        <CardImage
          image='http://4.bp.blogspot.com/-APWtYanIkJQ/UXY6C3qtIvI/AAAAAAAAFIo/c4JXBPicD8c/s1600/perros.jpg'
          title='CONFIRMAR'
        />
      </Box>
      <Box sx={{}}>
        <Grid container spacing={0} sx={{}}>
          <Grid
            item
            xs={12}
            sm={12}
            md={isSmallScreen ? 12 : 6.5}
            sx={{ marginBottom: '7%', marginTop: '7%', paddingLeft: 'var(--global-padding-inline)' }}
          >
            {isSmallScreen && (
              <Box sx={{ paddingLeft: '30px', marginBottom: '40px' }}>
                <Typography variant='body1' fontWeight='bold' sx={{ fontSize: '14px' }}>
                  ESTADIO NACIONAL - LIMA
                </Typography>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                  sx={{ paddingTop: '12px', fontSize: '1.9rem', fontWeight: 700 }}
                >
                  LACV 2024
                </Typography>
                <Typography variant='body1' sx={{ color: 'text.secondary', fontSize: '13px', paddingTop: '5px' }}>
                  25 de febrero 2025
                </Typography>
              </Box>
            )}
            <Box sx={{ paddingRight: '10px', paddingLeft: '30px' }}>
              <Box>
                <Box>
                  <Typography
                    variant='h6'
                    fontWeight='bold'
                    sx={{ paddingTop: '12px', fontSize: '1.2rem', fontWeight: 700 }}
                  >
                    Ismael Jonas Villarruel Ngrete
                  </Typography>
                </Box>
                <Box>
                  <CostTable ticketName='ESTUDIANTE O BACHILLER' price={159.0} />
                </Box>
                <Box sx={{ marginTop: '50px' }}>
                  <SubtitleTag caption='SELECCIONA PARA CONTINUAR' />
                </Box>
                <Box>
                  <AcceptanceCriteria onChange={handleRadioChange} />
                </Box>
              </Box>

              {isSmallScreen && (
                <Typography sx={{ width: '100%', marginTop: '50px' }}>
                  <Link href='/compra/adicionales'>
                    <Button
                      sx={{
                        bgcolor: 'var(--primary-color-purple)',
                        color: 'var(--letter-color)',
                        width: '100%',
                        height: 55,
                        fontWeight: 'bold',
                        fontSize: '15px',
                        '&:hover': {
                          color: 'var(--letter-color)', // Cambiar color si es necesario
                          bgcolor: '#7f76d9'
                        }
                      }}
                    >
                      CONTINUAR
                    </Button>
                  </Link>
                </Typography>
              )}
            </Box>
          </Grid>
          {!isSmallScreen && (
            <Grid
              item
              xs={12}
              sm={5}
              sx={{
                position: 'relative',
                boxShadow: '-6px 0 20px rgba(169, 169, 169, 0.6)',
                marginLeft: 'auto',
                overflow: 'hidden', // Evita que el boxShadow se extienda al lado derecho
                border: 'none',
                paddingRight: 'var(--global-padding-inline)'
              }}
            >
              <Box
                sx={{
                  padding: '64px',
                  backgroundColor: '#fff', // Color de fondo del Box
                  borderRadius: '8px', // Bordes redondeados (opcional)
                  boxShadow: 'none', // Elimina cualquier sombra en el Box interno
                  transform: `translateY(${offsetY}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <PurchaseEventLetter
                  image='https://tlavc-peru.org/tlavc/vista/upload/talleres/Portada%20presentaci%C3%B3n%20escalada%20deportiva.jpg'
                  eventLocation='ESTADIO NACIONAL - LIMA'
                  eventDate='25 de febrero 2025'
                  eventName='LACV 2024'
                  pageRoute='/compra/confirmar'
                  disableButton={!allSelected}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default Confirm
