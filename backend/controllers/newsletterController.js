import Newsletter from '../models/newsletterModel.js';

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

        await Newsletter.create({ email });

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