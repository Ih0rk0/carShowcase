import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from './CustomButton'
export const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items center sm:px-16 px-6 py-4'>
            <Link href='/home' className='flex justufy-center items-center'>
                <Image 
                src='/logo.svg'
                alt='car hub logo'
                width={118}
                height={18}
                className='object-contain'/>
            </Link>
            <CustomButton
            title='Sign In'
            btnType='button'
            containerStyles='text-blue-500 rounded-full bg-white min-w-[130px] hover:cursor-pointer'/>
        </nav>
    </header>
  )
}
