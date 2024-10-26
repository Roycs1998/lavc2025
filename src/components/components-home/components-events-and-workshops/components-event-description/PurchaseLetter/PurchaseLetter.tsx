import * as React from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import { Box, Button, Link } from '@mui/material'

export const PurchaseLetter = () => {
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
        <Accordion sx={{ borderRadius: 'none' }}>
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
                  fontSize: '1.2rem'
                }}
              >
                MAR. 12 NOVIEMBRE 19:30
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: '#f9f6fe' }}>
            <Box sx={{ height: '150px' }}>
              <Typography
                sx={{
                  paddingLeft: '15px',
                  paddingRight: '15 px',
                  height: '100%',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                No dejes que te lo cuenten. Consigue tus entradas y vive la experiencia en primera persona.
              </Typography>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box sx={{ height: '80px' }}>
              <Typography sx={{ padding: '20px' }}>
                <Link href='/ponentes'>
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
