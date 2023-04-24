import React from 'react'

const Statistic = () => {
  return (
    <section class="bg-white dark:bg-gray-900 font-body mb-5">
        <div class="max-w-screen-xl px-4 py-4 mx-auto text-center">
            <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div class="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer ">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-gray-900 subpixel-antialiased">5,640</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">kolam air masin</dd>
                </div>
                <div class="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-gray-900 subpixel-antialiased">7.4K+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">kolam air tawar</dd>
                </div>
                <div class="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold text-gray-900 subpixel-antialiased">12+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">spesis ikan kolam</dd>
                </div>
            </dl>
        </div>
    </section>
  )
}

export default Statistic