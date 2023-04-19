import Image from 'next/image'
import { Inter } from 'next/font/google'
import IntroSection from './components/IntroSection'
import Footer from './components/FooterSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className=''>
    <IntroSection/>
    <Footer/>
   </main>
  )
}
