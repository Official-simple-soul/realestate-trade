import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from '../../config/nodemailer';
import { mailOptions } from '../../config/nodemailer';

type Data = {
  success: boolean;
};

// require('dotenv').config()

// const sgMail = require('@sendgrid/mail')

// const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env

// sgMail.setApiKey(SG_API_KEY)

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // const {name, email, message} = req.body
  // res.status(400).json({message: 'Bad request'})
  if (req.method === 'POST') {
    const data = req.body;
    const { name, email, message } = data;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Nextjs contact form',
        html: `<p><strong>Name: </strong>${name}</p>
                <p><strong>Email: </strong>${email}</p>
                <p><strong>Message: </strong>${message}</p>`,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
