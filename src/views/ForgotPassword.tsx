'use client'

// Next Imports
import { useState, type FormEvent } from 'react'

import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { toast } from 'react-toastify'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Form from '@components/Form'

import DirectionalIcon from '@components/DirectionalIcon'

import Illustrations from '@components/Illustrations'

import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

import { sendRequest } from '@/api/changePassword'

const ForgotPassword = ({ mode }: { mode: Mode }) => {
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [loading, setLoading] = useState(false);
  
  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()

    setErrorEmail('')

    if (!email) {
      setErrorEmail('El correo electrónico es obligatorio.')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail('El correo electrónico no es válido')
    }

    if (errorEmail === '') {
      console.log('email' + email)
    }
    
    setLoading(true);

    try {
      // Se envía la petición al endpoint de recuperación
      // Asegúrate de ajustar la URL al endpoint de tu backend
       await sendRequest(email)
      
      // Aquí suponemos que el backend envía un mensaje o URL de recuperación,
      // pero en este ejemplo solo mostramos un mensaje
      toast.info("Se ha enviado un correo con el enlace para recuperar tu clave.");
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Ocurrió un error al enviar el correo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href='/' className='flex justify-center items-center mbe-6'>
            <Logo />
          </Link>
          <Typography variant='h4' sx={{ textAlign: 'center' }}>
            ¿Olvidaste tu contraseña? 🔒
          </Typography>
          <div className='flex flex-col gap-5'>
            <Typography className='mbs-1' sx={{ textAlign: 'center' }}>
              Ingresa tu correo electrónico y te enviaremos un enlace con instrucciones para restablecer tu contraseña
            </Typography>
            <Form onSubmit={sendMail} autoComplete='off' className='flex flex-col gap-5'>
              <TextField
                fullWidth
                label='Email'
                value={email} // Estado del campo de mensaje
                onChange={e => setEmail(e.target.value)}
                error={Boolean(errorEmail)} // Marca como error si hay un mensaje
                helperText={errorEmail} // Muestra el mensaje de error
              />
              <Button fullWidth variant='contained' type='submit' disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
              </Button>
              <Typography className='flex justify-center items-center' color='primary'>
                <Link href='/login' className='flex items-center'>
                  <DirectionalIcon ltrIconClass='ri-arrow-left-s-line' rtlIconClass='ri-arrow-right-s-line' />
                  <span>Back to Login</span>
                </Link>
              </Typography>
            </Form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default ForgotPassword
