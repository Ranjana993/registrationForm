"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'


const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })
  const router = useRouter()

  const inputHandler = (e: any) => { setUser({ ...user, [e.target.name]: e.target.value }) }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try {
      if (!user.email || !user.password) {
        toast.error("Please fill all the user")
      }
      const res = await axios.post("/api/sign-up", user)
      console.log(res);
      toast.success("Successfully signed up")
      router.push("/sign-in")

    } catch (error: any) {
      toast.error(error.message)
      console.log(error.message)
    }
  }


  return (
    <div>
      <div className='flex justify-center items-center h-screen '>
        <form onSubmit={handleSubmit} className=' dark:bg-neutral-800/30 w-1/2 p-12 shadow-md'>
          <h1 className='text-4xl text-center text-slate-600 uppercase'>Register YourSelf here</h1>
          <div className='py-12'>
            <div className='p-2 flex flex-col'>
              <label className='text-gray-700 text-md font-bold uppercase  mt-2' htmlFor="username">Username</label>
              <input name='username' value={user.username} onChange={inputHandler} className='p-2 border-none outline-none text-black' type="text" placeholder='Enter your username' />
            </div>
            <div className='p-2 flex flex-col'>
              <label className='text-gray-700 text-md font-bold uppercase  mt-2' htmlFor="email">Email</label>
              <input name='email' value={user.email} onChange={inputHandler} className='p-2 border-none outline-none text-black' type="email" placeholder='Enter your email' />
            </div>
            <div className='p-2 flex flex-col'>
              <label className='text-gray-700 text-md font-bold uppercase  mt-2' htmlFor="password">Password</label>
              <input name='password' value={user.password} onChange={inputHandler} className='p-2 border-none outline-none text-black' type="password" placeholder='Enter your Password' />
            </div>
          </div>
          <button className='p-2 w-full bg-blue-500 text-white border-none outline-none  font-bold'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup