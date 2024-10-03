import * as React from 'react'

import Link from 'next/link'

import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

// Definimos el tipo de datos que vamos a recibir
interface Data {
  image: string
  name: string
  link: string
}

// Recibimos la lista de elementos como props
interface InformationList {
  title: string
  information: Data[]
}

export const LavcLetter = ({ title, information }: InformationList) => {
  return (
    <Card sx={{ maxWidth: '100%', boxShadow: '1' }}>
      <Typography
        variant='h5'
        sx={{
          fontWeight: 700,
          margin: '4px',
          bgcolor: '#153B8B',
          color: '#f0f1f3',
          height: 40,
          textAlign: 'center',
          lineHeight: '40px',
          marginTop: 2,
          width: '100%',
          borderTopLeftRadius: '15px' // Redondea solo la esquina superior izquierda
        }}
      >
        {title}
      </Typography>
      <CardContent sx={{ padding: 2 }}>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
          {/* Mapeamos la lista de elementos */}
          {information.map((item, index) => (
            <Grid container item xs={12} spacing={3} key={index}>
              {/* Primera columna: Imagen */}
              <Grid item xs={6}>
                <CardMedia
                  component='img'
                  height='200'
                  image={item.image}
                  alt={`Imagen ${index}`}
                  sx={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }}
                />
              </Grid>
              {/* Segunda columna: Título y descripción */}
              <Grid item xs={5.5}>
                <Typography variant='h6' sx={{ fontWeight: 700, marginTop: 2, color: '#153B8B' }}>
                  {item.name}
                </Typography>
                <Typography variant='body1' sx={{ marginTop: 2.5 }}>
                  Nov 11 - 12, 2024
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary', marginTop: 3.5 }}>
                  <Link href={item.link}>
                    <Button
                      variant='contained'
                      sx={{
                        height: 50,
                        width: '80%',
                        fontWeight: 700,
                        bgcolor: '#153B8B',
                        fontSize: 15,
                        borderRadius: '15px'
                      }}
                    >
                      VIDEO
                    </Button>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}
