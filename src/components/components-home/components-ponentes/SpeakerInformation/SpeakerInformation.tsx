import { Box, Button, Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'

import { InformationAccordion } from './InformationAccordion'

interface Speaker {
  name: string
  image: string
  accreditations?: string
  description?: string
  specializations?: string
  scientificInterests?: string
  recognitionsAndDecorations?: string
  certifications?: string
  books?: string
  research?: string
  achievements?: string
}

export const SpeakerInformation = ({
  name,
  image,
  accreditations,
  description,
  specializations,
  scientificInterests,
  recognitionsAndDecorations,
  certifications,
  books,
  research,
  achievements
}: Speaker) => {
  return (
    <Card sx={{ maxWidth: '100%', border: 0 }}>
      <Grid container spacing={0} sx={{ bgcolor: 'var(--color-card-background)', padding: '5%' }}>
        <Grid xs={12} md={12}>
          <Typography
            variant='h2'
            component='div'
            gutterBottom
            sx={{
              textAlign: { xs: 'center', md: 'center' },
              marginTop: '50px',
              height: { xs: '80px', md: '50px' },
              fontWeight: 'bold'
            }}
          >
            {name}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              textAlign: { xs: 'center', md: 'center' },
              fontWeight: 'bold',
              color: '#3a3480 ',
              fontSize: '17px'
            }}
          >
            {accreditations}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5.5}>
          <CardContent>
            {/* Imagen en pantallas pequeñas */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' }, // Mostrar solo en pantallas pequeñas
                justifyContent: 'center',
                marginTop: '20px'
              }}
            >
              <CardMedia
                component='img'
                image={image} // Asegúrate de que 'image' contiene una URL válida
                alt='Descripción de la imagen'
                sx={{ maxWidth: '100%', height: 'auto' }} // Se adapta al tamaño del contenedor
              />
            </Box>

            <Typography
              variant='body1'
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                marginTop: '10px'
              }}
            >
              {description}
            </Typography>

            {/* Especializaciones */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: '15px' }}>
              <Typography variant='body1' component='span' sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Especializaciones:
              </Typography>
              <Typography variant='body1' component='span' sx={{ marginLeft: '8px' }}>
                {specializations}
              </Typography>
            </Box>

            {/* Intereses científicos */}
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                marginTop: '15px',
                marginBottom: '20px'
              }}
            >
              <Typography variant='body1' component='span' sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Intereses científicos:
              </Typography>
              <Typography variant='body1' component='span' sx={{ marginLeft: '8px' }}>
                {scientificInterests}
              </Typography>
            </Box>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12} // Ahora ocupa toda la fila en pantallas pequeñas
          sm={12}
          md={6.5}
          sx={{
            display: { xs: 'none', md: 'flex' }, // Ocultar en pantallas pequeñas
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box sx={{ width: 450, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardMedia
              component='img'
              image={image} // Asegúrate de que 'image' contiene una URL válida
              alt='Descripción de la imagen'
              sx={{ maxWidth: '100%', height: 'auto' }} // Se adapta al tamaño del contenedor
            />
          </Box>
        </Grid>
        <Grid md={12} sm={12} sx={{ marginTop: 1 }}>
          <Box>
            {recognitionsAndDecorations && (
              <Box sx={{ marginBottom: '12px' }}>
                <InformationAccordion title='Reconocimientos y condecoraciones' text={recognitionsAndDecorations} />
              </Box>
            )}

            {certifications && (
              <Box sx={{ marginBottom: '12px' }}>
                <InformationAccordion title='Certificaciones' text={certifications} />
              </Box>
            )}

            {books && (
              <Box sx={{ marginBottom: '12px' }}>
                <InformationAccordion title='Libros' text={books} />
              </Box>
            )}

            {research && (
              <Box sx={{ marginBottom: '12px' }}>
                <InformationAccordion title='Investigaciones' text={research} />
              </Box>
            )}

            {achievements && (
              <Box>
                <InformationAccordion title='Logros' text={achievements} />
              </Box>
            )}
          </Box>

          <Typography sx={{ marginTop: '50px', textAlign: { xs: 'center', md: 'center' } }}>
            <Link href='/ponentes'>
              <Button
                sx={{
                  bgcolor: 'var(--primary-color-purple)',
                  color: 'var(--letter-color)',
                  width: 250,
                  height: 65,
                  fontWeight: 'bold',
                  fontSize: '19px',
                  '&:hover': {
                    color: 'var(--letter-color)', // Cambiar color si es necesario
                    bgcolor: '#7f76d9'
                  }
                }}
              >
                Ponentes
              </Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}
