import { Box } from '@mui/material'

import type { ChildrenType } from '@/@core/types'

import type { Locale } from '@/configs/i18n'
import { getDictionary } from '@/utils/getDictionary'
import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { CardExhibitors } from '@/components/components-home/components-sponsors/CardExhibitors'

const Patrocinadores = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang)

  const sponsorImages = [
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/INVETSA.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/petmedic.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/aranda.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/veterperu.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/Internacional.PNG'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/servipet.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/ludipet-logo.JPG'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/DURAND.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/suiza-diagnostics-logo.png'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/HALLMARK.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/INVETSA.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/petmedic.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/labeca.jpgg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/veterperu.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/Internacional.PNG'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/servipet.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/ludipet-logo.JPG'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/DURAND.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/suiza-diagnostics-logo.png'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/HALLMARK.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/INVETSA.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/petmedic.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/labeca.jpgg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/veterperu.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/Internacional.PNG'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/servipet.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/ludipet-logo.JPG'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/DURAND.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/suiza-diagnostics-logo.png'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/HALLMARK.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/INVETSA.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/petmedic.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/labeca.jpgg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/veterperu.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/Internacional.PNG'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/servipet.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/ludipet-logo.JPG'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/DURAND.jpg'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/suiza-diagnostics-logo.png'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/enlaces/HALLMARK.jpg'
    }
  ]

  return (
    <Box>
      <Box>
        <CardImage
          image='https://hospitecnia.com/sites/default/files/2021-01/cabecera-noticia-destacada-patrocinadors-01.jpg'
          title='PATROCINADORES'
        />
      </Box>
      <Box>
        <CardExhibitors images={sponsorImages} />
      </Box>
    </Box>
  )
}

export default Patrocinadores
