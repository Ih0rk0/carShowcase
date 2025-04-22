'use client'
import React from 'react'

import { CustomButtonProps } from '@/app/types'

export const CustomButton = ({title,containerStyles, handleClick,btnType}:CustomButtonProps) => {
     
    return (
        <button
            disabled={false}
            type={btnType}
            className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
            onClick={handleClick}
        >
            
            <span className='flex-1'>
                {title}
            </span>
        </button>
    )
}
