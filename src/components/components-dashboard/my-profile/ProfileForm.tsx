'use client'

import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Icon } from '@iconify/react';


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

  interface Props {
  
  // Define aquí los estados y handlers, o utiliza un hook de formulario
}

const LinearRegistrationForm: React.FC<Props> = () => {
  // Estados y handlers (ejemplo)
  const [name, setName] = React.useState('');
  const [paternalSurname, setPaternalSurname] = React.useState('');
  const [maternalSurname, setMaternalSurname] = React.useState('');
  const [typeOfDocument, setTypeOfDocument] = React.useState('');
  const [document, setDocument] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [homeCountry, setHomeCountry] = React.useState('');
  const [cityOfOrigin, setCityOfOrigin] = React.useState('');
  const [homeUniversity, setHomeUniversity] = React.useState('');
  const [academic, setAcademicStatus] = React.useState('');
  const [cycleCurrentlyInProgress, setCycleCurrentlyInProgress] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [verificationPassword, setVerificationPassword] = React.useState('');
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);
  const [isThePasswordDisplayedRepeatedly, setIsThePasswordDisplayedRepeatedly] = React.useState(false);

  /*   const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<any>({}); */
  const [countries, setCountries] = useState<Country[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [university, setUniversity] = useState<University[]>([])
  
  const isLoading = false;
  const errors: { [key: string]: string } = {};
    
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

  const handleClickShowPassword = () => {
    setIsPasswordShown(prev => !prev);
  };
  
  const handleClickShowSecondaryPassword = () => {
    setIsThePasswordDisplayedRepeatedly(prev => !prev);
  };

  const userRegistrar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Lógica de registro...
    console.log('Registrando usuario...');
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh] relative p-6'>
      <Card className='flex flex-col sm:w-[700px]'>
        <CardContent className='p-6'>
          <Typography variant='h4' sx={{ textAlign: 'center' }}>
            Datos de usuario
          </Typography>
          <Typography sx={{ textAlign: 'center', mb: 3 }}>
           Estos datos puede ser modificables, para confirmar presiona en Actualizar
          </Typography>
          <Box
            component="form"
            autoComplete="off"
            onSubmit={userRegistrar}
            className="flex flex-col gap-3"
          >
            {/* Datos personales */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombres"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Apellido Paterno"
                  type="text"
                  value={paternalSurname}
                  onChange={e => setPaternalSurname(e.target.value)}
                  error={Boolean(errors.paternalSurname)}
                  helperText={errors.paternalSurname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Apellido Materno"
                  type="text"
                  value={maternalSurname}
                  onChange={e => setMaternalSurname(e.target.value)}
                  error={Boolean(errors.maternalSurname)}
                  helperText={errors.maternalSurname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Tipo de Documento"
                  value={typeOfDocument}
                  onChange={e => setTypeOfDocument(e.target.value)}
                  error={Boolean(errors.typeOfDocument)}
                  helperText={errors.typeOfDocument}
                >
                  {documents.map(option => (
                    <MenuItem key={option.value} value={option.value} sx={{ textTransform: 'uppercase' }}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={typeOfDocument ? typeOfDocument : 'Documento'}
                  type="text"
                  value={document}
                  onChange={e => setDocument(e.target.value)}
                  error={Boolean(errors.document)}
                  helperText={errors.document}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <PhoneInput
                    country={'us'}
                    value={phone}
                    placeholder="Celular"
                    onChange={phone => setPhone(phone || '')}
                    inputStyle={{
                      height: '56px',
                      border: `1px solid ${errors.phone ? '#ff4c51' : '#ccc'}`,
                      transition: 'border-color 0.3s ease',
                      boxShadow: 'none',
                      width: '100%'
                    }}
                    containerStyle={{ width: '100%' }}
                    onFocus={e => {
                      e.target.style.borderColor = errors.phone ? '#ff4c51' : '#8c57ff';
                      e.target.style.borderWidth = '2px';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = errors.phone ? '#ff4c51' : '#ccc';
                      e.target.style.borderWidth = '1px';
                    }}
                  />
                  {errors.phone && (
                    <Typography
                      sx={{
                        color: '#ff4c51',
                        fontSize: '13px',
                        mt: 1,
                        ml: '5%'
                      }}
                    >
                      {errors.phone}
                    </Typography>
                  )}
                </Box>
              </Grid>
              {/* Ubicación */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="País de Procedencia"
                  value={homeCountry}
                  onChange={e => setHomeCountry(e.target.value)}
                  error={Boolean(errors.homeCountry)}
                  helperText={errors.homeCountry}
                >
                  {countries.map(option => (
                    <MenuItem key={option.shortName} value={option.ISO2} sx={{ textTransform: 'uppercase' }}>
                      {option.shortName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Ciudad de Procedencia"
                  value={cityOfOrigin}
                  onChange={e => setCityOfOrigin(e.target.value)}
                  error={Boolean(errors.cityOfOrigin)}
                  helperText={errors.cityOfOrigin}
                >
                  {departments.map(option => (
                    <MenuItem key={option.id_ubigeo} value={option.nombre_ubigeo} sx={{ textTransform: 'uppercase' }}>
                      {option.nombre_ubigeo}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/* Educación */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Universidad de Procedencia"
                  value={homeUniversity}
                  onChange={e => setHomeUniversity(e.target.value)}
                  error={Boolean(errors.homeUniversity)}
                  helperText={errors.homeUniversity}
                >
                  {university.map(option => (
                    <MenuItem key={option.id} value={option.universidad} sx={{ textTransform: 'uppercase' }}>
                      {option.universidad}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Estado Académico"
                  value={academic}
                  onChange={e => setAcademicStatus(e.target.value)}
                  error={Boolean(errors.academic)}
                  helperText={errors.academic}
                >
                  {academicStatus.map(option => (
                    <MenuItem key={option.value} value={option.value} sx={{ textTransform: 'uppercase' }}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="Ciclo Cursando"
                  disabled={academic !== 'ESTUDIANTE'}
                  value={cycleCurrentlyInProgress}
                  onChange={e => setCycleCurrentlyInProgress(e.target.value)}
                  error={Boolean(errors.cycleCurrentlyInProgress)}
                  helperText={errors.cycleCurrentlyInProgress}
                >
                  {cycles.map(option => (
                    <MenuItem key={option.value} value={option.value} sx={{ textTransform: 'uppercase' }}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/* Datos de cuenta */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contraseña"
                  type={isPasswordShown ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  error={Boolean(errors.password)}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Volver a ingresar contraseña"
                  value={verificationPassword}
                  onChange={e => setVerificationPassword(e.target.value)}
                  type={isThePasswordDisplayedRepeatedly ? 'text' : 'password'}
                  error={Boolean(errors.verificationPassword)}
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
              </Grid>
            </Grid>
            <Box sx={{ mt: 3 }}>
              <Button
                disabled={!email || !password || !verificationPassword || isLoading}
                fullWidth
                variant="contained"
                type="submit"
              >
                {isLoading ? (
                  <>
                    Actualizando <Icon icon="eos-icons:three-dots-loading" />
                  </>
                ) : (
                  'Actualizar'
                )}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default LinearRegistrationForm;
