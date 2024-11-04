'use client'
import { useState } from 'react'

import Link from 'next/link'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import { Box, Button, MenuItem, TextField } from '@mui/material'

export const PurchaseLetter = () => {
  const [problemType, setProblemType] = useState('')

  const [expanded, setExpanded] = useState(true)

  const categories = [
    {
      value: 'MEDICO VETERINARIO'
    },
    {
      value: 'ESTUDIANTE O BACHILLER'
    },
    {
      value: 'VETERINARIO/ESTUDIANTE EXTRA'
    }
  ]

  const handleChange = (event: React.SyntheticEvent, newExpanded: boolean | ((prevState: boolean) => boolean)) => {
    setExpanded(newExpanded)
  }

  return (
    <Box sx={{ paddingTop: '5%' }}>
      <Box
        sx={{
          width: '450px',
          height: '60px',
          background: 'linear-gradient(to left,#3a3480, #e2d9f1)',
          marginBottom: '20px'
        }}
      >
        <Typography
          sx={{
            color: 'var(--letter-color)',
            height: '100%',
            width: '100%',
            display: 'flex',
            marginLeft: '30px',
            alignItems: 'center',
            fontSize: '13px'
          }}
        >
          SELECCIONA FUNCIÓN
        </Typography>
      </Box>
      <Box sx={{ width: '450px' }}>
        <Accordion expanded={expanded} sx={{ borderRadius: 'none' }} onChange={handleChange}>
          <AccordionSummary aria-controls='panel1-content' id='panel1-header'>
            <Box sx={{ height: '90px', width: '100%' }}>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  padding: '20px'
                }}
              >
                MAR. 12 NOVIEMBRE 19:30
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: '#f9f6fe' }}>
            <Box
              sx={{
                height: '150px',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '15px',
                paddingRight: '15px'
              }}
            >
              <TextField
                fullWidth
                sx={{
                  width: '100%',
                  fontSize: '1rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#202021' // Mantiene el color actual
                    },
                    '&:hover fieldset': {
                      borderColor: '#202021' // Desactiva el cambio de color al hacer hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#202021' // Desactiva el cambio de color al hacer focus
                    }
                  },
                  '& .MuiInputLabel-root': {
                    color: '#202021' // Color del label inicial
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#202021' // Color del label al enfocarse
                  },
                  '& .MuiInputLabel-shrink': {
                    color: '#202021' // Color del label cuando sube al escribir
                  }
                }}
                id='outlined-select-currency'
                select
                label='Categorias'
                defaultValue=''
                value={problemType} // Estado del campo de mensaje
                onChange={e => setProblemType(e.target.value)}
              >
                {categories.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box sx={{ height: '80px' }}>
              <Typography sx={{ padding: '20px' }}>
                <Link href={problemType ? `/compra/${problemType}` : '#'}>
                  <Button
                    disabled={!problemType}
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
                    COMPRAR TU ENTRADA
                  </Button>
                </Link>
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
