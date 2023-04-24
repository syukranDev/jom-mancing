
'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import pb from '../../config/pocketbase'

const ContactPage = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [flag, setFlag] = useState(true)

    // const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !subject || !message) {
            alert('Please fill all fields before submit!')
        } else {
            try {
                let data = JSON.stringify({ email, subject, message })
                await pb.collection('feedbacks').create(data)

                setEmail('')
                setSubject('')
                setMessage('')
                setFlag(false)

            } catch (e) {
                alert(e)
            }
            // router.refresh()
        }

    }

  return (
        <section class="">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                    Hubungi Kami
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Anda mengalamai teknikal isu? Mahu tinggalkan review atau feedback? Perlukan details tentang Business Plan kami? Bagitahu kami.</p>
                <form onSubmit={handleSubmit} class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Anda</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                        placeholder="visitor@jommengai.my" required></input>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subjek</label>
                        <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                        placeholder="Bagitahu apa kami boleh bantu" required></input>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mesej Anda</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Tinggalkan komen anda..."></textarea>
                    </div>
                    <div className='flex flex-row'>
                        <button type="submit" class="py-3 px-5 bg-blue-600 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Hantar Pesanan</button>
                        { !flag ? (<p className='text-red-600 mx-5 my-2 font-semibold'>Mesej dihantar!</p>) : (<></>)}

                    </div>
                </form>
            </div>
        </section>
  )
}

export default ContactPage