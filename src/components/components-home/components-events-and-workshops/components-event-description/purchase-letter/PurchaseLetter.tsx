'use client'
import { useEffect, useState, useMemo } from 'react'

import Link from 'next/link'

import Accordion from '@mui/material/Accordion'

import AccordionSummary from '@mui/material/AccordionSummary'

import AccordionDetails from '@mui/material/AccordionDetails'

import Typography from '@mui/material/Typography'

import { Box, Button, MenuItem, TextField } from '@mui/material'

import { useSession } from 'next-auth/react'

import { toast } from 'react-toastify'

import { formatDate } from '@/libs/utils'

interface Route {
  route: string
  typeOfEvent: number
  costProfessionals?: number
  costHighSchoolStudents?: number
  costForeignProfessionals?: number
  costForeignStudents?:number
  workshopCost?: number
  dateWorkshop?: string
}

type ticketStructure = { value: string; price?: number, currency:string }

export const PurchaseLetter = ({
  route,
  typeOfEvent,
  costProfessionals,
  costHighSchoolStudents,
  costForeignProfessionals,
  costForeignStudents,
  workshopCost,
  dateWorkshop
}: Route) => {
  const [ticket, setTicket] = useState<ticketStructure | null>(null)
  const { status} = useSession()
  const [problemType, setProblemType] = useState('')

  const [expanded, setExpanded] = useState(true)
  const [trigger, setTrigger] = useState<boolean>(false)

  const tickets = useMemo(() => [
    {
      value: 'MEDICO VETERINARIO',
      price: costProfessionals,
      currency: 'PEN'
    },
    {
      value: 'ESTUDIANTE O BACHILLER',
      price: costHighSchoolStudents,
      currency: 'PEN'
    },
    {
      value: 'EXTRANJERO PROFESIONAL',
      price: costForeignProfessionals,
      currency: 'USD'
    },
    {
      value: 'EXTRANJERO ESTUDIANTE',
      price: costForeignStudents,
      currency: 'USD'
    },
    {
      value: 'PRECIO GENERAL',
      price: workshopCost,
      currency: 'PEN'
    }
  ], [costProfessionals, costHighSchoolStudents, costForeignProfessionals, costForeignStudents, workshopCost]);

  const filteredDataTicket = tickets.filter(item => item.price !== 0)

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
          value: 'PRECIO GENERAL',
          price: workshopCost,
          currency: 'PEN'
        }

        setTicket(defaultTicket)
      }
    }

    getTicket()
  }, [problemType, trigger, tickets, workshopCost])

  useEffect(() => {

    const saveTicketInEvent = () => {
      const eventData = localStorage.getItem('eventData')

      if (eventData) {
        const parsedEvent = JSON.parse(eventData)

        const updatedEventData = {
          ...parsedEvent, // Copiamos las propiedades del evento original
          ticket: ticket?.value,
          price: ticket?.price,
          currency: ticket?.currency
        }

        localStorage.setItem('eventData', JSON.stringify(updatedEventData))
      }
    }

    saveTicketInEvent()

  }, [ticket])


  const forceEffect = () => {
    status !== 'authenticated' ?
    toast.warn('Debes iniciar sesión para comprar tu entrada'):setTrigger(!trigger)
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
            fontSize: '13px',
            fontWeight: 800
          }}
        >
          SELECCIÓN DE CATEGORIA
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
                {dateWorkshop ? formatDate(dateWorkshop) : 'FECHA NO DEFINIDA'}
              </Typography>
            </Box>
          </AccordionSummary>
          {typeOfEvent !== 1 && typeOfEvent !== 3 && (
            <AccordionDetails sx={{ bgcolor: '#f9f6fe' }}>

              <Box
                sx={{
                  height: '100px',
                  padding: '10px',
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
                  label='Selecciona categoria'
                  defaultValue=''
                  value={problemType} // Estado del campo de mensaje
                  onChange={e => setProblemType(e.target.value)}
                >
                  {filteredDataTicket.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </AccordionDetails>
          )}
          <AccordionDetails>
            <Box >
              <Typography sx={{ padding: '20px' }}>
                <Link href={typeOfEvent === 2 ? (problemType &&  status === 'authenticated' ? route : '') : route}>
                  <Button
                    onClick={forceEffect}
                    disabled={typeOfEvent === 2 ? !problemType : false}
                    sx={{
                      bgcolor: typeOfEvent === 2 && !problemType ? '#b8b4e7' : 'var(--primary-color-purple)', // Fondo desvanecido si está deshabilitado
                      color: typeOfEvent === 2 && !problemType ? '#ffffff' : 'var(--letter-color)', // Texto blanco si está deshabilitado
                      width: '100%',
                      height: 55,
                      fontWeight: 'bold',
                      fontSize: '15px',
                      opacity: typeOfEvent === 2 && !problemType ? 0.6 : 1, // Opacidad reducida si está deshabilitado
                      transition: 'all 0.3s ease', // Transición suave al cambiar el estado
                      '&:hover': {
                        color: typeOfEvent === 2 && !problemType ? '#ffffff' : 'var(--letter-color)', // Color al hacer hover
                        bgcolor: typeOfEvent === 2 && !problemType ? '#d1cfea' : '#7f76d9', // Color al hacer hover
                      },
                      '&.Mui-disabled': {
                        bgcolor: '#8781dd', // Fondo más claro si está deshabilitado
                        color: '#ffffff', // Texto blanco si está deshabilitado
                      },
                    }}
                  >
                    COMPRAR TU ENTRADA
                  </Button>
                </Link>

                {status !== 'authenticated' && (
                  <Link href={'/login'}>
                      <Button
                        sx={{
                          bgcolor:  'var(--primary-color-purple)', // Fondo desvanecido si está deshabilitado
                          color:  'var(--letter-color)', // Texto blanco si está deshabilitado
                          width: '100%',
                          height: 55,
                          marginTop: '10px',
                          fontWeight: 'bold',
                          fontSize: '15px',
                          opacity:  1, // Opacidad reducida si está deshabilitado
                          transition: 'all 0.3s ease', // Transición suave al cambiar el estado
                          '&:hover': {
                            color: 'var(--letter-color)', // Color al hacer hover
                            bgcolor: '#7f76d9', // Color al hacer hover
                          },

                        }}
                      >
                        INICIAR SESIÓN
                      </Button>
                  </Link>
                )}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
