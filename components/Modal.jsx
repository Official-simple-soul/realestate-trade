import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function Modal({ showModal, setShowModal, setCondition }) {
    const [showPass, setShowPass] = useState(true)
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-start p-5 rounded-t">
                  <h3 className="">Login</h3>
                </div>
                <div className="relative px-6 flex-auto">
                  <form action="">
                    <input
                      type="email"
                      name="email"
                      required
                      className="bg-transparent border border-main rounded placeholder:text-sm placeholder:font-light px-2 py-1 block w-full"
                      placeholder="Enter your email"
                    />
                    <div className="flex border border-main rounded my-2 px-2 py-1 w-full">
                        <input
                        type={showPass?'password':'text'}
                        name="password"
                        required
                        className="bg-transparent placeholder:text-sm placeholder:font-light"
                        placeholder="Enter your email"
                        />
                        <div className='' onClick={()=>setShowPass(!showPass)}>
                            {
                                showPass?
                                <FontAwesomeIcon icon={faEye} />
                                :
                                <FontAwesomeIcon icon={faEyeSlash} />
                            }
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        <input
                            className="bg-main text-white text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                                setShowModal(false)
                                setCondition(false)
                            }}
                            value='Login'
                        />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
