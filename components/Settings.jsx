import React from 'react'

export default function settings() {
  return (
    <div>
      <div className="pt-20 bg-white text-black">
      <h1 className="text-center font-bold md:text-3xl my-8">
        View and Edit Settings
      </h1>
      <div className="container grid md:grid-cols-2 md:gap-8">
        <div className="left">
            <div className="grid md:grid-cols-4 p-4">
            <div className="left">
                <h1>Name:</h1>
            </div>
            <div className="right col-span-3 font-bold">
                <h1>Abdur-roheem Sherif-deen</h1>
            </div>
            </div>
            <div className="grid md:grid-cols-4 p-4">
            <div className="left">
                <h1>Adress:</h1>
            </div>
            <div className="right col-span-3 font-bold">
                <h1>01, ACAEDF Cresent, Ikot-Afaha, Eket, Akwa-Ibom</h1>
            </div>
            </div>
            <div className="grid md:grid-cols-4 p-4">
            <div className="left">
                <h1>Email:</h1>
            </div>
            <div className="right col-span-3 font-bold">
                <h1>abdurroheemsherifdeen@gmail.com</h1>
            </div>
            </div>
            <div className="grid md:grid-cols-4 p-4">
            <div className="left">
                <h1>Position:</h1>
            </div>
            <div className="right col-span-3 font-bold">
                <h1>Administrator</h1>
            </div>
            </div>
            </div>
        <div className="right p-4">
          <button className="border rounded px-3 py-1">Change Password</button>
        </div>
      </div>
    </div>
    </div>
  )
}

