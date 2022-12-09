import React, {useState} from 'react';
import Link from 'next/link';

export default function Nav({openMenu, setProperties, setOpenMenu}) {
  const [active, setActive] = useState(null);
  
  
  return (
    <nav className='md:block'>
        <ul className={`flex flex-col md:flex-row absolute bg-main text-white md:text-main md:bg-transparent left-10 right-10 top-16 overflow-hidden ${openMenu?'h-64 space-y-10 py-6':'h-0 md:h-7'} transition-all ease-in-out duration-500 rounded-md md:rounded-0 md:py-0 md:space-y-0 md:static md:space-x-8 items-center`}>
          <Link href={'/'}>
            <li className={`${active === 'Home' && 'font-bold underline'}`} onClick={() => {
              setActive('Home')
              setProperties(false)
              setOpenMenu(false)
            }
          }>Home</li>
          </Link>
          <Link href={'/property'}>
            <li className={`${active === 'Properties' && 'font-bold underline'}`} onClick={() => {
              setActive('Properties')
              setProperties(true)
              setOpenMenu(false)
            }
            }>Properties</li>
          </Link>
          <Link href={'/about'}>
            <li className={`${active === 'About Us' && 'font-bold underline'}`} onClick={() => {
              setActive('About Us')
              setProperties(false)
              setOpenMenu(false)
            }
          }>About Us</li>
          </Link>
          <Link href={'/contact'}>
            <li className={`${active === 'Contact Us' && 'font-bold underline'}`} onClick={() => {
              setActive('Contact Us')
              setProperties(false)
              setOpenMenu(false)
            }
          }>Contact Us</li>
          </Link>
        </ul>
      </nav>
  )
}
