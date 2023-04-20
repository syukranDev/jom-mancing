'use client'

import Image from "next/image"
import { GrLocationPin } from 'react-icons/gr'
import { FaFish, FaRegMoneyBillAlt } from 'react-icons/fa'
import {AiOutlineLink } from 'react-icons/ai'
import UnderConstructionAlert from "./UnderConstructionAlert"

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
            {
                name: 'LS Fishing Pond',
                fish: ['siakap', 'jenahak', 'kerapu-XXL', 'udang'],
                fees: [ 120 ],
                location: 'Telok Panglima Garang, SEL',
                direction: 'https://goo.gl/maps/AGt4NnVT2MxXEnhaA',
                link: 'https://www.facebook.com/profile.php?id=100053518543457',
                path: [ '/assets/kolamlcs.png'],
            },
            {
                name: 'LS Fishing Pond',
                fish: ['siakap', 'jenahak', 'kerapu-XXL', 'udang'],
                fees: [ 120 ],
                location: 'Telok Panglima Garang, SEL',
                direction: 'https://goo.gl/maps/AGt4NnVT2MxXEnhaA',
                link: 'https://www.facebook.com/profile.php?id=100053518543457',
                path: [ '/assets/kolamlcs.png'],
            },
        ]
    }
]

const IntroSection = () => {

  return (
    <header className="">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
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
                Kami mudahkan anda untuk mencari 'port' yang terbaik untuk memancing.
            </p>


            <div className="p-3 font-mono">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
                    { KOLAM[0].Selangor.map((kolam, idx) => (
                        <div key={idx} className="p-4 ">
                            <div className="item-center justify-center max-w-sm rounded overflow-hidden shadow-md ">
                                <Image className="h-auto" src={kolam.path[0]} width={2048} height={1536} alt="null"/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
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
                                    <a href={kolam.direction} className="underline text-sky-500 mx-auto">Bawa saya ke sana!</a>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>

            
          </div>
          
          
    </header>
  )
}
export default IntroSection