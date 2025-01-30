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
  res.send("Hello World");
});
app.use(express.json());

// CORS Configuration - Allowing all origins
app.use(cors({
  origin: '*', // Allow requests from any origin
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
