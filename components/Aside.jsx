import React, {useState} from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faSignOut,
  faTableColumns,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal'

export default function Aside({ openSide, setOpenSide }) {
  const [showModal, setShowModal] = useState(false)
  const [condition, setCondition] = useState(true)
  return (
    <>
      {condition?
        <div
        className={`h-screen bg-main absolute top-14 left-0 ${
          openSide ? 'w-40 md:w-[210px]' : 'w-0 overflow-hidden'
        } transition-all ease-in-out duration-500`}
      >
        <div className="account pl-4 pt-16">
          <h1 className='font-bold text-white mb-8 cursor-pointer underline' onClick={()=>setShowModal(true)}>Admin Login</h1>
        </div>
      </div>
        :
        <div
          className={`h-screen bg-main absolute top-14 left-0 ${
            openSide ? 'w-40 md:w-[210px]' : 'w-0 overflow-hidden'
          } transition-all ease-in-out duration-500`}
        >
          <div className="profile-logo pt-3 pl-3 md:flex items-center border-b pb-2">
            <Image
              src="/images/get-key.jpg"
              width={70}
              height={80}
              alt="profile picture"
              className="rounded-full"
            />
            <div className="text-sm md:text-lg ml-2 text-fw">
              <h1 className="">Sherif-deen</h1>
              <p>Agent</p>
            </div>
          </div>
          <div className="profile-details text-white pt-3 pl-6">
            <h1 className="text-sm overflow-auto">Sales Personnel</h1>
          </div>
          <ul className="text-white pl-6 mt-16 space-y-8">
            <li>
              <FontAwesomeIcon icon={faUser} className="mr-4" />
              Client Side
            </li>
            <li>
              <FontAwesomeIcon icon={faTableColumns} className="mr-4" />
              Dashboard
            </li>
            <li>
              <FontAwesomeIcon icon={faGoogle} className="mr-4" />
              Goggle Liscence
            </li>
            <li></li>
            <li>
              <FontAwesomeIcon icon={faGear} className="mr-4" />
              Settings
            </li>
          </ul>
          <p className="text-white pl-6 mt-60" onClick={()=>{
            setCondition(true)
            setOpenSide(false)
            }}>
            <FontAwesomeIcon icon={faSignOut} className="mr-4" />
            Log out
          </p>
        </div>
      }
    <Modal
    setShowModal={setShowModal}
    showModal={showModal}
    setCondition={setCondition}
    />
    </>
  );
}
