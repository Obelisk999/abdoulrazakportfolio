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

  // Validate required fields - trim whitespace first
  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();
  const trimmedSubject = subject?.trim();
  const trimmedMessage = message?.trim();

  if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Validate email format with more comprehensive regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // HTML escape function to prevent XSS
  const escapeHtml = (text: string): string => {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
  };

  // Escape user inputs for HTML
  const safeName = escapeHtml(trimmedName);
  const safeEmail = escapeHtml(trimmedEmail);
  const safeSubject = escapeHtml(trimmedSubject);
  const safeMessage = escapeHtml(trimmedMessage);

  try {
    const resend = new Resend(apiKey);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Resend's test domain
      to: 'abdoulrazak.work@gmail.com', // Your Gmail
      replyTo: trimmedEmail, // Sender's email for replies
      subject: `Portfolio Contact: ${trimmedSubject}`,
      text: `
Name: ${trimmedName}
Email: ${trimmedEmail}
Subject: ${trimmedSubject}

Message:
${trimmedMessage}
      `.trim(),
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
    New Contact Form Submission
  </h2>
  
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
    <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
    <p style="margin: 10px 0;"><strong>Subject:</strong> ${safeSubject}</p>
  </div>
  
  <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4F46E5; margin: 20px 0;">
    <h3 style="color: #333; margin-top: 0;">Message:</h3>
    <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
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
    // Log detailed error server-side only
    console.error('Error sending email:', error);
    
    // Return generic error to client to avoid leaking sensitive information
    return res.status(500).json({ 
      error: 'Failed to send email. Please try again later.'
    });
  }
}
