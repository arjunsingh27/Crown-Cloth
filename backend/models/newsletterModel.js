// models/newsletterModel.js
import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    isSubscribed: {
        type: Boolean,
        default: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Newsletter', newsletterSchema);