import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middle Wares
app.get("/", (req, res) => {
  res.send("Hello World For Vercel");
});
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: 'https://crown-cloth-frontend.vercel.app', // Allow only your frontend's domain
  credentials: true, // If you're using cookies or other credentials
}));

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Live Server 
app.listen(port, () => {
  console.log(`The server started on port ${port}`);
});
