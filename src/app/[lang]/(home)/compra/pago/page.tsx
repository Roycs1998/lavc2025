'use client'
import { useEffect, useState } from 'react'

import { Box, Button, Grid, Link, Typography, useMediaQuery } from '@mui/material'

import { PurchaseEventLetter } from '@/components/components-home/components-buys/PurchaseEventLetter'
import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { PaymentDocuments } from '@/components/components-home/components-buys/components-pay/PaymentDocuments'
import { PaymentMethod } from '@/components/components-home/components-buys/components-pay/PaymentMethod'
import { CostTable } from '@/components/components-home/components-buys/CostTable'
import { SubtitleTag } from '@/components/components-home/components-reusable/SubtitleTag'
import { AlertIndications } from '@/components/components-home/components-reusable/AlertIndications'

export const Payments = () => {
  const isSmallScreen = useMediaQuery('(max-width:1275px)')

  const [offsetY, setOffsetY] = useState(0)
  const maxOffsetY = 300
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleChange = (id: string) => {
    setExpandedId(prevId => (prevId === id ? id : id))

    //console.log('estado' + expandedId)
  }

  const handleScroll = () => {
    const newOffsetY = window.scrollY * 0.5 // Ajusta el multiplicador para un efecto más o menos fuerte

    setOffsetY(newOffsetY > maxOffsetY ? maxOffsetY : newOffsetY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    localStorage.setItem('typeOfPayment', String(expandedId))
  }, [expandedId])

  return (
    <Box>
      <Box>
        <CardImage
          image='https://finanzasycredito.mx/sites/finanzasycredito.mx/files/styles/article_hero/public/mx-guide-formas-de-pago-825x293.png?itok=ROmhTvnQ'
          title='TIPOS DE PAGOS'
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
                <SubtitleTag caption='Selecciona documento' />
                <PaymentDocuments />
                <Box sx={{ marginTop: '50px' }}>
                  <SubtitleTag caption='SELECCIONA TU MEDIO DE PAGO' />
                </Box>
                <Box sx={{ marginTop: '10px' }}>
                  <PaymentMethod
                    id='NIUBIZ'
                    expandedId={expandedId}
                    onChange={handleChange}
                    image='https://teleticket.com.pe/content/images/mediopago/mp112.png?v=20241104'
                    name='NIUBIZ'
                    paymentInstitutions='Tarjeta de crédito / débito / Yape'
                    description='Revisa el detalle de la compra y el monto a pagar antes de Continuar, una vez procesado el pago no existen cambios ni devoluciones'
                    paymentTypeImage='https://cdnp.teleticket.com.pe/Content/images/mediopago/opd_niubiz.png'
                  />
                  <PaymentMethod
                    id='CULQI'
                    expandedId={expandedId}
                    onChange={handleChange}
                    image='https://teleticket.com.pe/content/images/mediopago/mp106.png?v=20241101'
                    name='CULQI'
                    paymentInstitutions='Tarjeta de crédito / débito / Yape'
                    description='Genera un código de 9 dígitos y págalo a través de:'
                    informationOne='Banca Móvil / Internet: Paga en BBVA, BCP, Interbank, Scotiabank, BanBif, Caja Arequipa y Banco Pichincha, a través de la banca por internet o banca móvil en la opción pago de servicios.'
                    informationTwo='Agentes y Bodegas: Deposita en BBVA, BCP, Interbank, Scotiabank, BanBif, Wester Union, Tambo+, Kasanet, Ya Ganaste, Red Digital, Comercio Multiservicios Niubiz, MoneyGram, Caja Arequipa, Disashop, Cellpower.'
                    listOfPaymentEntities={[
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_1.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_7.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_2.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_8.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_3.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_9.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_4.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_10.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_5.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_11.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_6.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_12.png' }
                    ]}
                    informationThree='Revisa el detalle de la compra y el monto a pagar antes de Continuar, una vez procesado el pago no existen cambios ni devoluciones'
                  />
                  <PaymentMethod
                    id='PagoEfectivo'
                    expandedId={expandedId}
                    onChange={handleChange}
                    image='https://teleticket.com.pe/content/images/mediopago/mp106.png?v=20241101'
                    name='PagoEfectivo'
                    paymentInstitutions='Banca móvil, Agentes y Bodegas vía PagoEfectivo'
                    description='Genera un código de 9 dígitos y págalo a través de:'
                    informationOne='Banca Móvil / Internet: Paga en BBVA, BCP, Interbank, Scotiabank, BanBif, Caja Arequipa y Banco Pichincha, a través de la banca por internet o banca móvil en la opción pago de servicios.'
                    informationTwo='Agentes y Bodegas: Deposita en BBVA, BCP, Interbank, Scotiabank, BanBif, Wester Union, Tambo+, Kasanet, Ya Ganaste, Red Digital, Comercio Multiservicios Niubiz, MoneyGram, Caja Arequipa, Disashop, Cellpower.'
                    listOfPaymentEntities={[
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_1.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_7.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_2.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_8.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_3.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_9.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_4.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_10.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_5.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_11.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_6.png' },
                      { paymentEntity: 'https://cdnp.teleticket.com.pe/Content/images/mediopago/pagoefectivo_12.png' }
                    ]}
                    informationThree='Revisa el detalle de la compra y el monto a pagar antes de Continuar, una vez procesado el pago no existen cambios ni devoluciones'
                  />
                </Box>
                {!expandedId && (
                  <Box sx={{ paddingLeft: '2%', paddingRight: '2%', marginTop: '30px' }}>
                    <AlertIndications alert='Debe seleccionar un medio de pago' />
                  </Box>
                )}
                <Box>
                  <CostTable ticketName='ESTUDIANTE O BACHILLER' price={159.0} />
                </Box>
              </Box>

              {isSmallScreen && (
                <Typography sx={{ width: '100%', marginTop: '50px' }}>
                  <Link href={expandedId ? '/compra/confirmar' : '#'}>
                    <Button
                      disabled={expandedId ? false : true}
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
                  disableButton={expandedId ? false : true}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default Payments
