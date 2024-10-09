'use client'
import { useState } from 'react'

import { Box, Card, CardMedia, Typography } from '@mui/material'

import { red } from '@mui/material/colors'

import { ModalInformation } from './ModalInformation'

interface Image {
  image: string
  name: string
}

export const LetterImage = ({ image, name }: Image) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = () => {
    setIsModalOpen(true) // Abre el modal
  }

  return (
    <Box
      sx={{
        position: 'relative', // Para que el overlay se posicione sobre la imagen
        width: '100%',
        height: 400, // Ajusta el tamaño del contenedor
        overflow: 'hidden',
        '&:hover .overlay': {
          // Cuando se hace hover en el Box, se activa la clase .overlay
          opacity: 1,
          transform: 'translateX(0)' // Mueve el overlay a su posición original
        }
      }}
    >
      <Card
        sx={{
          position: 'relative', // Para posicionar el overlay
          overflow: 'hidden', // Asegura que el overlay no sobresalga de la tarjeta
          borderRadius: 0,
          transition: 'transform 0.3s',
          height: 400,
          width: '100%'
        }}
      >
        <CardMedia
          component='img' // Especifica que el componente es una imagen
          height='100%'
          width='100%' // Altura de la imagen
          image={image} // URL de la imagen
        />
      </Card>
      <Box
        onClick={handleCardClick}
        className='overlay' // Clase para identificar el overlay
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.60)', // Fondo semitransparent
          opacity: 0, // Inicia invisible
          transition: 'transform 0.6s ease, opacity 0.5s ease', // Anima la opacidad y el movimiento
          // Anima la opacidad y el movimiento
          transform: 'translateX(-100%)' // Inicialmente coloca el over, // Posiciona el overlay fuera de la carta (arriba y a la izquierda)
        }}
      ></Box>

      <Box
        onClick={handleCardClick}
        className='overlay'
        sx={{
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          right: 0, // Posicionado desde la derecha
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.60)', // Fondo semitransparente
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0, // Inicia invisible
          transition: 'transform 0.6s ease, opacity 0.5s ease', // Anima la opacidad y el movimiento
          transform: 'translateX(100%)' // Inicialmente coloca el overlay fuera del lado derecho
        }}
      >
        <Typography variant='h6' sx={{ color: '#6660a5', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>
          {name}
        </Typography>
      </Box>

      <ModalInformation
        isOpen={isModalOpen} // Estado del modal
        onClose={() => setIsModalOpen(false)}
        name='Marco Vega'
        information='Benita Altier is a Licensed Veterinary Technician and a Veterinary Technician Specialist in Dentistry. She began her career in veterinary technology in 1988 and has worked in small animal general medicine, ophthalmology, equine and llama neonatal care, canine reproduction, and dental specialty. Benita is the current President of the Academy of Veterinary Dental Technicians, Member at Large for the Arizona Veterinary Technician Association, and former Secretary for the Washington State Association of Veterinary Technicians. She has co-authored two textbooks on veterinary dentistry for technicians and published several articles in professional journals. Through her business, Pawsitive Dental Education LLC, she has provided professional dental instruction and consultation to veterinary hospitals and conferences across the US, Canada, and China since 2008. She is very passionate about giving back to the profession and helping veterinary technicians grow their careers in ways they never thought possible.'
        image={image} // Función para cerrar el modal
      />
    </Box>
  )
}
