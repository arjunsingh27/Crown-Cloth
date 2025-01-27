// routes/cartRoute.js
import express from "express";
import { addToCart, getUserCart, updateCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

// Correctly passing the async functions to the routes
cartRouter.post('/get', authUser, getUserCart);  // async handler is passed directly
cartRouter.post('/add', authUser, addToCart);   // async handler is passed directly
cartRouter.post('/update', authUser, updateCart);

export default cartRouter;
