'use client'
import { useEffect, useState } from 'react'

import { Box, Divider, Grid } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { PriceTable } from '@/components/components-home/components-events-and-workshops/components-event-description/PriceTable'
import { EventDescriptionLetter } from '@/components/components-home/components-events-and-workshops/components-event-description/EventDescriptionLetter'
import { PurchaseLetter } from '@/components/components-home/components-events-and-workshops/components-event-description/PurchaseLetter'
import type { Workshop } from '../../../../../../Model/Workshop'
import { getWorkshopsById } from '@/Services/WorkshopService'

interface EventParameters {
  params: {
    eventos: string
  }
}

const Eventos = ({ params }: EventParameters) => {
  const { eventos } = params
  const [workshop, setWorkshop] = useState<Workshop>()

  useEffect(() => {
    const fetchWorkshopById = async () => {
      const fetchedWorkshop = await getWorkshopsById(Number(eventos))

      if (fetchedWorkshop) {
        setWorkshop(fetchedWorkshop) // Actualiza el estado con los workshops obtenidos
      }
    }

    fetchWorkshopById()
  }, [eventos])

  const ticketCategoryId = '456'

  console.log(workshop)
  console.log('valor' + workshop?.workshopType?.workshopTypeName)

  return (
    <Box>
      <Box>
        <CardImage image={workshop?.workshopPhoto ?? ''} title={workshop?.workshopName ?? ''} />
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
                <PriceTable
                  costProfessionals={workshop?.workshopCostProfessionals}
                  costHighSchoolStudents={workshop?.workshopCostHighschoolStudents}
                  costForeignProfessionals={workshop?.CostOfWorkshopForForeignProfessionals}
                  costForeignStudents={workshop?.CostOfTheWorkshopForForeignStudents}
                  workshopCost={workshop?.workshopCost}
                />
              </Box>
              {/* Divider con ancho completo */}
              <Divider sx={{ borderColor: 'gray', width: '100%' }} />
              <Box sx={{ marginTop: '6%' }}>
                <EventDescriptionLetter
                  eventImage={workshop?.workshopPhoto ?? ''}
                  eventName={workshop?.workshopName.toUpperCase() ?? ''}
                  eventDescription={workshop?.workshopDescription ?? 'No cuenta con descripcion'}
                  startOfEvent={
                    workshop?.workshopStartDate
                      ? `${new Date(workshop.workshopStartDate).toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                      : 'Fecha no disponible'
                  }
                  eventDuration={workshop?.workshopSchedule}
                  eventLocation={workshop?.location ?? ''}
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
              <PurchaseLetter
                route={`/compra/ticket?EventoId=${workshop?.codeWorkshop}&ticketId=${ticketCategoryId}`}
                typeOfEvent={workshop?.workshopType.workshopTypeName ?? ''}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Eventos
