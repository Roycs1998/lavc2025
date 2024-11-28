'use client'
import React, { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'

interface Attributes {
  image: string
  title: string
}

export const CardImage = ({ image, title }: Attributes) => {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    setOffsetY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden' // Para ocultar el exceso de la imagen cuando se aplica el parallax
      }}
    >
      <Box
        component='img'
        src={image}
        alt='example'
        sx={{
          width: '100%',
          height: '100%',
          transform: `translateY(${offsetY * 0.5}px)`, // Aplicación del efecto parallax
          transition: 'transform 0.1s ease-out' // Suaviza el desplazamiento
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(58, 52, 128, 0.6)',
          height: '500px',
          width: '100%'
        }}
      />

      {/* Título sobre la imagen */}
      <Typography
        className='global-padding'
        variant='h1'
        component='div'
        sx={{
          fontSize: { xs: '3.1rem', sm: '4rem', md: '6rem' },
          position: 'absolute',
          color: 'var(--letter-color)',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          zIndex: 1,
          textAlign: 'center'
        }}
      >
        {title.toUpperCase()}
      </Typography>
    </Box>
  )
}
