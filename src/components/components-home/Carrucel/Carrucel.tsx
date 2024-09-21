'use client'
import { useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'

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
    <Carousel
      className={style.container}
      activeIndex={index}
      indicators={false}
      controls={false}
      interval={500}
      onSelect={handleSelect}
    >
      {carouselItems.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img className={style.imagen} src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>LAVC 2025</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
