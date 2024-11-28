'use client'
import { useEffect, useState } from 'react'

import { Box, Grid } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { EventLetter } from '@/components/components-home/components-events-and-workshops/EventLetter'
import Link from '@/components/Link'
import { getWorkshops } from '@/Services/WorkshopService'
import type { Workshop } from '../../../../../Model/Workshop'

const EventosTalleres = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([])

  useEffect(() => {
    const fetchWorkshops = async () => {
      const fetchedWorkshops = await getWorkshops()

      if (fetchedWorkshops) {
        setWorkshops(fetchedWorkshops) // Actualiza el estado con los workshops obtenidos
      }
    }

    fetchWorkshops()
  }, [])

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
          {workshops.map(event => (
            <Grid item xs={11.5} sm={6} md={5} key={event.codeWorkshop}>
              <Link href={'/eventos-talleres/' + event.codeWorkshop}>
                <EventLetter
                  image={event.workshopPhoto}
                  eventLocation={event.location.toUpperCase()}
                  eventDate={
                    event.workshopStartDate
                      ? `${new Date(event.workshopStartDate).toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                      : 'Fecha no disponible'
                  }
                  eventName={event.workshopName.toUpperCase()}
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
