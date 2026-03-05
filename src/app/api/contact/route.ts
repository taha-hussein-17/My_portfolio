import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // The user's target email
    const targetEmail = "capootaha17@gmail.com";

    // In a production environment, you should use a service like Resend.
    // To enable real emails, follow these steps:
    // 1. Sign up at https://resend.com (it's free for personal use)
    // 2. Get your API key and add it to your .env.local as RESEND_API_KEY
    // 3. Uncomment the code below:

    /*
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [targetEmail],
        subject: `New Message: ${subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });
    */

    console.log(`Email would be sent to ${targetEmail}:`, { name, email, subject, message });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
