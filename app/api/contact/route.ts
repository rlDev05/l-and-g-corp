import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key validation
const resend = new Resend(process.env.RESEND_API_KEY);

// Email template function for better maintainability
function generateEmailTemplate(sanitizedData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}) {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Manila',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
      
      <!-- Container -->
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #D4A54A 0%, #B8860B 100%); padding: 40px 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.025em;">New Contact Form Submission</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 14px;">L&G Energy Corp</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 32px;">
          
          <!-- Status Badge -->
          <div style="background-color: #fef7e0; color: #B8860B; padding: 12px 16px; border-radius: 8px; margin-bottom: 32px; display: flex; align-items: center; font-size: 14px; font-weight: 500; border-left: 4px solid #D4A54A;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            </svg>
            New inquiry received from website contact form
          </div>
          
          <!-- Contact Details -->
          <div style="margin-bottom: 32px;">
            <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Contact Details</h2>
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 24px;">
              <div style="display: grid; gap: 16px;">
                <div style="display: flex; align-items: center;">
                  <div style="width: 8px; height: 8px; background-color: #D4A54A; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Name</div>
                    <div style="color: #1a1a1a; font-weight: 500;">${sanitizedData.firstName} ${sanitizedData.lastName}</div>
                  </div>
                </div>
                
                <div style="display: flex; align-items: center;">
                  <div style="width: 8px; height: 8px; background-color: #D4A54A; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Email</div>
                    <a href="mailto:${sanitizedData.email}" style="color: #D4A54A; text-decoration: none; font-weight: 500;">${sanitizedData.email}</a>
                  </div>
                </div>
                
                ${
                  sanitizedData.phone
                    ? `
                <div style="display: flex; align-items: center;">
                  <div style="width: 8px; height: 8px; background-color: #D4A54A; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Phone</div>
                    <a href="tel:${sanitizedData.phone}" style="color: #D4A54A; text-decoration: none; font-weight: 500;">${sanitizedData.phone}</a>
                  </div>
                </div>
                `
                    : ''
                }
                
                ${
                  sanitizedData.company
                    ? `
                <div style="display: flex; align-items: center;">
                  <div style="width: 8px; height: 8px; background-color: #D4A54A; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Company</div>
                    <div style="color: #1a1a1a; font-weight: 500;">${sanitizedData.company}</div>
                  </div>
                </div>
                `
                    : ''
                }
                
                <div style="display: flex; align-items: center;">
                  <div style="width: 8px; height: 8px; background-color: #D4A54A; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Subject</div>
                    <div style="color: #1a1a1a; font-weight: 500;">${sanitizedData.subject}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Message -->
          <div style="margin-bottom: 32px;">
            <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Message</h2>
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 24px;">
              <p style="white-space: pre-wrap; color: #495057; margin: 0; font-size: 15px; line-height: 1.6;">${sanitizedData.message}</p>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div style="margin-bottom: 32px;">
            <h2 style="color: #1a1a1a; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Quick Actions</h2>
            <div style="display: flex; gap: 48px; flex-wrap: wrap;">
              <a href="mailto:${sanitizedData.email}?subject=Re: ${sanitizedData.subject}" style="background-color: #D4A54A; color: white; padding: 16px 24px; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500; display: inline-flex; align-items: center; transition: background-color 0.2s; box-shadow: 0 2px 4px rgba(212, 165, 74, 0.2);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                Reply to ${sanitizedData.firstName}
              </a>
              ${
                sanitizedData.phone
                  ? `
              <a href="tel:${sanitizedData.phone}" style="background-color: #B8860B; color: white; padding: 16px 24px; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500; display: inline-flex; align-items: center; transition: background-color 0.2s; box-shadow: 0 2px 4px rgba(184, 134, 11, 0.2);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
                Call ${sanitizedData.firstName}
              </a>
              `
                  : ''
              }
            </div>
          </div>
          
          <!-- Footer -->
          <div style="border-top: 1px solid #e9ecef; padding-top: 24px; text-align: center;">
            <div style="color: #6c757d; font-size: 14px; margin-bottom: 8px;">
              Submitted on ${timestamp}
            </div>
            <div style="color: #adb5bd; font-size: 12px;">
              This message was sent from the L&G Energy Corp contact form
            </div>
          </div>
          
        </div>
      </div>
    </body>
    </html>
  `;
}

// Rate limiting map (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientIP =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, phone, company, subject, message } =
      body;

    // Enhanced validation with better error messages
    const validationErrors = [];

    if (!firstName?.trim()) validationErrors.push('First name is required');
    if (!lastName?.trim()) validationErrors.push('Last name is required');
    if (!email?.trim()) validationErrors.push('Email is required');
    if (!subject?.trim()) validationErrors.push('Subject is required');
    if (!message?.trim()) validationErrors.push('Message is required');

    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Enhanced spam prevention
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (message.trim().length > 2000) {
      return NextResponse.json(
        { error: 'Message is too long (maximum 2000 characters)' },
        { status: 400 }
      );
    }

    // Sanitize inputs with additional security measures
    const sanitizedData = {
      firstName: firstName.trim().substring(0, 50), // Limit length
      lastName: lastName.trim().substring(0, 50),
      email: email.trim().toLowerCase().substring(0, 100),
      phone: phone?.trim().substring(0, 20) || '',
      company: company?.trim().substring(0, 100) || '',
      subject: subject.trim().substring(0, 100),
      message: message.trim().substring(0, 2000),
    };

    // Get recipient emails from environment or use default
    const recipientEmails = process.env.RESEND_TO_EMAILS
      ? process.env.RESEND_TO_EMAILS.split(',').map((email) => email.trim())
      : ['rlorenzo@l-and-gcorp.com', 'arrangalvan@l-and-gcorp.com'];

    // Send email using Resend with timeout
    const emailPromise = resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        'L&G Energy Corp <onboarding@resend.dev>',
      to: recipientEmails,
      replyTo: sanitizedData.email,
      subject: `[L&G Energy Corp] New Inquiry: ${sanitizedData.subject} - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: generateEmailTemplate(sanitizedData),
    });

    // Add timeout to prevent hanging requests
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Email request timeout')), 10000)
    );

    const result = (await Promise.race([emailPromise, timeoutPromise])) as {
      data?: unknown;
      error?: { statusCode?: number; message?: string };
    };
    const { data, error } = result;

    if (error) {
      console.error('Resend error:', error);

      // Provide more specific error messages
      if (error.statusCode === 403) {
        return NextResponse.json(
          {
            error: 'Email service configuration error. Please contact support.',
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Log successful email for monitoring
    console.log(
      `Email sent successfully to ${recipientEmails.join(', ')} from ${sanitizedData.email}`
    );

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Don't expose internal errors to client
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
