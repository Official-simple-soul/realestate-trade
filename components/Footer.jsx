import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })
    const {name, email, message} = values;
    const handleMail = (e) => setValues({...values, [e.target.name]: e.target.value});
    const handleSubmit = async e=> {
        e.preventDefault();
    try {
        await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(values),
    
    });
    } catch (err) {
        console.log(err)
    }
    }
  return (
    <footer className='bg-main w-full text-white'>
        <div className="container px-3 md:text-left py-4 md:flex justify-between items-center">
            <div className="left border-b md:border-none">
                <h1 className='text-2xl font-bold'>Contact Us</h1>
                <p className='text-sm font-light my-2'>Reach us at your convenience</p>
                <div className="phone my-2">
                    <p className='text-sm font-light'>08139781147</p>
                </div>
                <div className="address my-2">
                    <p className='text-sm font-light'>01, ACAEDF Crescent, Ikot-Afah, Eket, Akwa-Ibom</p>
                </div>
                <div className="email my-2">
                    <p className='text-sm font-light'>abdurroheemsherifdeen@gmail.com</p>
                </div>
                <div className="socials space-x-4">
                    <Link href={'https://github.com/Official-simple-soul'} target='_blank'><FontAwesomeIcon icon={faGithub} /></Link>
                    <Link href={'https://web.facebook.com/sherifdeenabdurroheem/'} target='_blank'><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link href={'linkedin.com/in/abdur-roheem-sherif-deen-a04019207'} target='_blank'><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link href={'https://twitter.com/sir_simple_soul'} target='_blank'><FontAwesomeIcon icon={faTwitter} /></Link>
                </div>
            </div>
            <div className="right md:w-96 mt-8 md:mt-0">
                <h1 className='mt-3'>Reach out through our Email</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name='name'
                    placeholder='Your name'
                    required
                    value={name}
                    onChange={handleMail}
                    className='bg-transparent px-2 border block w-full py-1 my-2 rounded'
                    />
                    <input 
                    type="email"
                    name='email'
                    placeholder='Your email'
                    required
                    value={email}
                    onChange={handleMail}
                    className='bg-transparent px-2 border block w-full py-1 my-2 rounded'
                    />
                    <textarea name="message" id="" placeholder='Enter a message' rows="3" value={message} onChange={handleMail} className='block p-2 bg-transparent border w-full rounded' required></textarea>
                    <button
                    className='border px-1 my-2 rounded'
                    >Send</button>
                </form>
            </div>
        </div>
        <div className="text-center py-4 bottom border-t">
                <h1>Copyright 2022</h1>
        </div>
    </footer>
  )
}
