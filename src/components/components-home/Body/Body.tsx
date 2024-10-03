import { Box, Grid } from '@mui/material'

import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import DomainAddIcon from '@mui/icons-material/DomainAdd'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

import { Main } from '../Main'
import { HorizontalCard } from '../HorizontalCard'
import type { getDictionary } from '@/utils/getDictionary'
import { InformationLetters } from '../InformationLetters'
import { LocationLetter } from '../LocationLetter'

import { LavcLetter } from '../LavcLetter'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Body = ({ dictionary }: Props) => {
  const items = [
    {
      image: '/images/logolavc/imageneslavc/eric.jpg',
      name: 'Eric Garcia',
      link: 'https://www.youtube.com/watch?v=X6j6Zu-ktfk'
    },
    {
      image: '/images/logolavc/imageneslavc/doug.jpg',
      name: 'Doug Mader',
      link: 'https://www.youtube.com/watch?v=1Kp67T30ISs'
    },
    {
      image: '/images/logolavc/imageneslavc/megan.jpg',
      name: 'Megan Brashear',
      link: 'https://www.youtube.com/watch?v=KZADzSWL5fs'
    },
    {
      image: '/images/logolavc/imageneslavc/mary.jpg',
      name: 'Mary Gardner',
      link: 'https://www.youtube.com/watch?v=kEgo8ZwnhII'
    }
  ]

  const lavc = [
    {
      image: '/images/logolavc/imageneslavc/2024.jpg',
      name: 'No puedes perderte el LAVC 2025, concursos, conferencias, shows y mucho más.',
      link: 'https://www.youtube.com/watch?v=F4d8cttOYlA'
    }
  ]

  return (
    <Box>
      <Main />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          minHeight: { xs: '50vh', md: '25vh' }, // Altura mínima para pantallas pequeñas y medianas
          padding: 2, // Añadir un poco de espacio
          justifyContent: 'center', // Centrar horizontalmente
          alignItems: 'center', // Centrar verticalmente (opcional)
          bgcolor: '#e5f8fb'
        }}
      >
        <Grid container spacing={7} justifyContent='center'>
          <Grid item>
            <InformationLetters
              icon={<MenuOpenIcon sx={{ fontSize: 40, margin: 1 }} />}
              qualification='CHARLAS PROGRAMADAS'
              link='https://www.youtube.com/watch?v=pz9O3UeM_o0&list=RDQZKrLIoMyxY&index=27'
            />
          </Grid>
          <Grid item>
            <InformationLetters
              icon={<DomainAddIcon sx={{ fontSize: 40, margin: 1 }} />}
              qualification='HOSPEDAJES'
              link='a'
            />
          </Grid>
          <Grid item>
            <InformationLetters
              icon={<CameraAltIcon sx={{ fontSize: 40, margin: 1 }} />}
              qualification='TURISMO'
              link='a'
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centrar horizontalmente
          alignItems: 'center', // Centrar verticalmente (opcional)
          marginTop: { xs: '30px', md: '50px' },
          marginBottom: { xs: '30px', md: '70px' }
        }}
      >
        <Grid
          container
          spacing={5}
          alignItems='center'
          justifyContent='center'
          sx={{ maxWidth: { xs: 'none', md: '75%' } }}
        >
          <Grid item xs={12} sm={12} md={6.5}>
            <LavcLetter title='¿Estás listo para el LAVC 2025?' information={items} />
          </Grid>
          <Grid item xs={12} sm={12} md={5.5}>
            <LavcLetter title='¡ASÍ FUE EL LAVC 2024!' information={lavc} />
          </Grid>
        </Grid>
      </Box>

      <LocationLetter />
      <HorizontalCard />
    </Box>
  )
}
