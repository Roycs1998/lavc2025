'use client'
import type { SetStateAction } from 'react'
import { useEffect, useState } from 'react'

import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'

import { rucStore } from '@/store/PaymentTypeStore'

export const PaymentDocuments = () => {
  const [selectedOption, setSelectedOption] = useState('boleta')
  const [inputValue, setInputValue] = useState('')

  const updateRuc = rucStore(state => state.updateRuc)

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedOption(event.target.value)
  }

  const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInputValue(event.target.value) // Actualiza el estado con el valor ingresado
  }

  useEffect(() => {
    updateRuc(inputValue)
  }, [inputValue, updateRuc])

  return (
    <Box>
      <FormControl component='fieldset'>
        <RadioGroup row value={selectedOption} onChange={handleChange}>
          <FormControlLabel
            value='boleta'
            control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 18 }, paddingRight: '4px' }} />}
            label='Boleta'
            sx={{ '& .MuiTypography-root': { fontSize: '0.75rem' }, marginRight: '30px' }}
          />
          <FormControlLabel
            value='factura'
            control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 18 }, paddingRight: '4px' }} />}
            label='Factura'
            sx={{ '& .MuiTypography-root': { fontSize: '0.75rem' } }}
          />
        </RadioGroup>

        <Box mt={1} p={0} border='none'>
          {selectedOption === 'boleta' && (
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
          {selectedOption === 'factura' && (
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
                  onChange={handleInputChange}
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
