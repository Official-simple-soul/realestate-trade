import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ContentRow({ item, handleClick }) {
    const [favourite, setFavourite] = useState(false);

  return (
    <div className="card mb-4 shadow-lg p-4 rounded-lg relative" key={item.id}>
      <div className="relative">
        <Image
          src={item.img}
          width={500}
          height={500}
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
        className={`${
          favourite ? 'text-red-400' : 'text-main'
        } text-xl absolute right-4 bottom-3`}
        onClick={() => {
            handleClick(item)
            setFavourite(!favourite);
        }
        }
      />
    </div>
  );
}

export default ContentRow;
