'use client'

import { Typography } from '@mui/material'

import { Icon } from '@iconify/react/dist/iconify.js'

import SectionTitle from '@/components/SectionTitle'

import type { getDictionary } from '@/utils/getDictionary'
import CustomButton from '@/components/ui/CustomButton'

interface Props {
    dictionary: Awaited<ReturnType<typeof getDictionary>>
}

const EventExperience = ({  }: Props) => {


    const handleClick = () => {
        window.open('https://youtu.be/cc_cd1h-nkY?si=GlC9gvj3rrRuEpMF', '_blank')
    }
    
    return (
        <div className="relative w-full text-base font-light text-white overflow-hidden md:py-20">

        {/* 🔴 VIDEO DE FONDO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        >
          <source src="/videos/lavcReview.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
  
        {/* 🔵 CAPA OSCURA SUPERPUESTA */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#f5c72c] opacity-70 z-[-1]" />
  
        {/* CONTENIDO */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center py-10 gap-10">
          <SectionTitle
            title={<span className='text-[#3a3480] '>Así fue el LAVC 2025</span>}
            subTitle={<span className="text-backgroundPaper">Experiencia inolvidable</span>}
            showIcon={false}
            lineaColor='3a3480'
          />
  
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl w-full">
              <div className="w-full md:w-3/4 flex flex-col gap-4 isolate">
                <Typography variant="body1" className="text-white text-justify" fontSize="1.125rem" >
                El LAVC 2025 fue una edición histórica. Más de 5,500 asistentes vivieron cuatro días intensos de aprendizaje, 
                conexión y descubrimiento. Se realizaron más de 20 conferencias con ponentes internacionales, se presentaron 
                nuevos tratamientos, productos y tecnologías, y se fortalecieron lazos entre profesionales de toda Latinoamérica.
                <br />
                No te pierdas la próxima edición: LAVC 2026 promete ser aún más grande, más enriquecedora y más impactante.
                </Typography>
                <CustomButton onClick={handleClick}>Ver video <Icon className='ml-2' icon="icon-park-twotone:play" width="26" height="26"/></CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EventExperience
