import { Box } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { SpeakerInformation } from '@/components/components-home/components-ponentes/SpeakerInformation/SpeakerInformation'

interface PonenteParams {
  params: {
    ponente: string
  }
}

const Ponente = async ({ params }: PonenteParams) => {
  const { ponente } = params

  const name = decodeURIComponent(ponente)

  console.log('nombre' + name)

  const speakers = [
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/802d9320-c709-4b93-86b4-6e995b5199ca.jpeg',
      name: 'ELISA MAZZAFERRO',
      description:
        'Fundador de Seaside Animal Care, fundador de the VitalX Awards, ganador de premios como ponente y empresario veterinario Reconocido internacionalmente por sus innovaciones en la práctica general de pequeños animales, monitorización de medicaciones a largo plazo, necesidades especiales para perros y gatos senior y obesidad animal. Fue un promotor temprano de los análisis sanguíneos pre-quirúrgicos para perros y gatos, la administración de fluidos endovenosos durante el procedimiento pre y post operativo del manejo del dolor, incluidos en cirugías de rutina como esterilizaciones y castraciones.El Dr. Ward se graduó como Doctor en Medicina Veterinaria (DVM) en la Universidad de Georgia y es un reconocido comunicador y consultor en la administración de la clínica veterinaria.',
      specializations:
        'Saxon ha practicado en el Área de la Bahía de San Francisco y fue dueño de un servicio de emergencia',
      scientificInterests:
        'Sus áreas de interés en el campo de investigación clínica incluyen el reconocimiento y manejo de la lesión renal aguda y el uso de purificación extracorpórea para el manejo del paciente intoxicado y renal, al igual que la evaluación del glicocálix endotelial en pacientes críticos.',
      recognitionsAndDecorations: 'Sus áreas de interés en el campo de investigación',
      certifications: 'Sus áreas de interés en el campo de investigación',
      books: 'Sus áreas de interé',
      research: 'Sus áreas de interés en el campo de investigación',
      achievements: 'Sus áreas de interés en el campo de investigación'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/Enie%20Ward.jpg',
      name: 'ERNIE WARD',
      accreditations: 'DVM',
      description:
        'Fundador de Seaside Animal Care, fundador de the VitalX Awards, ganador de premios como ponente y empresario veterinario Reconocido internacionalmente por sus innovaciones en la práctica general de pequeños animales, monitorización de medicaciones a largo plazo, necesidades especiales para perros y gatos senior y obesidad animal. Fue un promotor temprano de los análisis sanguíneos pre-quirúrgicos para perros y gatos, la administración de fluidos endovenosos durante el procedimiento pre y post operativo del manejo del dolor, incluidos en cirugías de rutina como esterilizaciones y castraciones.El Dr. Ward se graduó como Doctor en Medicina Veterinaria (DVM) en la Universidad de Georgia y es un reconocido comunicador y consultor en la administración de la clínica veterinaria.',
      specializations:
        'Saxon ha practicado en el Área de la Bahía de San Francisco y fue dueño de un servicio de emergencia',
      scientificInterests:
        'Sus áreas de interés en el campo de investigación clínica incluyen el reconocimiento y manejo de la lesión renal aguda y el uso de purificación extracorpórea para el manejo del paciente intoxicado y renal, al igual que la evaluación del glicocálix endotelial en pacientes críticos.',
      recognitionsAndDecorations: '',
      certifications: '',
      books: '',
      research: '',
      achievements: 'Sus áreas de interés en el campo de investigación'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/karenkline.jpg',
      name: 'KAREN KLINE',
      accreditations: 'DVM, MS, DACVIM',
      description:
        'Fundador de Seaside Animal Care, fundador de the VitalX Awards, ganador de premios como ponente y empresario veterinario Reconocido internacionalmente por sus innovaciones en la práctica general de pequeños animales, monitorización de medicaciones a largo plazo, necesidades especiales para perros y gatos senior y obesidad animal. Fue un promotor temprano de los análisis sanguíneos pre-quirúrgicos para perros y gatos, la administración de fluidos endovenosos durante el procedimiento pre y post operativo del manejo del dolor, incluidos en cirugías de rutina como esterilizaciones y castraciones.El Dr. Ward se graduó como Doctor en Medicina Veterinaria (DVM) en la Universidad de Georgia y es un reconocido comunicador y consultor en la administración de la clínica veterinaria.',
      specializations:
        'Saxon ha practicado en el Área de la Bahía de San Francisco y fue dueño de un servicio de emergencia',
      scientificInterests:
        'Sus áreas de interés en el campo de investigación clínica incluyen el reconocimiento y manejo de la lesión renal aguda y el uso de purificación extracorpórea para el manejo del paciente intoxicado y renal, al igual que la evaluación del glicocálix endotelial en pacientes críticos.',
      recognitionsAndDecorations: 'Sus áreas de interés en el campo de investigación',
      certifications: 'Sus áreas de interés en el campo de investigación',
      books: '',
      research: '',
      achievements: 'Sus áreas de interés en el campo de investigación'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/image001.jpg',
      name: 'BILL SAXON',
      accreditations: 'DVM, DACVIM, DACECC',
      description:
        'Fundador de Seaside Animal Care, fundador de the VitalX Awards, ganador de premios como ponente y empresario veterinario Reconocido internacionalmente por sus innovaciones en la práctica general de pequeños animales, monitorización de medicaciones a largo plazo, necesidades especiales para perros y gatos senior y obesidad animal. Fue un promotor temprano de los análisis sanguíneos pre-quirúrgicos para perros y gatos, la administración de fluidos endovenosos durante el procedimiento pre y post operativo del manejo del dolor, incluidos en cirugías de rutina como esterilizaciones y castraciones.El Dr. Ward se graduó como Doctor en Medicina Veterinaria (DVM) en la Universidad de Georgia y es un reconocido comunicador y consultor en la administración de la clínica veterinaria.',
      specializations:
        'Saxon ha practicado en el Área de la Bahía de San Francisco y fue dueño de un servicio de emergencia',
      scientificInterests:
        'Sus áreas de interés en el campo de investigación clínica incluyen el reconocimiento y manejo de la lesión renal aguda y el uso de purificación extracorpórea para el manejo del paciente intoxicado y renal, al igual que la evaluación del glicocálix endotelial en pacientes críticos.',
      recognitionsAndDecorations: 'Sus áreas de interés en el campo de investigación',
      certifications: 'Sus áreas de interés en el campo de investigación',
      books: '',
      research: 'Sus áreas de interés en el campo de investigación',
      achievements: 'Sus áreas de interés en el campo de investigación'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/esther-klok.png',
      name: 'ESTHER KLOK'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/IMG_5404.jpeg',
      name: 'BRITTANY LANCELLOTTI'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/BENITA.jpg',
      name: 'BENITA ALTIER'
    },
    {
      image: 'https://tlavc-peru.org/tlavc/vista/upload/expositores/Headshot_Marvel.jpg',
      name: 'SARAH MARVEL'
    }
  ]

  const matchedSpeaker = speakers.find(speaker => speaker.name === name)

  return (
    <Box>
      <Box>
        <CardImage
          image='https://buenavibra.es/wp-content/uploads/2017/10/razas-de-perros_opt_opt_opt_opt.jpg'
          title='PONENTE'
        />
      </Box>

      <Box className='global-padding'>
        {matchedSpeaker ? (
          <SpeakerInformation
            name={matchedSpeaker.name}
            accreditations={matchedSpeaker.accreditations}
            description={matchedSpeaker.description}
            specializations={matchedSpeaker.specializations}
            scientificInterests={matchedSpeaker.scientificInterests}
            image={matchedSpeaker.image}
            recognitionsAndDecorations={matchedSpeaker.recognitionsAndDecorations}
            certifications={matchedSpeaker.certifications}
            books={matchedSpeaker.books}
            research={matchedSpeaker.research}
            achievements={matchedSpeaker.achievements}
          />
        ) : (
          <p>Ponente no encontrado.</p>
        )}
      </Box>
    </Box>
  )
}

export default Ponente
