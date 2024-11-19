'use client'
import { useState } from 'react'

import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'

import { CheckPaymentGateway } from './PaymentGateway'
import { AlertIndications } from '@/components/components-home/components-reusable/AlertIndications'

interface EventInformation {
  image: string
  eventLocation: string
  eventDate: string
  eventName: string
  disableButton?: boolean
  amount: number
  typeOfPayment: string
}

export const ConfirmPayment = ({
  image,
  eventLocation,
  eventDate,
  eventName,
  disableButton = false,
  amount,
  typeOfPayment
}: EventInformation) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null)

  const handlerClickOpenPay = () => {
    CheckPaymentGateway(amount, typeOfPayment, setAlertMessage)
  }

  return (
    <Box>
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 0,
          boxShadow: 'none'
        }}
      >
        <Box sx={{ height: '210px', width: '100%', overflow: 'hidden' }}>
          <Box
            component='img'
            src={image}
            alt=''
            className='card-media'
            sx={{
              width: '100%',
              height: '100%'
            }}
          />
        </Box>
        <CardContent sx={{ bgcolor: '#ffffff', paddingLeft: '0px', paddingTop: '10px' }}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <Typography variant='body1' fontWeight='bold' sx={{ fontSize: '13px' }}>
                {eventLocation}
              </Typography>
              <Typography
                variant='h6'
                fontWeight='bold'
                sx={{ paddingTop: '12px', fontSize: '1.8rem', fontWeight: 700 }}
              >
                {eventName}
              </Typography>
              <Typography variant='body1' sx={{ color: 'text.secondary', fontSize: '12px', paddingTop: '5px' }}>
                {eventDate}
              </Typography>
              <Typography sx={{ minWidth: '300px', width: '400px', marginTop: '30px' }}>
                <Button
                  onClick={handlerClickOpenPay}
                  disabled={disableButton}
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
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        {alertMessage && <AlertIndications alert={alertMessage} />}
      </Card>
    </Box>
  )
}
