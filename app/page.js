import Image from 'next/image'
import { Inter } from 'next/font/google'
import IntroSection from './components/IntroSection'
import MapKolam from './components/MapKolam'
import Footer from './components/FooterSection'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className=''>
    <IntroSection/>
    <MapKolam/>
    <Footer/>
   </main>
    </>
  )
}
