import React from 'react'
import Image from 'next/image'

export default function Others() {
  return (
    <div className='bg-white text-black container py-20 grid justify-items-stretch'>
        <div className="top grid md:grid-cols-2 gap-4 items-center justify-evenly">
            <Image 
            src='/images/property.jpeg'
            width={500}
            height={500}
            alt='property'
            />
            <h1 className='md:text-2xl font-bold'>Let get your dream house ready for you with no stress</h1>
        </div>
        <div className="md:grid md:grid-cols-2 flex flex-col-reverse jusify-item-stretch gap-4 mt-20 items-center">
            <div className="space-y-4">
                <h1 className='font-bold md:text-2xl'>Are you tired of paying rent?</h1>
                <h1 className='md:text-2xl'>It doesnt take much to conclude a deal and your property is yours forever.</h1>
                <h1 className='md:text-2xl'>We have a fexible payment plan that will ease the payment process for you, Convient and Affordable</h1>
            </div>
            <Image 
            src='/images/deal.jpeg'
            width={500}
            height={500}
            alt='Lets deal'
            className='justify-self-end'
            />
        </div>
        
    </div>
  )
}
