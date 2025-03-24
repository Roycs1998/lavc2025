'use client'
import { useEffect, useState, useMemo } from 'react'

import Link from 'next/link'

import Accordion from '@mui/material/Accordion'

import AccordionSummary from '@mui/material/AccordionSummary'

import AccordionDetails from '@mui/material/AccordionDetails'

import Typography from '@mui/material/Typography'

import { Box, Button, darken, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material'

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

  // Estado para controlar el modal de activar beca
  const [openBecaModal, setOpenBecaModal] = useState(false)
  
  // Estado para almacenar el código de beca ingresado
  const [becaCode, setBecaCode] = useState('')

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

  // Función para manejar el clic en "ACTIVAR BECA"
  const handleActivateBeca = () => {
    if (status === 'authenticated') {
      setOpenBecaModal(true)
    } else {
      toast.warn('Debes iniciar sesión para activar la beca')
    }
  }

  // Función para procesar la activación de beca (aquí debes implementar la lógica que necesites)
  const handleBecaActivation = () => {
    // Ejemplo: Mostrar un toast con el código ingresado y cerrar el modal
    toast.success(`Beca activada con el código: ${becaCode}`)
    setOpenBecaModal(false)
    
    // Aquí puedes agregar la lógica para enviar el código al backend o lo que requieras.
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
                        color: 'var(--letter-color)',
                        backgroundColor: `${darken('#3a3480', 0.3)} !important`,
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

                <Box sx={{ mt: 1 }}>
                  <Button
                    onClick={handleActivateBeca}
                    sx={{
                      backgroundColor: 'var(--primary-color-purple)',
                      color: 'var(--letter-color)',
                      width: '100%',
                      height: 55,
                      marginTop: '10px',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      opacity: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'var(--letter-color)',
                        backgroundColor: `${darken('#3a3480', 0.3)} !important`,
                      },
                    }}
                  >
                    ACTIVAR BECA
                  </Button>
                </Box>

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
                            color: 'var(--letter-color)',
                            backgroundColor: `${darken('#3a3480', 0.3)} !important`,
                          },
                        }}
                      >
                        INICIAR SESIÓN
                      </Button>
                  </Link>
                )}

            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Dialog open={openBecaModal} onClose={() => setOpenBecaModal(false)}>
        <DialogTitle>Activar Beca</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Código de Beca"
            type="text"
            fullWidth
            variant="outlined"
            value={becaCode}
            onChange={(e) => setBecaCode(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenBecaModal(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleBecaActivation} color="primary">
            Activar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
