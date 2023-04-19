import React from 'react'
import Link from 'next/link'

async function getData() {
    const data = await fetch('http://localhost:3000/api/kolam')
    const response = data.json()
    return response
}

const STATES = [
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Pulau Pinang",
    "Sarawak",
    "Selangor",
    "Terengganu",
    "Kuala Lumpur",
    "Labuan",
    "Sabah",
    "Putrajaya"
  ]

const Direktori =async () => {

    let kolamData = await getData()
    
    return (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl tracking-tight text-gray-900">
            Direktori Kolam Memancing
            </h1>
            <p className="subpixel-antialiased font-sans text-lg text-gray-500 text-center justify-center mt-5">
                Pilih Negeri:
            </p>

            <div className='flex flex-wrap justify-center mt-2'>
                { STATES.map(state => (
                                <button type="button" class="text-white shadow-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{state}</button>

                ))}

            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nama Kolam
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Lokasi
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Telefon
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Direction
                            </th>
                        </tr>
                    </thead>
                    { kolamData.map((kolam, idx) => (
                        <tbody key={idx}>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {kolam.title}
                            </th>
                            <td class="px-6 py-4">
                                {(kolam.city? kolam.city + ', ' : '') + kolam.state + ", " + kolam.countryCode}
                            </td>
                            <td class="px-6 py-4">
                                {kolam.phone ? kolam.phone : 'N/A'}
                            </td>
                            <td class="px-6 py-4">
                                <Link href={kolam.url} className='hover:underline hover:text-sky-500'>Click Me!</Link>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>

            <div>

            </div>
        </div>
      
    )
}

export default Direktori