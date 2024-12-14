import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import type { Request } from "@vercel/node";

async function POST(request: any) {
  const { email, name, message, phone } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Enquiry Form" <process.env.MY_EMAIL>',
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone Number: ${phone}`,
  };

  const sendMailPromise = () =>
    new Promise<void>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve();
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export { POST };

