import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../contexts/Context';

export default function Side() {
  const [openTray, setOpenTray] = useState(false);
  const {setSideValue } = useGlobalContext();
  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpenTray(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  useEffect(() => {
    const val = document.querySelectorAll('.sideValue');
    val.forEach((item) => {
      item.addEventListener('click', () => {
        setSideValue(item.innerText);
      });
    });
  }, [setSideValue]);

  return (
    <>
      <div
        onClick={() => setOpenTray(!openTray)}
        className="flex items-center space-x-2 border-b px-1 dropdown mx-auto col-span-5 mt-3 md:hidden"
        ref={menuRef}
      >
        <FontAwesomeIcon
          icon={openTray ? faCaretUp : faCaretDown}
          className=" text-2xl"
        />
        <p className="text-sm">{openTray ? 'close tray' : 'open tray'}</p>
      </div>
      <div
        className={`${
          openTray ? 'h-[450px] absolute right-0 left-0 top-40 p-3' : 'h-0'
        } transition-all ease-in-out duration-500 text-center md:text-left overflow-hidden md:h-[100%] md:border-r md:p-4 text-black col-span-5 md:col-span-1 bg-white z-10 shadow-md`}
      >
        <p className="bg-main text-white rounded px-1 inline-block md:mt-12">
          View by category
        </p>
        <ul className="space-y-2 md:spacey-8 md:mt-2 text-lg font-light md:flex-col">
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            All
          </li>
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            Bungalow
          </li>
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            Terrace
          </li>
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            Duplexes
          </li>
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            Detached
          </li>
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            Serviced
          </li>
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            Commercial
          </li>
        </ul>
        <p className="bg-main text-white rounded px-1 md:mt-12 inline-block">
          Sort by price
        </p>
        <ul className="space-y-2 md:spacey-8 md:mt-2 text-lg font-light md:flex-col">
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer"></li>
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            Higest - Lowest
          </li>
          <li className="sideValue hover:underline hover:font-bold transition-all ease-in-out duration-500 cursor-pointer">
            Lowest - Higest
          </li>
        </ul>
      </div>
    </>
  );
}
