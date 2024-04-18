import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <form className='bg-red-300 w-1/2 p-12'>
          <h1 className='text-4xl text-center text-slate-600 uppercase'>Register YourSelf here</h1>
          <div className='py-12'>
            <div className='p-2 flex flex-col'>
              <label className='text-gray-700 text-md font-bold uppercase  mt-2' htmlFor="username">Username</label>
              <input className='p-2 border-none outline-none text-black' type="text" placeholder='Enter your username' />
            </div>
            <div className='p-2 flex flex-col'>
              <label className='text-gray-700 text-md font-bold uppercase  mt-2' htmlFor="email">Email</label>
              <input className='p-2 border-none outline-none text-black' type="email" placeholder='Enter your email' />
            </div>
            <div className='p-2 flex flex-col'>
              <label className='text-gray-700 text-md font-bold uppercase  mt-2' htmlFor="password">Password</label>
              <input className='p-2 border-none outline-none text-black' type="password" placeholder='Enter your Password' />
            </div>
          </div>
          <button className='p-2 w-full bg-blue-500 text-white border-none outline-none  font-bold'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup