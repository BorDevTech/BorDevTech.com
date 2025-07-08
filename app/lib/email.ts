// Email service with Titan Email (Hostinger) support
import nodemailer from 'nodemailer';

interface ConsultationData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  timeline: string;
  budget?: string;
  message: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    // Check if email credentials are configured
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Titan email credentials not configured. Emails will be logged instead of sent.');
      console.warn('Please create .env.local with EMAIL_HOST, EMAIL_USER, and EMAIL_PASS');
      return;
    }

    // Titan Email (Hostinger) SMTP configuration
    const config = {
      host: process.env.EMAIL_HOST, // smtp.titan.email
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // false for port 587
      auth: {
        user: process.env.EMAIL_USER, // your full email address
        pass: process.env.EMAIL_PASS, // your email password
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    };

    try {
      this.transporter = nodemailer.createTransport(config);
      console.log('Titan email transporter initialized successfully');
    } catch (error) {
      console.error('Failed to initialize email transporter:', error);
    }
  }

  async sendConsultationNotification(data: ConsultationData): Promise<{ success: boolean; message: string }> {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@bordevtech.com';
    const subject = `New Consultation Request from ${data.name}`;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6;">
        <h2 style="color: #17a2b8;">New Consultation Request</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Information:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
            <li><strong>Phone:</strong> ${data.phone || 'Not provided'}</li>
          </ul>
        </div>
        
        <div style="background: #e9f4ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Project Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Project Type:</strong> ${data.projectType}</li>
            <li><strong>Timeline:</strong> ${data.timeline}</li>
            <li><strong>Budget:</strong> ${data.budget || 'Not specified'}</li>
          </ul>
        </div>
        
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Message:</h3>
          <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
          <strong>Source:</strong> BorDevTech.com Consultation Form
        </p>
      </div>
    `;

    return this.sendEmail(adminEmail, subject, htmlContent, 'admin notification');
  }

  async sendConsultationConfirmation(data: ConsultationData): Promise<{ success: boolean; message: string }> {
    const subject = 'Thank you for your consultation request - BorDevTech';
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6;">
        <h2 style="color: #17a2b8;">Thank you for reaching out, ${data.name}!</h2>
        
        <p>We've received your consultation request and will review your project details carefully.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Your Request Summary:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Project Type:</strong> ${data.projectType}</li>
            <li><strong>Timeline:</strong> ${data.timeline}</li>
            <li><strong>Budget:</strong> ${data.budget || 'To be discussed'}</li>
          </ul>
        </div>
        
        <h3>What happens next?</h3>
        <ol>
          <li><strong>Project Review:</strong> We'll carefully analyze your requirements</li>
          <li><strong>Discovery Call:</strong> We'll schedule a 30-minute consultation within 24 hours</li>
          <li><strong>Custom Proposal:</strong> You'll receive a detailed project proposal</li>
        </ol>
        
        <p>If you have any urgent questions, feel free to reply to this email or contact us directly at admin@bordevtech.com.</p>
        
        <hr style="margin: 30px 0;">
        <div style="color: #666; font-size: 14px; text-align: center;">
          <strong>BorDevTech</strong><br>
          <em>"Insight. Innovation. Implementation."</em><br>
          <a href="mailto:admin@bordevtech.com" style="color: #17a2b8;">admin@bordevtech.com</a> | 
          <a href="https://bordevtech.com" style="color: #17a2b8;">bordevtech.com</a>
        </div>
      </div>
    `;

    return this.sendEmail(data.email, subject, htmlContent, 'client confirmation');
  }

  private async sendEmail(to: string, subject: string, html: string, type: string): Promise<{ success: boolean; message: string }> {
    if (!this.transporter) {
      // Fallback to console logging if no transporter
      console.log(`=== ${type.toUpperCase()} EMAIL LOG ===`);
      console.log('To:', to);
      console.log('Subject:', subject);
      console.log('HTML:', html);
      console.log('===============================');
      return { success: true, message: `${type} email logged (no transporter configured)` };
    }

    try {
      const mailOptions = {
        from: `"BorDevTech" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`${type} email sent successfully:`, result.messageId);
      return { success: true, message: `${type} email sent successfully` };
    } catch (error) {
      console.error(`Error sending ${type} email:`, error);
      return { success: false, message: `Failed to send ${type} email: ${error}` };
    }
  }
}

export const emailService = new EmailService();
