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

// Email template for welcome message
const createWelcomeEmail = (userEmail) => {
    return {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Welcome to Crown Cloth Newsletter!',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">Welcome to Crown Cloth!</h2>
                <p>Thank you for subscribing to our newsletter. We're excited to keep you updated with our latest:</p>
                <ul>
                    <li>Fashion trends</li>
                    <li>New collections</li>
                    <li>Exclusive offers</li>
                    <li>Style tips</li>
                </ul>
                <p>Stay tuned for our upcoming updates!</p>
                <p>Best regards,<br>The Crown Cloth Team</p>
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