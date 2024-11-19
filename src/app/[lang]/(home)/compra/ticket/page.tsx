'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { useSearchParams } from 'next/navigation'

import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { TicketInformation } from '@/components/components-home/components-buys/TicketInformation'
import { CostTable } from '@/components/components-home/components-buys/CostTable'
import { PurchaseEventLetter } from '@/components/components-home/components-buys/PurchaseEventLetter'
import { SubtitleTag } from '@/components/components-home/components-reusable/SubtitleTag'

export const InformacionDeTicket = () => {
  const searchParams = useSearchParams()

  const [parameterOne, setParameterOne] = useState<string | null>(null)
  const [parameterTwo, setParameterTwo] = useState<string | null>(null)

  const isSmallScreen = useMediaQuery('(max-width:1275px)')

  useEffect(() => {
    setParameterOne(searchParams.get('EventoId'))
    setParameterTwo(searchParams.get('ticketId'))
  }, [searchParams])

  useEffect(() => {
    if (parameterOne !== null) {
      localStorage.setItem('event code', parameterOne ?? '')
    }

    if (parameterTwo !== null) {
      localStorage.setItem('ticket code', parameterTwo ?? '')
    }
  }, [parameterOne, parameterTwo])

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
          image='http://blackbeltreview.files.wordpress.com/2010/11/raffle-tickets.jpg'
          title='INFORMACION TICKET'
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
            <Box sx={{ paddingRight: '30px', paddingLeft: '30px' }}>
              <Box>
                <SubtitleTag caption='Informacion de Ticket' />
              </Box>
              <TicketInformation />

              <CostTable ticketName='MEDICO VETERINARIO' price={159.0} />
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
                  pageRoute='/compra/adicionales'
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default InformacionDeTicket
