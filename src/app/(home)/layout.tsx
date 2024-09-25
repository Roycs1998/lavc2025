import { Footer } from '@/components/components-home/Footer'
import { Navbar } from '@/components/components-home/Navbar'
import { FooterTwo } from '@/components/components-home/FooterTwo'

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
      <FooterTwo />
    </div>
  )
}
