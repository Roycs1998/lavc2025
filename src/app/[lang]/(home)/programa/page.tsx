import { Box } from '@mui/material'

import type { Locale } from '@/configs/i18n'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { EventProgram } from '@/components/components-home/components-program/EventProgram'
import { getDictionary } from '@/utils/getDictionary'

interface Props {
  params: { lang: Locale }
}

const Program = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang)

  return (
    <Box>
      <Box>
        <CardImage
          image='https://www.mdzol.com/u/fotografias/m/2022/9/9/f1456x819-1279355_1449725_5050.jpg'
          title={dictionary.program.title}
        />
      </Box>
      <Box sx={{ paddingTop: '3%' }}>
        <EventProgram locationLabel={dictionary.program.location_label} />
      </Box>
    </Box>
  )
}

export default Program
