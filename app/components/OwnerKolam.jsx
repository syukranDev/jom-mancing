'use client'
import React from 'react'
import UnderConstructionAlert from './UnderConstructionAlert'

const OwnerKolam =async () => {

    return (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* To remove below once completed */}
            <UnderConstructionAlert/>
            <h1 className="text-center text-3xl tracking-tight text-gray-900">
                Under Construction, please come back later!
            </h1>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Featured</span>
        </div>
      
    )
}

export default OwnerKolam