'use client'
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



const MapKolam = () => {
    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1Ijoic3l1a3JhbnNvbGVoIiwiYSI6ImNqdnczbWpmczF5dm8zeW5ua3c5dHMya20ifQ.GDZmRQH1LmOGn7BrcmZ33w',
      });

        

    return (
        <div className="mx-auto max-w-7xl px-4 py-6  lg:px-8" >
            <h1 className="-mt-7 mb-5 text-center text-3xl font-bold tracking-tight text-gray-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                     Fakta Menarik: 
                    </span>
                    {" "}terdapat lebih <span className="underline decoration-sky-500">12,638 kolam di Malaysia!</span> ✨
            </h1>
            <div className='shadow mx-3 justify-center text-center'>
            {/* Map goes here */}
            <div className='rounded-2xl shadow-md'>
                <Map
                    style="mapbox://styles/mapbox/streets-v11"
                    containerStyle={{
                    height: '400px',
                    width: '100%',
                    }}
                    center={[101.63829803466797,
                        3.228099622270834]}
                    zoom={[8]}
                />
            </div>

            </div>
        </div>
    )
}

export default MapKolam