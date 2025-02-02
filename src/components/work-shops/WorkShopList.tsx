'use client';

import { Key, useEffect } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { Workshop } from '@/interfaces';
import { EventLetter } from '../components-home/components-events-and-workshops/EventLetter';
import { Box, Grid } from '@mui/material';

interface Props {
  workShopsList: Workshop | any
}

const WorkShopList = ({workShopsList}:Props)=>{

  const router = useRouter();
  return (
    <>
    <Box>
          <Box className='global-padding' sx={{ paddingTop: '3%', paddingBottom: '3%', backgroundColor: '#ffffff' }}>
        <Grid container spacing={4} justifyContent='center' alignItems='center'>
          {workShopsList.map((event: { codeWorkshop: Key | null | undefined; workshopPhoto: string; location: string; workshopStartDate: string | number | Date; workshopName: string; }) => (
            <Grid item xs={11.5} sm={6} md={5} key={event.codeWorkshop}>
              <Link href={'/eventos-talleres/' + event.codeWorkshop}>
                <EventLetter
                  image={event.workshopPhoto}
                  eventLocation={event.location?.toUpperCase() || "N/A"}
                  eventDate={
                    event.workshopStartDate
                      ? `${new Date(event.workshopStartDate).toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                      : 'Fecha no disponible'
                  }
                  eventName={event.workshopName.toUpperCase()}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </>
  )
}
export default WorkShopList
