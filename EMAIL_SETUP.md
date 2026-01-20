# Email Configuration Setup Guide

This guide explains how to configure email sending for the contact form on your portfolio website.

## Overview

The portfolio uses **Resend** (https://resend.com) to send emails through a Vercel serverless function. When someone submits the contact form, an email is sent to your Gmail account.

## Prerequisites

- A Vercel account (where the site is deployed)
- A Resend account (free tier available)

## Setup Steps

### 1. Create a Resend Account

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. After logging in to Resend, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Portfolio Contact Form")
4. Select "Sending access" permission
5. Click "Create"
6. **Copy the API key** (you won't be able to see it again!)

### 3. Configure Vercel Environment Variables

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your portfolio project
3. Go to **Settings** → **Environment Variables**
4. Add a new environment variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Paste your Resend API key from step 2
   - **Environment**: Select all (Production, Preview, Development)
5. Click "Save"

### 4. Redeploy Your Site

After adding the environment variable:
1. Go to the **Deployments** tab in Vercel
2. Click on the latest deployment
3. Click the **"..."** menu and select "Redeploy"
4. Or simply push a new commit to trigger a deployment

## Testing

### Test the Contact Form

1. Visit your live site
2. Navigate to the "Contact" section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Gmail inbox (abdoulrazak.work@gmail.com) for the test email

### Important Notes

- **Free Tier Limits**: Resend's free tier includes:
  - 100 emails per day
  - 3,000 emails per month
  - Perfect for a personal portfolio!

- **Sender Domain**: The default sender is `onboarding@resend.dev`. To use a custom domain:
  1. Go to Resend Dashboard → Domains
  2. Add and verify your domain
  3. Update the `from` field in `/api/send-email.ts`

- **Email Receiving**: Currently set to send emails to `abdoulrazak.work@gmail.com`. To change this:
  1. Edit `/api/send-email.ts`
  2. Update the `to` field on line 39

## Troubleshooting

### "Email service not configured" Error

This means the `RESEND_API_KEY` environment variable is not set in Vercel.
- Double-check that you added the environment variable in Vercel settings
- Make sure you redeployed after adding the variable

### Emails Not Arriving

1. Check the Vercel function logs:
   - Go to Vercel Dashboard → Your Project → Logs
   - Filter by "Functions"
   - Look for errors in `/api/send-email`

2. Check Resend logs:
   - Go to [Resend Dashboard → Emails](https://resend.com/emails)
   - Check if the email was sent successfully
   - Look for any error messages

3. Check Gmail spam folder

### "Failed to send email" Error

- Check that your API key is valid and has sending permissions
- Verify you haven't exceeded Resend's free tier limits
- Check Vercel function logs for detailed error messages

## Local Development

To test email sending locally:

1. Create a `.env` file in the project root (already gitignored):
   ```bash
   RESEND_API_KEY=your_api_key_here
   ```

2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Run the development server with Vercel:
   ```bash
   vercel dev
   ```

4. Access your local site at `http://localhost:3000` and test the form

## Alternative: Using a Custom SMTP Provider

If you prefer to use Gmail's SMTP or another provider instead of Resend:

1. Install Nodemailer:
   ```bash
   npm install nodemailer
   ```

2. Update `/api/send-email.ts` to use Nodemailer with Gmail SMTP
3. Add Gmail app-specific password to Vercel environment variables

## Security Notes

- Never commit your API key to the repository
- The `.env` file is already in `.gitignore`
- Environment variables are only accessible on the server (Vercel functions)
- The API endpoint includes validation to prevent abuse

## Support

For issues specific to:
- **Resend**: Check [Resend Documentation](https://resend.com/docs)
- **Vercel Functions**: Check [Vercel Serverless Functions Guide](https://vercel.com/docs/functions)
- **This Implementation**: Open an issue in the repository

## Cost

Both services offer generous free tiers:
- **Vercel**: Unlimited serverless function invocations on free tier
- **Resend**: 3,000 emails/month free forever

Perfect for a personal portfolio with moderate contact form usage!
