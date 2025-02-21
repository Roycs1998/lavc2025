'use client'
import { useEffect, useState } from "react"

import { Box, Grid, Link } from "@mui/material"

import { LetterImage } from "../components-home/components-ponentes/LetterImage"

import { getAllPonentes } from "@/api/ponente"

const PonentesList = () => {

    const [ponentes, setPonentes] = useState<any[]>([])
    const path = process.env.NEXT_PUBLIC_SPACE_URL

    useEffect(() => {
      const fetchPonentes = async () => {
        const ponentesList = await getAllPonentes()

        setPonentes(ponentesList)
      }

      fetchPonentes()
    }, [])

    const filteredPonentes = ponentes ? ponentes.filter(ponente => ponente.ponenteEstado === 1) : []


  return (
    <Box
        className='global-padding'
        sx={{
          display: 'flex',
          flexDirection: 'column', // Alinea verticalmente en pantallas pequeñas
          justifyContent: 'center',
          alignItems: 'center', // Alinea horizontalmente
          width: '100%', // El Box ocupa todo el ancho
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <Grid
          container
          spacing={2} // Ajusta el espacio entre las columnas
          sx={{ width: { xs: '100%', sm: '82%' } }} // Ocupa el 100% del ancho en xs y 82% en pantallas más grandes
        >
          {filteredPonentes.map((ponente, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Link href={'/ponentes/' + ponente.name}>
                <LetterImage image={`${path}/${ponente.ponenteFoto}`} name={ponente.persona?.persona_nombres || 'sin nombre'} />
              </Link>
            </Grid>
          ))}


        </Grid>
        <pre>{JSON.stringify(filteredPonentes.map(ponente => ponente.ponenteFoto), null, 2)}</pre>
      </Box>
  )
}

export default PonentesList
