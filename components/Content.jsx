import React, { useState, useEffect } from 'react';
import data from '../data';
import Image from 'next/image';
import TopContent from './TopContent';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Content() {
  const [random, setRandom] = useState([])

 
  useEffect(()=>setRandom(data.sort(() => Math.random() - 0.5)), [])

  return (
    <div className="bg-white text-black h-[100%] col-span-5 p-4">
      <div className="">
        <TopContent />
      </div>
      <h1 className="text-center md:text-2xl  mt-16 mb-8 font-bold text-main">
        HOT SELLING PROPERTIES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {random.slice(0, 8).map((item) => {
          return (
            <div className="card mb-4 shadow-lg p-4 rounded-lg relative" key={item.id}>
              <div className="relative">
                <Image
                  src={item.img}
                  width = {500}
                  height = {500}
                  object-fit = 'contain'
                  alt={item.name}
                  className="rounded-lg mb-4"
                />
              </div>
              <div className="card-body mb-8">
                <h1>{item.name}</h1>
                <p>{item.location}</p>
                <p>{item.landSize}</p>
                <p>₦{item.price} Million</p>
              </div>
              <Link href={`/viewproperty/${item.id}`}>
                <button className="text-sm border px-3 mt-3 py-1 shadow-lg bg-main rounded-md text-white bottom-2 absolute">
                    View
                </button>
              </Link>
              <FontAwesomeIcon icon={faHeart} className='text-main text-xl absolute right-4 bottom-3'/>
              </div>
          );
        })}
      </div>
    </div>
  );
}
