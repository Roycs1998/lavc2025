import { Body } from '../../../components/components-home/Body'

import type { ChildrenType } from '@core/types'

import type { Locale } from '@/configs/i18n'

import { getDictionary } from '@/utils/getDictionary'

const Home = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang)

  return (
    <main>
      <Body dictionary={dictionary} />
    </main>
  )
}

export default Home
