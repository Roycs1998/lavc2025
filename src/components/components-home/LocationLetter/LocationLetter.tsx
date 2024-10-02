'use client'
import Link from 'next/link'

import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import AddLocationIcon from '@mui/icons-material/AddLocation'

export const LocationLetter = () => {
  return (
    <Card sx={{ maxWidth: '100%', border: 0, borderBottom: '10px solid #b28106' }}>
      <Grid container spacing={0} sx={{ bgcolor: '#F6A51A', padding: '20px' }}>
        <Grid item xs={12} md={1.5}></Grid>
        <Grid item xs={12} md={4}>
          <CardContent>
            <Typography
              variant='h4'
              component='div'
              gutterBottom
              sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: '50px', color: 'white', fontWeight: 'bold' }}
            >
              UBICACIÓN DEL EVENTO
            </Typography>
            <Typography
              variant='h6'
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                marginTop: '20px',
                fontWeight: 'bold',
                color: 'var(--letter-color)'
              }}
            >
              CENTRO DE EXPOSICIONES JOCKEY Av. Javier Prado Este cruce con carretera Panamericana Sur S/N , alt. Puerta
              1 Hipódromo de Monterrico, Parcela l, Santiago de Surco
            </Typography>
            <Typography sx={{ marginTop: '50px', textAlign: { xs: 'center', md: 'left' } }}>
              <Link href='https://maps.app.goo.gl/eryFPrdrc6KpDuq86'>
                <Button
                  sx={{
                    bgcolor: 'white',
                    color: '#F6A51A',
                    width: 250,
                    height: 65,
                    fontWeight: 'bold',
                    fontSize: '19px',
                    '&:hover': {
                      color: 'var(--letter-color)', // Cambiar color si es necesario
                      bgcolor: '#fbc05a'
                    }
                  }}
                  endIcon={<AddLocationIcon />}
                >
                  UBICACIÓN
                </Button>
              </Link>
            </Typography>
          </CardContent>
        </Grid>
        {/* Texto del Evento */}
        <Grid
          md={4.5}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
              justifyContent: 'center', // Centra horizontalmente
              alignItems: 'center'
            }
          }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62420.70570072013!2d-76.979608!3d-12.092007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7b0e5806cad%3A0x94a4c31cbaad2ae8!2sCentro%20de%20Exposiciones%20Jockey!5e0!3m2!1ses-419!2spe!4v1727795325243!5m2!1ses-419!2spe'
            width='100%'
            height='380'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Grid>
        <Grid item xs={12} md={1.5}></Grid>
      </Grid>
    </Card>
  )
}
