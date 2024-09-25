'use client'
import { useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { Box, Button, Typography } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import style from './carrucel.module.css'

export const Carrucel = () => {
  const [index, setIndex] = useState(0)

  const carouselItems = [
    {
      src: 'https://tlavc-peru.org/tlavc/vista/upload/talleres/Portada%20presentaci%C3%B3n%20escalada%20deportiva.jpg',
      alt: 'First slide'
    },
    {
      src: 'https://tlavc-peru.org/tlavc/vista/upload/talleres/LAVC2025.jpg',
      alt: 'Second slide'
    }
  ]

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <Box>
      <Carousel
        className={`${style.container}`}
        activeIndex={index}
        indicators={false}
        controls={false}
        interval={500}
        onSelect={handleSelect}
      >
        {carouselItems.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img className={style.imagen} src={item.src} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Box className={style.layer}></Box>
      <Box className={style.containerEvent}>
        <Box className={'contenedorText'}>
          <Typography
            variant='h4'
            className={style.eventDate}
            sx={{ color: 'white', fontWeight: 700, fontFamily: 'Arial, sans-serif' }}
          >
            29-31 August @ New York
          </Typography>
          <Typography
            variant='h3'
            className={style.eventName}
            sx={{ color: 'white', fontWeight: 700, fontFamily: 'Arial, sans-serif' }}
          >
            AI Conference 2023: Unlocking the Future
          </Typography>
          <Typography
            variant='h6'
            className={style.eventMotto}
            sx={{ color: 'white', fontWeight: 700, fontFamily: 'Arial, sans-serif' }}
          >
            Join us for the most anticipated event of the year - the AI Conference 2023!
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' sx={{ width: '200px' }}>
          <Button
            className={style.eventButtonOne}
            sx={{
              height: 55,
              width: 150,
              borderRadius: 3,
              backgroundColor: 'white',
              color: 'black',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 700,
              '&:hover': {
                backgroundColor: 'white' // Mantiene el mismo color en hover
              }
            }}
            variant='contained'
          >
            Event
          </Button>
          <Button
            className={style.eventButtonTwo}
            sx={{
              height: 60,
              borderRadius: '50%',
              width: 40,
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: 'white' // Mantiene el mismo color en hover
              }
            }}
            variant='contained'
          >
            <ArrowRightIcon sx={{ fontSize: 45 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
