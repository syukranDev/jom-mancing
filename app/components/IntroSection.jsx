'use client'

import Image from "next/image"
import { GrLocationPin } from 'react-icons/gr'
import { FaFish, FaRegMoneyBillAlt } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'
import {AiOutlineLink } from 'react-icons/ai'
import UnderConstructionAlert from "./UnderConstructionAlert"
import { motion } from 'framer-motion';

const KOLAM = [
    { 
        Selangor : [
            {
                name: 'Kolam Jugra RM3',
                fish: ['siakap', 'jenahak', 'kerapu'],
                fees: [ 3, 'pay per kilo'],
                location: 'Banting, SEL',
                direction: 'https://goo.gl/maps/FKECzq7GJoRo9L2UA',
                link: 'https://www.facebook.com/Kolam-Pancing-RM3-Jugra-624670334216064/',
                path: [ '/assets/kolamrm3.jpg']
            },
            {
                name: 'Kolam Syawal 69 Jugra',
                fish: ['siakap', 'jenahak', 'kerapu'],
                fees: [ 75, 180 ],
                location: 'Banting, SEL',
                direction: 'https://goo.gl/maps/BdV5pCTHUEX9bg5GA',
                link: 'https://www.facebook.com/SIX-NINE-fishing-Banting-104880722468049',
                path: [ '/assets/kolam69.jpg']
            },
            {
                name: 'Kolam Memancing Gansaan',
                fish: ['siakap', 'jenahak', 'kerapu'],
                fees: [ 80, 120 ],
                location: 'Telok Panglima Garang, SEL',
                direction: 'https://goo.gl/maps/8CoeiDHjwK4F6R8e7',
                link: 'https://www.facebook.com/profile.php?id=100045427096539',
                path: [ '/assets/kolamgansaan.jpg']
            },
            // {
            //     name: 'LS Fishing Pond',
            //     fish: ['siakap', 'jenahak', 'kerapu-XXL', 'udang'],
            //     fees: [ 120 ],
            //     location: 'Telok Panglima Garang, SEL',
            //     direction: 'https://goo.gl/maps/AGt4NnVT2MxXEnhaA',
            //     link: 'https://www.facebook.com/profile.php?id=100053518543457',
            //     path: [ '/assets/kolamlcs.png'],
            // },
            // {
            //     name: 'LS Fishing Pond',
            //     fish: ['siakap', 'jenahak', 'kerapu-XXL', 'udang'],
            //     fees: [ 120 ],
            //     location: 'Telok Panglima Garang, SEL',
            //     direction: 'https://goo.gl/maps/AGt4NnVT2MxXEnhaA',
            //     link: 'https://www.facebook.com/profile.php?id=100053518543457',
            //     path: [ '/assets/kolamlcs.png'],
            // },
            // {
            //     name: 'LS Fishing Pond',
            //     fish: ['siakap', 'jenahak', 'kerapu-XXL', 'udang'],
            //     fees: [ 120 ],
            //     location: 'Telok Panglima Garang, SEL',
            //     direction: 'https://goo.gl/maps/AGt4NnVT2MxXEnhaA',
            //     link: 'https://www.facebook.com/profile.php?id=100053518543457',
            //     path: [ '/assets/kolamlcs.png'],
            // },
        ]
    }
]

const IntroSection = () => {

  return (
    <header className="">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                },
            }}>
                {/* To remove once completed */}
                <UnderConstructionAlert/>
                {/*  */}
                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                    Jom memancing
                    </span>
                    {" "}di kolam <span className="underline decoration-sky-500">berdekatan anda!</span> 🐟 🎣
                </h1>
                <p className="subpixel-antialiased font-sans text-lg text-gray-500 text-center justify-center mt-5">
                    Kami mudahkan anda untuk mencari &#39;port&#39; yang terbaik untuk memancing.
                </p>
            <div class="p-3 font-mono">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
                    { KOLAM[0].Selangor.map((kolam, idx) => (
                        <div key={idx} className="p-4 ">
                            <div class="item-center justify-center max-w-sm rounded-xl overflow-hidden shadow-md ">
                                <div className="relative">
                                    <Image class="h-auto" src={kolam.path[0]} width={2048} height={1536} alt="null"/>
                                    {/* <span class="absolute top-0 right-0 bg-red-500 text-white font-bold px-2 py-1 rounded">Badge</span> */}
                                    <span class="font-sans shadow-md absolute top-0 right-0 mt-2 bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Sponsored</span>
                                </div>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">
                                        {kolam.name}
                                    </div>
                                    <ul className="ml-1 mb-2 text-gray-700">
                                        <li className="flex flex-row items-center space-x-2">
                                            <GrLocationPin size={20}/><span>{kolam.location}</span>
                                        </li>
                                        <li className="flex flex-row items-center space-x-2">
                                            <FaFish size={20}/><span>{ kolam.fish.map(fish => ( fish + ' ' ))}</span>
                                        </li>
                                        <li className="flex flex-row items-center space-x-2">
                                            <FaRegMoneyBillAlt size={20}/><span className="text-green-500">Yuran bermula RM{''}{kolam.fees[0]}!</span>
                                        </li>
                                        <li className="flex flex-row items-center space-x-2">
                                            <AiOutlineLink size={20}/>
                                            { kolam?.link ? (
                                                <a href={kolam?.link} className="text-sky-500" >Facebook</a>
                                            ) : ( <span>Tiada SocMed</span>) }
                                            
                                        </li>
                                    </ul>
                                    <a href={kolam.direction} className="flex justify-center" >
                                    <button type="button" class="text-white font-sans bg-blue-600 shadow-md hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                        Bring Me There
                                        <svg class="w-4 h-4 mr-1 ml-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                        {/* <div className="font-sans flex flex-row items-center justify-center space-x-2 mb-1 mt-1"> */}
                                        {/* </div> */}
                                    </button>
                                        
                                        
                                    </a>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
            </motion.div>

            
          </div>
          
          
    </header>
  )
}
export default IntroSection