import { Main } from '../Main'
import { HorizontalCard } from '../HorizontalCard'
import type { getDictionary } from '@/utils/getDictionary'
import { NavbarTooltip } from '../Footer/Prueba'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export const Body = ({ dictionary }: Props) => {
  return (
    <div>
      <Main />
      <NavbarTooltip
        inicio='Hover aquí'
        links={[
          { text: 'Link 1', link: 'https://example1.com' },
          { text: 'Link 2', link: 'https://example2.com' },
          { text: 'Link 3', link: 'https://example3.com' },
          { text: 'Link 4', link: 'https://example4.com' },
          { text: 'Link 5', link: 'https://example5.com' },
          { text: 'Link 6', link: 'https://example6.com' }
        ]}
        image='https://example.com/image.jpg'
      />
      <NavbarTooltip
        inicio='Hover aquí'
        links={[
          { text: 'Link 1', link: 'https://example1.com' },
          { text: 'Link 2', link: 'https://example2.com' },
          { text: 'Link 3', link: 'https://example3.com' },
          { text: 'Link 4', link: 'https://example4.com' },
          { text: 'Link 5', link: 'https://example5.com' },
          { text: 'Link 6', link: 'https://example6.com' }
        ]}
        image='https://example.com/image.jpg'
      />
      <h1>{dictionary.quoters.company_not_found}</h1>

      <HorizontalCard />
    </div>
  )
}
