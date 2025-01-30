import express from "express"
import  {placeOrder , placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyRazorpay} from "../controllers/orderController.js"
import authUser from "../middleware/auth.js"

import adminAuth from "../middleware/adminAuth.js"
const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)


//Payment Features 
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay);

//User feture
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter;