import { Box, Typography } from '@mui/material'

interface Attributes {
  image: string
  title: string
}

export const CardImage = ({ image, title }: Attributes) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '500px', // Ajusta la altura de la imagen como quieras
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        component='img'
        src={image} // URL de la imagen
        alt='example'
        sx={{
          width: '100%',
          height: '100%'
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(58, 52, 128, 0.6)', // Usa 'backgroundColor' en lugar de 'bg'
          height: '500px', // Cambiado 'block-size' a 'height'
          width: '100%' // Cambiado 'inline-size' a 'width'
        }}
      ></Box>

      {/* Título sobre la imagen */}
      <Typography
        className='global-padding'
        variant='h1'
        component='div'
        sx={{
          fontSize: { xs: '4rem', md: '6rem' },
          position: 'absolute', // Posición absoluta para estar encima de la imagen
          color: 'var(--letter-color)', // Color del texto
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para que el texto se destaque
          zIndex: 1 // Asegura que esté por encima de la imagen
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}
