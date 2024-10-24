import * as React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

interface EventInformation {
  image: string
  eventLocation: string
  eventDate: string
  eventName: string
}

export const EventLetter = ({ image, eventLocation, eventDate, eventName }: EventInformation) => {
  return (
    <Card
      sx={{
        maxWidth: 570,
        borderRadius: 0,
        boxShadow: 'none',
        '&:hover .card-media': {
          transform: 'scale(1.2)'
        }
      }}
    >
      <Box sx={{ height: '260px', width: '100%', overflow: 'hidden' }}>
        <Box
          component='img'
          src={image}
          alt=''
          className='card-media'
          sx={{
            transition: 'transform 0.3s ease-in-out',
            width: '100%',
            height: '100%'
          }}
        ></Box>
      </Box>
      <CardContent sx={{ bgcolor: '#ffffff', paddingLeft: '30px', paddingTop: '20px' }}>
        <Typography variant='body1' fontWeight='bold' sx={{ fontSize: '11px' }}>
          {eventLocation}
        </Typography>
        <Typography variant='h6' fontWeight='bold'>
          {eventName}
        </Typography>
        <Typography variant='body1' sx={{ color: 'text.secondary', fontSize: '12px' }}>
          {eventDate}
        </Typography>
      </CardContent>
    </Card>
  )
}
