'use client'
import type { SetStateAction } from 'react'
import { useEffect, useState } from 'react'

import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'

export const PaymentDocuments = () => {
  const [selectedOption, setSelectedOption] = useState('Boleta')
  const [inputValue, setInputValue] = useState('')
  const [companyName, setCompanyName] = useState('')

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedOption(event.target.value)
  }

  useEffect(() => {
    const storedEvent = localStorage.getItem('eventData')

    if (storedEvent) {
      const event = JSON.parse(storedEvent)

      const updatedEventData = {
        ...event, // Copiamos las propiedades del evento original
        typeOfPayment: selectedOption,
        ruc: selectedOption === 'Factura' ? inputValue : '',
        companyName: companyName
      }

      localStorage.setItem('eventData', JSON.stringify(updatedEventData))
    }
  }, [inputValue, companyName, selectedOption])

  return (
    <Box>
      <FormControl component='fieldset'>
        <RadioGroup row value={selectedOption} onChange={handleChange}>
          <FormControlLabel
            value='Boleta'
            control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 18 }, paddingRight: '4px' }} />}
            label='Boleta'
            sx={{ '& .MuiTypography-root': { fontSize: '0.75rem' }, marginRight: '30px' }}
          />
          <FormControlLabel
            value='Factura'
            control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 18 }, paddingRight: '4px' }} />}
            label='Factura'
            sx={{ '& .MuiTypography-root': { fontSize: '0.75rem' } }}
          />
        </RadioGroup>

        <Box mt={1} p={0} border='none'>
          {selectedOption === 'Boleta' && (
            <Box>
              <Typography variant='body1' sx={{ fontSize: '0.9rem' }}>
                Las entradas son vendidas por TELETICKET, por cuenta y orden de la empresa organizadora del evento,
                correspondiéndole la entrega de Comprobante de Pago (boleta o factura) únicamente por el monto de la
                comisión por servicio de venta.
              </Typography>
              <Typography variant='body1' sx={{ fontSize: '0.9rem', marginTop: '25px' }}>
                Para descargar tu Boleta ingresa a “MI CUENTA”
              </Typography>
            </Box>
          )}
          {selectedOption === 'Factura' && (
            <Box>
              <Typography variant='h5' sx={{ marginBottom: '10px' }}>
                Ingresa tus datos para generar factura por S/ 3.00
              </Typography>
              <Typography variant='body1' sx={{ fontSize: '0.7rem', fontWeight: 700, marginBottom: '5px' }}>
                RUC Empresa
              </Typography>
              <Box sx={{ marginBottom: '20px' }}>
                <TextField
                  id='outlined-basic'
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  variant='outlined'
                  placeholder='Ingresa el RUC de la empresa'
                  type='number'
                  sx={{
                    width: '100%', // Ajusta el ancho
                    '& .MuiInputBase-root': {
                      height: '26px',
                      borderRadius: '0',
                      '& input': {
                        fontSize: '0.8rem' // Cambia este valor al tamaño de letra que desees
                      }
                    }
                  }}
                />
              </Box>
              <Typography variant='body1' sx={{ fontSize: '0.7rem', fontWeight: 700, marginBottom: '5px' }}>
                Nombre de empresa
              </Typography>
              <Box sx={{ marginBottom: '20px' }}>
                <TextField
                  id='outlined-basic'
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  variant='outlined'
                  placeholder='Ingresa el RUC de la empresa'
                  type='text'
                  sx={{
                    width: '100%', // Ajusta el ancho
                    '& .MuiInputBase-root': {
                      height: '26px',
                      borderRadius: '0',
                      '& input': {
                        fontSize: '0.8rem' // Cambia este valor al tamaño de letra que desees
                      }
                    }
                  }}
                />
              </Box>

              <Box sx={{ paddingLeft: '10px' }}>
                <Typography
                  variant='body1'
                  sx={{ '&::before': { content: '"•"', marginRight: '4px', fontWeight: 700 }, fontSize: '0.9rem' }}
                >
                  La factura se realizará por el monto correspondiente a la comisión
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ '&::before': { content: '"•"', marginRight: '4px', fontWeight: 700 }, fontSize: '0.9rem' }}
                >
                  Si requieres factura por el monto restante, deberás solicitarlo directamente a la empresa
                  organizadora.
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </FormControl>
    </Box>
  )
}
