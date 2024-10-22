import { Box } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'

import { Medium } from '@/components/components-home/components-sponsors/Medium'
import { PostCard } from '@/components/components-home/components-sponsors/Medium/PostCard'

const Soporte = async () => {
  return (
    <Box sx={{ bgcolor: 'var(--background-form)' }}>
      <Box>
        <CardImage
          image='https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/04/15/625935c2d2651.jpeg'
          title='SOPORTE'
        />
      </Box>
      <Box
        className='global-padding'
        sx={{ paddingBottom: '2%', paddingTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Medium />
      </Box>
      <Box
        className='global-padding'
        sx={{ paddingBottom: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <PostCard></PostCard>
      </Box>
    </Box>
  )
}

export default Soporte
