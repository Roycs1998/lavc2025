'use client'

import dynamic from 'next/dynamic'

import type { getDictionary } from '@/utils/getDictionary'

const InfiniteCarousel = dynamic(() => import('./InfiniteCarousel/InfiniteCarousel'), { ssr: false })

import SectionTitle from '@/components/SectionTitle'
import { Huellas } from '@/components/ui/Huellas'



interface Props {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

const PartnersSection = ({ }: Props) => {
  const logosRow1 = [
    "tlavc/vista/upload/enlaces/invetsa.jpg",
    "tlavc/vista/upload/enlaces/HALLMARK.jpg",
    "tlavc/vista/upload/enlaces/DEXER.jpg",
    "tlavc/vista/upload/enlaces/DURAND.jpg",
    "tlavc/vista/upload/enlaces/BIOMONT.jpg",
    "tlavc/vista/upload/enlaces/MARCEBEL.jpg",
    "tlavc/vista/upload/enlaces/CANBO.jpg",
    "tlavc/vista/upload/enlaces/MSD.jpg",
    "tlavc/vista/upload/enlaces/petmedica.jpg",
    "tlavc/vista/upload/enlaces/logo_andeanvet-01.jpg",
    "tlavc/vista/upload/enlaces/ludipet-logo.JPG",
    "tlavc/vista/upload/enlaces/totalvet.jpg",
    "tlavc/vista/upload/enlaces/BOEHRINGER.jpg",
    "tlavc/vista/upload/enlaces/IMAGEN TOTAL.jpg",
    "tlavc/vista/upload/enlaces/INNOVALITYVET.png",
    "tlavc/vista/upload/enlaces/alphatec.jpg?v=2",
    "tlavc/vista/upload/enlaces/inaba.jpg",
    "tlavc/vista/upload/enlaces/petNutricion.png",
    "tlavc/vista/upload/enlaces/elanco.png",
    "tlavc/vista/upload/enlaces/MULTIVET.jpg?v=2"
  ]

  const logosRow2 = [
    "tlavc/vista/upload/enlaces/servipet.jpg",
    "tlavc/vista/upload/enlaces/Internacional.PNG",
    "tlavc/vista/upload/enlaces/labet.jpg",
    "tlavc/vista/upload/enlaces/baruch.jpg",
    "tlavc/vista/upload/enlaces/vetlinex.jpg",
    "tlavc/vista/upload/enlaces/ZOETIS.jpg",
    "tlavc/vista/upload/enlaces/ROYALCANIN.png",
    "tlavc/vista/upload/enlaces/THARINATECH.jpg",
    "tlavc/vista/upload/enlaces/veterperu.jpg",
    "tlavc/vista/upload/enlaces/ORIGENS.jpg",
    "tlavc/vista/upload/enlaces/labeca.jpg",
    "tlavc/vista/upload/enlaces/artero.png",
    "tlavc/vista/upload/enlaces/bluesao.jpg",
    "tlavc/vista/upload/enlaces/suprovet.png",
    "tlavc/vista/upload/enlaces/gabrica.JPG",
    "tlavc/vista/upload/enlaces/bioingenieria.jpeg",
    "tlavc/vista/upload/enlaces/ahd_logo.jpg",
    "tlavc/vista/upload/enlaces/XIMED.jpg",
    "tlavc/vista/upload/enlaces/hipra.jpg",
    "tlavc/vista/upload/enlaces/Inversiones Saluds-01.jpg"
  ]

  const logosRow3 = [
    "tlavc/vista/upload/enlaces/iprovet.JPG",
    "tlavc/vista/upload/enlaces/descarga.png",
    "tlavc/vista/upload/enlaces/vetanis.png",
    "tlavc/vista/upload/enlaces/otama.jpg",
    "tlavc/vista/upload/enlaces/IMPROVET.jpg",
    "tlavc/vista/upload/enlaces/APYCE.png",
    "tlavc/vista/upload/enlaces/sutuvet.jpg",
    "tlavc/vista/upload/enlaces/rivet.jpg",
    "tlavc/vista/upload/enlaces/MIOCANE.jpg",
    "tlavc/vista/upload/enlaces/TANTALEAN 1.png",
    "tlavc/vista/upload/enlaces/icon.png",
    "tlavc/vista/upload/enlaces/HM.png",
    "tlavc/vista/upload/enlaces/yanusavet.jpg",
    "tlavc/vista/upload/enlaces/HYS.png",
    "tlavc/vista/upload/enlaces/VINNO.jpg",
    "tlavc/vista/upload/enlaces/2RCOMPANY.jpg",
    "tlavc/vista/upload/enlaces/vetpraxis.jpg",
    "tlavc/vista/upload/enlaces/DIOHM.png",
    "tlavc/vista/upload/enlaces/qvet.jpg",
    "tlavc/vista/upload/enlaces/petmedic.jpg",
    "tlavc/vista/upload/enlaces/carlosponce.jpg",
    "tlavc/vista/upload/enlaces/Vet 1.jpg",
    "tlavc/vista/upload/enlaces/instrupet.jpg",
    "tlavc/vista/upload/enlaces/xvets.jpg",
    "tlavc/vista/upload/enlaces/VETIMPORT.png",
    "tlavc/vista/upload/enlaces/MEDICALCLOTINHG.jpg",
    "tlavc/vista/upload/enlaces/pdf.jpg"
  ]


  return (
    <div className='bg-[#ebeff3] relative overflow-hidden'>
      {/* Imagen de huellas decorativa */}
      <Huellas />
      <div className={`max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col gap-2 py-10 md:py-20`}>
        <SectionTitle
          title={
            <>
              Principales <span className='text-[#3a3480] '>Patrocinadores</span>
            </>
          }
          subTitle={<span >Patrocinadores</span>}
          showIcon={false}
        />

        <div className='pt-6'>
          <InfiniteCarousel items={logosRow1} />
          <InfiniteCarousel items={logosRow2} reserveDirection />
          <InfiniteCarousel items={logosRow3} />
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
