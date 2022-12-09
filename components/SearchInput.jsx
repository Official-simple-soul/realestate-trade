import React from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../contexts/Context';

export default function SearchInput({setOpenMenu, openMenu, properties, setSearchInput, searchInput}) {
const {searchValue, setSearchValue} = useGlobalContext()
    const handleSearchInput =(e)=>{
        e.preventDefault()
        setSearchInput(!searchInput)
      }
  return (
    <div>
        <nav>
        <ul className="flex space-x-8 items-center">
          <div className="search border border-main rounded px-2 py-1">
            <form action="" className='md:flex'>
              <input
                type="search"
                value={searchValue}
                disabled={!properties}
                onChange={(e)=>setSearchValue(e.target.value)}
                placeholder="search property"
                className={`bg-white ${searchInput?'block':'hidden'} md:block border-main rounded p-1 md:p-0 md:bg-transparent absolute md:static border md:border-0 right-20 top-16 focus:outline-none`}
              />
              <button onClick={handleSearchInput} className='md:hidden'>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
          <div className="md:hidden">
            <FontAwesomeIcon
              icon={openMenu ? faCaretUp : faCaretDown}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
        </ul>
      </nav>
    </div>
  )
}
