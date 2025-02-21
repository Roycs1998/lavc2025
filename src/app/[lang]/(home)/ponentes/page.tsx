import { Box } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import PonentesList from '@/components/ponente/PonentesList'

//type SpeakersProps = { params: { lang: Locale } }

const Ponentes = async () => {
  //const dictionary = await getDictionary(params.lang)

  return (
    <Box>
      <Box>
        <CardImage
          image='https://cdn.pixabay.com/photo/2017/06/16/05/11/white-tiger-2407799_1280.jpg'
          title='PONENTES'
        />
      </Box>
      <PonentesList />
    </Box>
  )
}

export default Ponentes
