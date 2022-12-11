import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Aside from './Aside';
import Nav from './Nav';
import SearchInput from './SearchInput';

export default function Header() {
  const [openSide, setOpenSide] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [properties, setProperties] = useState(false);
  const menuRef = useRef();

  // useEffect(() => {
  //   let handler = (event) => {
  //     if (!menuRef.current.contains(event.target)) {
  //       setOpenSide(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handler);
  //   return () => {
  //     document.removeEventListener('mousedown', handler);
  //   };
  // });

  const showSide = () => {
    setOpenSide(!openSide);
  };

  return (
    <header className="z-40 fixed w-full flex justify-between items-center p-4 shadow-lg bg-fw text-main">
      <Aside 
      openSide={openSide} 
      setOpenSide={setOpenSide} />
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon
          icon={faBars}
          className="text-main cursor-pointer"
          onClick={showSide}
          // ref={menuRef}
        />
        <Link href={'/'}>
          <h1 className="font-bold text-main">Real-Estate Trade</h1>
        </Link>
      </div>
      <Nav
        openMenu={openMenu}
        properties={properties}
        setProperties={setProperties}
        setOpenMenu={setOpenMenu}
      />
      <SearchInput
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        properties={properties}
      />
    </header>
  );
}
