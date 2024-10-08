'use client'
import { useState } from 'react'

import { Box, Card, CardMedia } from '@mui/material'

import { red } from '@mui/material/colors'

import { ModalInformation } from './ModalInformation'

interface Image {
  image: string
}

export const LetterImage = ({ image }: Image) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = () => {
    setIsModalOpen(true) // Abre el modal
  }

  return (
    <Box>
      <Card
        onClick={handleCardClick}
        sx={{
          position: 'relative', // Para posicionar el overlay
          overflow: 'hidden', // Asegura que el overlay no sobresalga de la tarjeta
          borderRadius: '10px',
          transition: 'transform 0.3s',
          margin: 10,
          height: 470,
          width: 340,
          cursor: 'pointer',
          '&:hover': {
            bg: red
          }
        }}
      >
        <CardMedia
          component='img' // Especifica que el componente es una imagen
          height='100%'
          width='100%' // Altura de la imagen
          image={image} // URL de la imagen
        />
      </Card>
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
