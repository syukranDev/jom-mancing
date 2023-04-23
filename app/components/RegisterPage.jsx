import React from 'react'
import Image from 'next/image'

const RegisterPage = () => {
  return (

    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" width={20} height={20} src="https://gcdnb.pbrd.co/images/XlMOOM4bgExS.png?o=1" alt="logo"></img>
                JomMancing    
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Bina Profile Anda
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="http://localhost:3001/signup" method='POST'>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Anda</label>
                            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sila taip nama anda.." required=""></input>
                        </div>
                        {/* <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Anda</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sila taip email anda.." required=""></input>
                        </div> */}
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                            </div>
                            <div className="ml-3 text-sm">
                            <label for="terms" className="font-light text-gray-500 dark:text-gray-300">Saya terima <a className="font-medium text-blue-600 text-primary-600 hover:underline dark:text-primary-500" href="#">Terma dan Syarat</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Bina Account Anda</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Sudah mempunyai akaun? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-600">Masuk sini</a>
                        </p>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            <a href="/" className="content-center font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-600">
                                Kembali Ke Laman Utama
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
        
  )
}

export default RegisterPage