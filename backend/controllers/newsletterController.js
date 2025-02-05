import Newsletter from '../models/newsletterModel.js';
import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Email template
const createWelcomeEmail = (userEmail) => {
    return {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Welcome to Crown Cloth Newsletter!',
        html: `
            <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header with Logo -->
                <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #f0f0f0;">
                    <img src="https://res.cloudinary.com/dubmtkonj/image/upload/v1738727928/mb0hcuc2obmvhhgozoje.jpg" 
                         alt="Crown Cloth Logo" 
                         style="max-width: 200px; height: auto;"
                    />
                </div>

                <!-- Main Content -->
                <div style="padding: 30px 0;">
                    <h2 style="color: #333333; font-size: 24px; margin-bottom: 20px; text-align: center;">Welcome to Crown Cloth!</h2>
                    
                    <p style="color: #666666; line-height: 1.6; margin-bottom: 25px;">
                        We're delighted to welcome you to the Crown Cloth family. Thank you for subscribing to our newsletter, where you'll receive carefully curated content including:
                    </p>

                    <!-- Features List -->
                    <div style="background-color: #f8f8f8; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="color: #444444; margin-bottom: 12px; padding-left: 24px; position: relative;">
                                ✨ Exclusive fashion trends and style insights
                            </li>
                            <li style="color: #444444; margin-bottom: 12px; padding-left: 24px; position: relative;">
                                🎯 First access to new collection launches
                            </li>
                            <li style="color: #444444; margin-bottom: 12px; padding-left: 24px; position: relative;">
                                🎁 Members-only offers and promotions
                            </li>
                            <li style="color: #444444; padding-left: 24px; position: relative;">
                                💫 Professional style tips and outfit guides
                            </li>
                        </ul>
                    </div>

                    <p style="color: #666666; line-height: 1.6; margin-bottom: 25px;">
                        Get ready to elevate your style with Crown Cloth. We're thrilled to have you join us on this fashion journey!
                    </p>

                    <!-- Social Proof -->
                    <div style="text-align: center; margin-bottom: 25px;">
                        <p style="color: #888888; font-style: italic;">
                            "Your destination for timeless elegance and contemporary fashion"
                        </p>
                    </div>
                </div>

                <!-- Footer -->
                <div style="text-align: center; padding-top: 30px; border-top: 2px solid #f0f0f0;">
                    <p style="color: #666666; margin-bottom: 15px;">
                        Best regards,<br/>
                        <strong>The Crown Cloth Team</strong>
                    </p>
                    
                    <!-- Social Links -->
                    <div style="margin-top: 20px; color: #999999; font-size: 12px;">
                        Follow us on social media for daily inspiration:<br/>
                        <a href="https://www.instagram.com/crowncloths/" style="color: #666666; text-decoration: none; margin: 0 10px;">Instagram</a> | 
                        <a href="#" style="color: #666666; text-decoration: none; margin: 0 10px;">Facebook</a> | 
                        <a href="#" style="color: #666666; text-decoration: none; margin: 0 10px;">Pinterest</a>
                    </div>
                </div>
            </div>
        `
    };
};

export const subscribeNewsletter = async (req, res) => {
    const { email } = req.body;

    try {
        const existingSubscriber = await Newsletter.findOne({ email });
        
        if (existingSubscriber) {
            return res.status(400).json({
                success: false,
                message: 'Email already subscribed'
            });
        }

        // Create new subscriber
        await Newsletter.create({ email });

        // Send welcome email
        try {
            await transporter.sendMail(createWelcomeEmail(email));
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            // Note: We don't return here as the subscription was successful
            // You might want to implement a retry mechanism for failed emails
        }

        res.status(201).json({
            success: true,
            message: 'Successfully subscribed'
        });
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({
            success: false,
            message: 'Subscription failed'
        });
    }
};