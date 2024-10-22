import { Box, CardMedia, Grid, Typography } from '@mui/material'

import { Form } from './Form'

export const Medium = () => {
  return (
    <Box
      sx={{
        maxWidth: '90%',
        paddingBottom: '3%',
        paddingTop: '3%',
        background: 'var(--color-card-background)',
        borderRadius: '10px'
      }}
    >
      <Box sx={{ marginBottom: { xs: '0px', md: '30px' } }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #d8d8d8 40%, #7f76d9 60%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Get in touch
        </Typography>
        <Typography variant='h6' sx={{ textAlign: 'center' }}>
          Reach out, and let s create a universe of possibilities together!
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'center', md: 'center' }
          }}
        >
          <Grid item xs={12} sm={12} md={6} sx={{ boxShadow: 'none', border: 'none' }}>
            <Form />
          </Grid>
          {/* Modificar el Grid para la imagen */}
          <Grid
            item
            md={5} // Mantener el tamaño en pantallas medianas
            sx={{
              display: { xs: 'none', md: 'flex' }, // Ocultar en xs y sm, mostrar en md
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                maxWidth: '100%',
                height: '590px',
                display: 'flex', // Flexbox para centrar el contenido
                alignItems: 'center', // Centra verticalmente el contenido dentro del Box
                justifyContent: 'center'
              }}
            >
              <CardMedia
                component='img'
                image='https://i.pinimg.com/736x/30/21/50/3021501f3738c05001f3d35d8ec648d5.jpg' // Se usa el enlace de la imagen del array
                alt='ola' // Alternativa para accesibilidad
                sx={{ maxWidth: '100%', height: '100%', padding: '3px', borderRadius: '15px' }} // Ajustar al tamaño del contenedor
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
