import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../contexts/Context';
export default function Modal({ showModal, setShowModal, setCondition, setOpenSide }) {
  const [showPass, setShowPass] = useState(true);
  const { loginDetails, setLoginDetails } = useGlobalContext();
  const [verification, setVerification] = useState({
    email: 'abdurroheemsherifdeen@gmail.com',
    password: '@Babatunde101',
  });

  const { email, password } = loginDetails;
  const handleLogin = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetails)
    localStorage.setItem('logindetails', JSON.stringify(loginDetails))
    if (
      loginDetails.email !== verification.email
    )
   {
      alert(
        'Caution! you are not allowed to login to this server, please apply as an administrator to use this server'
      );
    } 
    else if(loginDetails.password !== verification.password) {
      alert(
        'Caution! you are not allowed to login to this server, please apply as an administrator to use this server'
      );
    }
    else {
      setShowModal(false);
      setLoginDetails({
        email: '',
        password: '',
      });
    }
  };
  useEffect(()=> {
    let newObj = localStorage.getItem('logindetails')
const details =JSON.parse(newObj)
if(details) {
  setCondition(false)
}
  })


  
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
                  <form action="" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      required={!verification.email}
                      value={email}
                      onChange={handleLogin}
                      on
                      className="bg-transparent border border-main rounded placeholder:text-sm placeholder:font-light px-2 py-1 block w-full"
                      placeholder="Enter your email"
                    />
                    <div className="flex border border-main rounded my-2 px-2 py-1 w-full">
                      <input
                        type={showPass ? 'password' : 'text'}
                        name="password"
                        required={!verification.password}
                        value={password}
                        onChange={handleLogin}
                        className="bg-transparent placeholder:text-sm placeholder:font-light focus:outline-0"
                        placeholder="Enter password"
                      />
                      <div className="" onClick={() => setShowPass(!showPass)}>
                        {showPass ? (
                          <FontAwesomeIcon icon={faEye} />
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        )}
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
                        type="submit"
                        value="Login"
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
