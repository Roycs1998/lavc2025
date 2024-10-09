import { Box, Grid } from '@mui/material'

import { Body } from '@/components/components-home/Body'
import type { ChildrenType } from '@core/types'

import type { Locale } from '@/configs/i18n'

import { getDictionary } from '@/utils/getDictionary'
import { LetterImage } from '@/components/components-home/components-ponentes/LetterImage'
import { CardImage } from '@/components/components-home/components-ponentes/CardImage'

const Ponentes = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang)

  const ponentes = [
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/802d9320-c709-4b93-86b4-6e995b5199ca.jpeg',
      name: 'ELISA MAZZAFERRO'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/Enie%20Ward.jpg',
      name: 'ERNIE WARD'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/karenkline.jpg',
      name: 'KAREN KLINE'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/image001.jpg',
      name: 'BILL SAXON'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/esther-klok.png',
      name: 'BILL SAXON'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/IMG_5404.jpeg',
      name: 'BILL SAXON'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/BENITA.jpg',
      name: 'BILL SAXON'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/Headshot_Marvel.jpg',
      name: 'BILL SAXON'
    }
  ]

  return (
    <Box>
      <Box>
        <CardImage
          image='https://orquideatech.com/wp-content/uploads/2018/07/ponente_linea_recta-1.jpg'
          title='PONENTES'
        />
      </Box>
      <Box
        className='global-padding'
        sx={{
          display: 'flex',
          flexDirection: 'column', // Alinea verticalmente en pantallas pequeñas
          justifyContent: 'center',
          alignItems: 'center', // Alinea horizontalmente
          width: '100%', // El Box ocupa todo el ancho
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <Grid
          container
          spacing={2} // Ajusta el espacio entre las columnas
          sx={{ width: { xs: '100%', sm: '82%' } }} // Ocupa el 100% del ancho en xs y 82% en pantallas más grandes
        >
          {ponentes.map((ponente, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <LetterImage image={ponente.image} name={ponente.name} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Ponentes
