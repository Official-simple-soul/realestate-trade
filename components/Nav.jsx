import React, {useState} from 'react';
import Link from 'next/link';

export default function Nav({openMenu, setProperties, setOpenMenu}) {
  const [active, setActive] = useState(null);
  const NavLinks = [
    {name: 'Home', link: '/'},
    {name: 'Properties', link: '/property'},
    {name: 'About Us', link: '/about'},
    {name: 'Contact Us', link: '/contact'},
    {name: 'Favourite', link: '/favourite'}
  ]
  
  return (
    <nav className='md:block'>
        <ul className={`flex flex-col md:flex-row absolute bg-main text-white md:text-main md:bg-transparent left-10 right-10 top-16 overflow-hidden ${openMenu?'h-64 space-y-10 py-6':'h-0 md:h-7'} transition-all ease-in-out duration-500 rounded-md md:rounded-0 md:py-0 md:space-y-0 md:static md:space-x-8 items-center`}>
          {
            NavLinks.map(item=> {
              const {name, link} = item
              return <>
                <Link href={link}>
                  <li className={`${active === name && 'font-bold underline'}`} onClick={() => {
                    setActive(name)
                    setProperties(false)
                    setOpenMenu(false)
                  }
                }>{name}</li>
                </Link>
              </>
            })
          }
        </ul>
      </nav>
  )
}
