'use client'

import React, { useState } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Logo from '@components/layout/shared/Logo'
import Api from '@/api/api';
import { toast } from 'react-toastify';

const ResetPasswordForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token'); // Obtiene el token de la URL
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (newPassword !== confirmPassword) {
      toast.error('Las contraseñas no coinciden.');
      return;
    }
    
    if (!token) {
      setError('Token inválido.');
      return;
    }

    setLoading(true);
    try {
      const response = await Api.post('/auth/reset', { token, newPassword });
      toast.success('Contraseña actualizada correctamente.')
      setMessage(response.data.message || 'Contraseña actualizada correctamente.');
      // Redirecciona a la página de inicio de sesión después de 3 segundos
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err: any) {
        toast.error('Error al restablecer la contraseña.')
      setError(err.response?.data?.message || 'Error al restablecer la contraseña.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: '100%', maxWidth: 400, p: 2 }}>
        <CardContent>
            <Link href='/' className='flex justify-center items-center mbe-6'>
                <Logo />
            </Link>
          <Typography variant="h5" align="center" gutterBottom>
            Restablecer Contraseña
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Ingresa tu nueva contraseña y confírmala.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nueva Contraseña"
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Confirmar Contraseña"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              margin="normal"
              required
            />
            {error && (
              <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            {message && (
              <Typography variant="body2" color="primary" align="center" sx={{ mt: 1 }}>
                {message}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? 'Actualizando...' : 'Restablecer Contraseña'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ResetPasswordForm;
