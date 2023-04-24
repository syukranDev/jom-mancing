'use client'
import React, { useState } from 'react'

import Pocketbase from 'pocketbase'
import { useForm } from 'react-hook-form'

const pb = new Pocketbase('http://127.0.0.1:8090')

const page = () => {
  const [isLoading, setLoading] = useState(false)
  const [dummy, setDummy] = useState(0)
  const {register, handleSubmit} = useForm()

  const isLoggedIn = pb.authStore.isValid

 async function login(data) {
    setLoading(true)

    try {
      const authData= await pb.collection('users').authWithPassword(data.email, data.password)
      console.log(authData)
    } catch (e) {
      alert(e)
    }

    setLoading(false)
  }

  function logout() {
    pb.authStore.clear()
    setDummy(Math.random())
  }

  if(isLoggedIn) 
    return (
     <>
      <h1>Logged In: {pb.authStore.model.email}</h1>
      <button onClick={logout}>Logout</button>
     </>
    )

  return (
   <>
    { isLoading && <p>Loading....</p>}
    <h1>Please Login In</h1>
    {/* <h1>Hi, {isLoggedIn && pb.authStore.model.email} !</h1> */}

    <form onSubmit={handleSubmit(login)}>
      <input type="text" placeholder='email' {...register('email')} />
      <input 
        type="password" 
        placeholder='password' 
        {...register('password')}
        />


      <br></br>
      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Loading' : 'Login' }
      </button>
    </form>







   </>
  )
}

export default page