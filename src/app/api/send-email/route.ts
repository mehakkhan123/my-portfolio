import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Define the type for the expected request body
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  // Ensure the request method is POST (Next.js handles this by default for named exports, but good practice)
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  const data: ContactFormData = await req.json();
  const { name, email, subject, message } = data;

  // Server-side validation (essential for security)
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Type for transporter options
  const transporterOptions = {
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_APP_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  };

  // Basic validation for env variables (important for production)
  if (!transporterOptions.auth.user || !transporterOptions.auth.pass) {
    console.error("Missing GMAIL_APP_USER or GMAIL_APP_PASSWORD environment variables.");
    return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport(transporterOptions);

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Sender's name and email
      to: 'mehakkhan1210@gmail.com', // Your email address to receive messages
      replyTo: email, // Allow replying directly to the sender
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p> {/* Preserve line breaks for messages */}
      `,
    });
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    // You might want to log the specific error details to your server logs for debugging
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}