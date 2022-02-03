import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { schema as contactFormSchema } from "../../lib/forms/contact";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, email, message } = await contactFormSchema.validate(
        req.body,
      );

      try {
        await processRequest(name, email, message);
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          errors: {
            sendMail:
              "An error occured. Please contact me at dev.test.mag@gmail.com",
          },
        });
      }
    } catch (error) {
      res.status(400).json({
        errors: {
          name: error.name,
          email: error.email,
          message: error.message,
        },
      });
    }
  }
};

async function processRequest(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: `"Bahadir" <${process.env.SMTP_USER}>`, // sender address
    replyTo: email,
    to: process.env.MAIL_TO, // list of receivers
    subject: "Contact Form Submission", // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`, // plain text body
    html: `
    <h3>A new Message was submitted on your Site:</h3>
    <br>
    <b>Name:</b>${name}
    <br>
    <b>Email:</b> <a href="mailto:${email}">${email}</a>
    <br>
    <b>Message:</b>
    <br>
    <p>${message}</p>
    `, // html body
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: `"Bahadir" <${process.env.SMTP_USER}>`, // sender address
    replyTo: process.env.MAIL_TO,
    to: email, // list of receivers
    subject: "Thank you for Contacting Me!", // Subject line
    text: `Hello ${name}, I've received your message.`, // plain text body
    html: `
    <p>
      Hello ${name},
      <br>
      <br>
      I've received your message. I will get back to you as soon as possible.
      <br>
      <br>
      Kind regards,
      <br>
      Bahadir
      <br>
    </p>
    `, // html body
  });
}
