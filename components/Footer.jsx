import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { sendContact } from '../lib/app';
import Form from '../components/Form'

export default function Footer() {
    
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
                <Form />
            </div>
        </div>
        <div className="text-center py-4 bottom border-t">
                <h1>Copyright 2022</h1>
        </div>
    </footer>
  )
}
