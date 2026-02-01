import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.businessType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email configuration
    const recipientEmail = 'info@talecrafters.in'
    
    // Format email content
    const emailSubject = `New Lead from TaleCrafters Website - ${data.name}`
    const emailBody = `
New Lead Submission from TaleCrafters Website
=============================================

Contact Information:
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

Business Details:
----------------
Business Type: ${data.businessType}
Current Challenges: ${data.challenges || 'Not specified'}
Current Spend: ${data.currentSpend || 'Not specified'}
Target ROAS: ${data.targetRoas || 'Not specified'}

Message:
--------
${data.message || 'No additional message'}

Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Next Steps:
----------
1. Review lead quality
2. Respond within 24 hours
3. Schedule discovery call
4. Send proposal

---
This is an automated notification from talecrafters.in
    `.trim()

    // For production, integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'website@talecrafters.in',
      to: recipientEmail,
      subject: emailSubject,
      text: emailBody,
      html: emailBody.replace(/\n/g, '<br>'),
    })
    */

    // Log submission (replace with actual email send in production)
    console.log('='.repeat(60))
    console.log('NEW LEAD SUBMISSION')
    console.log('='.repeat(60))
    console.log(`To: ${recipientEmail}`)
    console.log(`Subject: ${emailSubject}`)
    console.log('-'.repeat(60))
    console.log(emailBody)
    console.log('='.repeat(60))
    
    // TODO: Add email service integration
    // Instructions in README: Set RESEND_API_KEY or SENDGRID_API_KEY in .env
    
    return NextResponse.json(
      { 
        message: 'Form submitted successfully! We\'ll get back to you within 24 hours.',
        success: true
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission. Please try again or email us directly at info@talecrafters.in' },
      { status: 500 }
    )
  }
}
