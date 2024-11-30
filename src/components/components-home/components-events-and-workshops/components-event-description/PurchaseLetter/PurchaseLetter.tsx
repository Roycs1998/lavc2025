'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import { Box, Button, MenuItem, TextField } from '@mui/material'

interface Route {
  route: string
  typeOfEvent: string
  costProfessionals?: number
  costHighSchoolStudents?: number
  costForeignProfessionals?: number
  workshopCost?: number
}

type ticketStructure = { value: string; price?: number }

export const PurchaseLetter = ({
  route,
  typeOfEvent,
  costProfessionals,
  costHighSchoolStudents,
  costForeignProfessionals,
  workshopCost
}: Route) => {
  const [ticket, setTicket] = useState<ticketStructure | null>(null)

  const [problemType, setProblemType] = useState('')

  const [expanded, setExpanded] = useState(true)
  const [trigger, setTrigger] = useState<boolean>(false)

  const tickets = [
    {
      value: 'MEDICO VETERINARIO',
      price: costProfessionals
    },
    {
      value: 'ESTUDIANTE O BACHILLER',
      price: costHighSchoolStudents
    },
    {
      value: 'EXTRANJERO',
      price: costForeignProfessionals
    }
  ]

  const handleChange = (event: React.SyntheticEvent, newExpanded: boolean | ((prevState: boolean) => boolean)) => {
    setExpanded(newExpanded)
  }

  useEffect(() => {
    const getTicket = async () => {
      const selectedOption = tickets.find(option => option.value === problemType)

      if (selectedOption) {
        setTicket(selectedOption)
      } else {
        const defaultTicket: ticketStructure = {
          value: 'VETERINARIO',
          price: workshopCost
        }

        setTicket(defaultTicket)
      }
    }

    getTicket()
  }, [problemType, trigger])

  useEffect(() => {
    const saveTicketInEvent = () => {
      const eventData = localStorage.getItem('eventData')

      console.log('ingreso')
      console.log(ticket)

      if (eventData) {
        const parsedEvent = JSON.parse(eventData)

        const updatedEventData = {
          ...parsedEvent, // Copiamos las propiedades del evento original
          ticket: ticket?.value,
          price: ticket?.price
        }

        localStorage.setItem('eventData', JSON.stringify(updatedEventData))
      }
    }

    saveTicketInEvent()

    console.log(ticket)
  }, [ticket])

  const forceEffect = () => {
    setTrigger(!trigger)
  }

  return (
    <Box sx={{ paddingTop: '5%' }}>
      <Box
        sx={{
          width: '450px',
          height: '60px',
          background: 'linear-gradient(to left,#3a3480, #e2d9f1)',
          marginBottom: '20px'
        }}
      >
        <Typography
          sx={{
            color: 'var(--letter-color)',
            height: '100%',
            width: '100%',
            display: 'flex',
            marginLeft: '30px',
            alignItems: 'center',
            fontSize: '13px'
          }}
        >
          SELECCIONA FUNCIÓN
        </Typography>
      </Box>
      <Box sx={{ width: '450px' }}>
        <Accordion expanded={expanded} sx={{ borderRadius: 'none' }} onChange={handleChange}>
          <AccordionSummary aria-controls='panel1-content' id='panel1-header'>
            <Box sx={{ height: '90px', width: '100%' }}>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  padding: '20px'
                }}
              >
                MAR. 12 NOVIEMBRE 19:30
              </Typography>
            </Box>
          </AccordionSummary>
          {typeOfEvent !== 'TALLER' && (
            <AccordionDetails sx={{ bgcolor: '#f9f6fe' }}>
              <Box
                sx={{
                  height: '150px',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: '15px',
                  paddingRight: '15px'
                }}
              >
                <TextField
                  fullWidth
                  sx={{
                    width: '100%',
                    fontSize: '1rem',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#202021' // Mantiene el color actual
                      },
                      '&:hover fieldset': {
                        borderColor: '#202021' // Desactiva el cambio de color al hacer hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#202021' // Desactiva el cambio de color al hacer focus
                      }
                    },
                    '& .MuiInputLabel-root': {
                      color: '#202021' // Color del label inicial
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#202021' // Color del label al enfocarse
                    },
                    '& .MuiInputLabel-shrink': {
                      color: '#202021' // Color del label cuando sube al escribir
                    }
                  }}
                  id='outlined-select-currency'
                  select
                  label='Categorias'
                  defaultValue=''
                  value={problemType} // Estado del campo de mensaje
                  onChange={e => setProblemType(e.target.value)}
                >
                  {tickets.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </AccordionDetails>
          )}
          <AccordionDetails>
            <Box sx={{ height: '80px' }}>
              <Typography sx={{ padding: '20px' }}>
                <Link href={typeOfEvent === 'EVENTO' ? (problemType ? route : '#') : route}>
                  <Button
                    onClick={forceEffect}
                    disabled={typeOfEvent === 'EVENTO' ? !problemType : false}
                    sx={{
                      bgcolor: 'var(--primary-color-purple)',
                      color: 'var(--letter-color)',
                      width: '100%',
                      height: 55,
                      fontWeight: 'bold',
                      fontSize: '15px',

                      '&:hover': {
                        color: 'var(--letter-color)', // Cambiar color si es necesario
                        bgcolor: '#7f76d9'
                      }
                    }}
                  >
                    COMPRAR TU ENTRADA
                  </Button>
                </Link>
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
