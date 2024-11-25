'use client'

// React Imports

import type { FormEvent } from 'react'
import React, { useEffect, useState } from 'react'

// Next Imports

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
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// Type Imports
import { Box, MenuItem, Step, StepLabel, Stepper } from '@mui/material'

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

type Department = {
  id_ubigeo: string
  nombre_ubigeo: string
  codigo_ubigeo: string
  etiqueta_ubigeo: string
  buscador_ubigeo: string
  numero_hijos_ubigeo: string
  nivel_ubigeo: string
  id_padre_ubigeo: string
}

type University = {
  id: number
  universidad: string
  departamento: string
}

const cycles = [
  {
    value: 'Primer Ciclo'
  },
  {
    value: 'Segundo Ciclo'
  },
  {
    value: 'Tercer Ciclo'
  },
  {
    value: 'Cuarto Ciclo'
  },
  {
    value: 'Quinto Ciclo'
  },
  {
    value: 'Sexto Ciclo'
  },
  {
    value: 'Séptimo Ciclo'
  },
  {
    value: 'Octavo Ciclo'
  },
  {
    value: 'Noveno Ciclo'
  },
  {
    value: 'Décimo Ciclo'
  }
]

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

interface FormErrors {
  name?: string
  paternalSurname?: string
  maternalSurname?: string
  typeOfDocument?: string
  document?: string
  phone?: string
  homeCountry?: string
  cityOfOrigin?: string
  homeUniversity?: string
  academic?: string
  cycleCurrentlyInProgress?: string
  email?: string
  password?: string
  verificationPassword?: string
}

const Register = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [activeStep, setActiveStep] = React.useState(0)
  const [countries, setCountries] = useState<Country[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [university, setUniversity] = useState<University[]>([])
  const [isThePasswordDisplayedRepeatedly, setIsThePasswordDisplayedRepeatedly] = useState(false)

  //almacenar un estado para todos los pasos
  const [stepValid, setStepValid] = useState(Array(steps.length).fill(false))

  //validacion de errores
  const [errors, setErrors] = useState<FormErrors>({})

  //estados informacion personal
  const [name, setName] = useState('')
  const [paternalSurname, setPaternalSurname] = useState('')
  const [maternalSurname, setMaternalSurname] = useState('')
  const [typeOfDocument, setTypeOfDocument] = useState('')
  const [document, setDocument] = useState('')
  const [phone, setPhone] = useState<string>('')
  const [homeCountry, setHomeCountry] = useState('')
  const [cityOfOrigin, setCityOfOrigin] = useState('')

  //estados de formacion academica
  const [homeUniversity, setHomeUniversity] = useState('')
  const [academic, setAcademicStatus] = useState('')
  const [cycleCurrentlyInProgress, setCycleCurrentlyInProgress] = useState('')

  // estados de credenciales de usuario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verificationPassword, setVerificationPassword] = useState('')

  const validateFormOne = () => {
    const newErrors: FormErrors = {}

    if (activeStep === 0 && name && !/^[a-zA-Z0-9]*$/.test(name)) {
      newErrors.name = 'El nombre solo puede contener letras y números, sin caracteres especiales.'
    } else if (activeStep === 0 && !name) {
      newErrors.name = 'El nombre es obligatorio.'
    }

    if (activeStep === 0 && paternalSurname && !/^[a-zA-Z0-9]*$/.test(paternalSurname)) {
      newErrors.name = 'El apellido paterno solo puede contener letras y números, sin caracteres especiales.'
    } else if (activeStep === 0 && !paternalSurname) {
      newErrors.paternalSurname = 'El apellido paterno es obligatorio.'
    }

    if (activeStep === 0 && maternalSurname && !/^[a-zA-Z0-9]*$/.test(maternalSurname)) {
      newErrors.name = 'El apellido materno solo puede contener letras y números, sin caracteres especiales.'
    } else if (activeStep === 0 && !maternalSurname) {
      newErrors.maternalSurname = 'El apellido materno es obligatorio.'
    }

    if (activeStep === 0 && !typeOfDocument) {
      newErrors.typeOfDocument = 'El tipo de documento es obligatorio.' // Error si el nombre está vacío
    }

    if (activeStep === 0 && document && !/^[a-zA-Z0-9]*$/.test(document)) {
      newErrors.name = 'El documento solo puede contener letras y números, sin caracteres especiales.'
    } else if (activeStep === 0 && !document) {
      newErrors.document = 'El documento es obligatorio.'
    }

    if (activeStep === 0 && !phone) {
      newErrors.phone = 'El celular es obligatorio.' // Error si el nombre está vacío
    }

    if (activeStep === 0 && !homeCountry) {
      newErrors.homeCountry = 'El pais es obligatorio.' // Error si el nombre está vacío
    }

    if (activeStep === 0 && !cityOfOrigin) {
      newErrors.cityOfOrigin = 'La ciudad es obligatorio.' // Error si el nombre está vacío
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const validateFormTwo = () => {
    const newErrors: FormErrors = {}

    if (activeStep === 1 && !homeUniversity) {
      newErrors.homeUniversity = 'La universidad es obligatorio.' // Error si el nombre está vacío
    }

    if (activeStep === 1 && !academic) {
      newErrors.academic = 'El estado academico es obligatorio.' // Error si el nombre está vacío
    }

    if (academic === 'ESTUDIANTE') {
      if (activeStep === 1 && !cycleCurrentlyInProgress) {
        newErrors.cycleCurrentlyInProgress = 'El ciclo academico es obligatorio.' // Error si el nombre está vacío
      }
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const validateFromThree = () => {
    const newErrors: FormErrors = {}

    if (activeStep === 2 && !email) {
      newErrors.email = 'El correo es obligatorio.' // Error si el nombre está vacío
    }

    if (activeStep === 2 && !password) {
      newErrors.password = 'La contraseña es obligatoria.' // Error si el nombre está vacío
    }

    if (activeStep === 2 && !verificationPassword) {
      newErrors.verificationPassword = 'La contraseña de verificación es obligatoria.' // Error si el nombre está vacío
    } else if (activeStep === 2 && verificationPassword !== password) {
      newErrors.verificationPassword = 'La contraseña de verificación debe ser igual a la contraseña.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    console.log(activeStep)

    if (activeStep === 0) {
      if (validateFormOne()) {
        // Si la validación pasa, marca el paso actual como válido
        const updatedStepValid = [...stepValid]

        updatedStepValid[activeStep] = true // Marca el paso actual como válido
        setStepValid(updatedStepValid)

        if (activeStep < steps.length - 1) {
          setActiveStep(prevStep => prevStep + 1)
          setErrors({}) // Limpia los errores al avanzar
        }
      }
    }

    if (activeStep === 1) {
      if (validateFormTwo()) {
        // Si la validación pasa, marca el paso actual como válido
        const updatedStepValid = [...stepValid]

        updatedStepValid[activeStep] = true // Marca el paso actual como válido
        setStepValid(updatedStepValid)

        if (activeStep < steps.length - 1) {
          setActiveStep(prevStep => prevStep + 1)
          setErrors({}) // Limpia los errores al avanzar
        }
      }
    }
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesData = (await import('@/data/countries/Countries.json')).default

      setCountries(countriesData)
    }

    const bringingUniversitiesFromPeru = async () => {
      const universityData = (await import('@/data/universitys/Universitys.json')).default

      setUniversity(universityData)
    }

    const bringDepartmentsFromPeru = async () => {
      const departmentData = (await import('@/data/departments/Departments.json')).default

      setDepartments(departmentData)
    }

    bringingUniversitiesFromPeru()
    bringDepartmentsFromPeru()
    fetchCountries()
  }, [])

  const userRegistrar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (activeStep === 2) {
      if (validateFromThree()) {
        const updatedStepValid = [...stepValid]

        updatedStepValid[activeStep] = true // Marca el paso actual como válido
        setStepValid(updatedStepValid)

        setErrors({}) // Limpia los errores al avanzar
      }

      console.log('NOMBRE', name)
      console.log('PPATERNO', paternalSurname)
      console.log('MATERNO', maternalSurname)
      console.log('TYPO DE DOCUMENTO:', typeOfDocument)
      console.log('DOCUMENTO:', document)
      console.log('CELULAR:', phone)
      console.log('PAIS DE PROCEDENCIA :', homeCountry)
      console.log('CIUDAD DE PROCENDENCIA :', cityOfOrigin)
      console.log('UNIVERSIDAD :', homeUniversity)
      console.log('ESTADO ACADEMICO :', academic)
      console.log('CICLO :', cycleCurrentlyInProgress)
      console.log('EMAIL :', email)

      console.log('CONTRA:', password)
      console.log('VERIFICACION DE CONTRA:', verificationPassword)
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
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

  const handleClickShowSecondaryPassword = () => setIsThePasswordDisplayedRepeatedly(show => !show)

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[700px]'>
        <CardContent className='p-6 sm:!p-6'>
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
              {steps.map(label => {
                const stepProps: { completed?: boolean } = {}

                const labelProps: {
                  optional?: React.ReactNode
                } = {}

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
                  <Box sx={{ padding: '20px' }}>
                    <form autoComplete='off' className='flex flex-col gap-3'>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField
                          sx={{ width: '50%' }}
                          fullWidth
                          label='Nombres'
                          type='text'
                          value={name} // Estado del campo de mensaje
                          onChange={e => setName(e.target.value)}
                          error={Boolean(errors.name)} // Marca como error si hay un mensaje
                          helperText={errors.name} // Muestra el mensaje de error
                        />
                        <TextField
                          sx={{ width: '50%' }}
                          fullWidth
                          label='Apelldio Paterno'
                          type='text'
                          value={paternalSurname} // Estado del campo de mensaje
                          onChange={e => setPaternalSurname(e.target.value)}
                          error={Boolean(errors.paternalSurname)} // Marca como error si hay un mensaje
                          helperText={errors.paternalSurname}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField
                          sx={{ width: '50%' }}
                          fullWidth
                          label='Apellido Materno'
                          type='text'
                          value={maternalSurname} // Estado del campo de mensaje
                          onChange={e => setMaternalSurname(e.target.value)}
                          error={Boolean(errors.maternalSurname)} // Marca como error si hay un mensaje
                          helperText={errors.maternalSurname}
                        />
                        <TextField
                          fullWidth
                          sx={{ width: '50%' }}
                          id='outlined-select-currency'
                          select
                          label='Tipo de Documento'
                          value={typeOfDocument} // Estado del campo de mensaje
                          onChange={e => setTypeOfDocument(e.target.value)}
                          error={Boolean(errors.typeOfDocument)} // Marca como error si hay un mensaje
                          helperText={errors.typeOfDocument}
                        >
                          {documents.map(option => (
                            <MenuItem key={option.value} value={option.value} sx={{ textTransform: 'uppercase' }}>
                              {option.value}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField
                          sx={{ width: '50%' }}
                          fullWidth
                          label={typeOfDocument ? typeOfDocument : 'Documento'}
                          type='text'
                          value={document} // Estado del campo de mensaje
                          onChange={e => setDocument(e.target.value)}
                          error={Boolean(errors.document)} // Marca como error si hay un mensaje
                          helperText={errors.document}
                        />
                        <Box sx={{ width: '50%' }}>
                          <PhoneInput
                            country={'us'}
                            value={phone}
                            placeholder='Celular'
                            onChange={phone => setPhone(phone || '')}
                            inputStyle={{
                              height: '56px', // Ajusta la altura del campo
                              border: `1px solid ${errors.phone ? '#ff4c51' : '#ccc'}`, // Borde del campo
                              transition: 'border-color 0.3s ease',
                              boxShadow: 'none',
                              width: '100%'
                            }}
                            containerStyle={{
                              width: '100%'
                            }}
                            onFocus={e => {
                              ;(e.target.style.borderColor = errors.phone ? '#ff4c51' : '#8c57ff'), // Cambiar el color del borde al hacer foco
                                (e.target.style.borderWidth = '2px')
                            }}
                            onBlur={e => {
                              ;(e.target.style.borderColor = errors.phone ? '#ff4c51' : '#ccc'), // Volver al color original cuando se pierde el foco
                                (e.target.style.borderWidth = '1px')
                            }}
                          />
                          {errors.phone && (
                            <Typography
                              sx={{
                                color: '#ff4c51',
                                fontSize: '13px',
                                marginTop: '2px',
                                display: 'block',
                                marginLeft: '5%'
                              }}
                            >
                              {errors.phone}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField
                          fullWidth
                          sx={{ width: '50%' }}
                          id=''
                          select
                          label='Pais de Procedencia'
                          value={homeCountry} // Estado del campo de mensaje
                          onChange={e => setHomeCountry(e.target.value)}
                          error={Boolean(errors.homeCountry)} // Marca como error si hay un mensaje
                          helperText={errors.homeCountry}
                        >
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

                        <TextField
                          fullWidth
                          sx={{ width: '50%' }}
                          id='departmentCode'
                          select
                          label='Ciudad de Procedencia'
                          value={cityOfOrigin} // Estado del campo de mensaje
                          onChange={e => setCityOfOrigin(e.target.value)}
                          error={Boolean(errors.cityOfOrigin)} // Marca como error si hay un mensaje
                          helperText={errors.cityOfOrigin}
                        >
                          {departments.map(option => (
                            <MenuItem
                              key={option.id_ubigeo}
                              value={option.nombre_ubigeo}
                              sx={{ textTransform: 'uppercase' }}
                            >
                              {option.nombre_ubigeo}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                    </form>
                  </Box>
                )}
                {activeStep === 1 && (
                  <Box sx={{ padding: '20px' }}>
                    <form autoComplete='off' className='flex flex-col gap-3'>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField
                          fullWidth
                          sx={{ width: '50%' }}
                          id='university-code'
                          select
                          label='Universidad de Procedencia'
                          value={homeUniversity} // Estado del campo de mensaje
                          onChange={e => setHomeUniversity(e.target.value)}
                          error={Boolean(errors.homeUniversity)} // Marca como error si hay un mensaje
                          helperText={errors.homeUniversity}
                        >
                          {university.map(option => (
                            <MenuItem key={option.id} value={option.universidad} sx={{ textTransform: 'uppercase' }}>
                              {option.universidad}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          fullWidth
                          sx={{ width: '50%' }}
                          id='statusCode'
                          select
                          label='Estado Académico'
                          value={academic} // Estado del campo de mensaje
                          onChange={e => setAcademicStatus(e.target.value)}
                          error={Boolean(errors.academic)} // Marca como error si hay un mensaje
                          helperText={errors.academic}
                        >
                          {academicStatus.map(option => (
                            <MenuItem key={option.value} value={option.value} sx={{ textTransform: 'uppercase' }}>
                              {option.value}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField
                          fullWidth
                          sx={{ width: '100%' }}
                          id='cycleCode'
                          select
                          label='Ciclo Cursando'
                          disabled={academic !== 'ESTUDIANTE'}
                          value={cycleCurrentlyInProgress} // Estado del campo de mensaje
                          onChange={e => setCycleCurrentlyInProgress(e.target.value)}
                          error={Boolean(errors.cycleCurrentlyInProgress)} // Marca como error si hay un mensaje
                          helperText={errors.cycleCurrentlyInProgress}
                        >
                          {cycles.map(option => (
                            <MenuItem key={option.value} value={option.value} sx={{ textTransform: 'uppercase' }}>
                              {option.value}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                    </form>
                  </Box>
                )}
                {activeStep === 2 && (
                  <Box sx={{ padding: '20px' }}>
                    <form onSubmit={userRegistrar} autoComplete='off' className='flex flex-col gap-3'>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField
                          sx={{ width: '50%' }}
                          fullWidth
                          label='Email'
                          type='email'
                          value={email} // Estado del campo de mensaje
                          onChange={e => setEmail(e.target.value)}
                          error={Boolean(errors.email)} // Marca como error si hay un mensaje
                          helperText={errors.email}
                        />
                        <TextField
                          sx={{ width: '50%' }}
                          fullWidth
                          label='Contraseña'
                          type={isPasswordShown ? 'text' : 'password'}
                          value={password} // Estado del campo de mensaje
                          onChange={e => setPassword(e.target.value)}
                          error={Boolean(errors.password)} // Marca como error si hay un mensaje
                          helperText={errors.password}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  size='small'
                                  edge='end'
                                  onClick={handleClickShowPassword}
                                  onMouseDown={e => e.preventDefault()}
                                >
                                  <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        <TextField
                          sx={{ width: '100%' }}
                          fullWidth
                          label='Volver a ingresar contraseña'
                          value={verificationPassword} // Estado del campo de mensaje
                          onChange={e => setVerificationPassword(e.target.value)}
                          type={isThePasswordDisplayedRepeatedly ? 'text' : 'password'}
                          error={Boolean(errors.verificationPassword)} // Marca como error si hay un mensaje
                          helperText={errors.verificationPassword}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  size='small'
                                  edge='end'
                                  onClick={handleClickShowSecondaryPassword}
                                  onMouseDown={e => e.preventDefault()}
                                >
                                  <i className={isThePasswordDisplayedRepeatedly ? 'ri-eye-off-line' : 'ri-eye-line'} />
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                      </Box>
                      <Box>
                        <Button
                          disabled={!email || !password || !verificationPassword}
                          fullWidth
                          variant='contained'
                          type='submit'
                        >
                          Registrar
                        </Button>
                      </Box>
                    </form>
                  </Box>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                    Volver
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {activeStep !== steps.length - 1 && <Button onClick={handleNext}>Continuar</Button>}
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
