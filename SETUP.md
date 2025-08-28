# Contact Form Setup with Resend

This project uses Resend for sending emails from the contact form. Follow these steps to set up the email functionality:

## 1. Get a Resend API Key

1. Go to [Resend.com](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key

## 2. Set up Environment Variables

Create a `.env.local` file in the root directory with the following content:

```env
# Resend API Key
RESEND_API_KEY=your_resend_api_key_here

# Optional: Customize the from email address
# Make sure this domain is verified in your Resend account
RESEND_FROM_EMAIL=noreply@l-and-gcorp.com

# Optional: Customize email recipients (comma-separated)
RESEND_TO_EMAILS=rlorenzo@l-and-gcorp.com,arrangalvan@l-and-gcorp.com

# Optional: Customize company name for email branding
COMPANY_NAME=L&G Energy Corp

# Optional: Customize website URL
WEBSITE_URL=https://l-and-gcorp.com
```

## 3. Verify Your Domain (Optional but Recommended)

For better deliverability, verify your domain in Resend:

1. Go to your Resend dashboard
2. Navigate to Domains
3. Add and verify your domain (e.g., l-and-gcorp.com)
4. Update the `RESEND_FROM_EMAIL` in your `.env.local` to use your verified domain

## 4. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check your email inbox for the received message

## 5. Customize Email Template

The email template is defined in `app/api/contact/route.ts`. You can customize:

- Email subject line
- HTML email template
- Recipient email addresses
- Email styling

## Troubleshooting

- **API Key Error**: Make sure your `RESEND_API_KEY` is correctly set in `.env.local`
- **Domain Not Verified**: If using a custom domain, ensure it's verified in Resend
- **Email Not Received**: Check your spam folder and Resend dashboard for delivery status

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use environment variables for all sensitive configuration
