import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, projectType, timeline, message } = body;
    
    if (!name || !email || !projectType || !timeline || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send notification emails
    try {
      // Send admin notification
      const adminResult = await emailService.sendConsultationNotification(body);
      console.log('Admin notification result:', adminResult);
      
      // Send client confirmation
      const clientResult = await emailService.sendConsultationConfirmation(body);
      console.log('Client confirmation result:', clientResult);
      
      console.log('Consultation request processed successfully for:', email);
      
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Don't throw error - continue processing even if email fails
      console.log('Email processing failed, but form submission will continue');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
