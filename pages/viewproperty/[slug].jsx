import data from '../../data';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ViewScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const viewProperty = data.find((item) => item.id === Number(slug));


  if (!viewProperty) {
    return <div className="text-center">Property not found</div>;
  }
  return (
    <div className="pt-20 container">
      <Link href={'/property'}><button className='px-5 shadow-lg border-md'>Back</button></Link>
      <div className="card md:grid md:grid-cols-2 py-8 item-stretch flex flex-col-reverse">
        <div className="text self-center mt-8 md:mt-0">
          <h1 className="md:text-2xl font-bold">{viewProperty.title}</h1>
          <div className="py-8 grid grid-cols-2">
            <div className="left space-y-4">
              <h1>Document:</h1>
              <h1>Price:</h1>
              <h1>Title:</h1>
              <h1>Location:</h1>
              <h1>Agent:</h1>
              <h1>Contact:</h1>
            </div>
            <div className="right space-y-4 font-bold">
              <h1>{'Approved'}</h1>
              <h1>₦{viewProperty.price}, 000, 000</h1>
              <h1>{viewProperty.name}</h1>
              <h1>{viewProperty.location}</h1>
              <h1>{viewProperty.contact}</h1>
              <h1>{viewProperty.phone}</h1>
            </div>
          </div>
        </div>
        <div className="colums-2 md:columns-3">
          <Image
          src={viewProperty.img}
          width={500}
          height={500}
          alt={viewProperty.name}
          className='mb-4'
        />
            {
              viewProperty.interior.map((item, idx)=>{
                return (
                  <div className='mb-4' key={idx}>
                    <Image
                  src={item}
                  width={500}
                  height={500}
                  alt={item}
                />
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  );
}
