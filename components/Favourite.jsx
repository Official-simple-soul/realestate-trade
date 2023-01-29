import React, {useState} from 'react';
import { useGlobalContext } from '../contexts/Context';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Favourite() {
  const { favArr, setFavArr } = useGlobalContext();
  const [favourite, setFavourite] = useState(false);
  
  const handleClick = ({id}) => {
    setFavArr(favArr.filter(items=>items.id!==id))

  }
  
  
  return (
    <div>
      <div className="top py-8">
        <h1 className="text-black text-3xl text-center">All Favourite</h1>
      </div>
      <div className="main">
        {favArr.length < 1 ? (
          <div className="text-center py-12">
            <div className="text">
              <h1 className="text-3xl">
                You havent selected any favourite property
              </h1>
              <p className='text-lg mt-4'>Please go to properties or home to add to favourite</p>
            </div>
          </div>
        ) : (
          favArr &&
          favArr.map((item) => {
            return (
              <>
                <div
                  className="flex items-center space-x-12 card mb-4 shadow-lg p-4 rounded-lg relative"
                  key={item.id}
                >
                  <div className="relative">
                    <Image
                      src={item.img}
                      width={200}
                      height={200}
                      object-fit="contain"
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
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-red-400 text-xl absolute right-4 bottom-3`}
                    onClick={() => {
                      handleClick(item);
                      setFavourite(!favourite);
                    }}
                  />
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Favourite;
