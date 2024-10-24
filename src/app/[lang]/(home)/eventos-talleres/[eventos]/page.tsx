import { Box } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'

interface PonenteParams {
  params: {
    ponente: string
  }
}

const Eventos = async ({ params }: PonenteParams) => {
  const { eventos } = params
  const event = decodeURIComponent(eventos)

  return (
    <Box>
      <Box>
        <CardImage image='https://www.tlavc-peru.org/tlavc/vista/upload/galeria/web12.17.jpeg' title={event} />
      </Box>
      <Box sx={{ height: '300px', bgcolor: 'var(--background-form)' }}></Box>
    </Box>
  )
}

export default Eventos
