import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Function to add a product
const addProducts = async (req, res) => {
  try {
    const {
      subname,
      name,
      productdetail,
      description,
      price,
      category,
      sizes,
      subCategory,
      bestseller,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !productdetail ||
      !description ||
      !price ||
      !category ||
      !sizes ||
      !subCategory
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields." });
    }

    // Extract images from req.files
    const image1 = req.files?.image1?.[0] || null;
    const image2 = req.files?.image2?.[0] || null;
    const image3 = req.files?.image3?.[0] || null;
    const image4 = req.files?.image4?.[0] || null;

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== null
    );

    // Uploading Images to Cloudinary

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    //Saving the product data in MongoDb && Image Url

    const productData = {
      subname,
      name,
      productdetail,
      description,
      price: Number(price),
      category,
      sizes: JSON.parse(sizes),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product Added to MongoDb" });

    console.log("Images received:", imagesUrl);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({success:true ,products})
} catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
}
};
 

// Function for removing product
const removeProducts = async (req, res) => { 
  try {
    await productModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"Product Removed with id : " + req.body.id})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message});
  }
};

// Function for single product info
const singleProducts = async (req, res) => {

  try {
    const {productId} = req.body
    const product = await productModel.findById(productId)
    res.json({success:true, product})
} catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
}
 };

export { addProducts, listProducts, removeProducts, singleProducts };
