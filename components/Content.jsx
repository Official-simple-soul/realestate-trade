import React, { useState, useEffect } from 'react';
import data from '../data';
import TopContent from './TopContent';
import ContentRow from '../components/ContentRow'
import { useGlobalContext } from '../contexts/Context';


export default function Content() {
  const [random, setRandom] = useState([])
  const {favArr, setFavArr} = useGlobalContext();
  
  const handleClick = (item) => {
    
    setFavArr([...favArr, item]);
  };

 
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
            <>
              <ContentRow item={item} handleClick={handleClick}/>
            </>
          );
        })}
      </div>
    </div>
  );
}
