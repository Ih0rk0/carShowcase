'use client'
import { CarInfo } from '@/app/types'
import { CustomButton } from './CustomButton'
import Image from 'next/image';
type CarCardProps = {
  carInfo: CarInfo;
};

export const CarCard = ({ carInfo }: CarCardProps) => {

  return (
    <div className='flex flex-col max-h-[1240px] gap-5 '>
      <p> {carInfo.name}  {carInfo.model} </p>
      < div className='flex-1 flex flex-wrap gap-5'>
      
        {carInfo.imgLink !== undefined || carInfo.imgLink !== undefined ?
          carInfo.imgLink.map((item, index:number) => (
            
            <Image key={index} src={item.full} height={300} width={200} className='object-contain  ' alt='car image' />

          )) : null}</div>


      <CustomButton title='Show More' containerStyles='opacity-0 hover:opacity-100' />
    </div >
  )
}
