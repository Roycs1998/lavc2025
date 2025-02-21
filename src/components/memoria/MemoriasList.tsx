'use client'
import { useEffect, useState } from "react"

import { Box, Button, Card, Grid, Typography } from "@mui/material"

import { Icon } from "@iconify/react/dist/iconify.js"

import { getAllMemories } from "@/api/memoria"

const MemoriasList = () => {
  const [memories, setMemories] = useState<any[]>([])
  const path = process.env.NEXT_PUBLIC_SPACE_URL

  useEffect(() => {
    const fetchMemories = async () => {
      const memoriesList = await getAllMemories()

      setMemories(memoriesList)
    }

    fetchMemories()
  }, [])

  const filteredMemories = memories ? memories.filter(memoria => memoria.memoriaEstado === "1") : []

  return (
    <>
      <Box className='global-padding' sx={{ paddingBottom: '3%', paddingTop: '3%', bgcolor: 'var(--background-form)' }}>
        <Card sx={{ maxWidth: '100%', border: 0 }}>
          <Grid container spacing={0} sx={{ bgcolor: 'var(--color-card-background)', padding: '5%' }}>
            <Grid xs={12} md={12}>
              <Typography
                variant='h2'
                component='div'
                gutterBottom
                sx={{
                  textAlign: { xs: 'center', md: 'center' },
                  marginTop: '50px',
                  height: { xs: 'auto', md: 'auto' },
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: { xs: '2.7rem', sm: '4rem', md: '4rem' }
                }}
              >
                MEMORIAS LAVC
              </Typography>
            </Grid>
            {/* Muestra la lista de PDFs */}
            <Grid item xs={12}>
              <Grid container spacing={4}>
                {filteredMemories.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: 3,
                        borderRadius: 2,
                        height: '300px', // Altura fija para hacerlo cuadrado
                        width: '100%', // Ancho completo
                        justifyContent: 'center', // Centrar contenido verticalmente
                        bgcolor: '#f3e5f5', // Fondo morado claro
                        transition: 'transform 0.3s, box-shadow 0.3s', // Transición suave
                        '&:hover': {
                          transform: 'scale(1.05)', // Efecto de escala al hacer hover
                          boxShadow: 6, // Sombra más pronunciada al hacer hover
                          bgcolor: '#e1bee7', // Cambio de color al hacer hover
                        }
                      }}
                    >
                      <Icon icon="ion:library" width="60" height="60" style={{ color: '#6a1b9a' }} /> {/* Icono más grande */}
                      <Typography
                        variant="h5"
                        sx={{
                          marginTop: 2,
                          textAlign: 'center',
                          color: '#4a148c', // Color morado oscuro para el texto
                          fontWeight: 'bold'
                        }}
                      >
                        {item.memoriaTitulo || 'Sin título'}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        href={`${path}/${item.memoriaUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          marginTop: 2,
                          bgcolor: '#6a1b9a', // Color morado oscuro para el botón
                          '&:hover': {
                            bgcolor: '#4a148c', // Color morado más oscuro al hacer hover
                          }
                        }}
                      >
                        Ver / Descargar
                      </Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  )
}

export default MemoriasList
