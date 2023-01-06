import React from 'react';
import { Link } from 'react-router-dom';

export default function TopContent() {
  return (
    <div className='w-full h-80 bg'>
        <div className="flash flex items-end h-[100%] pb-4 px-4">
            <div className="content md:flex justify-between w-full">
                <h1 className='md:text-3xl font-bold text-[red] opacity-80 shadow-lg bg-fw w-auto inline-block md:p-4 p-4 rounded-full'>FLASH SALE</h1>
                <p className='text-[red] bg-fw p-2 mt-2 rounded-lg md:w-80 opacity-80'>Get exclusive sale discount when you buy on or before 25th of December</p>
            </div>
        </div>
    </div>
  )
}
