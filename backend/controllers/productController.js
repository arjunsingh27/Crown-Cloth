// Function to add a product
const addProducts = async (req, res) => {
  try {
    const {subname,name,productdetail,description,price,category,sizes,subCategory,bestseller }  = req.body;

    // Extract images from req.files
    const image1 = req.files?.image1?.[0] || null;
    const image2 = req.files?.image2?.[0] || null;
    const image3 = req.files?.image3?.[0] || null;
    const image4 = req.files?.image4?.[0] || null;

    // Validate required fields
    if (!name || !productdetail || !description || !price || !category || !sizes || !subCategory) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // Log the inputs for debugging
    console.log("Received data:", {subname,name,productdetail,description,price,category,sizes,subCategory,bestseller,
    });

    console.log("Images received:", { image1, image2, image3, image4 });

    // Here you would save the product data to the database
    // Simulating a successful response for now
    res.status(200).json({ success: true, message: "Product added successfully!" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Function for list product
const listProducts = async (req, res) => {};

// Function for removing product
const removeProducts = async (req, res) => {};

// Function for single product info
const singleProducts = async (req, res) => {};

export { addProducts, listProducts, removeProducts, singleProducts };
