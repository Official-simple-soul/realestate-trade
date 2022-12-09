import React from 'react';
import data from '../data';
import Image from 'next/image';
import { useGlobalContext } from '../contexts/Context';
import Side from '../components/Side';

export default function Properties() {
  const { searchValue } = useGlobalContext();
  const {sideValue} = useGlobalContext()
  const newData = data.filter(item=>item.document === sideValue)
  const filteredData = data.filter((item) =>
    item.document
      .toLowerCase()
      .includes(searchValue ? searchValue.toLowerCase() : null)
  );

  return (
    <div className="pt-20 grid md:grid-cols-6">
      <Side />
      <div className="col-span-5 grid grid-cols-1 md:grid-cols-3 gap-2 mt-16">
      {     filteredData.length>0?filteredData.map((item, idx)=>{
              return  <div className="card mb-4 shadow-lg p-4 rounded-lg" key={idx}>
                <div className="card-img">
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt={item.name}
                    className='rounded-lg mb-4'
                  />
                </div>
                <div className="card-body">
                    <h1>{item.name}</h1>
                    <p>{item.location}</p>
                    <p>{item.landSize}</p>
                    <p>₦{item.price} Million</p>
                </div>
                <button className='text-sm border px-3 mt-3 py-1 shadow-lg bg-main rounded-md text-white'>View</button>
              </div>
             
            })
            :
            newData.length>0?newData.map((item, idx)=>{
              return  <div className="card mb-4 shadow-lg p-4 rounded-lg" key={idx}>
                <div className="card-img">
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt={item.name}
                    className='rounded-lg mb-4'
                  />
                </div>
                <div className="card-body">
                    <h1>{item.name}</h1>
                    <p>{item.location}</p>
                    <p>{item.landSize}</p>
                    <p>₦{item.price} Million</p>
                </div>
                <button className='text-sm border px-3 mt-3 py-1 shadow-lg bg-main rounded-md text-white'>View</button>
              </div>
             
            })
            :sideValue === 'Higest - Lowest'?data.sort((a,b)=>a.price>b.price?-1:1).map((item, idx)=>{
              return  <div className="card mb-4 shadow-lg p-4 rounded-lg" key={idx}>
              <div className="card-img">
                <Image
                  src={item.img}
                  width={500}
                  height={500}
                  alt={item.name}
                  className='rounded-lg mb-4'
                />
              </div>
              <div className="card-body">
                  <h1>{item.name}</h1>
                  <p>{item.location}</p>
                  <p>{item.landSize}</p>
                  <p>₦{item.price} Million</p>
              </div>
              <button className='text-sm border px-3 mt-3 py-1 shadow-lg bg-main rounded-md text-white'>View</button>
            </div>
           
            })
            :sideValue==='Lowest - Higest'?data.sort((a,b)=>a.price>b.price?-1:1).reverse().map((item, idx)=>{
              return  <div className="card mb-4 shadow-lg p-4 rounded-lg" key={idx}>
                <div className="card-img">
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt={item.name}
                    className='rounded-lg mb-4'
                  />
                </div>
                <div className="card-body">
                    <h1>{item.name}</h1>
                    <p>{item.location}</p>
                    <p>{item.landSize}</p>
                    <p>₦{item.price} Million</p>
                </div>
                <button className='text-sm border px-3 mt-3 py-1 shadow-lg bg-main rounded-md text-white'>View</button>
              </div>
            })
            :data.map((item, idx)=>{
             return  <div className="card mb-4 shadow-lg p-4 rounded-lg" key={idx}>
                <div className="card-img">
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt={item.name}
                    className='rounded-lg mb-4'
                  />
                </div>
                <div className="card-body">
                    <h1>{item.name}</h1>
                    <p>{item.location}</p>
                    <p>{item.landSize}</p>
                    <p>₦{item.price} Million</p>
                </div>
                <button className='text-sm border px-3 mt-3 py-1 shadow-lg bg-main rounded-md text-white'>View</button>
              </div>
             
            })
          }
      </div>
    </div>
  );
}
