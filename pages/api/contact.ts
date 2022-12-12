import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from '../../config/nodemailer';
import { mailOptions } from '../../config/nodemailer';

type Data = {
  success: boolean;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { name, email, message } = data;
    if(!name || !email || !message) {
      return res.status(400).json(data)
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Real Estate Trade Contact Form',
        html: `<p><strong>Name: </strong>${name}</p>
                <p><strong>Email: </strong>${email}</p>
                <p><strong>Message: </strong>${message}</p>`,
      });
      res.json({ success: true });
    } catch (err) {
      return res.status(400).json({message: err.message})
    }
  }
  return res.status(400).json({message: 'Bad request'})
};

export default handler;
