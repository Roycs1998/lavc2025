'use client'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import Button from '@mui/material/Button'

import QRCode from 'react-qr-code'

import { Icon } from "@iconify/react";

import type{ Inscripcion } from '@/interfaces/my-events/interface'


interface Props{
  EventInfo: Inscripcion
}

const CardLifetimeMembership = ({EventInfo}:Props) => {
  return (

    <Card>
      <Grid container >
        <Grid item xs={12} sm={7}>
          <CardContent>
            <Typography variant='h5' className='mbe-2'>
              {EventInfo.taller.workshopName || 'Sin Nombre'}
            </Typography>
            <Typography>
              {EventInfo.taller.workshopDescription || 'Sin Descripción'}
            </Typography>
            <Divider className='mbs-7 mbe-7' />
            <Grid container>
              <Grid item xs={12} sm={6} className='flex flex-col pie-5 gap-[26px]'>
                <div className='flex items-center gap-2.5'>
                  <div className='flex'>
                    <Icon icon="line-md:calendar" />
                  </div>
                  <Typography>Start Date: {EventInfo.taller.workshopStartDate || 'Sin definir'}</Typography>
                </div>
                <div className='flex items-center gap-2.5'>
                  <div className='flex'>
                    <i className='ri-user-3-line text-xl text-textSecondary' />
                  </div>
                  <Typography>25 Speakers</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className='flex flex-col max-sm:mbs-[26px] sm:pis-5 sm:border-is gap-[26px]'>
                <div className='flex items-center gap-2.5'>
                  <div className='flex'>
                    <Icon icon="line-md:calendar" />
                  </div>
                  <Typography>End Date: {EventInfo.taller.workshopEndDate || 'Sin definir'}</Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CardContent className='flex items-center justify-center bs-full bg-actionHover'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <div className='flex items-baseline justify-center'>
                {EventInfo.usuario_codigo && EventInfo.taller_codigo &&(
                  <QRCode value={`${EventInfo.usuario_codigo},${EventInfo.taller_codigo}`} size={100} />
                )}
              </div>
              <Button disabled={true} variant='contained' className='mbs-5'>
                Download Certificate
              </Button>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>

  )
}

export default CardLifetimeMembership
