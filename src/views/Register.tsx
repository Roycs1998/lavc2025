'use client'

// React Imports
import { useEffect, useState } from 'react'

// Next Imports
import React from 'react'

import Link from 'next/link'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Type Imports
import { Box, MenuItem, Step, StepLabel, Stepper } from '@mui/material'

import countries from '@/data/countries/Countries.json'

import type { Mode } from '@core/types'

// Component Imports
import Illustrations from '@components/Illustrations'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

const steps = ['Información Personal', 'Formación Académica', 'Credenciales de Usuario']

type Country = {
  shortName: string
  officialName: string
  ISO3: string
  ISO2: string
  UNI: number
  UNDP: string
  FAOSTAT: number
  GAUL: number
}

const Register = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())
  const [countries, setCountries] = useState<Country[]>([])
  const [phone, setPhone] = useState<string>('')

  const isStepOptional = (step: number) => {
    return step === 1
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesData = (await import('@/data/countries/Countries.json')).default

      setCountries(countriesData)
    }

    fetchCountries()
  }, [])

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const documents = [
    {
      value: 'DNI'
    },
    {
      value: 'RUC'
    },
    {
      value: 'CARNET DE EXTRANJERÍA '
    },
    {
      value: 'LIBRETA ELECTORAL'
    },
    {
      value: 'OTROS'
    }
  ]

  const academicStatus = [
    {
      value: 'ESTUDIANTE'
    },
    {
      value: 'BACHILLER'
    },
    {
      value: 'EGRESADO'
    },
    {
      value: 'TITULADO'
    },
    {
      value: 'DOCTORADO'
    }
  ]

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())

      newSkipped.add(activeStep)

      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <div
      className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'
      style={{ marginTop: '50px' }}
    >
      <Card className='flex flex-col sm:is-[800px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href='/' className='flex justify-center items-start mbe-6'>
            <Logo />
          </Link>
          <Typography variant='h4' sx={{ textAlign: 'center' }}>
            La aventura comienza aquí 🚀
          </Typography>
          <div className='flex flex-col gap-5'>
            <Typography sx={{ textAlign: 'center' }} className='mbs-1'>
              Únete ahora y comienza tu aventura en segundos!
            </Typography>
          </div>
          <Box sx={{ width: '100%', marginTop: '40px' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {}

                const labelProps: {
                  optional?: React.ReactNode
                } = {}

                if (isStepOptional(index)) {
                  labelProps.optional = <Typography variant='caption'>Optional</Typography>
                }

                if (isStepSkipped(index)) {
                  stepProps.completed = false
                }

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                )
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 && (
                  <Box sx={{ padding: '30px' }}>
                    <form autoComplete='off' className='flex flex-col gap-3'>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField sx={{ width: '50%' }} fullWidth label='Nombres' type='text' />
                        <TextField sx={{ width: '50%' }} fullWidth label='Apelldio Paterno' type='text' />
                      </Box>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField sx={{ width: '50%' }} fullWidth label='Apellido Materno' type='text' />
                        <TextField
                          fullWidth
                          sx={{ width: '50%' }}
                          id='outlined-select-currency'
                          select
                          label='Tipo de Documento'
                        >
                          {documents.map(option => (
                            <MenuItem key={option.value} value={option.value} sx={{ textTransform: 'uppercase' }}>
                              {option.value}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <PhoneInput
                          country={'us'}
                          value={phone}
                          onChange={phone => setPhone(phone || '')}
                          inputStyle={{
                            width: '100%', // Ajusta el ancho
                            height: '56px', // Ajusta la altura del campo
                            border: '1px solid #ccc', // Borde del campo
                            transition: 'border-color #cd4b4b 0.3s ease',
                            boxShadow: 'none'
                          }}
                          containerStyle={{
                            width: '330px'
                          }}
                          onFocus={e => {
                            ;(e.target.style.borderColor = '#8c57ff'), // Cambiar el color del borde al hacer foco
                              (e.target.style.borderWidth = '2px')
                          }}
                          onBlur={e => {
                            ;(e.target.style.borderColor = '#ccc'), // Volver al color original cuando se pierde el foco
                              (e.target.style.borderWidth = '1px')
                          }}
                        />
                        <TextField fullWidth sx={{ width: '50%' }} id='' select label='Pais de Procedencia'>
                          {countries.map(option => (
                            <MenuItem
                              key={option.shortName}
                              value={option.shortName}
                              sx={{ textTransform: 'uppercase' }}
                            >
                              {option.shortName}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField sx={{ width: '50%' }} fullWidth label='Ciudad de Procedencia' type='text' />
                      </Box>
                    </form>
                  </Box>
                )}
                {activeStep === 1 && (
                  <Box sx={{ padding: '30px' }}>
                    <form autoComplete='off' className='flex flex-col gap-3'>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField sx={{ width: '50%' }} fullWidth label='Universidad de Procedencia' type='text' />
                        <TextField fullWidth sx={{ width: '50%' }} id='statusCode' select label='Estado Académico'>
                          {academicStatus.map(option => (
                            <MenuItem key={option.value} value={option.value} sx={{ textTransform: 'uppercase' }}>
                              {option.value}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField sx={{ width: '50%' }} fullWidth label='Ciclo Cursando' type='text' />
                      </Box>
                    </form>
                  </Box>
                )}
                {activeStep === 2 && (
                  <Typography>
                    <Box sx={{ padding: '30px' }}>
                      <form autoComplete='off' className='flex flex-col gap-3'>
                        <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                          <TextField sx={{ width: '50%' }} fullWidth label='Email' type='email' />
                          <TextField sx={{ width: '50%' }} fullWidth label='Ciclo Cursando' type='text' />
                        </Box>
                      </form>
                    </Box>
                  </Typography>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                    Volver
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Continuar'}</Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>¿Ya tienes una cuenta?</Typography>
              <Typography component={Link} href='/login' color='primary'>
                Iniciar sesión
              </Typography>
            </div>
            <Divider className='gap-3'>O</Divider>
            <div className='flex justify-center items-center gap-2'>
              <IconButton size='small' className='text-facebook'>
                <i className='ri-facebook-fill' />
              </IconButton>
              <IconButton size='small' className='text-googlePlus'>
                <i className='ri-google-fill' />
              </IconButton>
            </div>
          </Box>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default Register
