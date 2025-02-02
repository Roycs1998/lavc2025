'use client'

// React Imports
import { useState } from 'react'
import type { FormEvent } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
import type { Mode } from '@core/types'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import Illustrations from '@components/Illustrations'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'

interface FormErrors {
  email?: string
  password?: string
  userNotFound?: string
}

const Login = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const router = useRouter()
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: FormErrors = {}

    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }

    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Por favor corrige los errores antes de continuar.');
      return;
    }

    try {
      const responseNextAuth = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (responseNextAuth?.error) {
        console.error('Error al iniciar sesión:', responseNextAuth);
        toast.error(responseNextAuth.error);
        return;
      }

      router.push('/eventos-talleres');
    } catch (error) {
      toast.error('Error al iniciar sesión');
    }
  }

  return (
    <div
      className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'
      style={{ marginTop: '50px' }}
    >
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Logo />
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4' sx={{ textAlign: 'center' }}>{`Bienvenido a LAVC!👋🏻`}</Typography>
              <Typography className='mbs-1' sx={{ textAlign: 'center' }}>
                Inicia sesión en tu cuenta.
              </Typography>
            </div>
            <form autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <TextField
                sx={{ width: '100%' }}
                fullWidth
                label='Email'
                type='email'
                value={email} // Estado del campo de mensaje
                onChange={e => setEmail(e.target.value)}
                error={Boolean(errors.email)} // Marca como error si hay un mensaje
                helperText={errors.email} // Muestra el mensaje de error
              />
              <TextField
                fullWidth
                label='Contraseña'
                onChange={e => setPassword(e.target.value)}
                id='outlined-adornment-password'
                type={isPasswordShown ? 'text' : 'password'}
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
              <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                <FormControlLabel control={<Checkbox />} label='Remember me' />
                <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
                  Forgot password?
                </Typography>
              </div>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={!email || !password || Object.keys(errors).length > 0}
              >
                Ingresar
              </Button>
              <Typography
                variant="body2"
                color="error"
                sx={{ mt: 1 }}
                aria-live="polite"
              >
                {errors.email}
              </Typography>
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>¿Nuevo en nuestra plataforma?</Typography>
                <Typography component={Link} href='/register' color='primary'>
                  Crear una cuenta
                </Typography>
              </div>
              <Divider className='gap-3'>o</Divider>
              <div className='flex justify-center items-center gap-2'>
                <IconButton size='small' className='text-facebook'>
                  <i className='ri-facebook-fill' />
                </IconButton>
                <IconButton size='small' className='text-googlePlus'>
                  <i className='ri-google-fill' />
                </IconButton>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default Login
