"use client"
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react'
import { error } from 'console'

const Signin = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const router = useRouter()
  const session = useSession()

  const handleChange = (e: any) => { setData({ ...data, [e.target.name]: e.target.value }) }


// 
  // submitting data 
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      if (!data.email || !data.password) {
        toast.error("Please fill all the data")
      }
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password
      })
      if (res?.error) {
        toast.error("invalid credentials")
        if (res?.url) router.replace("/dashboard")
      }

    } catch (error: any) {
      toast.error("Faailed while registering user")
      console.log(error.message)
    }
  }
useEffect(()=>{
  if(session?.status ==="authenticated") {
    router.replace("/dashboard")
  }
},[session, router])

 


  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <form className=' dark:bg-neutral-800/30 w-1/2 p-12 shadow-md'>
          <h1 className='text-4xl text-center text-slate-600 uppercase'>Sign in </h1>
          <div className='py-12'>
            <div className='p-2 flex flex-col'>
              <label className='text-gray-700 text-md font-bold uppercase' htmlFor="email">Email</label>
              <input className='p-2 border-none outline-none' name='email' onChange={handleChange} value={data.email} type="email" placeholder='Enter your email' />
            </div>
            <div className='p-2 flex flex-col mt-2'>
              <label className='text-gray-700 text-md font-bold uppercase' htmlFor="password">Password</label>
              <input className='p-2 border-none outline-none' name='password' onChange={handleChange} value={data.password} type="password" placeholder='Enter your Password' />
            </div>
          </div>
          <button className='p-2 w-full bg-blue-500 text-white border-none outline-none font-bold' onClick={handleSubmit}>Signin</button>
        </form>
      </div>
    </div>
  )
}

export default Signin