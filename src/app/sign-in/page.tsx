import React from 'react'

const Signin = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <form className='bg-red-300 w-1/2 p-12'>
          <h1 className='text-4xl text-center text-slate-600 uppercase'>Sign in </h1>
          <div className='py-12'>
            <div className='p-2 flex flex-col'>
              <label className='text-gray-700 text-md font-bold uppercase' htmlFor="email">Email</label>
              <input className='p-2 border-none outline-none' type="email" placeholder='Enter your email' />
            </div>
            <div className='p-2 flex flex-col mt-2'>
              <label className='text-gray-700 text-md font-bold uppercase' htmlFor="password">Password</label>
              <input className='p-2 border-none outline-none' type="password" placeholder='Enter your Password' />
            </div>
          </div>
          <button className='p-2 w-full bg-blue-500 text-white border-none outline-none font-bold'>Signin</button>
        </form>
      </div>
    </div>
  )
}

export default Signin