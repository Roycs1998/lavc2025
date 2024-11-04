'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'

import { PurchaseEventLetter } from '@/components/components-home/components-buys/PurchaseEventLetter'
import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { AdditionalInformationLetter } from '@/components/components-home/components-buys/components-additional/AdditionalInformationLetter'
import { SubtitleTag } from '@/components/components-home/components-reusable/SubtitleTag'

export const Additional = () => {
  const isSmallScreen = useMediaQuery('(max-width:1275px)')

  const [offsetY, setOffsetY] = useState(0)
  const maxOffsetY = 300

  const handleScroll = () => {
    const newOffsetY = window.scrollY * 0.5 // Ajusta el multiplicador para un efecto más o menos fuerte

    setOffsetY(newOffsetY > maxOffsetY ? maxOffsetY : newOffsetY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box>
      <Box>
        <CardImage
          image='https://images.reporteindigo.com/wp-content/uploads/2019/11/devoluciones-pymes.jpg'
          title='ADICIONALES'
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
              <Box sx={{ marginTop: '50px' }}>
                <SubtitleTag caption='INFORMACION ADICIONAL' />
              </Box>
              <AdditionalInformationLetter />
              {isSmallScreen && (
                <Typography sx={{ width: '100%', marginTop: '50px' }}>
                  <Link href='/compra/pago'>
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
                  pageRoute='/compra/pago'
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default Additional
