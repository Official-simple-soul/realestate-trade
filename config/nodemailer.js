import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.zoho.com',
    auth: {
        user: email,
        pass,

    },
})


export const mailOptions ={
    from:email,
    to:'abdurroheemsherifdeen@gmail.com'
}