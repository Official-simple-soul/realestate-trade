import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

require('dotenv').config()

const sgMail = require('@sendgrid/mail')

const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env

sgMail.setApiKey(SG_API_KEY)


export default async function handler(req: NextApiRequest,
  res: NextApiResponse<Data>) {
  const {name, email, message} = req.body

  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: 'Nextjs contact form',
    html: `<p><strong>Name: </strong>${name}
    <p><strong>Name: </strong>${email}
    <p><strong>Name: </strong>${message}`
  };
await sgMail.send(msg);
res.json({success: true})
}