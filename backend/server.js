import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

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
app.use(cors());

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);

//Live Server 
app.listen(port, () => {
  console.log(`The server started on port ${port}`);
});
