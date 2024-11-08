'use client'
import React from 'react'

import { Box, Tab, Tabs, Typography } from '@mui/material'

import PetsIcon from '@mui/icons-material/Pets'

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
      day: 'PRIMER DIA',
      content: [
        {
          hour: '9:00 am - 11:00 am',
          issue: 'Efficient Business Management Techniques',
          exhibitorName: 'by Jane Smith, JCole Co.',
          image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/802d9320-c709-4b93-86b4-6e995b5199ca.jpeg',
          eventDescription:
            'John Clark, the founder of iStep, one of the most successful American IT companies, will teach you how to plan the work of your startup the right way and get successful.',
          location: 'Hall #1'
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
          eventDescription:
            'John Clark, the founder of iStep, one of the most successful American IT companies, will teach you how to plan the work of your startup the right way and get successful.',
          location: 'Hall #1'
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
      day: 'SEUNDO DIA',
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
      day: 'TERCER DIA',
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
      day: 'CUARTO DIA',
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
            className='global-padding'
            variant='h1'
            component='div'
            sx={{
              fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 800,
              textAlign: 'center',
              width: '100%',
              color: 'var(--second-color-purple)'
            }}
          >
            <PetsIcon sx={{ fontSize: { xs: '3rem', sm: '3rem', md: '4rem' } }}></PetsIcon> Lavc 2025
          </Typography>
        </Box>

        {/* Segundo elemento */}
        <Box
          sx={{
            display: 'flex',
            width: { xs: '100%', md: '55%' }, // Ocupa el 100% en pantallas pequeñas y 60% en medianas y grandes
            height: '100px',
            bgcolor: 'var(--second-color-purple)',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            mt: { xs: 2, md: 0 }, // Añade un margen superior en pantallas pequeñas para separar los elementos
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
            {days.map((day, index) => (
              <Tab
                key={index}
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                  fontWeight: 700,
                  color: 'var(--letter-color)',
                  mr: { xs: 1, sm: 3, md: 6 }
                }}
                label={day.day}
                {...a11yProps(index)}
              />
            ))}
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
