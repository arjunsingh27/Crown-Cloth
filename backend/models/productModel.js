import mongoose from "mongoose";
  const productSchema = new mongoose.Schema({
  subname:{type:String},
  name:{type:String , required:true},
  productdetail:{type:String,require:true},
  description:{type:String,reuired:true},
  price:{type:Number , required:true},
  image:{type:Array , required:true},
  category:{type:String , required:true},
  subCategory:{type:String , required:true},
  sizes:{type:Array , required:true},
  bestseller:{type:Boolean},
  date:{type:Number, required:true},
  
})

const productModel =mongoose.models.product ||  mongoose.model("product",productSchema)

export default productModel;