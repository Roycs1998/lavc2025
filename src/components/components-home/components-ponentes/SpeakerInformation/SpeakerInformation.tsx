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
    <Card sx={{ maxWidth: '100%', border: 0, marginTop: 10, marginBottom: 10 }}>
      <Grid container spacing={0} sx={{ bgcolor: '#F6A51A', padding: '5%' }}>
        <Grid item xs={12} md={5.5}>
          <CardContent>
            <Typography
              variant='h2'
              component='div'
              gutterBottom
              sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: '50px', color: 'white', fontWeight: 'bold' }}
            >
              {name}
            </Typography>

            <Typography
              variant='h6'
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                fontWeight: 'bold',
                color: 'var(--letter-color)'
              }}
            >
              {accreditations}
            </Typography>

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
                marginTop: '10px',
                color: 'var(--letter-color)'
              }}
            >
              {description}
            </Typography>

            {/* Especializaciones */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: '15px', color: 'var(--letter-color)' }}>
              <Typography
                variant='body1'
                component='span'
                sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--letter-color)' }}
              >
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
                marginBottom: '20px',
                color: 'var(--letter-color)'
              }}
            >
              <Typography
                variant='body1'
                component='span'
                sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--letter-color)' }}
              >
                Intereses científicos:
              </Typography>
              <Typography variant='body1' component='span' sx={{ marginLeft: '8px' }}>
                {scientificInterests}
              </Typography>
            </Box>

            {/* Accordion */}
            {recognitionsAndDecorations && (
              <Box>
                <InformationAccordion title='Reconocimientos y condecoraciones' text={recognitionsAndDecorations} />
              </Box>
            )}

            {certifications && (
              <Box>
                <InformationAccordion title='Certificaciones' text={certifications} />
              </Box>
            )}

            {books && (
              <Box>
                <InformationAccordion title='Libros' text={books} />
              </Box>
            )}

            {research && (
              <Box>
                <InformationAccordion title='Investigaciones' text={research} />
              </Box>
            )}

            {achievements && (
              <Box>
                <InformationAccordion title='Logros' text={achievements} />
              </Box>
            )}

            <Typography sx={{ marginTop: '50px', textAlign: { xs: 'center', md: 'left' } }}>
              <Link href='/ponentes'>
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
                >
                  Ponentes
                </Button>
              </Link>
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12} // Ahora ocupa toda la fila en pantallas pequeñas
          md={6.5}
          sx={{
            display: { xs: 'none', md: 'flex' }, // Ocultar en pantallas pequeñas
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box sx={{ width: 550, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardMedia
              component='img'
              image={image} // Asegúrate de que 'image' contiene una URL válida
              alt='Descripción de la imagen'
              sx={{ maxWidth: '100%', height: 'auto' }} // Se adapta al tamaño del contenedor
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}
