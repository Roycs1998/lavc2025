import { Box } from '@mui/material'

import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'
import { Informationletter } from '@/components/components-home/components-reusable/InformationLetter'
import { SecondInformationLetter } from '@/components/components-home/components-reusable/SecondInformationLetter'
import { Huellas } from '@/components/ui/Huellas'
import type { Locale } from '@/configs/i18n'
import { getDictionary } from '@/utils/getDictionary'

interface Props {
  params: { lang: Locale }
}

const Us = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang)
  const about = dictionary.about

  return (
    <Box className="w-full text-base font-light bg-[#ebeff3] text-white ">
      <Box>
        <CardImage
          image='https://www.tlavc-peru.org/tlavc/vista/upload/galeria/lavc20231%20(12).jpeg'
          title={about.hero_title}
        />
      </Box>

      <Box className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center py-10 gap-10">
        <Huellas position={{ top: '400px', left: '40px' }} rotateDeg={30} tipoHuellas="pato" color="#3a3480" opacity={0.7} />
        <Informationletter
          title={about.story.title}
          image='http://www.blogerin.com/wp-content/uploads/2012/10/Fotos-tiernas-de-perritos-wallpapers-2.jpg'
          description={about.story.description}
          subtitleOne={about.story.subtitle_one}
          paragraphOne={about.story.paragraph_one}
          subtitleTwo={about.story.subtitle_two}
          paragraphTwo={about.story.paragraph_two}
          subTitleLabel={about.labels.more_info}
          readMoreLabel={about.labels.read_more}
          showLessLabel={about.labels.show_less}
        />
        <Box sx={{ marginTop: '30px' }}>
          <SecondInformationLetter
            iconOne={<TipsAndUpdatesOutlinedIcon sx={{ fontSize: '4rem' }} />}
            titleOne={about.mission.title}
            descriptionOne={about.mission.description}
            iconTwo={<EmojiEventsOutlinedIcon sx={{ fontSize: '4rem' }} />}
            titleTwo={about.vision.title}
            descriptionTwo={about.vision.description}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Us
