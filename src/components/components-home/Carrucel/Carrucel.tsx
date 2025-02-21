'use client'
import { useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { Box, Button, Typography } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import type { getDictionary } from '@/utils/getDictionary'

import style from './carrucel.module.css'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Carrucel = ({ dictionary }: Props) => {
  const [index, setIndex] = useState(0)

  const carouselItems = [
    {
      src: 'https://tlavc-peru.org/img/foto-precios.jpg',
      alt: 'First slide'
    },
    {
      src: 'https://tlavc-peru.org/tlavc/vista/upload/galeria/lavc20231%20(13).jpeg',
      alt: 'Second slide'
    }
  ]

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Carousel
        className={`${style.container}`}
        activeIndex={index}
        indicators={false}
        controls={false}
        interval={2000}
        onSelect={handleSelect}
      >
        {carouselItems.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img className={style.imagen} src={item.src} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>

      <Box className={style.layer}></Box>

      {/* Contenedor del texto superpuesto al carrusel */}
      <Box className={`${style.textOverlay}`}>
        <Typography
          variant='h4'
          sx={{
            color: 'var(--letter-color)',
            fontWeight: 700,
            fontFamily: 'Arial, sans-serif',
            marginBottom: '10px',
            fontSize: { xs: '1.7rem', sm: '2rem', md: '2.5rem' }, // Tamaños responsivos
            textAlign: 'center'
          }}
        >
          {dictionary?.nav_main?.carrucel.date}
        </Typography>
        <Typography
          variant='h3'
          sx={{
            color: 'var(--letter-color)',
            fontWeight: 700,
            fontFamily: 'Arial, sans-serif',
            marginBottom: '10px',
            fontSize: { xs: '3rem', sm: '2.5rem', md: '3rem' }, // Tamaños responsivos
            textAlign: 'center'
          }}
        >
          {dictionary?.nav_main?.carrucel.event_name}
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'var(--letter-color)',
            fontWeight: 700,
            fontFamily: 'Arial, sans-serif',
            fontSize: { xs: '1.5rem', sm: '1.2rem', md: '1.5rem' }, // Tamaños responsivos
            textAlign: 'center'
          }}
        >
          {dictionary?.nav_main?.carrucel.event_invitation}
        </Typography>

        {/* Botones */}
        <Box display='flex' justifyContent='center' sx={{ marginTop: '30px' }}>
          <Button
            sx={{
              height: 55,
              width: 150,
              borderRadius: 3,
              backgroundColor: 'white',
              color: 'black',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 700,
              marginLeft: { xs: 4 },
              fontSize: '18px',
              marginRight: '10px',
              '&:hover': {
                backgroundColor: 'white'
              }
            }}
            variant='contained'
          >
            {dictionary?.nav_main?.carrucel.event}
          </Button>
          <Button
            sx={{
              height: 60,
              borderRadius: '50%',
              width: 40,
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: 'white'
              }
            }}
            variant='contained'
          >
            <ArrowRightIcon sx={{ fontSize: '60px' }} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
