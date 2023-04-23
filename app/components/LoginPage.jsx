import React from 'react'
import Image from 'next/image'

const LoginPage = () => {
  return (

    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" width={20} height={20} src="https://gcdnb.pbrd.co/images/XlMOOM4bgExS.png?o=1" alt="logo"></img>
                JomMancing   
            </a>
            <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Masuk Akaun
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Anda</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="remember" className="text-gray-500 dark:text-gray-300">Ingat saya</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm text-blue-600 font-medium text-primary-600 hover:underline dark:text-primary-500">Terlupa Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Belum mempunya akaun lagi? <a href="/register" className="font-medium text-blue-600 text-primary-600 hover:underline dark:text-primary-500">Daftar Sekarang</a>
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

export default LoginPage