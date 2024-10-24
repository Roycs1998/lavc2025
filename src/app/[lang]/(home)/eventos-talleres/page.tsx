import { Box, Grid } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { EventLetter } from '@/components/components-home/components-events-and-workshops/EventLetter'
import Link from '@/components/Link'

const EventosTalleres = async () => {
  const eventInformation = [
    {
      id: 1,
      image:
        'https://tlavc-peru.org/tlavc/vista/upload/talleres/Portada%20presentaci%C3%B3n%20escalada%20deportiva.jpg',
      eventLocation: 'ESTADIO NACIONAL - LIMA',
      eventDate: '25 de febrero 2025',
      eventName: ' LACV 2025'
    },

    {
      id: 2,
      image: 'https://cdn.teleticket.com.pe/images/eventos/tes048_calugalistado.jpg',
      eventLocation: 'ESTADIO NACIONAL - LIMA',
      eventDate: '25 de febrero 2026',
      eventName: ' LACV 2026'
    }
  ]

  return (
    <Box>
      <Box>
        <CardImage
          image='https://www.tlavc-peru.org/tlavc/vista/upload/galeria/web12.17.jpeg'
          title='EVENTOS Y TALLERES'
        />
      </Box>
      <Box className='global-padding' sx={{ paddingTop: '3%', paddingBottom: '3%', backgroundColor: '#ffffff' }}>
        <Grid container spacing={4} justifyContent='center' alignItems='center'>
          {eventInformation.map(event => (
            <Grid item xs={11.5} sm={6} md={5} key={event.id}>
              <Link href={'/eventos-talleres/' + event.eventName}>
                <EventLetter
                  image={event.image}
                  eventLocation={event.eventLocation}
                  eventDate={event.eventDate}
                  eventName={event.eventName}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default EventosTalleres
