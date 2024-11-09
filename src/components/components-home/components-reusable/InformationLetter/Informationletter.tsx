'use client'

import { useEffect, useState } from 'react'

import { Box, Button, Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'

interface Speaker {
  title: string
  image: string
  description?: string
  subtitleOne?: string
  paragraphOne?: string
  subtitleTwo?: string
  paragraphTwo?: string
  subtitleThree?: string
  stepsThree?: string
  formText?: string
  forButton?: string
  stepsFour?: string
}

export const Informationletter = ({
  title,
  image,
  description,
  subtitleOne,
  paragraphOne,
  subtitleTwo,
  paragraphTwo,
  subtitleThree,
  stepsThree,
  formText,
  forButton,
  stepsFour
}: Speaker) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const truncatedText = paragraphTwo ? paragraphTwo.slice(0, 100) : ''

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
              height: { xs: 'auto', md: 'auto' },
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: { xs: '2.7rem', sm: '4rem', md: '4rem' }
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5.5}>
          <CardContent>
            {/* Imagen en pantallas pequeñas */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' }, // Mostrar solo en pantallas pequeñas
                justifyContent: 'center',
                marginTop: '20px',
                marginBottom: '30px'
              }}
            >
              <CardMedia
                component='img'
                image={image} // Asegúrate de que 'image' contiene una URL válida
                alt='Descripción de la imagen'
                sx={{ maxWidth: '100%', height: 'auto' }} // Se adapta al tamaño del contenedor
              />
            </Box>

            {description && (
              <Typography
                variant='body1'
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  marginTop: '10px'
                }}
              >
                {description}
              </Typography>
            )}

            {/* Especializaciones */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: '15px' }}>
              <Typography
                variant='body1'
                component='span'
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  textTransform: 'uppercase'
                }}
              >
                {subtitleOne}
              </Typography>
              <Typography variant='body1' component='span' sx={{ marginLeft: '8px' }}>
                {paragraphOne}
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
              {paragraphTwo && (
                <Box>
                  <Typography
                    variant='body1'
                    component='span'
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    {subtitleTwo}
                  </Typography>
                  <Typography variant='body1' component='span' sx={{ marginLeft: '8px' }}>
                    {isExpanded ? paragraphTwo : `${truncatedText}...`}
                  </Typography>

                  <Button
                    onClick={toggleExpand}
                    variant='text'
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      textTransform: 'none'
                    }}
                  >
                    {isExpanded ? 'Mostrar menos' : 'Leer más'}
                  </Button>
                </Box>
              )}

              {subtitleThree && (
                <Box sx={{ marginTop: '20px' }}>
                  <Typography
                    variant='body1'
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      textTransform: 'uppercase',

                      marginBottom: '10px'
                    }}
                  >
                    {subtitleThree}
                  </Typography>

                  {stepsThree &&
                    stepsThree.split('.').map(
                      (sentence, index) =>
                        sentence.trim() && (
                          <Typography key={index} variant='body1' sx={{ marginLeft: '8px', marginBottom: '5px' }}>
                            {`${index + 1}. ${sentence.trim()}`}
                          </Typography>
                        )
                    )}

                  {stepsFour &&
                    stepsFour.split('.').map(
                      (sentence, index) =>
                        sentence.trim() && (
                          <Typography key={index} variant='body1' sx={{ marginLeft: '8px', marginBottom: '5px' }}>
                            {sentence.trim()}
                          </Typography>
                        )
                    )}
                </Box>
              )}

              {formText && (
                <Box>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: '1rem',
                      marginTop: '50px'
                    }}
                  >
                    {formText}
                  </Typography>
                  <Typography sx={{ marginTop: '40px', textAlign: { xs: 'center', md: 'center' } }}>
                    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSejP6pbPyJHZ-iRJ118voRfNh365IYi56XGJoy0HrWoeiOHdA/closedform'>
                      <Button
                        sx={{
                          bgcolor: 'var(--primary-color-purple)',
                          color: 'var(--letter-color)',
                          width: 360,
                          height: 65,
                          fontWeight: 'bold',
                          fontSize: '14px',
                          '&:hover': {
                            color: 'var(--letter-color)', // Cambiar color si es necesario
                            bgcolor: '#7f76d9'
                          }
                        }}
                      >
                        {forButton}
                      </Button>
                    </Link>
                  </Typography>
                </Box>
              )}
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
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '620px',
              height: '500px'
            }}
          >
            <CardMedia
              component='img'
              image={image} // Asegúrate de que 'image' contiene una URL válida
              alt='Descripción de la imagen'
              sx={{
                maxWidth: '100%',
                height: '200%',
                transform: `translateY(${offset}px)`,
                transition: 'transform 0.2s ease-out'
              }} // Se adapta al tamaño del contenedor
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}
