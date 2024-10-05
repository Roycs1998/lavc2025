import { Carrucel } from '../Carrucel'
import type { getDictionary } from '@/utils/getDictionary'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Main = ({ dictionary }: Props) => {
  return (
    <div>
      <Carrucel dictionary={dictionary} />
    </div>
  )
}
