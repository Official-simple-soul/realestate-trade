import React, { useState } from 'react';

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = values;
const handleForm = (e) => setValues({
  ...values, [e.target.name]: e.target.value
})
  return (
    <div className="pt-14 container pb-5">
      <h1 className="text-3xl mt-14">
        Get in touch <br></br> with our Agents
      </h1>
      <div className="md:grid grid-cols-2 gap-4 mt-4">
        <div className="left">
          <form action="">
            <input
              type="text"
              name="name"
              value={name}
              onChnage={handleForm}
              className="bg-fw w-80 py-2 my-1 px-2 block rounded"
              placeholder="Your full name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChnage={handleForm}
              className="bg-fw w-80 py-2 my-1 px-2 block rounded"
              placeholder="Your email"
            />
            <input
              type="text"
              name="subject"
              value={subject}
              onChnage={handleForm}
              className="bg-fw w-80 py-2 my-1 px-2 block rounded"
              placeholder="Your enquiry type"
            />
            <textarea
              name="message"
              value={message}
              onChnage={handleForm}
              id=""
              rows="3"
              className="w-80 bg-fw my-1 block rounded px-2 py-2"
              placeholder="Your message"
            ></textarea>
            <input
              type="submit"
              className="text-white py-1 px-8 bg-main rounded my-6"
            />
          </form>
        </div>
        <div className="right">
          <small className="">Address</small>
          <address className="mb-4 mt-2">
            01, ACAEDF Crescent, Ikot-Afaha, Eket, Akwa-Ibom
          </address>
          <small className="">Contact Details</small>
          <h1 className="mt-2">+234 813 978 11 47</h1>
          <h1 className="mb-4">abdurroheemsherifdeen@gmail.com</h1>
          <small>Opening Hours/ Inspection</small>
          <h1 className="mt-2">Every Day</h1>
        </div>
      </div>
      <map name="Akwa-ibom"></map>
    </div>
  );
}
