import { Body } from '../../../components/components-home/Body'

import type { Locale } from '@/configs/i18n'

import { getDictionary } from '@/utils/getDictionary'

type HomeProps = { params: { lang: Locale } }

const Home = async ({ params }: HomeProps) => {
  const dictionary = await getDictionary(params.lang)

  return (
    <main>
      <Body dictionary={dictionary} />
    </main>
  )
}

export default Home
