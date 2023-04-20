import Image from 'next/image'
import { Inter } from 'next/font/google'
import IntroSection from './components/IntroSection'
import MapKolam from './components/MapKolam'
import Footer from './components/FooterSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className=''>
    <IntroSection/>
    <MapKolam/>
    <Footer/>
   </main>
  )
}
