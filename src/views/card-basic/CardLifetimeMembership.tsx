'use client'

import { useEffect, useState, useRef } from 'react'

import { jsPDF } from 'jspdf'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { useSession } from 'next-auth/react'
import QRCode from 'react-qr-code'
import { Icon } from '@iconify/react'

import type { Inscripcion } from '@/interfaces/my-events/interface'

interface Props {
  EventInfo: Inscripcion
}

// Mock de certificados
const certificadosMock = [
  { idCertificado: 1, eventoCertificado: 30, imagenCertificado: 'img/certificado_2022.jpg', xCertificado: 50, yCertificado:  119},
  { idCertificado: 2, eventoCertificado: 22, imagenCertificado: 'img/certificado_2021.jpg', xCertificado: 50, yCertificado:  119},
  { idCertificado: 3, eventoCertificado: 15, imagenCertificado: 'img/certificado_2019.jpg', xCertificado: 50, yCertificado:  119},
  { idCertificado: 4, eventoCertificado: 10, imagenCertificado: 'img/certificado_2018.jpg', xCertificado: 50, yCertificado:  119},
  { idCertificado: 5, eventoCertificado: 33, imagenCertificado: 'img/certificado_2023.jpg', xCertificado: 50, yCertificado:  119},
  { idCertificado: 6, eventoCertificado: 35, imagenCertificado: 'img/taller_fractura.jpg', xCertificado: 50, yCertificado:  119},
  { idCertificado: 7, eventoCertificado: 37, imagenCertificado: 'img/certificado_2024.jpg', xCertificado: 50, yCertificado:  119},
  { idCertificado: 8, eventoCertificado: 43, imagenCertificado: 'img/certificado_2025.jpg', xCertificado: 50, yCertificado: 119},
]

const CardLifetimeMembership = ({ EventInfo }: Props) => {
  const [certificadoInfo, setCertificadoInfo] = useState<typeof certificadosMock[0] | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { data: session, status } = useSession() as any
  
  // Buscamos el certificado en el mock
  
  useEffect(() => {
    const found = certificadosMock.find(c => c.eventoCertificado === EventInfo.taller_codigo)
    
    console.log('certificado encontrado:', found)
    setCertificadoInfo(found || null)
  }, [EventInfo.taller_codigo])

  const handleDownloadCertificate = async () => {
    console.log('handleDownloadCertificate iniciado')
    
    if (!certificadoInfo) {
      console.warn('No hay certificadoInfo')
      alert('No hay certificado disponible para este evento.')
      
      return
    }
    
    const nombreUsuario =
      status === 'authenticated'
        ? session.user?.personaNombre || session.user?.userName || 'Invitado'
        : 'Invitado'
    
        // Ruta relativa dentro de /public
    
    const imgUrl = `/${certificadoInfo.imagenCertificado}`
    
    console.log('imgUrl:', imgUrl)

    // 1) Dibujar imagen en canvas para evitar CORS
    const img = new Image()
    
    img.src = imgUrl
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      console.log('Imagen cargada en <img>')

      const canvas = canvasRef.current!
      const ctx = canvas.getContext('2d')!
      
      // Ajustamos canvas a A4 landscape en px (aprox 72dpi -> 842x595)
      
      canvas.width = 842
      canvas.height = 595

      try {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        console.log('Imagen dibujada en canvas')

        // 2) Convertir canvas a Data URL
        const dataUrl = canvas.toDataURL('image/jpeg')
        
        console.log('DataURL generado, length:', dataUrl.length)

        // 3) Generar PDF con jsPDF
        const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
        
        console.log('jsPDF instance creado')

        doc.addImage(dataUrl, 'JPEG', 0, 0, 297, 210)
        console.log('Imagen añadida al PDF')

        // 4) Escribir texto en la posición indicada
        doc.setFontSize(24)
        doc.setTextColor('#000')
        const nombre = EventInfo.inscripcion_archivo_bcp || 'Nombre no disponible'
        
        doc.text(nombreUsuario, certificadoInfo.xCertificado, certificadoInfo.yCertificado)
        console.log('Texto añadido al PDF:', nombre)

        // 5) Descargar
        doc.save(`certificado-${EventInfo.taller.workshopName || 'evento'}.pdf`)
        console.log('doc.save() invocado')
      } catch (err) {
        console.error('Error durante la generación del PDF:', err)
        alert('Error durante la generación del PDF. Revisa la consola.')
      }
    }

    img.onerror = (e) => {
      console.error('Error cargando imagen en <img>:', e)
      alert('Error al cargar la imagen del certificado. Revisa la consola.')
    }
  }

  return (
    <>
      {/* Canvas oculto para renderizar la imagen */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <Card>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <CardContent>             
              <Typography variant='h5' className='mb-2'>
                {EventInfo.taller.workshopName || 'Sin Nombre'}
              </Typography>
              <Typography>{EventInfo.taller.workshopDescription || 'Sin Descripción'}</Typography>
              <Divider className='my-4' />
              <Grid container>
                <Grid item xs={12} sm={6} className='flex flex-col gap-4'>
                  <div className='flex items-center gap-2'>
                    <Icon icon='line-md:calendar' />
                    <Typography>Start Date: {EventInfo.taller.workshopStartDate || 'Sin definir'}</Typography>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Icon icon='ri-user-3-line' />
                    <Typography>Speakers: 25</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} className='flex flex-col gap-4'>
                  <div className='flex items-center gap-2'>
                    <Icon icon='line-md:calendar' />
                    <Typography>End Date: {EventInfo.taller.workshopEndDate || 'Sin definir'}</Typography>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>

          <Grid item xs={12} sm={5}>
            <CardContent className='flex flex-col items-center justify-center p-4 bg-gray-50'>
              {EventInfo.usuario_codigo && EventInfo.taller_codigo && (
                <QRCode value={`${EventInfo.usuario_codigo},${EventInfo.taller_codigo}`} size={100} />
              )}
              <Button
                onClick={handleDownloadCertificate}
                variant='contained'
                disabled={!certificadoInfo}
                className='mt-4'
              >
                Descargar Certificado
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default CardLifetimeMembership
