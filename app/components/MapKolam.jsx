'use client'
import ReactMapboxGl, { Marker }from 'react-mapbox-gl';
import { motion } from 'framer-motion';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../globals.css'

import jsonData from '../../public/selangor.json'
import Statistic from './Statistic';

async function getData() {
    const response = JSON.parse(JSON.stringify(jsonData))
    return response
}

const coordinatesHome = [2.914252, 101.535154]

const MapKolam =  async () => {
    let dataKolam = []
    let finalData = []
    const locationKolam = await getData()

    await locationKolam.map(loc => {
        dataKolam.push(loc.location)
    })

    dataKolam.map(data => {
        finalData.push([data.lng , data.lat])
    })

    
    // console.log(finalData)
                    
    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1Ijoic3l1a3JhbnNvbGVoIiwiYSI6ImNqdnczbWpmczF5dm8zeW5ua3c5dHMya20ifQ.GDZmRQH1LmOGn7BrcmZ33w',
      });

    return (
        <div className="mx-auto max-w-7xl px-4 py-6  lg:px-8" >
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
            <h1 className="-mt-7 mb-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                     Fakta Menarik: 
                    </span>
                    {" "}terdapat lebih <span className="underline decoration-sky-500">12,638 kolam di Malaysia!</span> ✨
            </h1>
            <Statistic/>
            </motion.div>
            <div className='shadow mx-3 justify-center text-center'>
            {/* Map goes here */}
            <div className='rounded-2xl shadow-md'>
                <Map
                    style="mapbox://styles/mapbox/streets-v11"
                    containerStyle={{
                    height: '400px',
                    width: '100%',
                    }}
                    center={finalData[3]}
                    zoom={[9.5]} //10 is just nice
                >
                {
                    finalData.map(data => (
                        <Marker coordinates={data}>
                            <div className="marker" /> 
                        </Marker>  
                    ))
                }
                </Map>
            </div>
            </div>
            <p class="text-center font-light text-gray-500 dark:text-gray-400">
                Anda jumpa port memancing yang baharu? Contribute <span><a href='/contact' className='underline hover:text-sky-600'>here.</a></span>
            </p>
        </div>
    )
}

export default MapKolam