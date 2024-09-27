import { Main } from '../Main'
import { HorizontalCard } from '../HorizontalCard'
import { getDictionary } from '@/utils/getDictionary'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Body = ({dictionary}:Props) => {
  return (
    <div>
      <Main />
      <h1>
      {dictionary.quoters.company_not_found}
      </h1>
      <HorizontalCard />
    </div>
  )
}
