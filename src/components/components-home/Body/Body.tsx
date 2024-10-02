import { Box, Grid } from '@mui/material'

import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import DomainAddIcon from '@mui/icons-material/DomainAdd'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

import { Main } from '../Main'
import { HorizontalCard } from '../HorizontalCard'
import type { getDictionary } from '@/utils/getDictionary'
import { InformationLetters } from '../InformationLetters'
import { LocationLetter } from '../LocationLetter'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Body = ({ dictionary }: Props) => {
  return (
    <div>
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
      <h1>{dictionary.quoters.company_not_found}</h1>

      <LocationLetter />
      <HorizontalCard />
    </div>
  )
}
