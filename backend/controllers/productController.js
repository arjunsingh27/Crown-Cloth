

//function for add product 
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Safely access images from `req.files`
    const image1 = req.files?.image1 ? req.files.image1[0] : null;
    const image2 = req.files?.image2 ? req.files.image2[0] : null;
    const image3 = req.files?.image3 ? req.files.image3[0] : null;
    const image4 = req.files?.image4 ? req.files.image4[0] : null;

    // Log extracted values
    console.log(name, description, price, category, subCategory, sizes, bestseller);
    console.log(image1, image2, image3, image4);

    // Validate required fields
    if (!name || !description || !price || !category || !subCategory || !sizes || !req.files) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Collect images into an array
    const images = [image1, image2, image3, image4].filter(Boolean); // Only keep valid images

    // Save to database (assuming `productModel` is imported)
    const newProduct = new productModel({
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller: bestseller === "true", // Convert bestseller to boolean
      image: images,
      date: Date.now(), // Add date dynamically
    });

    await newProduct.save();

    res.status(201).json({ success: true, message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred while adding the product" });
  }
};

//function for add product 
const listProducts  = async(req,res)=>{


}
//function for add product 
const removeProduct= async(req,res)=>{


}

const singleProduct = async(req,res)=>{

}
export {addProduct,listProducts,removeProduct,singleProduct}