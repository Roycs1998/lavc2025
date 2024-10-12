import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'

interface images {
  image: string
}

interface SponsorImages {
  images: images[]
}

export const CardExhibitors = ({ images }: SponsorImages) => {
  return (
    <Card sx={{ maxWidth: '100%', border: 0, boxShadow: 'none' }}>
      <Grid className='global-padding' container spacing={1.5} sx={{ bgcolor: '#f7f7f7', padding: '5%' }}>
        {images.map((image, index) => (
          <Grid
            key={index}
            item
            xs={6} // En pantallas pequeñas, se mostrarán 2 por fila
            sm={4} // En pantallas medianas, se mostrarán 3 por fila
            md={1.2} // En pantallas más grandes, se mostrarán 4 por fila
          >
            <Box
              sx={{ width: '130px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <CardMedia
                component='img'
                image={image.image} // Se usa el enlace de la imagen del array
                alt={`Imagen ${index + 1}`} // Alternativa para accesibilidad
                sx={{ maxWidth: '100%', height: '100%', padding: '10px' }} // Ajustar al tamaño del contenedor
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}
