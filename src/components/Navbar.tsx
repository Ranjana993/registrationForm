import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='pt-20 lg:pt-12 flex justify-center'>
      <div className='flex justify-between items-center px-12 py-1 h-14 bg-white text-black w-[90%] lg:w-[70%] rounded-full'>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <ul className='flex items-center gap-12'>
            <Link href={"/sign-up"} className='hover:text-blue-800 font-bold hover:underLinkne cursor-pointer'>Register</Link>
            <Link href={"/sign-in"} className='hover:text-blue-800 font-bold hover:underLinkne cursor-pointer'>Login</Link>
            <Link href={"/dashboard"} className='bg-blue-400 p-2 text-white rounded-full px-12 hover:bg-blue-900 cursor-pointer'>Dashboard</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar