import { Box, Divider, Grid } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { PriceTable } from '@/components/components-home/components-events-and-workshops/components-event-description/PriceTable'
import { EventDescriptionLetter } from '@/components/components-home/components-events-and-workshops/components-event-description/EventDescriptionLetter'
import { PurchaseLetter } from '@/components/components-home/components-events-and-workshops/components-event-description/PurchaseLetter'

interface EventParameters {
  params: {
    eventos: string
  }
}

const Eventos = async ({ params }: EventParameters) => {
  const { eventos } = params
  const event = decodeURIComponent(eventos)

  return (
    <Box>
      <Box>
        <CardImage
          image='https://tlavc-peru.org/tlavc/vista/upload/talleres/Portada%20presentaci%C3%B3n%20escalada%20deportiva.jpg'
          title={event}
        />
      </Box>
      <Box sx={{ bgcolor: 'var(--color-card-background)' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                paddingTop: '5%',
                paddingBottom: '10%',
                paddingLeft: { xs: '', sm: '4%', md: '24%' },
                marginRight: { sx: '', sm: '4%', md: '' }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  paddingBottom: '6%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: '4%',
                  paddingRight: '4%'
                }}
              >
                <PriceTable />
              </Box>
              {/* Divider con ancho completo */}
              <Divider sx={{ borderColor: 'gray', width: '100%' }} />
              <Box sx={{ marginTop: '6%' }}>
                <EventDescriptionLetter
                  eventImage='https://tlavc-peru.org/tlavc/vista/upload/talleres/Portada%20presentaci%C3%B3n%20escalada%20deportiva.jpg'
                  eventName={event}
                  eventDescription='Hablando Huevadas hoy en día se ha vuelto uno de los fenómenos más impactantes de youtube de los últimos tiempos, con más de 5.5 millones de suscriptores en la plataforma online y más de 3 billones de vistas en sus programas en la popular plataforma, Ricardo Mendoza y Jorge Luna, se han convertido en el dúo perfecto para alegrar los fines de semana de millones de personas en el mundo.'
                  recommendedPublic='Jóvenes mayores de 14 años.'
                  startOfEvent='7:30 PM. (Aproximadamente).'
                  eventDuration='2 horas.'
                  eventLocation='Teatro Canout.'
                  aboutIncome='Deberán presentar su ticket o e-ticket para el ingreso. Todos los boletos serán escaneados al ingreso por medio de dispositivos digitales. En caso que el ticket o e-ticket esté roto, en mal estado o con indicios de falsificación, la producción u organizador podrán NO AUTORIZAR la entrada al recinto'
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            sx={{
              bgcolor: 'var(--background-form)'
            }}
          >
            <Box
              sx={{
                p: 2,
                marginRight: { sx: '', sm: '4%', md: '24%' },
                display: 'flex',
                justifyContent: 'center',
                height: '100%'
              }}
            >
              <PurchaseLetter />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Eventos
