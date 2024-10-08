import { Box } from '@mui/material'

import { Body } from '@/components/components-home/Body'
import type { ChildrenType } from '@core/types'

import type { Locale } from '@/configs/i18n'

import { getDictionary } from '@/utils/getDictionary'
import { LetterImage } from '@/components/components-home/components-ponentes/LetterImage'

const Ponentes = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang)

  return (
    <Box>
      <LetterImage image='https://sinuvet.org/wp-content/uploads/elementor/thumbs/marcovega2-qh26l8ny1q02q3ea571qgxvtnny94e5pveqkn6ttus.jpg' />
    </Box>
  )
}

export default Ponentes
