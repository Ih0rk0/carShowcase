'use client'
import React, { useState, useEffect } from 'react'
import { SearchManufacturer } from './SearchManufacturer'
import { manufacturers } from '@/app/constants';
import { fetchCars } from '@/app/utils';
import { Car, Links } from '@/app/types';
import Image from 'next/image';
import { CustomButton } from './CustomButton';
import { CarCard } from './CarCard'


export const Searchbar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const [models, setModels] = useState([''])
    const [imgLink, setImgLink] = useState([])
    const getImgLink = async () => {
        console.log('img1')
        setImgLink([])
        if (model !== '' && manufacturer !== '') {
            console.log('get img')
            const response = await fetchCars(`https://api.unsplash.com/search/photos?page=1&query=${manufacturer}+${model}&client_id=skx5xxAVPk6YVknr4plxaM3SzEp0_TE_Zw_rpOcpUvU`)
            console.log(response)
            const allLinks = response.results.map((item: any) => item.urls);
            setImgLink(allLinks)
        }
    }
    console.log(imgLink)

    useEffect(() => {
        const getCars = async () => {
            if (manufacturer !== '') {
                console.log(manufacturer)
                const request = await fetchCars('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/' + manufacturer + '?format=json');
                console.log(request)
                const carModel = request.Results.map((item: Car) => item.Model_Name);
                setModels(carModel);
            }
        }
        getCars()
    }, [manufacturer])
    console.log(model)
    return (
        <>
            <div className='max-w-[1440px] mx-auto flex'>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} manufacturers={manufacturers} />
                <SearchManufacturer manufacturer={model} setManufacturer={setModel} manufacturers={models} />
                <CustomButton title='search' containerStyles={`${manufacturer !== '' && model !== '' ? 'block' : 'hidden'}`} handleClick={getImgLink} ></CustomButton>
            </div>
            <div className="flex gap-5 max-w-[1440px] mx-auto max-md:flex-col  flex-wrap mt-[20px] mb-[20px] mx-auto px-10">
                <CarCard carInfo={{ name: manufacturer, model: model, imgLink: imgLink }} />

            </div>
        </>
    )
}
