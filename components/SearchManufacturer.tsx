'use client'
import { useState } from 'react';


import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { SearchManufacturerProps } from '@/app/types';
export const SearchManufacturer = ({ manufacturer, setManufacturer, manufacturers }: SearchManufacturerProps) => {

    const [query, setQuery] = useState('')
    console.log(query)
    const filteredValues = query === '' ? manufacturers : manufacturers.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    return (
        <>
            <div className='relative'>
                <Combobox value={manufacturer} onChange={setManufacturer} >
                    <ComboboxInput
                        autoComplete="off"
                        className={' rounded-full bg-gray-100 w-[500px] h-[50px] focus:none pl-[30px] ml-[70px]  outline-none '}
                        placeholder='Volkswagen'
                        onChange={(e) => setQuery(e.target.value)}  
                        displayValue={(manufacturer:string) => manufacturer} />
                    <ComboboxOptions className={' absolute w-[500px] max-h-60 rounded-lg ml-[70px] shadow-lg overflow-x-auto bg-white'}>
                        {filteredValues.map((item, index) => (
                            <ComboboxOption className={'hover:bg-violet-600 rounded-lg pl-[30px] z-10 '} key={index} value={item}>{item}</ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Combobox>
            </div>

        </>
    )
}
