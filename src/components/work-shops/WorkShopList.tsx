'use client';

import type{ Key } from 'react';

import Link from 'next/link';

import { Grid } from '@mui/material';

import type{ Workshop } from '@/interfaces';

import { EventLetter } from '../components-home/components-events-and-workshops/EventLetter';

interface Props {
  workShopsList: Workshop | any
}

const WorkShopList = ({workShopsList}:Props)=>{

  return (
    <>
        <div className="w-full text-base font-light bg-[#ffffff] text-white ">
        <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center py-20 gap-10">
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
      </div>
    </div>
    </>
  )
}

export default WorkShopList
