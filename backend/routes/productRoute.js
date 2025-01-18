import express from 'express'
import {addProduct,removeProduct,listProducts,singleProduct} from '../controllers/productController.js'

const productRouter = express.Router();

productRouter.post('/addProduct',addProduct)
productRouter.post('/removeProduct',removeProduct)
productRouter.post('/singleProduct',singleProduct)
productRouter.get('/listProducts',listProducts)

export default productRouter;