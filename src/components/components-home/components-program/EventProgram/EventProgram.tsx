'use client'
import React from 'react'

import { Box, Tab, Tabs, Typography } from '@mui/material'

import PetsIcon from '@mui/icons-material/Pets'

import { Icon } from '@iconify/react/dist/iconify.js'

import { ProgramLetters } from './ProgramLetters'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export const EventProgram = () => {
  const [value, setValue] = React.useState(0)

  const days = [
    {
      day: 'Lunes 18',
      content: [
        {
          facultad: 'medicina-felina',
          hour: '8:00 am - 10:00 am',
          issue: 'Desentrañando los misterios del gato vomitador. Parte 1',
          exhibitorName: 'by Nicole K. Martell-Moran,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/MartellMoran.png',
          eventDescription:
            'Desentrañando los misterios del gato...',
          location: 'Sala #1'
        },
        {
          facultad: 'medicina-felina',
          hour: '10:00 am - 12:00 pm',
          issue: 'Desentrañando los misterios del gato vomitador. Parte 2',
          exhibitorName: 'by Nicole K. Martell-Moran,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/MartellMoran.png',
          eventDescription: 'Desentrañando los misterios del gato... Parte 2',
          location: 'Sala #1'
        },
        {
          type: 'separator',
          hour: '12:00 pm - 1:00 pm',
          issue: 'Almuerzo',
          exhibitorName: 'by Nicole K. Martell-Moran,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/MartellMoran.png',
          eventDescription: 'Desentrañando los misterios del gato... Parte 2',
          location: 'Sala #1'
        },
        {
          facultad: 'medicina-felina',
          hour: '1:00 pm - 02:00 pm',
          issue: 'Efectos de la extirpación de garras en gatos y por qué no debe realizarse',
          exhibitorName: 'by Nicole K. Martell-Moran,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/MartellMoran.png',
          eventDescription: 'Efectos de la extirpación de garras en gatos... ',
          location: 'Sala #1'
        },
        {
          facultad: 'medicina-felina',
          hour: '02:00 pm - 04:00 pm',
          issue: 'Diagnóstico y manejo del hipertiroidismo en gatos',
          exhibitorName: 'by Nicole K. Martell-Moran,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/MartellMoran.png',
          eventDescription: 'Diagnóstico y manejo del hipertiroidismo en gatos...',
          location: 'Sala #1'
        }
        ,
        {
          facultad: 'medicina-felina',
          hour: '04:00 pm - 05:00 pm',
          issue: 'Rinitis crónica en gatos',
          exhibitorName: 'by Nicole K. Martell-Moran,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/MartellMoran.png',
          eventDescription: 'Rinitis crónica en gatos...',
          location: 'Sala #1'
        }
        ,
        {
          facultad: 'medicina-felina',
          hour: '05:00 pm - 06:00 pm',
          issue: 'Presentaciones y gestión de FIP',
          exhibitorName: 'by Nicole K. Martell-Moran,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/MartellMoran.png',
          eventDescription: 'Presentaciones y gestión de FIP...',
          location: 'Sala #2'
        },
        {
          facultad: 'enfermedades-respiratorias',
          hour: '8:00 am - 10:00 am',
          issue: 'Uso de los Patrones de Respiración en la Evaluación de la Dificultad Respiratoria en Gatos.',
          exhibitorName: 'by Carol Reinero,,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/reinero.png',
          eventDescription: 'Uso de los Patrones de Respiración en la Evaluación de la Dificultad Respiratoria en Gatos...',
          location: 'Sala #2'
        },
        {
          facultad: 'enfermedades-respiratorias',
          hour: '10:00 am - 12:00 pm',
          issue: 'Neumonía Bacteriana Canina: ¿Qué Hay de Nuevo?.',
          exhibitorName: 'by Carol Reinero,,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/reinero.png',
          eventDescription: 'Neumonía Bacteriana Canina: ¿Qué Hay de Nuevo?...',
          location: 'Sala #2'
        },
        {
          type: 'separator',
          hour: '12:00 pm - 1:00 pm',
          issue: 'Principios Farmacológicos para el Manejo de Enfermedades Respiratorias.',
          exhibitorName: 'by Carol Reinero,,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/reinero.png',
          eventDescription: 'Principios Farmacológicos para el Manejo de Enfermedades Respiratorias...',
          location: 'Sala #2'
        },
        {
          facultad: 'enfermedades-respiratorias',
          hour: '1:00 pm - 02:00 pm',
          issue: 'Enfermedades Respiratorias que Puede Que No Haya Aprendido en la Escuela Veterinaria.',
          exhibitorName: 'by Carol Reinero,,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/reinero.png',
          eventDescription: 'Enfermedades Respiratorias que Puede Que No Haya Aprendido en la Escuela Veterinaria...',
          location: 'Sala #2'
        },
        {
          facultad: 'enfermedades-respiratorias',
          hour: '02:00 pm - 04:00 pm',
          issue: 'Casos Respiratorios Desafiantes en Perros y Gatos.',
          exhibitorName: 'by Carol Reinero,,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/reinero.png',
          eventDescription: 'Casos Respiratorios Desafiantes en Perros y Gatos...',
          location: 'Sala #2'
        }
        ,
        {
          facultad: 'enfermedades-respiratorias',
          hour: '04:00 pm - 05:00 pm',
          issue: 'Enfermedad de las Grandes Vías Respiratorias (bronquial) en gatos..',
          exhibitorName: 'by Carol Reinero,,',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/reinero.png',
          eventDescription: 'Enfermedad de las Grandes Vías Respiratorias (bronquial) en gatos....',
          location: 'Sala #2'
        }
      ]
    },
    {
      day: 'Martes 19',
      content: [
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/Enie%20Ward.jpg',
          eventDescription: '',
          location: ''
        },
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/802d9320-c709-4b93-86b4-6e995b5199ca.jpeg',
          eventDescription: '',
          location: ''
        },
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/Enie%20Ward.jpg',
          eventDescription: '',
          location: ''
        },
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/esther-klok.png',
          eventDescription: '',
          location: ''
        },
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/BENITA.jpg',
          eventDescription: '',
          location: ''
        }
      ]
    },
    {
      day: 'Miércoles 20',
      content: [
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/esther-klok.png',
          eventDescription: '',
          location: ''
        },
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/BENITA.jpg',
          eventDescription: '',
          location: ''
        }
      ]
    },
    {
      day: 'Jueves 21',
      content: [
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/BENITA.jpg',
          eventDescription: '',
          location: ''
        },
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/esther-klok.png',
          eventDescription: '',
          location: ''
        }
      ]
    }
  ]

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Coloca los elementos en columnas en pantallas pequeñas
          width: '100%',
          height: 'auto' // Ajusta la altura automática para evitar restricciones en pantallas pequeñas
        }}
      >
        {/* Primer elemento */}
        <Box
          sx={{
            display: 'flex',
            width: { xs: '100%', md: '45%' }, // Ocupa el 100% en pantallas pequeñas y 40% en medianas y grandes
            height: { xs: '100%', md: '100px' },
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            bgcolor: 'var(--letter-color)',
            paddingLeft: 'var(--global-padding-inline)'
          }}
        >
          <Typography
            className='global-padding hidden md:block '
            variant='h1'
            component='div'
            sx={{
              fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 800,
              textAlign: 'center',
              width: '100%',
              color: '#3a3480'
            }}
          >
            <PetsIcon sx={{ fontSize: { xs: '3rem', sm: '3rem', md: '4rem' } }}></PetsIcon> LAVC 2026
          </Typography>
        </Box>

        {/* Segundo elemento */}
        <Box
          sx={{
            display: 'flex',
            width: { xs: '100%', md: '55%' }, // Ocupa el 100% en pantallas pequeñas y 60% en medianas y grandes
            height: '100px',
            bgcolor: '#f9c426',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            paddingRight: 'var(--global-padding-inline)'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            sx={{
              '& .MuiTab-root.Mui-selected': {
                color: 'var(--color-on-hover)'
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'var(--color-on-hover)'
              }
            }}
          >
{days.map((day, index) => {
  
  const isEnabled = index === 0 // Solo el primer día está habilitado
  
  return (
    <Tab
      key={index}
      disabled={!isEnabled}
      sx={{
        fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
        fontWeight: 700,
        color: 'var(--letter-color)',
        mr: { xs: 1, sm: 3, md: 6 },
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        opacity: isEnabled ? 1 : 0.5, // Visualmente más tenue
        pointerEvents: isEnabled ? 'auto' : 'none' // Por si acaso
      }}
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isEnabled && <Icon icon="streamline-pixel:interface-essential-waiting-hourglass-loading" fontSize="1.2rem" />}
          {day.day}
        </Box>
      }
      {...a11yProps(index)}
    />
  )
})}
          </Tabs>
        </Box>
      </Box>

      {/* Panel de contenido */}
      <Box
        sx={{
          bgcolor: 'var(--background-form)',
          paddingTop: {
            xs: '20px',
            md: '50px',
            paddingLeft: 'var(--global-padding-inline)',
            paddingRight: 'var(--global-padding-inline)',
            paddingBottom: '3%'
          }
        }}
      >
        {days.map((day, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {day.content.map((item, itemIndex) => (
              <Box key={itemIndex} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ProgramLetters
                  hour={item.hour}
                  issue={item.issue}
                  exhibitorName={item.exhibitorName}
                  image={item.image}
                  eventDescription={item.eventDescription}
                  location={item.location}
                />
              </Box>
            ))}
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  )
}
