import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the API key from environment variables
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  // Extract form data
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const resend = new Resend(apiKey);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Resend's test domain
      to: 'abdoulrazak.work@gmail.com', // Your Gmail
      replyTo: email, // Sender's email for replies
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
    New Contact Form Submission
  </h2>
  
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
    <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
  </div>
  
  <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4F46E5; margin: 20px 0;">
    <h3 style="color: #333; margin-top: 0;">Message:</h3>
    <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
  </div>
  
  <p style="color: #999; font-size: 12px; margin-top: 30px;">
    This email was sent from your portfolio contact form.
  </p>
</div>
      `.trim(),
    });

    console.log('Email sent successfully:', data);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}
