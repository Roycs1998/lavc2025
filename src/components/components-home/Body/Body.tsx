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
      name: dictionary?.nav_main?.lavcLetter.invitation_lavc_2025,
      link: 'https://www.youtube.com/watch?v=F4d8cttOYlA'
    }
  ]

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Main dictionary={dictionary} />
      </Box>
      <Box
        className='global-padding'
        sx={{
          flexGrow: 1,
          display: 'flex',
          minHeight: { xs: '50vh', md: '25vh' }, // Altura mínima para pantallas pequeñas y medianas
          padding: 2, // Añadir un poco de espacio
          justifyContent: 'center', // Centrar horizontalmente
          alignItems: 'center', // Centrar verticalmente (opcional)
          bgcolor: 'var(--background-form)'
        }}
      >
        <Grid container spacing={7} justifyContent='center'>
          <Grid item>
            <InformationLetters
              icon={<MenuOpenIcon sx={{ fontSize: 40, margin: 1 }} />}
              qualification={dictionary?.nav_main?.informationLetters.scheduled_talks}
              link='https://www.youtube.com/watch?v=pz9O3UeM_o0&list=RDQZKrLIoMyxY&index=27'
            />
          </Grid>
          <Grid item>
            <InformationLetters
              icon={<DomainAddIcon sx={{ fontSize: 40, margin: 1 }} />}
              qualification={dictionary?.nav_main?.informationLetters.accommodations}
              link='a'
            />
          </Grid>
          <Grid item>
            <InformationLetters
              icon={<CameraAltIcon sx={{ fontSize: 40, margin: 1 }} />}
              qualification={dictionary?.nav_main?.informationLetters.tourism}
              link='a'
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        className='global-padding'
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centrar horizontalmente
          paddingTop: { xs: '30px', md: '50px' },
          paddingBottom: { xs: '30px', md: '70px' },
          bgcolor: 'var(--background-form)'
        }}
      >
        <Grid
          container
          spacing={5}
          alignItems='center'
          justifyContent='center'
          sx={{ maxWidth: { xs: 'none', md: '90%' } }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <LavcLetter
              nameButton={dictionary?.nav_main?.lavcLetter.play_video}
              title={dictionary?.nav_main?.lavcLetter.are_you_ready_for_lavc_2025}
              information={items}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <LavcLetter
              nameButton={dictionary?.nav_main?.lavcLetter.play_video}
              title={dictionary?.nav_main?.lavcLetter.this_was_lavc_2024}
              information={lavc}
            />
          </Grid>
        </Grid>
      </Box>

      <LocationLetter dictionary={dictionary} />
      <HorizontalCard dictionary={dictionary} />
    </Box>
  )
}
